// src/components/common/CustomTooltip.jsx
import React from 'react';
import { Card, Typography } from '@mui/material';

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

export default CustomTooltip;