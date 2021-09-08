import {React, useEffect} from 'react'
import "./About.css";
import { Box, makeStyles } from '@material-ui/core';
import Typed from "react-typed";
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyle = makeStyles({
    combine:{
        display:'flex'
    },
    heading:{
      fontSize:50,
      marginTop:-80,
      color:'#E28F83'
    },
    sidemove:{
      marginTop:30,
      padding:30,
      marginLeft:20
    }
});

export const About = () => {
    
    useEffect(() => {
        Aos.init({ duration:2000});
    },[]);

    const classes=useStyle();

        return (

        <div id="about" className="about text-center">
              
              <div className="divider1">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>

            <p className={classes.heading} data-aos="fade-down">About Me </p>

            <Box className={classes.combine}>
                    <Box data-aos="fade-right">
                        <img src={process.env.PUBLIC_URL + '/images/programmer.jpg'} alt="hi" />
                    </Box>

                    <Box className={classes.sidemove}>
              
                <div className="text-slider" style={{fontSize:40,fontWeight:500,marginBottom:20}}>
                  <Typed
                    strings={[
                      "Front End Developer",
                      "MERN Developer",
                      "Open Source Contributer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </div>
    
                    <p style={{fontWeight:500,color:'#93B5C6'}}>
                    I am currently in the 3rd year of my Bachelor of Technology in Computer Science and <br></br> engineering from CEC Mohali .<br></br>
                    I have been tinkering with code since my high school .<br></br>I love competitive programming and contributing in open source projects.
                    <br></br>Well , my favourite qoute is :-<br></br><i><b>" UNLESS  YOU  TRY  TO  DO  SOMETHING  
                    BEYOND  WHAT  YOU  HAVE ALREADY  MASTERED , YOU  WILL  NEVER  GROW . "</b></i><br></br> which I always try to inculcate in myself .
                    </p>

                    <section data-aos="fade-up">
                    
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                    <a href="https://github.com/emily876" class="fa fa-github"></a>
                    <a href="http://www.linkedin.com/in/devsi-singh" class="fa fa-linkedin"></a>
                    <a href="mailto: singhdevsi943@gmail.com" class="fa fa-envelope"></a>

                    </section>
                    </Box>
            </Box>
        </div>
    );
 }