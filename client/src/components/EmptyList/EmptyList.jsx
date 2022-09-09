import React from 'react';
import "./emptylist.scss";
import nodata from "../../../src/asset/img/nodata.png";

const EmptyList = () => {
  return (
    <div className="emptyList">
        <img src={nodata} alt="Empty Data" />
    </div>
  )
}

export default EmptyList