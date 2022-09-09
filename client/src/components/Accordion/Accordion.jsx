import React, { useState } from "react";
import "./accordion.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { accordion } from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <div className="accordion">
      <div className="item">
        <div className="heading">
          <h2>Câu Hỏi Thường gặp</h2>
        </div>
        <div className="detail" style={{textAlign: 'center', color: "rgb(141, 0, 0)"}}>
          <p>
            Blog App Chia Sẻ - Kết Nối
          </p>
        </div>
      </div>
      <div className="question">
        <div className="">
          {accordion.map((item, id) => (
            <div className="questionItem" key={id}>
              <div className="title" onClick={() => toggle(id)}>
                <h2>{item.question}</h2>
                <span>{selected === id ? <RemoveIcon /> : <AddIcon />}</span>
              </div>
              <div className={selected === id ? "content show" : "content"}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
