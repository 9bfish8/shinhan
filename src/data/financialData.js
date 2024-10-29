// src/data/financialData.js
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
            graphData: [
                { month: '1분기', amount: 112500 },
                { month: '2분기', amount: 225000 },
                { month: '3분기', amount: 337500 },
                { month: '4분기', amount: 450000 }
            ]
        }
    },
    {
        id: 'savings5',
        name: '신한 프리미엄통장',
        category: 'savings',
        interestRate: '2.3%',
        description: 'VIP 고객을 위한 프리미엄 통장',
        features: [
            'VIP 전용 우대금리',
            '수수료 무제한 면제',
            '프리미엄 컨시어지',
            '공항라운지 무료이용'
        ],
        analysis: {
            text: "고객님의 자산규모와 거래실적을 분석한 결과, 연간 680,000원 상당의 프리미엄 혜택이 예상됩니다.",
            recommendation: "프리미엄 뱅킹 서비스가 필요하신 고객님께 적합합니다.",
            graphData: [
                { month: '1분기', amount: 170000 },
                { month: '2분기', amount: 340000 },
                { month: '3분기', amount: 510000 },
                { month: '4분기', amount: 680000 }
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
    // 적금 상품 계속
    {
        id: 'deposit2',
        name: '신한 청년희망적금',
        category: 'deposit',
        interestRate: '5.2%',
        description: '청년을 위한 고금리 적금 상품',
        features: [
            '만 19~34세 가입가능',
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
    },

    // 대출 상품
    {
        id: 'loan1',
        name: '신한 직장인신용대출',
        category: 'loan',
        interestRate: '4.12%',
        description: '직장인을 위한 저금리 신용대출',
        features: [
            '최저금리 4.12%',
            '최대 2억원',
            '중도상환수수료 면제',
            '직장인 우대금리 적용'
        ],
        analysis: {
            text: "고객님의 신용점수와 재직기간을 고려할 때, 최대 1억원까지 연 4.12% 금리로 대출이 가능합니다.",
            recommendation: "안정적인 직장생활 중이신 고객님께 적합한 대출상품입니다.",
            graphData: [
                { month: '1년차', amount: 100000000 },
                { month: '2년차', amount: 80000000 },
                { month: '3년차', amount: 60000000 },
                { month: '4년차', amount: 40000000 },
                { month: '5년차', amount: 20000000 }
            ]
        }
    },
// 대출 상품 계속
    {
        id: 'loan2',
        name: '신한 전세자금대출',
        category: 'loan',
        interestRate: '3.85%',
        description: '주택 전세 마련을 위한 전세자금대출',
        features: [
            '최저금리 3.85%',
            '최대 보증금의 80%',
            '우대금리 최대 0.4%',
            '중도상환수수료 면제'
        ],
        analysis: {
            text: "고객님의 소득과 신용도를 분석한 결과, 최대 2억원까지 연 3.85% 금리로 대출이 가능합니다.",
            recommendation: "전세 계약을 준비 중이신 고객님께 적합한 상품입니다.",
            graphData: [
                { month: '1년차', amount: 200000000 },
                { month: '2년차', amount: 190000000 },
                { month: '3년차', amount: 180000000 }
            ]
        }
    },
    {
        id: 'loan3',
        name: '신한 사업자대출',
        category: 'loan',
        interestRate: '4.55%',
        description: '사업자를 위한 맞춤형 대출상품',
        features: [
            '기본금리 4.55%',
            '최대 5억원',
            '신용/담보 선택가능',
            '분할상환/만기일시상환'
        ],
        analysis: {
            text: "사업자등록 기간과 매출액을 고려할 때, 최대 3억원까지 대출 가능합니다.",
            recommendation: "안정적인 매출이 발생하는 자영업자 고객님께 적합합니다.",
            graphData: [
                { month: '1년차', amount: 300000000 },
                { month: '2년차', amount: 240000000 },
                { month: '3년차', amount: 180000000 },
                { month: '4년차', amount: 120000000 },
                { month: '5년차', amount: 60000000 }
            ]
        }
    },
    {
        id: 'loan4',
        name: '신한 주택담보대출',
        category: 'loan',
        interestRate: '3.95%',
        description: '주택구입자금 마련을 위한 담보대출',
        features: [
            '최저금리 3.95%',
            'LTV 최대 70%',
            '우대금리 최대 0.5%',
            '이자만 납입 가능'
        ],
        analysis: {
            text: "담보물건 가치와 소득을 고려할 때, 최대 3억원까지 연 3.95% 금리로 대출이 가능합니다.",
            recommendation: "내 집 마련을 계획하시는 고객님께 적합한 상품입니다.",
            graphData: [
                { month: '1년차', amount: 300000000 },
                { month: '5년차', amount: 270000000 },
                { month: '10년차', amount: 240000000 }
            ]
        }
    },
    {
        id: 'loan5',
        name: '신한 마이카대출',
        category: 'loan',
        interestRate: '4.35%',
        description: '자동차 구입을 위한 맞춤형 대출',
        features: [
            '기본금리 4.35%',
            '최대 5천만원',
            '84개월 장기상환',
            '중고차 구입도 가능'
        ],
        analysis: {
            text: "소득대비 상환능력을 분석한 결과, 최대 4천만원까지 월 상환액 58만원으로 대출이 가능합니다.",
            recommendation: "차량 구입을 계획하시는 고객님께 추천드립니다.",
            graphData: [
                { month: '1년차', amount: 40000000 },
                { month: '2년차', amount: 32000000 },
                { month: '3년차', amount: 24000000 },
                { month: '4년차', amount: 16000000 }
            ]
        }
    },

    // 투자 상품
    {
        id: 'investment1',
        name: 'SOL 글로벌 펀드',
        category: 'investment',
        interestRate: '연 7.2% (예상)',
        description: '글로벌 우량주 중심의 안정성 높은 펀드',
        features: [
            '분산투자 전략',
            '환헤지 제공',
            '자동리밸런싱',
            '실시간 모니터링'
        ],
        analysis: {
            text: "글로벌 분산투자로 위험을 낮추면서 연 7.2%의 수익을 추구합니다.",
            recommendation: "해외투자에 관심이 있으신 고객님께 추천드립니다.",
            graphData: [
                { month: '6개월', amount: 5300000 },
                { month: '1년차', amount: 10720000 },
                { month: '2년차', amount: 22900000 }
            ]
        }
    },
    {
        id: 'investment2',
        name: '신한 코어 ETF',
        category: 'investment',
        interestRate: '연 6.8% (예상)',
        description: '핵심 자산에 투자하는 ETF 포트폴리오',
        features: [
            '국내외 ETF 분산투자',
            '낮은 수수료',
            '높은 유동성',
            '세제 혜택'
        ],
        analysis: {
            text: "ETF를 통한 효율적인 자산배분으로 안정적인 수익을 추구합니다.",
            recommendation: "적은 비용으로 분산투자를 원하시는 고객님께 적합합니다.",
            graphData: [
                { month: '6개월', amount: 5100000 },
                { month: '1년차', amount: 10680000 },
                { month: '2년차', amount: 22360000 }
            ]
        }
    },
    {
        id: 'investment3',
        name: '신한 AI로보펀드',
        category: 'investment',
        interestRate: '연 6.5% (예상)',
        description: 'AI가 운용하는 자동화 펀드',
        features: [
            'AI 자동 리밸런싱',
            '24시간 모니터링',
            '맞춤형 포트폴리오',
            '운용보고서 제공'
        ],
        analysis: {
            text: "AI 알고리즘을 통해 시장 상황에 따라 자동으로 포트폴리오를 조정합니다.",
            recommendation: "자동화된 투자 관리를 원하시는 고객님께 적합합니다.",
            graphData: [
                { month: '6개월', amount: 5050000 },
                { month: '1년차', amount: 10650000 },
                { month: '2년차', amount: 22100000 }
            ]
        }
    },
    {
        id: 'investment4',
        name: '신한 배당주 포트폴리오',
        category: 'investment',
        interestRate: '연 5.8% (예상)',
        description: '우량 배당주 중심의 안정형 포트폴리오',
        features: [
            '고배당 우량주 투자',
            '분기별 배당금 수령',
            '안정적 수익 추구',
            '자동 재투자 옵션'
        ],
        analysis: {
            text: "배당수익과 자본이득을 동시에 추구하는 안정적인 투자전략입니다.",
            recommendation: "안정적인 배당수익을 원하시는 고객님께 적합합니다.",
            graphData: [
                { month: '6개월', amount: 4900000 },
                { month: '1년차', amount: 10580000 },
                { month: '2년차', amount: 21800000 }
            ]
        }
    },
    {
        id: 'investment5',
        name: '신한 테크놀로지펀드',
        category: 'investment',
        interestRate: '연 8.5% (예상)',
        description: '글로벌 기술주 중심의 성장형 펀드',
        features: [
            'IT 기업 집중투자',
            '글로벌 분산투자',
            '적극적 운용전략',
            '시장동향 리포트'
        ],
        analysis: {
            text: "기술 섹터에 집중 투자하여 높은 성장 잠재력을 추구합니다.",
            recommendation: "높은 수익을 추구하시는 고객님께 추천드립니다.",
            graphData: [
                { month: '6개월', amount: 5500000 },
                { month: '1년차', amount: 11850000 },
                { month: '2년차', amount: 24500000 }
            ]
        }
    },

    // 보험 상품
    {
        id: 'insurance1',
        name: '신한 프리미엄종신보험',
        category: 'insurance',
        interestRate: '-',
        description: '고액 보장을 제공하는 종신보험',
        features: [
            '사망보험금 최대 10억원',
            '80세까지 보험료 납입',
            '연금전환 가능',
            '치매케어 특약'
        ],
        analysis: {
            text: "월 보험료 35만원으로 최대 5억원의 사망보험금을 보장받을 수 있습니다.",
            recommendation: "가족의 미래를 위한 보장이 필요하신 고객님께 적합합니다.",
            graphData: [
                { month: '10년', amount: 500000000 },
                { month: '20년', amount: 500000000 },
                { month: '30년', amount: 500000000 }
            ]
        }
    },
    {
        id: 'insurance2',
        name: '신한 실손의료보험',
        category: 'insurance',
        interestRate: '-',
        description: '의료비 부담을 덜어주는 실손보험',
        features: [
            '입원비 90% 보장',
            '통원치료비 보장',
            '약제비 보장',
            '비급여 항목 보장'
        ],
        analysis: {
            text: "월 보험료 8만원으로 연간 최대 5천만원까지 의료비를 보장받을 수 있습니다.",
            recommendation: "포괄적인 의료비 보장이 필요하신 고객님께 적합합니다.",
            graphData: [
                { month: '입원비', amount: 50000000 },
                { month: '통원비', amount: 1000000 },
                { month: '약제비', amount: 1000000 }
            ]
        }
    },
    {
        id: 'insurance3',
        name: '신한 암보험',
        category: 'insurance',
        interestRate: '-',
        description: '암 진단과 치료를 보장하는 암보험',
        features: [
            '암 진단금 최대 1억원',
            '암 수술비 보장',
            '항암치료비 보장',
            '암 입원비 보장'
        ],
        analysis: {
            text: "월 보험료 12만원으로 최대 1억원의 암 진단금을 보장받을 수 있습니다.",
            recommendation: "충분한 암 보장이 필요하신 고객님께 적합합니다.",
            graphData: [
                { month: '일반암', amount: 100000000 },
                { month: '소액암', amount: 20000000 },
                { month: '수술비', amount: 5000000 }
            ]
        }
    },
    {
        id: 'insurance4',
        name: '신한 운전자보험',
        category: 'insurance',
        interestRate: '-',
        description: '운전 중 발생하는 사고를 보장하는 보험',
        features: [
            '자동차사고 벌금 보장',
            '변호사 선임비용',
            '교통사고 위로금',
            '면허정지/취소 위로금'
        ],
        analysis: {
            text: "월 보험료 5만원으로 운전 중 발생할 수 있는 각종 비용을 보장받을 수 있습니다.",
            recommendation: "운전이 잦은 고객님께 추천드립니다.",
            graphData: [
                { month: '벌금', amount: 20000000 },
                { month: '변호사비용', amount: 5000000 },
                { month: '위로금', amount: 3000000 }
            ]
        }
    },
    {
        id: 'insurance5',
        name: '신한 어린이보험',
        category: 'insurance',
        interestRate: '-',
        description: '어린이의 성장기를 보장하는 보험',
        features: [
            '성장기 질병 보장',
            '학업중단 위로금',
            '입원/통원 비용',
            '치아치료 보장'
        ],
        analysis: {
            text: "월 보험료 10만원으로 자녀의 성장기에 필요한 모든 보장을 받을 수 있습니다. 만기 시 납입금액의 최대 120% 환급이 가능합니다.",
            recommendation: "자녀의 미래를 위한 종합적인 보장이 필요하신 고객님께 적합합니다.",
            graphData: [
                { month: '질병보장', amount: 30000000 },
                { month: '상해보장', amount: 20000000 },
                { month: '입원보장', amount: 10000000 },
                { month: '치아보장', amount: 5000000 },
                { month: '만기환급금', amount: 15000000 }
            ]
        }
    }
];