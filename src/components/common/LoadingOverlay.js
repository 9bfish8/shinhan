import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

// 페이드인 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// 텍스트 애니메이션 정의
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function LoadingOverlay({ message = "로딩중입니다..." }) {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                zIndex: 9999,
                animation: `${fadeIn} 0.3s ease-in-out`,
            }}
        >
            <CircularProgress
                size={60}
                thickness={4}
                sx={{
                    color: '#0046FF',
                    marginBottom: 3
                }}
            />
            <Typography
                variant="h6"
                sx={{
                    color: '#333',
                    animation: `${slideUp} 0.5s ease-out`,
                    textAlign: 'center',
                    maxWidth: '80%',
                    lineHeight: 1.6
                }}
            >
                {message}
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    marginTop: 2,
                    animation: `${slideUp} 0.5s ease-out 0.2s`,
                    animationFillMode: 'backwards'
                }}
            >
                잠시만 기다려주세요...
            </Typography>
        </Box>
    );
}