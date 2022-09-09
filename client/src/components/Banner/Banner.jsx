import React from 'react';
import "./banner.scss";
import banner1 from "../../asset/img/banner1.jpg";


const Banner = () => {
  return (
    <div className='banner'>
        <div className="bannerContainer">
            <img src={banner1} alt="banner1" className='bannerImg'/>
            <div className="bannerTitle">Blog</div>
        </div>
    </div>
  )
}

export default Banner