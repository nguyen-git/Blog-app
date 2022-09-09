import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const middlewareController = {
    // verify Token
    verifyToken: async (req, res, next) => {
        const token = req.headers.token;
        if(token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (error, user) => {
                if(error) {
                    return res.status(403).json("Token is invalid")
                }
                req.user = user;
                next();
            })
        }
        else {
            return res.status(401).json("You must login first");
        }
    }
}

export default middlewareController;