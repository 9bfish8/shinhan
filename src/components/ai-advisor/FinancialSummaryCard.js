// src/components/ai-advisor/FinancialSummaryCard.jsx
import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Tabs,
    Tab,
    Box,
    Stack,
    List,
    ListItem,
    ListItemText,
    Divider
} from '@mui/material';
import {
    AccountBalance,
    CreditCard,
    ShowChart,
} from '@mui/icons-material';
import { accountDetails } from '../../data/financialData';

const FinancialSummaryCard = ({ dailyData }) => {
    const [activeTab, setActiveTab] = useState(0);

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
                title="내 자산 현황"
                subheader={`마지막 업데이트: ${new Date().toLocaleString()}`}
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
                    sx={{ mb: 3 }}
                >
                    <Tab label="계좌" icon={<AccountBalance />} />
                    <Tab label="카드" icon={<CreditCard />} />
                    <Tab label="투자" icon={<ShowChart />} />
                </Tabs>

                {/* 계좌 탭 */}
                {activeTab === 0 && (
                    <AccountTab dailyData={dailyData} />
                )}

                {/* 카드 탭 */}
                {activeTab === 1 && (
                    <CardTab dailyData={dailyData} />
                )}

                {/* 투자 탭 */}
                {activeTab === 2 && (
                    <InvestmentTab dailyData={dailyData} />
                )}
            </CardContent>
        </Card>
    );
};

const TotalAssets = ({ dailyData }) => (
    <Box sx={{ p: 2, bgcolor: 'rgba(0, 70, 255, 0.05)', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>총 자산</Typography>
        <Typography variant="h4" color="#0046FF" fontWeight="bold">
            {(dailyData.checkingAccount + dailyData.savingsAccount).toLocaleString()}원
        </Typography>
    </Box>
);

// 계좌 목록 컴포넌트
const AccountList = () => (
    <>
        {accountDetails.accounts.map((account, index) => (
            <Box
                key={index}
                sx={{
                    p: 2,
                    border: '1px solid rgba(0, 70, 255, 0.1)',
                    borderRadius: 2
                }}
            >
                <Typography variant="subtitle1" gutterBottom>{account.type}</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {account.number}
                </Typography>
                <Typography variant="h6" color="#0046FF" fontWeight="bold">
                    {account.balance.toLocaleString()}원
                </Typography>
                <List dense>
                    {account.recentTransactions.slice(0, 3).map((tx, idx) => (
                        <ListItem key={idx}>
                            <ListItemText
                                primary={tx.description}
                                secondary={tx.date}
                            />
                            <Typography
                                color={tx.amount > 0 ? 'success.main' : 'error.main'}
                            >
                                {tx.amount.toLocaleString()}원
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Box>
        ))}
    </>
);

// 신용카드 아이템 컴포넌트
const CreditCardItem = ({ card }) => (
    <Box
        sx={{
            p: 2,
            border: '1px solid rgba(0, 70, 255, 0.1)',
            borderRadius: 2
        }}
    >
        <Typography variant="h6" gutterBottom>{card.name}</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
            {card.number}
        </Typography>
        <Box sx={{ mt: 2, mb: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
                이번 달 사용금액
            </Typography>
            <Typography variant="h6" color="#0046FF" fontWeight="bold">
                {card.monthlyUsage.toLocaleString()}원
            </Typography>
            <Typography variant="body2" color="text.secondary">
                한도: {card.limit.toLocaleString()}원
            </Typography>
        </Box>
        <Divider />
        <List dense>
            {card.recentTransactions.map((tx, idx) => (
                <ListItem key={idx}>
                    <ListItemText
                        primary={tx.store}
                        secondary={tx.date}
                    />
                    <Typography color="error.main">
                        -{tx.amount.toLocaleString()}원
                    </Typography>
                </ListItem>
            ))}
        </List>
    </Box>
);


// 하위 컴포넌트들
const AccountTab = ({ dailyData }) => (
    <Stack spacing={3}>
        <TotalAssets dailyData={dailyData} />
        <AccountList />
    </Stack>
);

const CardTab = () => (
    <Stack spacing={3}>
        {accountDetails.creditCards.map((card, index) => (
            <CreditCardItem key={index} card={card} />
        ))}
    </Stack>
);

const InvestmentTab = ({ dailyData }) => (
    <Stack spacing={3}>
        <Box sx={{ p: 2, bgcolor: 'rgba(0, 70, 255, 0.05)', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>총 투자자산</Typography>
            <Typography variant="h4" color="#0046FF" fontWeight="bold">
                {dailyData.investments.toLocaleString()}원
            </Typography>
        </Box>
    </Stack>
);

// 더 작은 하위 컴포넌트들도 필요하다면 별도로 분리 가능

export default FinancialSummaryCard;