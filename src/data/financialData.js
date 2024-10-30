export const accountDetails = {
    dailyUpdates: [
        {
            date: '2024-02-27',
            checkingAccount: 2500000,
            savingsAccount: 15000000,
            creditCardUsage: 850000,
            monthlyIncome: 3000000,
            investments: 10000000,
            loans: 15000000
        }
    ],
    accounts: [
        {
            type: '입출금계좌',
            bank: '신한은행',
            number: '110-123-456789',
            balance: 2500000,
            recentTransactions: [
                { date: '2024-02-27', description: '식료품점', amount: -50000 },
                { date: '2024-02-27', description: '급여입금', amount: 3000000 },
                { date: '2024-02-26', description: '카페', amount: -15000 }
            ]
        },
        {
            type: '저축예금',
            bank: '신한은행',
            number: '110-987-654321',
            balance: 15000000,
            recentTransactions: [
                { date: '2024-02-25', description: '적금 입금', amount: 500000 },
                { date: '2024-02-20', description: '이자 입금', amount: 25000 }
            ]
        }
    ],
    creditCards: [
        {
            name: '신한 Deep Dream 카드',
            number: '**** **** **** 1234',
            monthlyUsage: 850000,
            limit: 5000000,
            recentTransactions: [
                { date: '2024-02-27', store: '카페', amount: 5000 },
                { date: '2024-02-26', store: '마트', amount: 45000 },
                { date: '2024-02-25', store: '주유소', amount: 70000 }
            ]
        }
    ],
    investments: [
        {
            type: '주식계좌',
            bank: '신한투자증권',
            accountNumber: '123-456-789',
            totalValue: 8500000,
            profitRate: '+15.2%',
            holdings: [
                { name: '삼성전자', quantity: 50, currentValue: 3750000 },
                { name: 'NAVER', quantity: 10, currentValue: 2350000 },
                { name: '카카오', quantity: 20, currentValue: 2400000 }
            ]
        },
        {
            type: '펀드',
            bank: '신한투자증권',
            accountNumber: '987-654-321',
            totalValue: 12000000,
            profitRate: '+8.5%',
            holdings: [
                { name: '글로벌성장펀드', value: 7000000, profitRate: '+10.2%' },
                { name: '국내채권형펀드', value: 5000000, profitRate: '+5.8%' }
            ]
        },
        {
            type: 'ETF 포트폴리오',
            bank: '신한투자증권',
            accountNumber: '456-789-123',
            totalValue: 5000000,
            profitRate: '+12.3%',
            holdings: [
                { name: 'KODEX 200', quantity: 100, currentValue: 3000000 },
                { name: 'TIGER 차이나전기차', quantity: 200, currentValue: 2000000 }
            ]
        }
    ],
    loans: [
        {
            type: '신용대출',
            bank: '신한은행',
            accountNumber: '111-222-333',
            remainingAmount: 30000000,
            interestRate: '4.25%',
            monthlyPayment: 875000,
            maturityDate: '2026-12-31',
            startDate: '2024-01-15'
        },
        {
            type: '전세자금대출',
            bank: '신한은행',
            accountNumber: '444-555-666',
            remainingAmount: 150000000,
            interestRate: '3.85%',
            monthlyPayment: 720000,
            maturityDate: '2026-06-30',
            startDate: '2023-06-30'
        },
        {
            type: '마이카대출',
            bank: '신한은행',
            accountNumber: '777-888-999',
            remainingAmount: 20000000,
            interestRate: '4.5%',
            monthlyPayment: 445000,
            maturityDate: '2027-01-31',
            startDate: '2024-01-31'
        }
    ],
    insurances: [
        {
            type: '종신보험',
            company: '신한생명',
            policyNumber: 'L12345678',
            monthlyPremium: 150000,
            coverage: '3억원',
            expiryDate: '2053-12-31',
            startDate: '2023-01-01',
            benefits: [
                '사망보험금 3억원',
                '암진단금 5천만원',
                '입원일당 10만원',
                '수술비 300만원'
            ]
        },
        {
            type: '실손의료보험',
            company: '신한생명',
            policyNumber: 'M87654321',
            monthlyPremium: 85000,
            coverage: '상해/질병 의료비',
            expiryDate: '2053-12-31',
            startDate: '2023-01-01',
            benefits: [
                '입원의료비 90%',
                '통원의료비 90%',
                '약제비 90%'
            ]
        },
        {
            type: '운전자보험',
            company: '신한생명',
            policyNumber: 'D98765432',
            monthlyPremium: 45000,
            coverage: '최대 1억원',
            expiryDate: '2033-12-31',
            startDate: '2023-06-01',
            benefits: [
                '자동차사고 벌금',
                '교통사고 합의금',
                '변호사 선임비용',
                '면허정지/취소 위로금'
            ]
        }
    ]
};


