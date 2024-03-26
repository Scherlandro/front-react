import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from "./Menu.module.css";

import {ApiException} from '../../shared/services/api/ApiException';
import {ProductService} from "../../shared/services/product.service";
import {IProduto} from "../../shared/interfaces/product";
import {
    alpha,
    AppBar,
    Badge,
    Box,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu'
import {Navigation} from "@mui/icons-material";


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    background: 'grey',

}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    }
}));
/*
https://github.com/thekietvuong/Dropdown-Menu-in-React/blob/master/src/App.js

https://www.youtube.com/watch?v=UW-dskGK7II
    https://www.youtube.com/watch?v=HfZ7pdhS43s
        https://www.youtube.com/watch?v=bOx2WmyZrno
            https://www.youtube.com/watch?v=yoMf7BOujLA
                https://www.youtube.com/watch?v=fxY3muW9ZOs
https://www.youtube.com/watch?v=_fMl6FD3IMQ
https://www.youtube.com/watch?v=7b42lVMdEjE

https://www.youtube.com/watch?v=nI8PYZNFtac  com JWT

https://www.youtube.com/watch?v=nDGA3km5He4 Curso completo

*/

export const MenuMain: React.FC<any> = () => {
    const [email, setEmail] = useState('');
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);
    const [openLink, setOpenLink] = useState(false);
    const [sticky, setSticky] = useState(false);


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMenuLinkOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuLinks = [
        {name: "HOME", link: "/"},
        {name: "Dash", link: "/dashbord"},
        {name: "Offers", link: "/offers"},
        {name: "PROJECTS", link: "/projects"},
        {name: "Dash 0", link: "/dashbord0"},
        {name: "Login", link: "/entrar"},
    ];

    const handleUrl = () => {
        setOpenLink(false);
    }
    const navMenu = (
         <nav className={styles.cardLogin}  >
                {menuLinks?.map((menu, i) => (
                    <li key={i} >
                       <br/>
                        <a  href={menu?.link}>  {menu?.name} </a>
                    </li>
                ))}
            </nav>
    );

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    }, []);
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const mobMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    return (

        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" className={styles.componentGradient}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                    >
                        <MoreIcon  onClick={() => setOpenLink(!openLink)}/>
                        <Menu
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={openLink} onClose={handleUrl}   >
                            {openLink ? navMenu : false}
                        </Menu>

                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}}}
                    >
                        MUI
                    </Typography>


                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                                         placeholder="Search…"
                                         inputProps={{'aria-label': 'search'}}
                        />
                    </Search>


                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>

                        <IconButton size="large" aria-label="show 5 new mails" color="inherit">
                            <Badge badgeContent={5} color="error">
                                <MailIcon/>
                            </Badge>
                        </IconButton>


                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>


                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>

                    </Box>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );

    /*    <div>

            <InputDashord
                lable = "email"
                value = {email}
                onChange={newValue => setEmail(newValue)}
                onPressEnter ={()=> inputEmailRef.current}

            />

        </div>
    );
    */
}
