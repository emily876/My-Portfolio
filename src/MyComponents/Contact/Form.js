import emailjs from "emailjs-com";
import React, { useState } from 'react';
import './Contact.css';

const Mailer = () => {

  const [name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [message, setMsg] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_9pa3a2a",
      "template_u4azkkh",
      e.target,
      "user_ArdrGOdW4XixCphDGpo0g"
    ).then(res=>{
          setName("");
          setEmail("");
          setMsg("");
          if(!name || !user_email || !message){
            alert(" please fill all fields");}
          else{alert("thanks, your message has been recieved")}
    }).catch(err=> console.log(err));
  }
  return (
    <div className="contact" id="contactsay" style={{paddingBottom:60}}>

      <div className="divider5">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
       </div>

       <p className="say" style={{fontSize:50,fontWeight:500,marginTop:-70}}>Say Hi !</p>

    <div
      className="containerform"
      style={{
        marginLeft:300,
        width: "60%",
        height:500,
        backgroundImage: `url('https://img.freepik.com/free-photo/contact-icons-keyboard-button-online-contact-concept_2227-1391.jpg?size=626&ext=jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
        >

      <form
        className="row"
        style={{ margin: "0 100px 0 100px" ,padding:60, color:'#39A9CB',fontSize:16,lineHeight:2,fontWeight:600}}
        onSubmit={sendEmail}
      >
        <label>Your Name here</label>
        <input type="text" name="name"  value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

        <label>Type your Email address</label>
        <input type="email" name="user_email" value={user_email} onChange={(e) => setEmail(e.target.value)} className="form-control" />

        <label>Write a Message</label>
        <textarea name="message" rows="4"  value={message} onChange={(e) => setMsg(e.target.value)} className="form-control" />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
    </div>
  );
};

export default Mailer;

