// src/components/ai-advisor/ProductRecommendationCard.jsx
import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    Box,
    Chip,
    Tabs,
    Tab
} from '@mui/material';
import {
    AccountBalance,
    Savings,
    LocalAtm,
    TrendingUp,
    HealthAndSafety
} from '@mui/icons-material';
import { recommendedProducts } from '../../data/financialData';

// 카테고리 정의
const CATEGORIES = [
    { id: 'savings', label: '예금', icon: <AccountBalance />, color: '#0046FF' },
    { id: 'deposit', label: '적금', icon: <Savings />, color: '#2E7D32' },
    { id: 'loan', label: '대출', icon: <LocalAtm />, color: '#ED6C02' },
    { id: 'investment', label: '투자', icon: <TrendingUp />, color: '#9C27B0' },
    { id: 'insurance', label: '보험', icon: <HealthAndSafety />, color: '#D32F2F' }
];

const ProductRecommendationCard = ({ selectedProduct, onProductSelect }) => {
    const [activeTab, setActiveTab] = useState(0);

    // 카테고리별 상품 필터링 (상위 5개)
    const getProductsByCategory = (category) => {
        return recommendedProducts
            .filter(product => product.category === category)
            .slice(0, 5);
    };

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
                title="AI 맞춤 추천 상품"
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
                <Tabs
                    value={activeTab}
                    onChange={(e, newValue) => setActiveTab(newValue)}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        mb: 3,
                        borderBottom: 1,
                        borderColor: 'divider',
                        '& .MuiTab-root': {
                            minWidth: 'auto',
                            px: 3
                        }
                    }}
                >
                    {CATEGORIES.map((category, index) => (
                        <Tab
                            key={category.id}
                            icon={category.icon}
                            label={category.label}
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    color: activeTab === index ? category.color : 'text.secondary'
                                }
                            }}
                        />
                    ))}
                </Tabs>

                {CATEGORIES.map((category, index) => (
                    activeTab === index && (
                        <Grid container spacing={2} key={category.id}>
                            {getProductsByCategory(category.id).map((product) => (
                                <Grid item xs={12} key={product.id}>
                                    <ProductCard
                                        product={product}
                                        categoryColor={category.color}
                                        isSelected={selectedProduct?.id === product.id}
                                        onClick={() => onProductSelect(product)}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )
                ))}
            </CardContent>
        </Card>
    );
};

const ProductCard = ({ product, categoryColor, isSelected, onClick }) => (
    <Card
        onClick={onClick}
        sx={{
            cursor: 'pointer',
            border: '1px solid',
            borderColor: isSelected ? categoryColor : 'rgba(0, 0, 0, 0.12)',
            bgcolor: isSelected ? `${categoryColor}0A` : 'white', // 10% opacity
            '&:hover': {
                borderColor: categoryColor,
                bgcolor: `${categoryColor}05` // 5% opacity
            },
            transition: 'all 0.2s ease'
        }}
    >
        <CardContent>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 2
            }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ color: categoryColor }} gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {product.features?.map((feature, index) => (
                            <Chip
                                key={index}
                                label={feature}
                                size="small"
                                sx={{
                                    bgcolor: `${categoryColor}0A`,
                                    color: categoryColor,
                                    fontSize: '0.75rem'
                                }}
                            />
                        ))}
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                    <Chip
                        label={`${product.interestRate}`}
                        sx={{
                            bgcolor: `${categoryColor}1A`, // 10% opacity
                            color: categoryColor,
                            fontWeight: 'bold'
                        }}
                    />
                    {product.expectedReturn && (
                        <Typography variant="caption" sx={{ color: categoryColor }}>
                            예상 수익률: {product.expectedReturn}
                        </Typography>
                    )}
                </Box>
            </Box>
        </CardContent>
    </Card>
);

export default ProductRecommendationCard;