import React from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { Search, Menu as MenuIcon, KeyboardArrowDown } from '@mui/icons-material';

const mainNavItems = ['금융서비스', '고객센터', '은행소개', 'Tops Club', '카드', '증권', '신한멤버스', 'GLOBAL'];

const Header = ({ handleDrawerToggle }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar position="static" color="inherit" elevation={1}>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <a
                            href="/"
                            className="ir"
                            style={{
                                display: 'block',
                                width: '150px',
                                height: '40px',
                                backgroundImage: 'url("/img/logo.png")',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                textIndent: '-9999px',
                                overflow: 'hidden'
                            }}
                        >
                            신한은행
                        </a>
                        <Button variant="contained" color="primary">로그인</Button>
                    </Box>

                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            {mainNavItems.map((item, index) => (
                                <Button
                                    key={index}
                                    endIcon={['신한멤버스', 'GLOBAL'].includes(item) ? <KeyboardArrowDown /> : null}
                                    color="inherit"
                                    sx={{ textTransform: 'none' }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    )}

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <IconButton>
                            <Search />
                        </IconButton>
                        {isMobile && (
                            <IconButton onClick={handleDrawerToggle}>
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            </Container>
        </AppBar>
    );
};

export default Header;
