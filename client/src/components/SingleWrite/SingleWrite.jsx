import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./singlewrite.scss";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import avatar from "../../asset/img/avatar.jpg";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

const SingleWrite = () => {
  const [image, setImage] = useState(null);
  const [info, setInfo] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInfo(prev => ({...prev, [e.target.id]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "upload");

    if (!info){
      alert("Vui lòng nhập tiêu đề, thể loại, và nội dung bài viết")
    }
    if(!data){
      alert("vui lòng chọn hình ảnh")
    }
    if(info && data){
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dzg58cl9p/image/upload",
          data
        );
        const { url } = uploadRes.data;
        const newPost = {
          ...info,
          photo: url,
        };
        await axios.post("http://localhost:5050/api/posts", newPost);
        alert("Thêm mới bài viết thành công");
        navigate("/blog");
      } catch (error) {
        console.log(error);
        alert("Lỗi vui lòng thử lại");
      }

    }
  };
  return (
    <div className="singleWrite">
      <div className="writeImg">
        <img
          src={image ? URL.createObjectURL(image) : avatar}
          alt="anh"
          className="img"
        />
      </div>
      <div className="writeToolBar">
        <ul className="toolbars">
          <li className="toolbar">
            <label htmlFor="fileInput">
              <AddPhotoAlternateIcon className="icon" />
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </li>

          <li className="toolbar">
            <FormatAlignLeftIcon />
          </li>
          <li className="toolbar">
            <FormatAlignCenterIcon />
          </li>
          <li className="toolbar">
            <FormatAlignRightIcon />
          </li>
          <li className="toolbar">
            <FormatAlignJustifyIcon />
          </li>
          <li className="toolbar">
            <FormatListBulletedIcon />
          </li>
          <li className="toolbar">
            <FormatBoldIcon />
          </li>
          <li className="toolbar">
            <FormatItalicIcon />
          </li>
          <li className="toolbar">
            <FormatUnderlinedIcon />
          </li>
        </ul>
      </div>
      <form action="" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Tiêu đề"
            id="title"
            className="writeInput"
            autoFocus={true}
            onChange={handleInputChange}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Thể loại"
            id="categories"
            className="writeInput"
            onChange={handleInputChange}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            onChange={handleInputChange}
            type="text"
            id="desc"
            className="writeText"
            placeholder="nhập nội dung..."
            rows="50"
            cols="20"
          ></textarea>
        </div>
        <button className="writeButton" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default SingleWrite;
