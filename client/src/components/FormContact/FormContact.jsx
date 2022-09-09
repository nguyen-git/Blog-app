import React from 'react';
import contact from "../../../src/asset/img/contact.jpg";

const FormContact = () => {
  return (
    <div className='formContact'>
        <div className="contactContainer">
            <div className="contactImage">
                <img src={contact} alt="contact" />
            </div>
            <form className='contactForm'>
                <div className='formGroup'>
                    <h3>Liên Hệ với chúng tôi để được hỗ trợ tốt nhất</h3>
                </div>
                <div className="formGroup">
                    <label htmlFor="">Tên</label>
                    <input type="text" className="formInput" placeholder='Nguyễn Văn A'/>
                </div>
                <div className="formGroup">
                    <label htmlFor="">Gmail</label>
                    <input type="gmail" className="formInput" placeholder='anguyen@gmail.com'/>
                </div>
                <div className="formGroup">
                    <label htmlFor="">Chủ đề</label>
                    <input type="text" className="formInput" placeholder='blog'/>
                </div>
                <div className="formGroup">
                    <label htmlFor="">Nội dung</label>
                    <input type="text" className="formInput" placeholder='Nội dung...'/>
                </div>
                <div className="contactSubmit">
                    <input type="submit" value="Gửi" className='inputSubmit' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormContact