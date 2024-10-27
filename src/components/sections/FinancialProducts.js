import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';

const productCategories = ['예금', '펀드', '대출', '외환', '퇴직연금'];

const FinancialProducts = () => (
    <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>금융상품</Typography>
        <Grid container spacing={2}>
            {productCategories.map((item, index) => (
                <Grid item xs={6} md={2.4} key={index}>
                    <Paper
                        elevation={0}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            p: 2,
                            bgcolor: 'primary.light'
                        }}
                    >
                        <Box
                            sx={{
                                width: 64,
                                height: 64,
                                borderRadius: '50%',
                                bgcolor: 'background.paper',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 1
                            }}
                        >
                            <img src="/img/placeholder.png" alt={item} style={{ width: 32, height: 32 }} />
                        </Box>
                        <Typography>{item}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default FinancialProducts;