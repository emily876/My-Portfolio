import React from 'react'
import { AppBar,Toolbar, makeStyles, withStyles,Box, IconButton,Drawer, List, ListItem } from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import { useState } from 'react';

import HeaderButtons from './HeaderButtons';

const useStyle = makeStyles(theme =>({

    header:{
       background:'#dbe3e5',
       height:55
    },
    list:{
        width:150
    },
    menuButton:{
        display:'none',
        [theme.breakpoints.down('1000')]:{
            display:'block',
        }
    },
    headerButtons:{
        margin: '0 0 0 65%',
        [theme.breakpoints.down('1000')]:{
            display:'none'
        },
        [theme.breakpoints.between('1150','1300')]:{
            margin: '0 0 0 50%',
        },
        [theme.breakpoints.between('900','1150')]:{
            margin: '0 0 0 45%',
        }
    }
}));

const ToolBar = withStyles({
    root:{
        minHeight:55
    }
})(Toolbar);

const Header = () => {
    const classes= useStyle();

    const [open,setOpen] = useState(false);

    const handleClose =()=>{
        setOpen(false);
    }

    const handleOpen =()=>{
        setOpen(true);
    }

    const list =()=>{
        return (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <ListItem >
                    <HeaderButtons />
                </ListItem>
            </List>
        </Box>
        )
    }

    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <IconButton 
                    color="inherit"
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu />
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                 <span className={classes.headerButtons}><HeaderButtons /></span>
            </ToolBar>
        </AppBar>
    )
}

export default Header;