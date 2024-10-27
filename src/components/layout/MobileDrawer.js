import React from 'react';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';

const mainNavItems = ['금융서비스', '고객센터', '은행소개', 'Tops Club', '카드', '증권', '신한멤버스', 'GLOBAL'];

const MobileDrawer = ({ open, onClose }) => (
    <Drawer
        variant="temporary"
        anchor="right"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
    >
        <Box sx={{ width: 250 }}>
            <List>
                {mainNavItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
);

export default MobileDrawer;