import React from 'react';
import { Box, Container, Typography, Paper, Button, List, ListItem } from '@mui/material';

const newsItems = [
    { title: '주택담보대출금리 인하 및 만기 연장 안내', date: '2024.02.25' },
    { title: 'SOL환전을 제크카드/신용카드 해외ATM이용 한도 변경 안내', date: '2024.02.24' },
    { title: '금융거래목적 확인을 위한 서류 제출 안내', date: '2024.02.24' }
];

const NewsSection = () => (
    <Box sx={{ bgcolor: 'grey.100', py: 6 }}>
        <Container>
            <Typography variant="h4" gutterBottom>주요 서비스</Typography>
            <Paper sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {['예적금신규', '자동이체', '공과금납부', '인터넷뱅킹', '환율조회'].map((item, index) => (
                            <Button
                                key={index}
                                color="inherit"
                                sx={{
                                    fontWeight: index === 0 ? 'bold' : 'normal',
                                    color: index === 0 ? 'text.primary' : 'text.secondary'
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <Button color="inherit">더보기 &gt;</Button>
                </Box>
                <List>
                    {newsItems.map((item, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                px: 0
                            }}
                        >
                            <Typography>{item.title}</Typography>
                            <Typography color="text.secondary">{item.date}</Typography>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    </Box>
);

export default NewsSection;