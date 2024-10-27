// src/hooks/useFinancialData.js
import { useState, useEffect } from 'react';
import { accountDetails } from '../data/financialData';

const useFinancialData = () => {
    const [dailyData, setDailyData] = useState(accountDetails.dailyUpdates[0]);

    // 실시간 데이터 업데이트 시뮬레이션
    useEffect(() => {
        const interval = setInterval(() => {
            const newData = {
                ...accountDetails.dailyUpdates[0],
                checkingAccount: accountDetails.dailyUpdates[0].checkingAccount +
                    Math.floor(Math.random() * 100000),
                creditCardUsage: accountDetails.dailyUpdates[0].creditCardUsage +
                    Math.floor(Math.random() * 50000),
                investments: accountDetails.dailyUpdates[0].investments +
                    Math.floor(Math.random() * 200000 - 100000), // 상승 또는 하락
            };
            setDailyData(newData);
        }, 5000); // 5초마다 업데이트

        return () => clearInterval(interval);
    }, []);

    const formatCurrency = (amount) => {
        return amount.toLocaleString('ko-KR') + '원';
    };

    const calculateTotalAssets = () => {
        return dailyData.checkingAccount +
            dailyData.savingsAccount +
            dailyData.investments;
    };

    return {
        dailyData,
        formatCurrency,
        calculateTotalAssets,
    };
};

export default useFinancialData;