import React from "react";
import { SocialIcon } from "react-social-icons";

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
                    <form>
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