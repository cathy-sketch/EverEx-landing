export type Locale = 'ko' | 'en';

export const translations = {
  ko: {
    header: {
      brand: 'Everex',
      nav: {
        products: '제품',
        awards: '수상/파트너',
        demo: '데모 신청',
      },
    },
    hero: {
      tagline: '모든 사람을 위한\n개인 맞춤형 재활',
      subline: 'Bringing Personalized Rehabilitation to Everyone',
      description:
        '근골격계 질환은 누구나 한 번쯤 경험합니다. Everex는 70만 건 이상의 데이터로 학습한 AI로 언제 어디서나 쉽고 효과적인 재활을 제공합니다.',
      cta: '데모 신청',
      ctaSecondary: '제품 보기',
    },
    products: {
      title: 'MORA 플랫폼',
      subtitle: '근골격계 재활의 모든 단계를 아우르는 AI 솔루션',
      items: [
        {
          name: 'MORA Vu',
          target: '의료기관',
          summary: 'AI 기반 동작 분석',
          description:
            '별도 설치 비용·공간 없이 AI가 근골격계를 정밀 분석합니다. 식품의약품안전처 2등급 의료기기 인증.',
        },
        {
          name: 'MORA Ex',
          target: '의료기관',
          summary: '개인 맞춤형 재활 운동',
          description:
            '3,000개 이상의 전문 운동 영상으로 시간·장소 제약 없이 처방된 재활 프로그램을 제공합니다.',
        },
        {
          name: 'MORA Care',
          target: '기업 복지',
          summary: '임직원 근골격계 케어',
          description:
            'AI 전문가가 이끄는 맞춤형 근골격계 케어로 임직원 건강과 업무 생산성을 높입니다.',
        },
        {
          name: 'MORA Cure',
          target: '환자',
          summary: '디지털 치료제(DTx)',
          description:
            '임상 검증된 디지털 치료제로 슬개대퇴증후군, 만성 요통 등 근골격계 질환을 치료합니다.',
        },
        {
          name: 'MORA Rehab',
          target: '미국 의료기관',
          summary: '원격 치료 모니터링',
          description:
            'FDA Class II 의료기기 인증. 원격 모니터링 수가 청구로 의료기관 수익을 창출합니다.',
        },
      ],
    },
    awards: {
      title: '수상 실적',
      subtitle: '글로벌 혁신 기관이 인정한 Everex의 기술력',
      items: [
        {
          name: 'CES 2024 혁신상',
          organization: 'Consumer Technology Association',
          category: '디지털 헬스케어',
          year: 2024,
          description: '세계 최대 IT·가전 전시회 CES에서 헬스케어 부문 혁신상 수상',
        },
        {
          name: 'iF Design Award',
          organization: 'iF International Forum Design',
          category: 'Product Design',
          year: 2024,
          description: '세계적 권위의 iF 디자인 어워드에서 제품 디자인 부문 수상',
        },
        {
          name: 'Red Dot Award',
          organization: 'Design Zentrum Nordrhein Westfalen',
          category: 'Product Design',
          year: 2024,
          description: '세계 3대 디자인 어워드 레드닷에서 제품 디자인 우수상 수상',
        },
      ],
    },
    partners: {
      title: '파트너',
      subtitle: '글로벌 선도 기업들과 함께합니다',
      strategic: '전략적 파트너',
      global: '글로벌 파트너',
      healthcare: '헬스케어 파트너',
    },
    demo: {
      title: '데모 신청',
      subtitle: 'Everex MORA 플랫폼을 직접 경험해 보세요. 담당자가 빠르게 연락드리겠습니다.',
      form: {
        name: '이름',
        namePlaceholder: '홍길동',
        organization: '소속',
        organizationPlaceholder: '회사명 또는 기관명',
        email: '이메일',
        emailPlaceholder: 'name@company.com',
        phone: '연락처',
        phonePlaceholder: '010-0000-0000',
        message: '문의 내용',
        messagePlaceholder: '관심 있는 제품이나 문의 사항을 입력해 주세요.',
        submit: '데모 신청하기',
        submitting: '제출 중...',
        required: '필수',
      },
      errors: {
        name: '이름을 입력해 주세요.',
        organization: '소속을 입력해 주세요.',
        email: '올바른 이메일 주소를 입력해 주세요.',
      },
      success: {
        title: '데모 신청이 완료되었습니다.',
        message: '담당자가 곧 연락드리겠습니다. 감사합니다.',
      },
    },
    footer: {
      company: 'Everex Inc.',
      address: '서울특별시 강남구',
      copyright: '© 2024 Everex Inc. All rights reserved.',
      links: {
        privacy: '개인정보처리방침',
        terms: '이용약관',
      },
    },
  },
  en: {
    header: {
      brand: 'Everex',
      nav: {
        products: 'Products',
        awards: 'Awards & Partners',
        demo: 'Request Demo',
      },
    },
    hero: {
      tagline: 'Bringing Personalized\nRehabilitation to Everyone',
      subline: '모든 사람을 위한 개인 맞춤형 재활',
      description:
        'Everyone experiences a musculoskeletal disorder at least once. Everex delivers accessible, personalized rehabilitation anytime, anywhere — powered by AI trained on 700,000+ data points.',
      cta: 'Request a Demo',
      ctaSecondary: 'View Products',
    },
    products: {
      title: 'MORA Platform',
      subtitle: 'AI solutions covering every stage of musculoskeletal rehabilitation',
      items: [
        {
          name: 'MORA Vu',
          target: 'Healthcare Provider',
          summary: 'AI-Powered Motion Analysis',
          description:
            'Precision musculoskeletal analysis with AI — no installation costs or space requirements. Certified Class II Medical Device (MFDS).',
        },
        {
          name: 'MORA Ex',
          target: 'Healthcare Provider',
          summary: 'Personalized Rehabilitation Exercise',
          description:
            'Deliver prescribed rehabilitation programs with 3,000+ professional exercise videos, without time or location constraints.',
        },
        {
          name: 'MORA Care',
          target: 'Corporate Wellness',
          summary: 'Employee Musculoskeletal Care',
          description:
            'Specialist-led personalized musculoskeletal care that boosts employee health and workplace productivity.',
        },
        {
          name: 'MORA Cure',
          target: 'Patient',
          summary: 'Digital Therapeutics (DTx)',
          description:
            'Clinically validated digital therapeutics for musculoskeletal conditions including patellofemoral pain and chronic low back pain.',
        },
        {
          name: 'MORA Rehab',
          target: 'US Healthcare Provider',
          summary: 'Remote Therapeutic Monitoring',
          description:
            'FDA Class II cleared device. Generate revenue for healthcare providers through remote therapeutic monitoring reimbursement.',
        },
      ],
    },
    awards: {
      title: 'Awards',
      subtitle: 'Recognized by the world\'s leading innovation organizations',
      items: [
        {
          name: 'CES 2024 Innovation Award',
          organization: 'Consumer Technology Association',
          category: 'Digital Health',
          year: 2024,
          description: 'Winner of the Healthcare Innovation Award at CES, the world\'s largest tech expo.',
        },
        {
          name: 'iF Design Award',
          organization: 'iF International Forum Design',
          category: 'Product Design',
          year: 2024,
          description: 'Recognized with the prestigious iF Design Award for product design excellence.',
        },
        {
          name: 'Red Dot Award',
          organization: 'Design Zentrum Nordrhein Westfalen',
          category: 'Product Design',
          year: 2024,
          description: 'Winner of the Red Dot Award, one of the world\'s three most prestigious design prizes.',
        },
      ],
    },
    partners: {
      title: 'Partners',
      subtitle: 'Partnering with global industry leaders',
      strategic: 'Strategic Partners',
      global: 'Global Partners',
      healthcare: 'Healthcare Partners',
    },
    demo: {
      title: 'Request a Demo',
      subtitle: 'Experience the MORA platform firsthand. Our team will reach out to you promptly.',
      form: {
        name: 'Name',
        namePlaceholder: 'John Doe',
        organization: 'Organization',
        organizationPlaceholder: 'Company or Institution',
        email: 'Email',
        emailPlaceholder: 'name@company.com',
        phone: 'Phone',
        phonePlaceholder: '+1 (555) 000-0000',
        message: 'Message',
        messagePlaceholder: 'Tell us about the products you\'re interested in or any questions you have.',
        submit: 'Submit Request',
        submitting: 'Submitting...',
        required: 'Required',
      },
      errors: {
        name: 'Please enter your name.',
        organization: 'Please enter your organization.',
        email: 'Please enter a valid email address.',
      },
      success: {
        title: 'Your demo request has been submitted.',
        message: 'Our team will contact you shortly. Thank you.',
      },
    },
    footer: {
      company: 'Everex Inc.',
      address: 'Gangnam-gu, Seoul, South Korea',
      copyright: '© 2024 Everex Inc. All rights reserved.',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },
  },
};

export type Translations = typeof translations.ko;
