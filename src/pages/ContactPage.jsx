import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../context/LangContext';
import Navigation from "../components/Navigation";

const ContactPage = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [lang] = useContext(LangContext);

  const handleSendClick = () => {
    setPopupVisible(true);
    setMessage(<img width={150} src="https://i.gifer.com/7efs.gif" alt="Sended GIF" />);

    // Simüle edilen bir asenkron işlem (örneğin, API çağrısı)
    setTimeout(() => {
      setPopupVisible(false);
      setMessage('');

      // Home page'e geri dönme işlemi
      navigate('/');
    }, 2000);
  };

  return (
      <div className='contactpage'>
    <Navigation/>
<div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close" />
          <div className="screen-header-button maximize" />
          <div className="screen-header-button minimize" />
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis" />
          <div className="screen-header-ellipsis" />
          <div className="screen-header-ellipsis" />
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>{lang === "az" ? 'Contact' : 'Bizimlə'} </span>
            <span>{lang === "az" ? 'US' : 'Əlaqə'}</span>
          </div>
          <div className="app-contact">
          {lang === "az" ? 'CONTACT INFO : +62 81 314 928 595' : 'Bizimlə Əlaqə : +62 81 314 928 595'}
          </div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder={lang === "az" ? 'Name' : 'Ad'} defaultValue="" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder={lang === "az" ? 'Email' : 'Email'} />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder={lang === "az" ? 'Message' : 'Mesaj'} />
            </div>
      
            <div className="app-form-group buttons">
        {/* <button className="app-form-button" onClick={() => setPopupVisible(true)}>CANCEL</button> */}
        <button className="app-form-button" onClick={handleSendClick}>{lang === "az" ? 'Send' : 'Göndər'}</button>
      </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
 {popupVisible && (
    <div className="popup">
      <p>{message}</p>
    </div>
  )}
</div>

  
  )
}

export default ContactPage