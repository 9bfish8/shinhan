// src/components/ai-advisor/ProductRecommendationCard.jsx
import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    Box,
    Chip
} from '@mui/material';
import { recommendedProducts } from '../../data/financialData';

const ProductRecommendationCard = ({ selectedProduct, onProductSelect }) => {
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
                <Grid container spacing={2}>
                    {recommendedProducts.map((product) => (
                        <Grid item xs={12} key={product.id}>
                            <ProductCard
                                product={product}
                                isSelected={selectedProduct?.id === product.id}
                                onClick={() => onProductSelect(product)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

const ProductCard = ({ product, isSelected, onClick }) => (
    <Card
        onClick={onClick}
        sx={{
            cursor: 'pointer',
            border: '1px solid',
            borderColor: isSelected ? '#0046FF' : 'rgba(0, 70, 255, 0.1)',
            bgcolor: isSelected ? 'rgba(0, 70, 255, 0.05)' : 'white',
            '&:hover': {
                borderColor: '#0046FF',
                bgcolor: 'rgba(0, 70, 255, 0.02)'
            }
        }}
    >
        <CardContent>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box>
                    <Typography variant="h6" color="#0046FF" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </Box>
                <Chip
                    label={`${product.interestRate}`}
                    color="primary"
                    sx={{
                        bgcolor: 'rgba(0, 70, 255, 0.1)',
                        color: '#0046FF',
                        fontWeight: 'bold'
                    }}
                />
            </Box>
        </CardContent>
    </Card>
);

export default ProductRecommendationCard;