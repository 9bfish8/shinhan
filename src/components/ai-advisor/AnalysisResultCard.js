// src/components/ai-advisor/AnalysisResultCard.jsx
import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Box,
    Stack
} from '@mui/material';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import CustomTooltip from '../common/CustomTooltip';

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

const ProfitAnalysis = ({ data }) => (
    <Box>
        <Typography variant="h6" gutterBottom color="#0046FF">
            예상 수익 분석
        </Typography>
        <Box sx={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="month" stroke="rgba(0, 70, 255, 0.5)" />
                    <YAxis
                        tickFormatter={(value) => `${value.toLocaleString()}원`}
                        stroke="rgba(0, 70, 255, 0.5)"
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#0046FF"
                        strokeWidth={2}
                        dot={{ fill: '#0046FF' }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    </Box>
);

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