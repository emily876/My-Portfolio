import React from 'react';
import './Myself.css';
import Particles from 'react-particles-js';

export const Myself = () => {
	
    return (
        <div id="myself" className="text-center backgrd">
			<Particles className="strike"
    params={{
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 2
	        },
			
			color: {
				value: 'AD6C80'
			  },
			  line_linked: {
				color:'AD6C80',
				opacity: 1
			  }
	    },
		
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
			<div>
           <div className="myimage">
           <img src={process.env.PUBLIC_URL + '/images/devsi.jpg'}/>
           </div>
		   
      </div>
           <p className="hi">Hi ! Myself,</p>
           <p className="me">Devsi Singh</p>
           <p className="web"> &#60; Web Developer &#62;</p>
      </div>

    </div>
    )
}