// src/data/financialData.js
export const recommendedProducts = [
    // 예금 상품
    {
        id: 'savings1',
        name: '신한 주거래 우대통장',
        category: 'savings',
        interestRate: '2.5%',
        description: '수수료 면제 혜택이 풍부한 입출금통장',
        features: [
            '기본금리 연 2.5%',
            '타행이체 수수료 면제',
            'ATM 수수료 면제',
            '증명서 발급 수수료 면제'
        ],
        analysis: {
            text: "고객님의 월 평균 거래량을 분석한 결과, 연간 약 28만원의 수수료 절감이 예상됩니다.",
            recommendation: "현재 거래 패턴에 최적화된 입출금통장입니다.",
            rationale: "잔액이 3000만 원인 고객님께 적합한 상품이며, 대출 상품을 이용하지 않고도 수수료 절감 효과를 누릴 수 있습니다.",
            graphData: [
                { month: '3개월', amount: 70000 },
                { month: '6개월', amount: 140000 },
                { month: '9개월', amount: 210000 },
                { month: '12개월', amount: 280000 }
            ]
        }
    },
    {
        id: 'savings2',
        name: 'SOL 디지털 통장',
        category: 'savings',
        interestRate: '2.8%',
        description: '디지털 환경에 최적화된 스마트 통장',
        features: [
            '온라인 거래 수수료 면제',
            '디지털 환전 우대',
            '모바일뱅킹 전용 혜택',
            '실시간 금융 알림'
        ],
        analysis: {
            text: "디지털 뱅킹 사용 패턴 분석 결과, 연간 320,000원의 혜택이 예상됩니다.",
            recommendation: "디지털 뱅킹을 주로 이용하시는 고객님께 적합합니다.",
            rationale: "의료비 지출이 적고 투자 성향이 강한 고객에게 추천하며, 기존 실손보험 해지 후 투자 상품으로 전환할 수 있습니다.",
            graphData: [
                { month: '1분기', amount: 80000 },
                { month: '2분기', amount: 160000 },
                { month: '3분기', amount: 240000 },
                { month: '4분기', amount: 320000 }
            ]
        }
    },
    {
        id: 'savings3',
        name: '신한 외화예금',
        category: 'savings',
        interestRate: 'USD 4.0%',
        description: '글로벌 자산관리를 위한 외화예금',
        features: [
            '미달러 금리 4.0%',
            '환율우대 0.3%',
            '자동환전 서비스',
            '글로벌 송금 수수료 우대'
        ],
        analysis: {
            text: "환율 변동성과 금리차를 고려할 때, USD 10,000 예치 시 연간 약 $400의 이자수익이 예상됩니다.",
            recommendation: "글로벌 자산 분산이 필요한 고객님께 추천드립니다.",
            rationale: "3000만 원 자산을 가진 고객이 추가로 5000만 원 대출을 받아 환율과 외화 금리 차익을 통해 수익을 극대화할 수 있는 투자 옵션입니다.",
            graphData: [
                { month: '3개월', amount: 100 },
                { month: '6개월', amount: 200 },
                { month: '9개월', amount: 300 },
                { month: '12개월', amount: 400 }
            ]
        }
    },
    {
        id: 'savings4',
        name: '신한 급여클럽',
        category: 'savings',
        interestRate: '3.0%',
        description: '급여 고객을 위한 종합 통장',
        features: [
            '급여실적 기본금리 3.0%',
            '카드 실적 추가 우대',
            '각종 수수료 면제',
            '신한카드 연계 혜택'
        ],
        analysis: {
            text: "급여이체 실적과 카드사용을 분석한 결과, 연간 450,000원의 종합 혜택이 예상됩니다.",
            recommendation: "급여이체 고객님을 위한 최적의 통장입니다.",
            rationale: "고객의 카드 사용과 급여 실적을 기반으로 혜택을 누릴 수 있으며, 대출 없이도 추가적인 금융 혜택을 최대로 누릴 수 있습니다.",
            graphData: [
                { month: '1분기', amount: 112500 },
                { month: '2분기', amount: 225000 },
                { month: '3분기', amount: 337500 },
                { month: '4분기', amount: 450000 }
            ]
        }
    }
];
