import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';

const recommendedProducts = [
    '신한 안녕,반가워 적금',
    '주택청약 종합저축',
    '신한 MY CAR 대출',
    '신한골드라임골드론'
];

const RecommendedProducts = () => (
    <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
            신한은행의 추천 상품을 확인해 보세요.
        </Typography>
        <Grid container spacing={3}>
            {recommendedProducts.map((item, index) => (
                <Grid item xs={12} md={3} key={index}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 3,
                            bgcolor: 'primary.light',
                            textAlign: 'center',
                            height: '100%'
                        }}
                    >
                        <Box
                            sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                bgcolor: 'background.paper',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mx: 'auto',
                                mb: 2
                            }}
                        >
                            <img src="/img/placeholder.png" alt={item} style={{ width: 40, height: 40 }} />
                        </Box>
                        <Typography variant="h6" gutterBottom>{item}</Typography>
                        <Typography color="text.secondary">
                            상품에 대한 간단한 설명이 여기에 들어갑니다.
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default RecommendedProducts;
