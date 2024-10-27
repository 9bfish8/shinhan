import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    FormControl,
    Grid,
    MenuItem,
    Select,
    Stack,
    Typography,
    useTheme,
    alpha,
} from '@mui/material';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { AttachMoney, AccountBalance, TrendingUp } from '@mui/icons-material';

export default function AIFinancialAdvisor() {
    const [showAnalysis, setShowAnalysis] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('savings');
    const theme = useTheme();

    const personalInfo = {
        totalDebt: 15000000,
        totalAssets: 50000000,
        monthlyIncome: 3000000
    };

    const recommendedProducts = {
        savings: {
            name: "고금리 저축예금",
            interestRate: "3.5%",
            description: "안정적인 수익을 원하는 고객을 위한 저축 상품",
            analysis: "현재 자산 대비 20%를 저축하면 5년 후 약 13,000,000원의 이자 수익을 얻을 수 있습니다.",
            graphData: [
                { year: '1년차', amount: 10350000 },
                { year: '2년차', amount: 10712250 },
                { year: '3년차', amount: 11087179 },
                { year: '4년차', amount: 11475230 },
                { year: '5년차', amount: 11876863 },
            ]
        },
        investment: {
            name: "중위험 펀드",
            expectedReturn: "7%",
            description: "적절한 위험을 감수하고 높은 수익을 추구하는 고객을 위한 펀드 상품",
            analysis: "현재 자산의 30%를 투자하면 5년 후 약 28,000,000원의 수익을 얻을 수 있습니다. 단, 시장 상황에 따라 손실이 발생할 수 있습니다.",
            graphData: [
                { year: '1년차', amount: 16050000 },
                { year: '2년차', amount: 17173500 },
                { year: '3년차', amount: 18375645 },
                { year: '4년차', amount: 19661940 },
                { year: '5년차', amount: 21038275 },
            ]
        },
        loan: {
            name: "저금리 신용대출",
            interestRate: "4.5%",
            description: "급전이 필요한 고객을 위한 저금리 신용대출 상품",
            analysis: "현재 부채를 5년간 분할 상환 시 월 280,000원의 상환금이 필요합니다. 이는 월 소득의 9.3%에 해당합니다.",
            graphData: [
                { year: '1년차', amount: 12000000 },
                { year: '2년차', amount: 9000000 },
                { year: '3년차', amount: 6000000 },
                { year: '4년차', amount: 3000000 },
                { year: '5년차', amount: 0 },
            ]
        }
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <Card sx={{
                    boxShadow: '0 4px 20px rgba(0, 70, 255, 0.1)',
                    p: 1.5,
                    border: '1px solid',
                    borderColor: 'rgba(0, 70, 255, 0.1)',
                }}>
                    <Typography variant="subtitle2" color="text.secondary">
                        {label}
                    </Typography>
                    <Typography variant="body1" fontWeight="bold" color="#0046FF">
                        {payload[0].value.toLocaleString()}원
                    </Typography>
                </Card>
            );
        }
        return null;
    };

    const formatYAxis = (value) => {
        if (value >= 10000000) {
            return `${(value / 10000000).toFixed(1)}천만`;
        } else if (value >= 10000) {
            return `${(value / 10000).toFixed(0)}만`;
        }
        return value;
    };

    return (
        <Box sx={{
            bgcolor: '#F4F7FC',
            py: 6,
            minHeight: '100vh'
        }}>
            <Container maxWidth="xl">
                {/* 헤더 섹션 */}
                <Box sx={{
                    textAlign: 'center',
                    mb: 6,
                    background: 'linear-gradient(135deg, #0046FF 0%, #0082FF 100%)',
                    borderRadius: 2,
                    p: 4,
                    color: 'white',
                    boxShadow: '0 4px 20px rgba(0, 70, 255, 0.2)'
                }}>
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            mb: 2
                        }}
                    >
                        AI 금융 어드바이저
                    </Typography>
                    <Typography variant="h6">
                        고객님의 재무상황을 분석하여 최적의 금융상품을 추천해드립니다
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {/* 금융 정보 카드 */}
                    <Grid item xs={12} md={6}>
                        <Card
                            elevation={0}
                            sx={{
                                height: '100%',
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'rgba(0, 70, 255, 0.1)',
                                '&:hover': {
                                    boxShadow: '0 4px 20px rgba(0, 70, 255, 0.1)',
                                    transform: 'translateY(-4px)',
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <CardHeader
                                title="내 금융 정보"
                                sx={{
                                    background: 'linear-gradient(135deg, rgba(0, 70, 255, 0.05) 0%, rgba(0, 130, 255, 0.05) 100%)',
                                    '& .MuiCardHeader-title': {
                                        fontSize: '1.75rem',
                                        fontWeight: 700,
                                        color: '#0046FF'
                                    }
                                }}
                            />
                            <CardContent>
                                <Stack spacing={3}>
                                    {[
                                        { icon: <AttachMoney />, label: "총 부채", value: personalInfo.totalDebt },
                                        { icon: <AccountBalance />, label: "총 자산", value: personalInfo.totalAssets },
                                        { icon: <TrendingUp />, label: "월 소득", value: personalInfo.monthlyIncome }
                                    ].map((item, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                p: 2.5,
                                                bgcolor: 'white',
                                                borderRadius: 2,
                                                border: '1px solid',
                                                borderColor: 'rgba(0, 70, 255, 0.1)',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    bgcolor: 'rgba(0, 70, 255, 0.02)'
                                                }
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                <Box sx={{ color: '#0046FF' }}>
                                                    {item.icon}
                                                </Box>
                                                <Typography variant="h6" color="text.secondary">
                                                    {item.label}
                                                </Typography>
                                            </Box>
                                            <Typography variant="h6" fontWeight="bold" color="#0046FF">
                                                {item.value.toLocaleString()}원
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* AI 분석 카드 */}
                    <Grid item xs={12} md={6}>
                        <Card
                            elevation={0}
                            sx={{
                                height: '100%',
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'rgba(0, 70, 255, 0.1)',
                                '&:hover': {
                                    boxShadow: '0 4px 20px rgba(0, 70, 255, 0.1)',
                                    transform: 'translateY(-4px)',
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <CardHeader
                                title="AI 분석 및 추천"
                                sx={{
                                    background: 'linear-gradient(135deg, rgba(0, 70, 255, 0.05) 0%, rgba(0, 130, 255, 0.05) 100%)',
                                    '& .MuiCardHeader-title': {
                                        fontSize: '1.75rem',
                                        fontWeight: 700,
                                        color: '#0046FF'
                                    }
                                }}
                            />
                            <CardContent>
                                {!showAnalysis ? (
                                    <Box display="flex" flexDirection="column" alignItems="center" gap={3} py={4}>
                                        <img
                                            src="/img/ai_analysis.png"
                                            alt="AI Analysis"
                                            style={{ width: '200px', height: 'auto', marginBottom: '20px' }}
                                        />
                                        <Button
                                            variant="contained"
                                            size="large"
                                            onClick={() => setShowAnalysis(true)}
                                            sx={{
                                                px: 6,
                                                py: 2,
                                                fontSize: '1.2rem',
                                                fontWeight: 700,
                                                borderRadius: '50px',
                                                background: 'linear-gradient(135deg, #0046FF 0%, #0082FF 100%)',
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #0039CC 0%, #006ACC 100%)',
                                                }
                                            }}
                                        >
                                            AI 분석 시작하기
                                        </Button>
                                    </Box>
                                ) : (
                                    <Stack spacing={3}>
                                        <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                                            AI가 분석한 결과, 다음과 같은 금융 상품을 추천드립니다:
                                        </Typography>
                                        <FormControl fullWidth>
                                            <Select
                                                value={selectedProduct}
                                                onChange={(e) => setSelectedProduct(e.target.value)}
                                                sx={{
                                                    borderRadius: 2,
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'rgba(0, 70, 255, 0.2)'
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'rgba(0, 70, 255, 0.4)'
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#0046FF'
                                                    }
                                                }}
                                            >
                                                <MenuItem value="savings">저축예금</MenuItem>
                                                <MenuItem value="investment">투자 펀드</MenuItem>
                                                <MenuItem value="loan">신용대출</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    {showAnalysis && (
                        <>
                            <Grid item xs={12} md={6}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        borderRadius: 3,
                                        border: '1px solid',
                                        borderColor: 'rgba(0, 70, 255, 0.1)',
                                        '&:hover': {
                                            boxShadow: '0 4px 20px rgba(0, 70, 255, 0.1)',
                                            transform: 'translateY(-4px)',
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <CardHeader
                                        title="추천 상품 정보"
                                        sx={{
                                            background: 'linear-gradient(135deg, rgba(0, 70, 255, 0.05) 0%, rgba(0, 130, 255, 0.05) 100%)',
                                            '& .MuiCardHeader-title': {
                                                fontSize: '1.75rem',
                                                fontWeight: 700,
                                                color: '#0046FF'
                                            }
                                        }}
                                    />
                                    <CardContent>
                                        <Stack spacing={3}>
                                            <Typography variant="h5" sx={{ color: '#0046FF', fontWeight: 700 }}>
                                                {recommendedProducts[selectedProduct].name}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {recommendedProducts[selectedProduct].description}
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    bgcolor: 'rgba(0, 70, 255, 0.05)',
                                                    p: 3,
                                                    borderRadius: 2,
                                                    border: '1px solid',
                                                    borderColor: 'rgba(0, 70, 255, 0.1)'
                                                }}
                                            >
                                                <Typography variant="h6" color="text.secondary">금리/수익률</Typography>
                                                <Typography variant="h6" fontWeight="bold" sx={{ color: '#0046FF' }}>
                                                    {recommendedProducts[selectedProduct].interestRate || recommendedProducts[selectedProduct].expectedReturn}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        borderRadius: 3,
                                        border: '1px solid',
                                        borderColor: 'rgba(0, 70, 255, 0.1)',
                                        '&:hover': {
                                            boxShadow: '0 4px 20px rgba(0, 70, 255, 0.1)',
                                            transform: 'translateY(-4px)',
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <CardHeader
                                        title="AI 분석 결과"
                                        sx={{
                                            background: 'linear-gradient(135deg, rgba(0, 70, 255, 0.05) 0%, rgba(0, 130, 255, 0.05) 100%)',
                                            '& .MuiCardHeader-title': {
                                                fontSize: '1.75rem',
                                                fontWeight: 700,
                                                color: '#0046FF'
                                            }
                                        }}
                                    />
                                    <CardContent>
                                        <Stack spacing={3}>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: 'text.secondary',
                                                    bgcolor: 'rgba(0, 70, 255, 0.05)',
                                                    p: 2,
                                                    borderRadius: 2,
                                                    border: '1px solid',
                                                    borderColor: 'rgba(0, 70, 255, 0.1)'
                                                }}
                                            >
                                                {recommendedProducts[selectedProduct].analysis}
                                            </Typography>
                                            <Box sx={{ height: 300, mt: 2 }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <BarChart
                                                        data={recommendedProducts[selectedProduct].graphData}
                                                        margin={{
                                                            top: 20,
                                                            right: 30,
                                                            left: 20,
                                                            bottom: 5,
                                                        }}
                                                    >
                                                        <XAxis
                                                            dataKey="year"
                                                            tick={{ fill: 'text.secondary' }}
                                                            stroke="rgba(0, 70, 255, 0.1)"
                                                        />
                                                        <YAxis
                                                            tickFormatter={formatYAxis}
                                                            tick={{ fill: 'text.secondary' }}
                                                            stroke="rgba(0, 70, 255, 0.1)"
                                                        />
                                                        <Tooltip content={<CustomTooltip />} />
                                                        <Bar
                                                            dataKey="amount"
                                                            fill="#0046FF"
                                                            barSize={30}
                                                            radius={[4, 4, 0, 0]}
                                                        />
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </>
                    )}
                </Grid>

                {/* 하단 버튼 섹션 */}
                {showAnalysis && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 6
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                px: 6,
                                py: 2,
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                borderRadius: '50px',
                                background: 'linear-gradient(135deg, #0046FF 0%, #0082FF 100%)',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #0039CC 0%, #006ACC 100%)',
                                },
                                minWidth: '200px'
                            }}
                        >
                            상품 가입하기
                        </Button>
                    </Box>
                )}
            </Container>
        </Box>
    );
}