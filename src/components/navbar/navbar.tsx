import {Link } from 'react-router-dom'
import React, {useState,useEffect} from 'react'
import './navbar.scss'

import 
{AppBar
    ,Toolbar
    ,Container
    ,Box
    ,IconButton
    ,List
    ,ListItem
    ,Drawer
    ,Avatar
    ,Button
    ,Typography
    ,Fade
} 
from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { Login } from '@mui/icons-material'

export const Navbar =() =>{
    const [anchorElNav, setAnchorElNav] = useState <Element |null>(null);
    const [fade,setFade] = useState(false)
    const [y,setY] = useState(0)

    const handleOpenNavMenu = (event:React.MouseEvent) => {
        setAnchorElNav(event.currentTarget);
       
      };
     
      const handleCloseNavMenu = () => { 
        setAnchorElNav(null);
      };
    const handleScroll=()=>{
   let div= document.querySelector('.App') as HTMLDivElement
  
        if (div.scrollTop> y) {
            setY(div.scrollTop)
            if (y > 300) setFade(true)
            
        }
        else {
            if (div.scrollTop <301){ 
                setFade(false)
                setY(0)
            }
        }

    }
     useEffect(()=>{
      
                  document.querySelector('.App')?.addEventListener('scroll',handleScroll)
         
   return ()=> document.querySelector('.App')?.removeEventListener('scroll',handleScroll)
    
     },[y])
  
     
    return (
        <>
        <div className="navbar">
        { !fade &&  (<AppBar className="fixedButton" position="fixed" sx={{display:{xs:'flex',sm:'none',md:'none',xl:'none'}}}>
                                <Container maxWidth='xl'>
                                    <Box sx={{justifyContent:'flex-end'}}>
                                    <IconButton sx={{color:'white'}}
                                                size='large'
                                                aria-controls='menu-appbar'
                                                onClick={handleOpenNavMenu}>
                                                    <MenuIcon color="inherit"/>
                                    </IconButton>
                                    </Box>
                                </Container>
                    </AppBar>
          )}
         <Fade in={fade} 
                
                timeout={
                    {enter:2000,
                    exit:1000
                }
                }
                easing={{enter:'easeIn'}}>
            <AppBar position="fixed"
                   color="inherit">
           
                <Container maxWidth="xl">
               
                    <Toolbar disableGutters>
                        <Box sx={{display:{xs:'flex',sm:'none',md:'none',justifyContent:'space-evenly'}}}>
                            
                            <Typography variant="h5" component="div" sx={{flexGrow:1,
                                                                                 display:'flex',
                                                                                 justifyContent:'center'}}>
                                                3D<span>.</span>Ikoniks
                            </Typography>
                            <IconButton 
                             size='large'
                              aria-controls='menu-appbar'
                              onClick={handleOpenNavMenu}>
                                  <MenuIcon />
                            </IconButton>
                            <Drawer 
                              anchor='left'
                              open={Boolean(anchorElNav)}
                              onClose={handleCloseNavMenu} 
                             >
                                  <List sx={{display:'flex',alignItems:'cetnter'}}>
                                         
                                            <ListItem button onClick={handleCloseNavMenu}>
                                               <Link to="/">
                                               Home
                                                </Link>
                                            </ListItem>
                                          
                                            <ListItem button onClick={handleCloseNavMenu}>
                                                <Link to="#">
                                                    About Us
                                                </Link>
                                            </ListItem >
                                            <ListItem button onClick={handleCloseNavMenu}>
                                                <Link to="#">
                                                   Porjects
                                                </Link>
                                            </ListItem >
                                            <ListItem button onClick={handleCloseNavMenu}>
                                               <Link to="#">
                                                    Blog
                                                </Link>
                                            </ListItem >
                                            <ListItem button onClick={handleCloseNavMenu}>
                                               <Link to="#">
                                                    Contacts
                                                </Link>
                                            </ListItem >  
                                </List>
                            </Drawer>
                        </Box>
                        <Box sx={{flexGrow:1
                                 ,display:{xs:'none',md:'flex',sm:'flex'}
                                 ,justifyContent:'space-between'
                                 
                                 }}>
                                     
                                     
                                     <Typography variant="h5" component="div" sx={{flexGrow:1,
                                                                                 display:'flex',
                                                                                 justifyContent:'center'}}>
                                                3D<span>.</span>Ikoniks
                                     </Typography>
                                          <Box sx={{
                                              display:'flex',
                                              justifyContent:'space-evenly',
                                              alignItmes:'center',
                                              width:'60%'
                                          }}>
                                            <Link to="/">
                                                Home
                                            </Link>
                                          
                                             <Link to="#">
                                                    About Us
                                            </Link>
                                            <Link to="#">
                                                   Projects
                                            </Link>
                                            <Link to="#">
                                                   Bolg
                                            </Link>
                                            <Link to="#">
                                                   Contacts
                                            </Link>
                                            </Box>
                                          
                        </Box>
                    </Toolbar>
                    
                </Container>
               
            </AppBar>
            </Fade>
        </div>
        
         </>
    )
}