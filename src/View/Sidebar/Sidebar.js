import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Admin_Route } from '../../Navigation/Nav';

// const drawerWidth = 240;

export default function ResponsiveDrawer(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className="sara-logo p-2">
                <img src="/assets/images/web_black.png" alt="SARA LOGO" height={50} />
            </div>
            <Divider />
            <List>
                {Admin_Route.map((element, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <Link to={element.url}>
                                <ListItemIcon>
                                    <i className={element.icon}></i>
                                </ListItemIcon>
                                {element.name}
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width:"323px"},
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width:"323px"},
                }}
                open
            >
                {drawer}
            </Drawer>
        </>
    );
}