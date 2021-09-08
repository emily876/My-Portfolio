import {React, useEffect} from 'react'
import "./Education.css";

import Aos from 'aos';
import 'aos/dist/aos.css';
import {Box, Card,makeStyles, CardActionArea,CardMedia,CardContent,Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginTop:150,
      marginBottom:150
    },
    media: {
      height: 140,
    },
    arrange:{
        display:'flex',
        position:'relative'
    },
    second:{
        minWidth: 300,
        maxHeight:350,
        position:'absolute',
      top:250,
      left:620
    },
    third:{
      position: '20px 30px',
      minWidth: 300,
      maxHeight:350,
      position:'absolute',
      top:30,
      left:330
  },
  fourth:{
    minWidth: 300,
    maxHeight:350,
    position:'absolute',
      top:420,
      left:330
},
    codingMedia:{
        height: 200,
    },
    readingMedia:{
      height: 200,
  },
  playMedia:{
    height: 200,
  }

  });

export const Education = () => {
    useEffect(() => {
        Aos.init({ duration:2000});
    },[]);

    const classes = useStyles();

    return (
         <div className="changecolor" id="eduhobby">
           <div className="divider3">
           <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
           </div>
         <Box className={classes.arrange}>
        <Card className={classes.root} data-aos="fade-right">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://content.jdmagicbox.com/comp/chandigarh/b8/0172px172.x172.140610160728.q4b8/catalogue/chandigarh-group-of-colleges-jhanjeri-mohali-engineering-colleges-ebm22jupvx.jpg?clr=333333"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          My Education
          </Typography>
          <Typography variant="body2" className="letters" component="p">
          BACHELORS:- Currently pursuing my B.Tech degree in Computer science<br></br> from CGC Jhanjeri, Mohali
            2019 - 2023<br></br>
            CGPA: 9.28/10
            <br></br>
            SENIOR SECONDARY:- I've done my 12th from Kendriya Vidyalaya No.2<br></br> Ambala Cantt
            (CBSE board)<br></br>
            Year of completion: 2019<br></br>
            CGPA: 9.02/10
            <br></br>
            SECONDARY:- Kendriya Vidyalaya No.2 Ambala Cantt<br></br>
            (CBSE board)<br></br>
            Year of completion: 2017<br></br>
            CGPA: 10.00/10
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.third} data-aos="fade-down">
<CardActionArea>
  <CardMedia
    className={classes.readingMedia}
    image="https://i.pinimg.com/originals/8f/52/1e/8f521e77c19c37e385809d4f05d01082.jpg"
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
    My Hobbies
    </Typography>
    <Typography variant="body2" className="letters" component="p">
        Reading Novels<br></br>                       
        Listening to music<br></br>                   
        Photography<br></br>
    </Typography>
  </CardContent>
</CardActionArea>
</Card>

<Card className={classes.fourth} data-aos="fade-up">
<CardActionArea>
  <CardMedia
    className={classes.playMedia}
    image="https://upload.wikimedia.org/wikipedia/commons/f/f9/Badminton-1428046.jpg"
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography variant="body2" className="letters" component="p">
        Creative art and writing<br></br>            
        Playing chess and badminton<br></br>
        Travelling
    </Typography>
  </CardContent>
</CardActionArea>
</Card>


<Card className={classes.second} data-aos="fade-right">
<CardActionArea>
  <CardMedia
    className={classes.codingMedia}
    image="https://content.techgig.com/thumb/msid-76304455,width-860,resizemode-4/7-Hobbies-of-programmers-that-improves-their-coding-skills.jpg?73651"
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography variant="body2" className="letters" component="p">
        Coding<br></br>
        Participating in hackathons<br></br>
    </Typography>
  </CardContent>
</CardActionArea>
</Card>
<span>
  <Typography className="hobby">
    <h1 data-aos="fade-left" style={{marginLeft:650,paddingTop:80,fontSize:40}}>Education and Hobbies</h1>
    <div style={{marginLeft:600,marginTop:50}}>
    <p>Hii There. I'm a pre-final year student</p><p> and  will be graduating in 2023. </p><p> Telling you about my experiences till now , 
    </p><p>I've done an internship in web development </p><p> and currently contributing to open source programs. </p><p> I have been interested 
      in coding from my <br></br> senior secondary, and </p><p> I wanted to folllow it as a passion. </p><p>In my leisure time, I try </p><p> to grasp new 
      and effective style of coding.</p><p> I try to experiment and build many projects</p><p> to learn different skills with it.</p>
    </div>
  </Typography>
</span>

</Box>
        </div>
    )
}
