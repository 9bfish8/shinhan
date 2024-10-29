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
    Divider,
    Chip
} from '@mui/material';
import {
    AccountBalance,
    CreditCard,
    ShowChart,
    LocalAtm,
    HealthAndSafety,
} from '@mui/icons-material';
import { accountDetails } from '../../data/financialData';

// 공통 컴포넌트
const TotalAssets = ({ dailyData }) => (
    <Box sx={{ p: 2, bgcolor: 'rgba(0, 70, 255, 0.05)', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>총 자산</Typography>
        <Typography variant="h4" color="#0046FF" fontWeight="bold">
            {(dailyData.checkingAccount + dailyData.savingsAccount).toLocaleString()}원
        </Typography>
    </Box>
);

// 계좌 관련 컴포넌트
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

const AccountTab = ({ dailyData }) => (
    <Stack spacing={3}>
        <TotalAssets dailyData={dailyData} />
        <AccountList />
    </Stack>
);

// 카드 관련 컴포넌트
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

const CardTab = () => (
    <Stack spacing={3}>
        {accountDetails.creditCards.map((card, index) => (
            <CreditCardItem key={index} card={card} />
        ))}
    </Stack>
);

// 투자 관련 컴포넌트
// InvestmentTab 컴포넌트 수정
const InvestmentTab = ({ dailyData }) => {
    const investments = accountDetails.investments || [];

    return (
        <Stack spacing={3}>
            <Box sx={{ p: 2, bgcolor: 'rgba(0, 70, 255, 0.05)', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>총 투자자산</Typography>
                <Typography variant="h4" color="#0046FF" fontWeight="bold">
                    {dailyData?.investments?.toLocaleString() || '0'}원
                </Typography>
            </Box>
            {investments.length > 0 ? (
                investments.map((investment, index) => (
                    <Box
                        key={index}
                        sx={{
                            p: 2,
                            border: '1px solid rgba(0, 70, 255, 0.1)',
                            borderRadius: 2
                        }}
                    >
                        <Typography variant="h6" gutterBottom>{investment.type}</Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {investment.bank} | {investment.accountNumber}
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="h6" color="#0046FF">
                                {investment.totalValue?.toLocaleString() || '0'}원
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color={investment.profitRate?.startsWith('+') ? 'success.main' : 'error.main'}
                            >
                                {investment.profitRate}
                            </Typography>
                        </Box>
                        {investment.holdings && investment.holdings.length > 0 && (
                            <List dense>
                                {investment.holdings.map((holding, idx) => (
                                    <ListItem key={idx}>
                                        <ListItemText
                                            primary={holding.name}
                                            secondary={holding.quantity ? `${holding.quantity}주` : null}
                                        />
                                        <Typography>
                                            {holding.currentValue?.toLocaleString() || holding.value?.toLocaleString() || '0'}원
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </Box>
                ))
            ) : (
                <Box sx={{
                    p: 4,
                    textAlign: 'center',
                    color: 'text.secondary',
                    bgcolor: 'background.paper',
                    borderRadius: 2
                }}>
                    <Typography>현재 보유중인 투자상품이 없습니다.</Typography>
                </Box>
            )}
        </Stack>
    );
};

// 대출 관련 컴포넌트
const LoanItem = ({ loan }) => (
    <Box
        sx={{
            p: 2,
            border: '1px solid rgba(0, 70, 255, 0.1)',
            borderRadius: 2
        }}
    >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Box>
                <Typography variant="h6" gutterBottom>{loan.type}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {loan.bank} | {loan.accountNumber}
                </Typography>
            </Box>
            <Chip
                label={`금리 ${loan.interestRate}`}
                color="primary"
                variant="outlined"
                size="small"
            />
        </Box>
        <Stack spacing={2}>
            <Box>
                <Typography variant="body2" color="text.secondary">대출 잔액</Typography>
                <Typography variant="h6" color="error.main" fontWeight="bold">
                    {loan.remainingAmount.toLocaleString()}원
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="body2" color="text.secondary">월 상환액</Typography>
                    <Typography variant="subtitle1">
                        {loan.monthlyPayment.toLocaleString()}원
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2" color="text.secondary">만기일</Typography>
                    <Typography variant="subtitle1">{loan.maturityDate}</Typography>
                </Box>
            </Box>
        </Stack>
    </Box>
);

const LoanTab = () => {
    const loans = accountDetails.loans || [];
    const totalLoanAmount = loans.reduce((sum, loan) => sum + loan.remainingAmount, 0);

    return (
        <Stack spacing={3}>
            <Box sx={{ p: 2, bgcolor: 'rgba(0, 70, 255, 0.05)', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>총 대출금액</Typography>
                <Typography variant="h4" color="error.main" fontWeight="bold">
                    {totalLoanAmount.toLocaleString()}원
                </Typography>
            </Box>
            {loans.length > 0 ? (
                loans.map((loan, index) => (
                    <LoanItem key={index} loan={loan} />
                ))
            ) : (
                <Box sx={{
                    p: 4,
                    textAlign: 'center',
                    color: 'text.secondary',
                    bgcolor: 'background.paper',
                    borderRadius: 2
                }}>
                    <Typography>현재 이용중인 대출 상품이 없습니다.</Typography>
                </Box>
            )}
        </Stack>
    );
};

// 보험 관련 컴포넌트
const InsuranceItem = ({ insurance }) => (
    <Box
        sx={{
            p: 2,
            border: '1px solid rgba(0, 70, 255, 0.1)',
            borderRadius: 2
        }}
    >
        <Typography variant="h6" gutterBottom>{insurance.type}</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
            {insurance.company} | 증권번호: {insurance.policyNumber}
        </Typography>

        <Stack spacing={2} sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="body2" color="text.secondary">월 보험료</Typography>
                    <Typography variant="h6" color="#0046FF" fontWeight="bold">
                        {insurance.monthlyPremium.toLocaleString()}원
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2" color="text.secondary">보장금액</Typography>
                    <Typography variant="h6" color="#0046FF" fontWeight="bold">
                        {insurance.coverage}
                    </Typography>
                </Box>
            </Box>
            <Divider />
            <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    보장 내용
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {insurance.benefits.map((benefit, idx) => (
                        <Chip
                            key={idx}
                            label={benefit}
                            size="small"
                            variant="outlined"
                            sx={{
                                borderColor: 'rgba(0, 70, 255, 0.3)',
                                color: '#0046FF'
                            }}
                        />
                    ))}
                </Stack>
            </Box>
            <Box>
                <Typography variant="body2" color="text.secondary">만기일</Typography>
                <Typography variant="subtitle2">{insurance.expiryDate}</Typography>
            </Box>
        </Stack>
    </Box>
);

const InsuranceTab = () => {
    const insurances = accountDetails.insurances || [];
    const totalPremium = insurances.reduce((sum, insurance) => sum + insurance.monthlyPremium, 0);

    return (
        <Stack spacing={3}>
            <Box sx={{ p: 2, bgcolor: 'rgba(0, 70, 255, 0.05)', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>월 총 보험료</Typography>
                <Typography variant="h4" color="#0046FF" fontWeight="bold">
                    {totalPremium.toLocaleString()}원
                </Typography>
            </Box>
            {insurances.length > 0 ? (
                insurances.map((insurance, index) => (
                    <InsuranceItem key={index} insurance={insurance} />
                ))
            ) : (
                <Box sx={{
                    p: 4,
                    textAlign: 'center',
                    color: 'text.secondary',
                    bgcolor: 'background.paper',
                    borderRadius: 2
                }}>
                    <Typography>현재 가입된 보험 상품이 없습니다.</Typography>
                </Box>
            )}
        </Stack>
    );
};

// 메인 컴포넌트
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
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        mb: 3,
                        '& .MuiTab-root': {
                            minWidth: 'auto',
                            px: 3
                        }
                    }}
                >
                    <Tab icon={<AccountBalance />} label="계좌" />
                    <Tab icon={<CreditCard />} label="카드" />
                    <Tab icon={<ShowChart />} label="투자" />
                    <Tab icon={<LocalAtm />} label="대출" />
                    <Tab icon={<HealthAndSafety />} label="보험" />
                </Tabs>

                {activeTab === 0 && <AccountTab dailyData={dailyData} />}
                {activeTab === 1 && <CardTab />}
                {activeTab === 2 && <InvestmentTab dailyData={dailyData} />}
                {activeTab === 3 && <LoanTab />}
                {activeTab === 4 && <InsuranceTab />}
            </CardContent>
        </Card>
    );
};

export default FinancialSummaryCard;