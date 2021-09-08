import {React} from 'react';
import { Box, Button, makeStyles, Typography} from '@material-ui/core';

const useStyle = makeStyles(theme=>({
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': { 
            marginRight: 30,
            alignItems:'center',
            textDecoration:'none',
            color:'#fff',
            [theme.breakpoints.down('sm')]:{
                color:'#2874f0',
                alignItems:'center',
                display:'flex',
                flexDirection:'column',
                marginTop:10
            }
        },
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    }
}));

const HeaderButtons = () => {
    const classes = useStyle();

    return (
        <Box className={classes.wrapper}>
            <a href="#myself"><Typography style={{marginTop:5 ,cursor:'pointer',color:'#1089FF',fontWeight:600}}>Myself</Typography></a>
            <a href="#about"><Typography style={{marginTop:5 ,cursor:'pointer',color:'#1089FF',fontWeight:600}}>About</Typography></a>
            <a href="#skillset"><Typography style={{marginTop:5 ,cursor:'pointer',color:'#1089FF',fontWeight:600}}>Skillset</Typography></a>
            <a href="#eduhobby"><Typography style={{marginTop:5 ,cursor:'pointer',color:'#1089FF',fontWeight:600}}>Education</Typography></a>
            <a href="#projects"><Typography style={{marginTop:5 ,cursor:'pointer',color:'#1089FF',fontWeight:600}}>Projects</Typography></a>
            <a href="#contactsay"><Typography style={{marginTop:5 ,cursor:'pointer',color:'#1089FF',fontWeight:600}}>Contact</Typography></a>
        </Box>
    )
}

export default HeaderButtons;