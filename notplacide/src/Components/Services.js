import React from "react";
import { SocialIcon } from "react-social-icons";

function Services(){
    return(
        <div id="services">
            <div><h3 id='que' >Got a Project?</h3></div>
            <div>
                <SocialIcon
                    network=""
                    url="https://www.fiverr.com/notplacide"
                />
                <a href="https://www.fiverr.com/notplacide"> <h1>Fiverr</h1> </a>  <br/>
            </div>

            <div>
                <SocialIcon 
                    url="https://www.upwork.com/freelancers/~016a35f1fd70a736a7"
                    network="upwork"
                />
                <a href="https://www.upwork.com/freelancers/~016a35f1fd70a736a7"> <h1>Upwork</h1> </a> <br/> 
            </div>

            <div>
                <SocialIcon  
                    url="https://www.facebook.com/profile.php?id=61556578692719"
                    network="facebook"
                />
                <a href="https://www.facebook.com/profile.php?id=61556578692719"> <h1>FB Page</h1> </a>  <br/>
            </div>

            <div>
                <SocialIcon  
                    url="https://www.linkedin.com/service-marketplace/provider/requests/"
                    network="linkedin"
                />
                <a href="https://www.linkedin.com/service-marketplace/provider/requests/"> <h1>Linkedin</h1> </a>  <br/>
            </div>

        </div>
    )
}

export default Services;