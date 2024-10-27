import React from 'react';
import { Paper, Container, Tabs, Tab } from '@mui/material';

const MainNavigation = ({ value, onChange }) => (
    <Paper elevation={1}>
        <Container>
            <Tabs
                value={value}
                onChange={onChange}
                centered
                sx={{ py: 1 }}
            >
                <Tab label="개인" />
                <Tab label="기업" />
                <Tab label="금융상품" />
            </Tabs>
        </Container>
    </Paper>
);

export default MainNavigation;