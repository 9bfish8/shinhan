// src/components/ai-advisor/ActionButtons.jsx
import React from 'react';
import { Box, Button } from '@mui/material';

const ActionButtons = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 6,
            gap: 2
        }}
    >
        <Button
            variant="outlined"
            size="large"
            sx={{
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 700,
                borderRadius: '50px',
                borderColor: '#0046FF',
                color: '#0046FF',
                '&:hover': {
                    borderColor: '#0039CC',
                    bgcolor: 'rgba(0, 70, 255, 0.05)'
                },
                minWidth: '200px'
            }}
        >
            상담 신청하기
        </Button>
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
            바로 가입하기
        </Button>
    </Box>
);

export default ActionButtons;