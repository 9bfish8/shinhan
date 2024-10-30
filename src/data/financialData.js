
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
        recommendationRationale:
            `현재 고객님의 입출금 계좌에 3천만 원의 잔액이 있으며, 신한카드를 자주 사용하고 있습니다. 
            이 경우 '신한 주거래 우대통장'은 수수료 절감 효과가 매우 큽니다. 월평균 20회 이상의 타행이체, 
            ATM 이용, 공과금 납부 등의 거래가 발생한다면, 타행 이체 수수료와 ATM 수수료를 면제받아 연간 약 28만 원의 수수료 절감이 가능합니다. 
            이는 기존 계좌에서 발생할 수 있는 불필요한 수수료를 줄이고, 고객님이 대출 없이도 자산을 더 효율적으로 운영하는 데 도움이 됩니다. 
            따라서 고객님은 별도의 투자 없이도 현재 계좌를 통해 발생할 수 있는 비용을 줄이면서 은행과의 거래 실적을 쌓을 수 있습니다.`,
        features: [
            '기본금리 연 2.5%',
            '타행이체 수수료 면제',
            'ATM 수수료 면제',
            '증명서 발급 수수료 면제'
        ],
        analysis: {
            text: "고객님의 월 평균 거래량을 분석한 결과, 연간 약 28만원의 수수료 절감이 예상됩니다.",
            recommendation: "현재 거래 패턴에 최적화된 입출금통장입니다.",
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
        recommendationRationale:
            `고객님은 의료비 지출이 적고, 주로 온라인 뱅킹을 통해 금융 업무를 처리하는 경향이 있습니다. 
            'SOL 디지털 통장'은 이러한 디지털 금융 생활에 최적화되어 있습니다. 예를 들어, 고객님이 의료비를 위한 기존 실손보험을 해지하고 
            월 50만 원씩 자동 이체를 설정하여 디지털 금융 혜택을 받는다면, 연간 약 32만 원의 수수료 및 우대 혜택을 받을 수 있습니다. 
            특히, 환전 우대와 실시간 금융 알림 기능을 통해 해외에서 자주 거래하는 고객님에게도 적합한 선택이 될 수 있습니다. 
            또한 기존 통장 대비 온라인 거래 수수료가 면제되어, 해외 송금이나 온라인 결제에서 추가 비용이 발생하지 않아 더욱 효율적인 자산 운영이 가능합니다.`,
        features: [
            '온라인 거래 수수료 면제',
            '디지털 환전 우대',
            '모바일뱅킹 전용 혜택',
            '실시간 금융 알림'
        ],
        analysis: {
            text: "디지털 뱅킹 사용 패턴 분석 결과, 연간 320,000원의 혜택이 예상됩니다.",
            recommendation: "디지털 뱅킹을 주로 이용하시는 고객님께 적합합니다.",
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
        interestRate: '연 4.0%',
        description: '글로벌 자산관리를 위한 외화예금',
        recommendationRationale:
            `고객님이 현재 보유하고 있는 3000만 원의 자산을 글로벌 시장에 투자하는 전략을 통해 자산 분산 및 수익 극대화를 기대할 수 있습니다. 
            '신한 외화예금'은 연 4.0%의 금리를 제공하며, 원화 자산을 외화로 전환함으로써 환율 변동성에 대한 리스크를 완화할 수 있습니다. 
            예를 들어, 5000만 원 대출을 받아 외화 예금에 투자한다면, 대출 이자율(약 3.85%) 대비 외화 금리 차익(4.0%)을 통해 추가 수익을 기대할 수 있습니다. 
            환율 우대 혜택(0.3%)과 글로벌 송금 수수료 우대를 통해 해외 송금 비용을 절감할 수 있으며, 장기적으로 원화 가치 하락에 따른 외화 자산 증식 효과도 기대할 수 있습니다. 
            이를 통해 고객님은 국내외 자산을 보다 균형 있게 분배하고, 안정적인 자산 관리를 실행할 수 있습니다.`,
        features: [
            '연 금리 4.0%',
            '환율우대 0.3%',
            '자동환전 서비스',
            '글로벌 송금 수수료 우대'
        ],
        analysis: {
            text: "환율 변동성과 금리차를 고려할 때, 원화 1,000만 원 예치 시 연간 약 40만 원의 이자수익이 예상됩니다.",
            recommendation: "글로벌 자산 분산이 필요한 고객님께 추천드립니다.",
            graphData: [
                { month: '3개월', amount: 100000 },
                { month: '6개월', amount: 200000 },
                { month: '9개월', amount: 300000 },
                { month: '12개월', amount: 400000 }
            ]
        }
    },
    {
        id: 'savings4',
        name: '신한 급여클럽',
        category: 'savings',
        interestRate: '3.0%',
        description: '급여 고객을 위한 종합 통장',
        recommendationRationale:
            `고객님이 신한카드를 주로 사용하고 급여 이체를 통해 자산을 관리하는 상황을 고려할 때, '신한 급여클럽'은 다양한 혜택을 제공합니다. 
            급여 이체 실적에 따라 3.0%의 금리 혜택을 받을 수 있으며, 신한카드와의 연계를 통해 카드 실적 추가 우대 혜택을 받을 수 있습니다. 
            예를 들어, 매월 300만 원의 급여를 이 통장으로 이체하면 연간 약 9만 원의 금리 혜택을 더 받을 수 있으며, 
            ATM 및 타행 이체 수수료가 면제되기 때문에 불필요한 수수료 비용을 줄일 수 있습니다. 
            또한 고객님의 급여 이체 실적을 바탕으로 신한은행에서 제공하는 다양한 금융 상품 우대 혜택을 받을 수 있으며, 
            이를 통해 장기적인 금융 거래 신뢰도를 높이고, 자산 관리의 효율성을 극대화할 수 있습니다.`,
        features: [
            '급여실적 기본금리 3.0%',
            '카드 실적 추가 우대',
            '각종 수수료 면제',
            '신한카드 연계 혜택'
        ],
        analysis: {
            text: "급여이체 실적과 카드사용을 분석한 결과, 연간 450,000원의 종합 혜택이 예상됩니다.",
            recommendation: "급여이체 고객님을 위한 최적의 통장입니다.",
            graphData: [
                { month: '1분기', amount: 112500 },
                { month: '2분기', amount: 225000 },
                { month: '3분기', amount: 337500 },
                { month: '4분기', amount: 450000 }
            ]
        }
    },
    // 적금 상품
    {
        id: 'deposit1',
        name: '신한 스마트적금',
        category: 'deposit',
        interestRate: '4.8%',
        description: '자동저축으로 실천하는 스마트한 적금',
        recommendationRationale:
            `고객님은 안정적인 소득을 보유하고 있으며, 장기적으로 자산을 증식하고자 하는 목표가 있습니다. 
            '신한 스마트적금'은 자동이체를 통해 저축을 실천할 수 있는 상품으로, 금리는 최대 4.8%입니다. 
            예를 들어, 월 50만 원씩 3년간 납입하면 만기 시 약 1950만 원의 자산이 형성될 수 있습니다. 
            자동이체 설정 시 0.3% 추가 금리 혜택이 제공되며, 디지털 채널 이용 시 0.2% 우대금리를 추가로 적용받을 수 있습니다. 
            고객님이 매월 일정 금액을 꾸준히 납입함으로써, 자산 형성의 안정성을 유지하고, 만기 후 발생하는 이자 수익을 재투자하거나 
            단기적인 재정 계획을 수립하는 데도 큰 도움이 될 수 있습니다. 이를 통해 고객님은 자산 증식뿐만 아니라 저축 습관도 효과적으로 관리할 수 있습니다.`,
        features: [
            '기본금리 연 4.3%',
            '자동이체 0.3% 우대',
            '디지털채널 0.2% 우대',
            '월 최대 100만원 납입'
        ],
        analysis: {
            text: "고객님의 소비패턴 분석 결과, 월 50만원 납입 시 3년 만기 시 약 1,950만원 자산 형성이 가능합니다.",
            recommendation: "안정적인 소득이 있는 고객님께 적합한 상품입니다.",
            graphData: [
                { month: '1년차', amount: 6200000 },
                { month: '2년차', amount: 12800000 },
                { month: '3년차', amount: 19500000 }
            ]
        }
    },
    {
        id: 'deposit2',
        name: '신한 청년희망적금',
        category: 'deposit',
        interestRate: '5.2%',
        description: '청년을 위한 고금리 적금 상품',
        recommendationRationale:
            `만 19세에서 34세 청년 고객님을 대상으로 한 상품으로, 장기적으로 자산 형성을 돕습니다. 
            월 50만 원씩 2년간 납입하면 만기 시 약 1,300만 원의 자산을 형성할 수 있으며, 
            기본금리 4.7%에 정부지원금을 매칭하여 추가 혜택을 받을 수 있습니다. 또한 비과세 혜택까지 적용되어 
            높은 수익을 기대할 수 있는 상품입니다. 고객님의 월 소득과 예산에 맞추어 꾸준히 적금을 쌓음으로써 
            안정적인 자산 증식을 이룰 수 있으며, 목돈 마련의 기회를 제공합니다.`,
        features: [
            '만 19~34세 가입 가능',
            '기본금리 4.7%',
            '정부지원금 매칭',
            '비과세 혜택'
        ],
        analysis: {
            text: "청년 우대 혜택을 포함하여, 월 50만원 납입 시 2년 만기로 약 1,300만원의 자산 형성이 가능합니다.",
            recommendation: "청년층 고객님의 자산형성에 최적화된 상품입니다.",
            graphData: [
                { month: '6개월', amount: 3100000 },
                { month: '12개월', amount: 6300000 },
                { month: '18개월', amount: 9600000 },
                { month: '24개월', amount: 13000000 }
            ]
        }
    },
    {
        id: 'deposit3',
        name: '신한 더드림 적금',
        category: 'deposit',
        interestRate: '4.5%',
        description: '목돈 마련을 위한 고금리 적금 상품',
        recommendationRationale:
            `신한카드 실적과 급여이체 실적을 바탕으로 금리 혜택을 추가로 받을 수 있는 고금리 적금 상품입니다. 
            기본 금리는 연 4.0%이며, 신한카드 실적과 급여 이체 실적이 있을 경우 최대 4.5% 금리를 받을 수 있습니다. 
            고객님이 월 50만 원씩 3년간 납입하면, 약 1980만 원의 자산을 마련할 수 있습니다. 
            고객님의 신한카드 사용 실적과 급여 이체 실적을 함께 관리하여, 장기적인 자산 증식과 목돈 마련에 유리한 상품입니다.`,
        features: [
            '기본금리 4.0%',
            '신한카드 실적 0.3% 우대',
            '급여이체 0.2% 우대',
            '자동이체 시 우대금리'
        ],
        analysis: {
            text: "고객님의 신한카드 실적과 급여이체 실적을 고려할 때, 최대 금리 혜택 적용이 가능합니다.",
            recommendation: "신한 생활금융 서비스를 주로 이용하시는 고객님께 적합합니다.",
            graphData: [
                { month: '1년차', amount: 6200000 },
                { month: '2년차', amount: 12800000 },
                { month: '3년차', amount: 19800000 }
            ]
        }
    },
    {
        id: 'deposit4',
        name: '신한 여행스케치적금',
        category: 'deposit',
        interestRate: '4.3%',
        description: '여행자금 마련을 위한 특화 적금',
        recommendationRationale:
            `여행을 계획하고 있는 고객님께 적합한 적금 상품으로, 연 4.3% 금리를 제공하며, 환전 우대와 여행자 보험 혜택까지 받을 수 있습니다. 
            고객님이 1년간 월 30만 원씩 적립하면 만기 시 약 370만 원의 자금을 모을 수 있으며, 추가로 여행 관련 혜택을 누릴 수 있습니다. 
            환전 우대 혜택과 함께 여행자 보험이 무료로 제공되므로, 해외여행을 자주 다니는 고객님께 적합한 상품입니다. 
            자금을 여행 자금으로 적립하는 동시에, 부가 혜택을 통해 비용 절감 효과를 누릴 수 있습니다.`,
        features: [
            '기본금리 3.8%',
            '환전 우대 혜택',
            '여행 관련 할인',
            '여행자보험 무료 제공'
        ],
        analysis: {
            text: "1년간 월 30만원 납입 시 약 370만원 + 여행 관련 부가혜택이 제공됩니다.",
            recommendation: "여행 계획이 있으신 고객님께 추천드립니다.",
            graphData: [
                { month: '3개월', amount: 910000 },
                { month: '6개월', amount: 1830000 },
                { month: '9개월', amount: 2760000 },
                { month: '12개월', amount: 3700000 }
            ]
        }
    },
    {
        id: 'deposit5',
        name: '신한 주택청약적금',
        category: 'deposit',
        interestRate: '3.8%',
        description: '내 집 마련을 위한 청약적금',
        recommendationRationale:
            `고객님이 내 집 마련을 목표로 하고 있다면, '신한 주택청약적금'은 필수적인 상품입니다. 
            청약 가점 혜택이 제공되며, 비과세 혜택까지 받을 수 있습니다. 고객님이 월 50만 원씩 2년간 납입하면, 
            약 1250만 원의 자산을 형성할 수 있으며, 이를 통해 청약 자격을 확보하고 내 집 마련의 꿈을 이룰 수 있습니다. 
            특히, 장기적으로 청약 가점을 높일 수 있는 기회가 되며, 청약 당첨 확률을 높일 수 있는 적금 상품입니다.`,
        features: [
            '청약 가점 혜택',
            '기본금리 3.8%',
            '비과세 혜택',
            '자동이체 서비스'
        ],
        analysis: {
            text: "청약 가점 획득을 위해 24개월 이상 납입이 필요하며, 월 50만원 납입 시 약 1,250만원 형성이 가능합니다.",
            recommendation: "내 집 마련을 계획하시는 고객님께 필수적인 상품입니다.",
            graphData: [
                { month: '6개월', amount: 3020000 },
                { month: '12개월', amount: 6100000 },
                { month: '18개월', amount: 9240000 },
                { month: '24개월', amount: 12500000 }
            ]
        }
    }
];
