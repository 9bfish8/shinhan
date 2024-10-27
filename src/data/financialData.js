// src/data/financialData.js
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
    ]
};

// src/data/financialData.js
export const recommendedProducts = [
    {
        id: 'savings1',
        name: '신한 더드림 적금',
        category: 'savings',
        interestRate: '4.5%',
        description: '목돈 마련을 위한 고금리 적금 상품',
        features: [
            '기본금리 연 4.5%',
            '자동이체 시 0.3% 우대금리',
            '비대면 가입 시 0.2% 추가금리'
        ],
        analysis: {
            text: "고객님의 현재 수입과 지출 패턴을 분석한 결과, 매월 1,000,000원씩 36개월간 적립 시 최대 38,500,000원의 만기금액이 예상됩니다.",
            recommendation: "현재 지출 패턴을 고려할 때 여유자금 활용도가 높은 상품입니다.",
            graphData: [
                { month: '1년차', amount: 12500000 },
                { month: '2년차', amount: 25500000 },
                { month: '3년차', amount: 38500000 }
            ]
        }
    },
    {
        id: 'investment1',
        name: 'SOL 글로벌 펀드',
        category: 'investment',
        interestRate: '연 7.2% (예상)',
        description: '글로벌 우량주 중심의 안정성 높은 펀드 상품',
        features: [
            '분산투자로 안정성 확보',
            '해외 우량주 포트폴리오',
            '실시간 모니터링 서비스',
            '수수료 우대 혜택'
        ],
        analysis: {
            text: "고객님의 투자 성향과 위험 감내도를 분석한 결과, 월 500,000원 투자 시 5년 후 약 42,000,000원의 자산 형성이 기대됩니다.",
            recommendation: "안정적인 수익을 추구하는 고객님께 적합한 상품입니다.",
            graphData: [
                { month: '1년차', amount: 6200000 },
                { month: '2년차', amount: 13000000 },
                { month: '3년차', amount: 21000000 },
                { month: '4년차', amount: 30000000 },
                { month: '5년차', amount: 42000000 }
            ]
        }
    },
    {
        id: 'loan1',
        name: '신한 직장인 신용대출',
        category: 'loan',
        interestRate: '3.85%',
        description: '직장인을 위한 저금리 신용대출 상품',
        features: [
            '최저 연 3.85% 금리',
            '최대 1억원까지 대출 가능',
            '직장인 특별 우대금리 적용',
            '중도상환수수료 면제'
        ],
        analysis: {
            text: "고객님의 신용도와 소득을 분석한 결과, 최대 5,000만원까지 연 3.85% 금리로 대출이 가능합니다. 60개월 기준 월 상환금은 약 92만원입니다.",
            recommendation: "안정적인 직장 생활을 하시는 고객님께 유리한 조건의 대출상품입니다.",
            graphData: [
                { month: '1년차', amount: 50000000 },
                { month: '2년차', amount: 40000000 },
                { month: '3년차', amount: 30000000 },
                { month: '4년차', amount: 20000000 },
                { month: '5년차', amount: 10000000 }
            ]
        }
    },
    {
        id: 'savings2',
        name: '신한 급여우대 통장',
        category: 'savings',
        interestRate: '2.8%',
        description: '급여 고객을 위한 종합 통장 상품',
        features: [
            '급여 실적 시 수수료 면제',
            '기본금리 2.8%',
            'ATM 수수료 면제',
            '신한 체크카드 연계 혜택'
        ],
        analysis: {
            text: "고객님의 급여 입금 내역과 카드 사용 패턴을 분석한 결과, 연간 약 120만원의 수수료 절감 효과가 예상됩니다.",
            recommendation: "급여 실적과 카드 사용이 많은 고객님께 최적화된 상품입니다.",
            graphData: [
                { month: '3개월', amount: 300000 },
                { month: '6개월', amount: 600000 },
                { month: '9개월', amount: 900000 },
                { month: '12개월', amount: 1200000 }
            ]
        }
    },
    {
        id: 'investment2',
        name: '신한 AI 로보어드바이저',
        category: 'investment',
        interestRate: '연 6.5% (예상)',
        description: 'AI가 자동으로 관리하는 맞춤형 투자 상품',
        features: [
            'AI 기반 자동 포트폴리오 조정',
            '24시간 시장 모니터링',
            '리밸런싱 자동화',
            '투자 리포트 제공'
        ],
        analysis: {
            text: "고객님의 투자 성향과 목표를 분석한 결과, AI 로보어드바이저를 통해 월 300,000원 투자 시 3년 후 약 12,000,000원의 자산 형성이 기대됩니다.",
            recommendation: "바쁜 직장인이지만 투자를 시작하고 싶으신 고객님께 추천드립니다.",
            graphData: [
                { month: '6개월', amount: 2000000 },
                { month: '1년차', amount: 4200000 },
                { month: '2년차', amount: 8500000 },
                { month: '3년차', amount: 12000000 }
            ]
        }
    }
];