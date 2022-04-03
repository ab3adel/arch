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
import {useLocation,useNavigate} from 'react-router'
import MenuIcon from '@mui/icons-material/Menu'

import { Login } from '@mui/icons-material'

export const Navbar =() =>{
    const [anchorElNav, setAnchorElNav] = useState <Element |null>(null);
    const [fade,setFade] = useState(false)
    const [y,setY] = useState(0)
    const location = useLocation()
    const navigate = useNavigate()

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
                            
                            <Typography   onClick={()=>navigate('/')} variant="h5" component="div" sx={{flexGrow:1,
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
                                                <Link to="/about">
                                                    About Us
                                                </Link>
                                            </ListItem >
                                            <ListItem button onClick={handleCloseNavMenu}>
                                                <Link to="/portfolio">
                                                   Portfolio
                                                </Link>
                                            </ListItem >
                                            <ListItem button onClick={handleCloseNavMenu}>
                                               <Link to="/blogs">
                                                    Blog
                                                </Link>
                                            </ListItem >
                                            <ListItem button onClick={handleCloseNavMenu}>
                                               <Link to="/contacts">
                                                    Contacts
                                                </Link>
                                            </ListItem >  
                                </List>
                            </Drawer>
                        </Box>
                        <Box sx={{flexGrow:1
                                 ,display:{xs:'none',md:'flex',sm:'flex',lg:'flex'}
                                 ,justifyContent:'space-between',
                                 backgroundColor:'transparent'
                                 
                                 }}>
                                     
                                     
                                     <Typography variant="h5" component="div" 
                                     sx={{flexGrow:1,
                                          display:'flex',
                                           justifyContent:'center'}}
                                           onClick={()=>navigate('/')}>
                                                3D<span>.</span>Ikoniks
                                     </Typography>
                                          <Box sx={{
                                              display:'flex',
                                              justifyContent:'space-evenly',
                                              alignItmes:'center',
                                              width:'60%',
                                              color:'white'
                                          }}>
                                            <Link to="/">
                                                Home
                                            </Link>
                                          
                                             <Link to="/about">
                                                    About Us
                                            </Link>
                                            <Link to="/portfolio">
                                                   Portfolio
                                            </Link>
                                             <Link to="/blogs">
                                                   Bolg
                                            </Link>
                                            <Link to="/contacts">
                                                   Contacts
                                            </Link>
                                            </Box>
                                          
                        </Box>
                    </Toolbar>
                    
                </Container>
               
            </AppBar>
            </Fade>
        
           
                <Container maxWidth="xl">
               
                    <Toolbar disableGutters>
                       
                        <Box sx={{flexGrow:1
                                 ,display:{xs:'none',md:'flex',sm:'flex',lg:'flex'}
                                 ,justifyContent:'space-between',
                                 backgroundColor:'transparent'
                                 
                                 }}>
                                     
                                     
                                     <Typography variant="h5" 
                                               onClick={()=>navigate('/')}
                                                component="div" 
                                                sx={{flexGrow:1,
                                                 display:'flex',
                                                justifyContent:'center'}}>
                                                3D<span>.</span>Ikoniks
                                     </Typography>
                                          <Box sx={{
                                              display:'flex',
                                              justifyContent:'space-evenly',
                                              alignItmes:'center',
                                              width:'60%',
                                              color:'white'
                                          }}>
                                            <Link to="/">
                                                Home
                                            </Link>
                                          
                                             <Link to="/about">
                                                    About Us
                                            </Link>
                                            <Link to="/portfolio">
                                                   Portfolio
                                            </Link>
                                             <Link to="/blogs">
                                                   Bolg
                                            </Link>
                                            <Link to="/contacts">
                                                   Contacts
                                            </Link>
                                            </Box>
                                          
                        </Box>
                    </Toolbar>
                    
                </Container>
         
        </div>
        
         </>
    )
}