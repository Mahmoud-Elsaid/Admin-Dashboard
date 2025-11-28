


import * as React from 'react';
import { styled, useTheme , alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useColorTheme } from '../Themes/Themescontext';
import AdminImg from '../assets/MahmoudElsaied.jpg'


// sidebar icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { Avatar, Tooltip } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";


// sidebar data
const group1 = [
        {text:"Dashboard" , icon : HomeOutlinedIcon , path:"dashboard" },
        {text:"team" , icon : PeopleAltOutlinedIcon , path:"team" },
        {text:"Contacts" , icon : ContactsOutlinedIcon , path:"contacts" },
        {text:"Invoices Balances " , icon : ReceiptOutlinedIcon , path:"invoices" },
      ]


const group2 = [
        {text:"Profile Form" , icon : Person4OutlinedIcon , path:"profileForm" },
        {text:"Calender" , icon : CalendarTodayOutlinedIcon , path:"calender" },
        {text:"FAQ Page" , icon : HelpOutlineOutlinedIcon , path:"faq" },
      ]


const group3 = [
        {text:"Bar Chart" , icon : BarChartOutlinedIcon , path:"barCharts" },
        {text:"Pie Chart" , icon : PieChartOutlineOutlinedIcon , path:"pieCharts" },
        {text:"Line Chart" , icon : TimelineOutlinedIcon , path:"lineCharts" },
        {text:"Geography Chart" , icon : MapOutlinedIcon , path:"geographyCharts" },
      ]








const drawerWidth = 240;


const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
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
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
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
  },
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open
    ? {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      }
    : {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
}));







