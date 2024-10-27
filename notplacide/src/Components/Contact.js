import React from "react";
import { SocialIcon } from "react-social-icons";

function sendMessage(e){
    e.preventDefault();
    const {email, name, message} = e.target.elements;

    const jsonData = {
        email: email.value, 
        name: name.value,
        message: message.value
    } 

    fetch("../server/mail.php", {
        method:"POST", 
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(jsonData)
    })

    .then(res=>{
        if(res.ok){
            return res.json();
        }
        throw new Error("Network response was not ok")
    }) 

    .then(data=>{
        console.log("success", data);
        window.location.href = "/thank-you";
    })

    .catch((error)=> {
        console.error(error);
        window.location.href = "/error";
    })


}

function Contact(){
    return (
        <div id="contact">

            <div id="sociallinks">
                <div>
                    <SocialIcon  
                        url="https://www.linkedin.com/in/placidendaisenga/"
                        network="linkedin"
                    />
                </div>

                <div>
                    <SocialIcon
                        url="https://www.instagram.com/notplacide/"
                        network="instagram"
                    />
                </div>

                <div>
                    <SocialIcon 
                        url="https://www.facebook.com/profile.php?id=61556578692719" 
                    />
                </div>

                <div>
                    <SocialIcon  
                        url="https://www.upwork.com/freelancers/~016a35f1fd70a736a7"
                        network="upwork"
                    />
                </div>
            </div>

            <div id="dm">
                <fieldset>
                    <legend>Send a DM</legend>
                    <form onSubmit={sendMessage}>
                        <label>Email</label><br/>
                        <input required name="email" type="email"/> <br/><br/>

                        <label>Name</label><br/>
                        <input require name="name"/><br/><br/>

                        <label>Message</label><br/>
                        <textarea required name="message"></textarea><br/><br/>

                        <button type="submit">Send</button>
                    </form>
                </fieldset>
            </div>
            

        </div>
    )
}


export default Contact;