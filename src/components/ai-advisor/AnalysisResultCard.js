// src/components/ai-advisor/AnalysisResultCard.jsx
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area,
    ResponsiveContainer
} from 'recharts';
import {Box, Card, CardContent, CardHeader, Stack, Typography} from '@mui/material';

const AnalysisResultCard = ({ selectedProduct }) => {
    return (
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
                {selectedProduct ? (
                    <AnalysisContent product={selectedProduct} />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
};

const AnalysisContent = ({ product }) => (
    <Stack spacing={4}>
        <ProductFeatures features={product.features} />
        <AIAnalysis analysis={product.analysis} />
        <ProfitAnalysis data={product.analysis.graphData} />
    </Stack>
);

const ProductFeatures = ({ features }) => (
    <Box>
        <Typography variant="h6" gutterBottom color="#0046FF">
            상품 특징
        </Typography>
        <Stack spacing={1}>
            {features.map((feature, index) => (
                <Typography
                    key={index}
                    variant="body1"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: 'text.secondary'
                    }}
                >
                    • {feature}
                </Typography>
            ))}
        </Stack>
    </Box>
);

// src/components/ai-advisor/AnalysisResultCard.jsx (계속)

const AIAnalysis = ({ analysis }) => (
    <Box>
        <Typography variant="h6" gutterBottom color="#0046FF">
            AI 분석 의견
        </Typography>
        <Typography
            variant="body1"
            sx={{
                bgcolor: 'rgba(0, 70, 255, 0.05)',
                p: 2,
                borderRadius: 2,
                color: 'text.secondary'
            }}
        >
            {analysis.text}
        </Typography>
        <Typography
            variant="body1"
            sx={{
                mt: 2,
                color: 'text.secondary',
                fontStyle: 'italic'
            }}
        >
            {analysis.recommendation}
        </Typography>
    </Box>
);

const ProfitAnalysis = ({ data }) => {
    // 그라데이션 정의
    const gradientOffset = () => {
        const dataMax = Math.max(...data.map(d => d.amount));
        const dataMin = Math.min(...data.map(d => d.amount));

        if (dataMax <= 0) return 0;
        if (dataMin >= 0) return 1;

        return dataMax / (dataMax - dataMin);
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom color="#0046FF">
                예상 수익 분석
            </Typography>
            <Box sx={{ height: 300, p: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 10
                        }}
                    >
                        <defs>
                            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0046FF" stopOpacity={0.2}/>
                                <stop offset="95%" stopColor="#0046FF" stopOpacity={0}/>
                            </linearGradient>
                            {/* 그라데이션 라인 */}
                            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset={gradientOffset()} stopColor="#82ca9d" stopOpacity={1}/>
                                <stop offset={gradientOffset()} stopColor="#ff7676" stopOpacity={1}/>
                            </linearGradient>
                        </defs>

                        {/* 그리드 라인 */}
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="rgba(0, 70, 255, 0.1)"
                        />

                        {/* X축 */}
                        <XAxis
                            dataKey="month"
                            stroke="rgba(0, 70, 255, 0.5)"
                            tick={{ fill: '#666666', fontSize: 12 }}
                            axisLine={{ stroke: 'rgba(0, 70, 255, 0.1)' }}
                        />

                        {/* Y축 */}
                        <YAxis
                            tickFormatter={(value) => `${(value / 10000).toFixed(0)}만`}
                            stroke="rgba(0, 70, 255, 0.5)"
                            tick={{ fill: '#666666', fontSize: 12 }}
                            axisLine={{ stroke: 'rgba(0, 70, 255, 0.1)' }}
                        />

                        {/* 툴팁 */}
                        <Tooltip
                            content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <Box
                                            sx={{
                                                bgcolor: 'white',
                                                p: 1.5,
                                                border: '1px solid rgba(0, 70, 255, 0.1)',
                                                borderRadius: 1,
                                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: '#666666',
                                                    fontSize: '0.875rem',
                                                    mb: 0.5
                                                }}
                                            >
                                                {label}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: '#0046FF',
                                                    fontSize: '1rem',
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                {payload[0].value.toLocaleString()}원
                                            </Typography>
                                        </Box>
                                    );
                                }
                                return null;
                            }}
                        />

                        {/* 영역 그래프 */}
                        <Area
                            type="monotone"
                            dataKey="amount"
                            stroke="none"
                            fillOpacity={1}
                            fill="url(#colorAmount)"
                        />

                        {/* 라인 */}
                        <Line
                            type="monotone"
                            dataKey="amount"
                            stroke="#0046FF"
                            strokeWidth={3}
                            dot={{
                                fill: '#0046FF',
                                stroke: 'white',
                                strokeWidth: 2,
                                r: 4
                            }}
                            activeDot={{
                                fill: '#0046FF',
                                stroke: 'white',
                                strokeWidth: 2,
                                r: 6,
                                boxShadow: '0 0 10px rgba(0, 70, 255, 0.5)'
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
};

const EmptyState = () => (
    <Box
        sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text.secondary'
        }}
    >
        <Typography variant="h6">
            왼쪽에서 상품을 선택하시면 분석 결과를 확인하실 수 있습니다.
        </Typography>
    </Box>
);

export default AnalysisResultCard;