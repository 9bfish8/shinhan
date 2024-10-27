import React from 'react';
import { Box, Container, Grid, Typography, Button, Stack, Divider } from '@mui/material';

const Footer = () => (
    <Box sx={{ bgcolor: '#1C1C1C', color: 'common.white' }}>
        {/* 메인 푸터 */}
        <Container>
            <Box sx={{ py: 5 }}>
                <Grid container spacing={4}>
                    {/* 로고 및 저작권 */}
                    <Grid item xs={12} md={3}>
                        <Stack spacing={2}>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'grey.500',
                                    mt: 2
                                }}
                            >
                                © SHINHAN BANK. All rights reserved.
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* 정책 링크 */}
                    <Grid item xs={12} md={9}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Grid container spacing={2}>
                                {[
                                    '개인정보처리방침',
                                    '신용정보활용체제',
                                    '경영공시',
                                    '그룹사간고객정보제공내역'
                                ].map((item, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <Button
                                            fullWidth
                                            color="inherit"
                                            sx={{
                                                justifyContent: 'flex-start',
                                                textTransform: 'none',
                                                fontWeight: index === 0 ? 'bold' : 'normal',
                                                color: index === 0 ? 'white' : 'grey.400',
                                                '&:hover': {
                                                    color: 'white',
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                                }
                                            }}
                                        >
                                            {item}
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>

        {/* 추가 정보 섹션 */}
        <Box sx={{ bgcolor: '#141414', py: 2 }}>
            <Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" sx={{ color: 'grey.500' }}>
                            서울특별시 중구 세종대로9길 20 (태평로2가 120) 대경빌딩 1층 신한은행
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                                justifyContent: { xs: 'flex-start', md: 'flex-end' }
                            }}
                        >
                            <Typography variant="body2" sx={{ color: 'grey.500' }}>
                                대표번호: 1599-8000
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'grey.500' }}>
                                해외: 82-2-3449-8000
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </Box>
);

export default Footer;