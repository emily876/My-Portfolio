import './App.css';
import Header from "./MyComponents/Header/Header";
import {Myself} from "./MyComponents/Myself/Myself";
import Toggle from "./MyComponents/toggle/Toggle.js";
import {About} from "./MyComponents/About/About";
import Skillset from "./MyComponents/Skillset/Skillset";
import {Education} from "./MyComponents/Education/Education";
import Projects from "./MyComponents/Projects/Projects";
import Mailer from "./MyComponents/Contact/Form";
import {Footer} from "./MyComponents/Footer/Footer";
import { makeStyles } from '@material-ui/core';
import {useState} from 'react';

const useStyle=makeStyles({
  toggle:{
    marginTop:50, 
    marginLeft:-1500
  }
})

function App() {

  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };
 
const classes = useStyle();

  return (
    <div className={theme ? "App dark" : "App light"}>
      <Header />
      <div className={classes.toggle}>
      <Toggle toggleTheme={toggleTheme} />
        </div>
      <Myself />
      <About />
      <Skillset />
      <Education />
      <Projects />
      <Mailer />
      <Footer />
    </div>
  );
}

export default App;