export default function MiniDrawer({children}) {

    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

      const { colorThemeMode, toggleTheme } = useColorTheme();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };




      const [anchorEl, setAnchorEl] = React.useState(null);
      const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

      const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };

      const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };

      const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
      };

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
            <IconButton onClick={toggleTheme} size="large" aria-label="show 4 new mails" color="inherit">
                {colorThemeMode ==="light" ? <LightModeOutlinedIcon/> : <DarkModeOutlinedIcon/> }  
            </IconButton>
          </MenuItem>
          
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton size="large" aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );
      



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
                <AppBar position="fixed" open={open} sx={{bgcolor : colorThemeMode ==="light" ? "#323232":""}}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={[
                            {
                                marginRight: 5,
                            },
                            open && { display: 'none' },
                            ]}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                                Admin Dashboard
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>





                      <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton onClick={toggleTheme} size="large" aria-label="show 4 new mails" color="inherit">
                                  {colorThemeMode ==="light" ? <LightModeOutlinedIcon/> : <DarkModeOutlinedIcon/> }  
                            </IconButton>

                            
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <SettingsOutlinedIcon/>
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
                            <AccountCircle />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                            >
                            <MoreVertIcon />
                            </IconButton>
                        </Box>

                        







                        
                    </Toolbar>
                </AppBar>
                
                      <Drawer variant="permanent" open={open} >
                              <DrawerHeader>
                                  <IconButton onClick={handleDrawerClose}>
                                      {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                  </IconButton>
                              </DrawerHeader>
                              <Divider />

                              
                              <Avatar  alt="Mahmoud Elsaied" src={AdminImg} sx={{ width:open?50:30, height:open?50:30, mx:"auto" , mt:1 , transition:'0.5s'}}/>
                              <Typography  align='center' sx={{fontSize:open?17:0 , fontWeight:open?700:0 , transition:"0.5s"}}>Mahmoud Elsaied</Typography>
                              <Typography align='center' sx={{fontSize:open?17:0 , fontWeight:open?700:0 , transition:"0.5s" , color:theme.palette.info.main}}>Admin</Typography>


                              <List>
                                  {group1.map((item) => (
                                      <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                                        <Tooltip  title={open?null:item.text} slotProps={{
                                                              popper: {
                                                                modifiers: [
                                                                  {
                                                                    name: 'offset',
                                                                    options: {
                                                                      offset: [40, -60],
                                                                    },
                                                                  },
                                                                ],
                                                              },
                                                            }} >
                                                  <ListItemButton
                                            onClick={()=> navigate(item.path) }
                                            
                                                sx={[
                                                {
                                                    maxHeight: 40,
                                                    px: 2.5,
                                                    bgcolor: location.pathname === `/${item.path}`  ? colorThemeMode ==="dark" ? "gray" : "#989898" : ""
                                                    
                                                },
                                                open
                                                    ? {
                                                        justifyContent: 'initial',
                                                    }
                                                    : {
                                                        justifyContent: 'center',
                                                    },
                                                ]}
                                            >

                                                <ListItemIcon
                                                sx={[
                                                    {
                                                    minWidth: 0,
                                                    justifyContent: 'center',
                                                    },
                                                    open
                                                    ? {
                                                        mr: 3,
                                                        }
                                                    : {
                                                        mr: 'auto',
                                                        },
                                                ]}
                                                >
                                                {<item.icon/>}
                                                </ListItemIcon>
                                                <ListItemText
                                                primary={item.text}
                                                sx={[
                                                    open
                                                    ? {
                                                        opacity: 1,
                                                        }
                                                    : {
                                                        opacity: 0,
                                                        },
                                                ]}
                                                />
                                                  </ListItemButton>
                                        </Tooltip >
                                      
                                      </ListItem>
                                  ))}
                              </List>

                              <Divider />

                              <List>
                                    {group2.map((item) => (
                                        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                                          <Tooltip  title={open?null:item.text} slotProps={{
                                                              popper: {
                                                                modifiers: [
                                                                  {
                                                                    name: 'offset',
                                                                    options: {
                                                                      offset: [40, -60],
                                                                    },
                                                                  },
                                                                ],
                                                              },
                                                            }}  >
                                                  <ListItemButton
                                                  onClick={()=> navigate(item.path) }
                                                  sx={[
                                                  {
                                                      maxHeight: 40,
                                                      px: 2.5,
                                                  },
                                                  open
                                                      ? {
                                                          justifyContent: 'initial',
                                                      }
                                                      : {
                                                          justifyContent: 'center',
                                                      },
                                                  ]}
                                              >
                                                  <ListItemIcon
                                                  sx={[
                                                      {
                                                      minWidth: 0,
                                                      justifyContent: 'center',
                                                      },
                                                      open
                                                      ? {
                                                          mr: 3,
                                                          }
                                                      : {
                                                          mr: 'auto',
                                                          },
                                                  ]}
                                                  >
                                                  {<item.icon/>}
                                                  </ListItemIcon>
                                                  <ListItemText
                                                  primary={item.text}
                                                  sx={[
                                                      open
                                                      ? {
                                                          opacity: 1,
                                                          }
                                                      : {
                                                          opacity: 0,
                                                          },
                                                  ]}
                                                  />
                                                  </ListItemButton>
                                          </Tooltip >
                                        
                                        </ListItem>
                                    ))}
                              </List>

                              <Divider />



                                <List>
                                    {group3.map((item) => (
                                        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                                          <Tooltip  title={open?null:item.text} slotProps={{
                                                              popper: {
                                                                modifiers: [
                                                                  {
                                                                    name: 'offset',
                                                                    options: {
                                                                      offset: [40, -60],
                                                                    },
                                                                  },
                                                                ],
                                                              },
                                                            }} >
                                                    <ListItemButton
                                                    onClick={()=> navigate(item.path) }
                                                    sx={[
                                                    {
                                                        maxHeight: 40,
                                                        px: 2.5,
                                                    },
                                                    open
                                                        ? {
                                                            justifyContent: 'initial',
                                                        }
                                                        : {
                                                            justifyContent: 'center',
                                                        },
                                                    ]}
                                                >
                                                    <ListItemIcon
                                                    sx={[
                                                        {
                                                        minWidth: 0,
                                                        justifyContent: 'center',
                                                        },
                                                        open
                                                        ? {
                                                            mr: 3,
                                                            }
                                                        : {
                                                            mr: 'auto',
                                                            },
                                                    ]}
                                                    >
                                                    {<item.icon/>}
                                                    </ListItemIcon>
                                                    <ListItemText
                                                    primary={item.text}
                                                    sx={[
                                                        open
                                                        ? {
                                                            opacity: 1,
                                                            }
                                                        : {
                                                            opacity: 0,
                                                            },
                                                    ]}
                                                    />
                                                    </ListItemButton>
                                          </Tooltip >
                                        
                                        </ListItem>
                                    ))}
                                </List>



                          




                      </Drawer>
                
                
                      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                          <DrawerHeader />
                          {children}
                      </Box>

                      {renderMobileMenu}
                      {renderMenu}
        </Box>
    );
}
