'use client'

import type React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
  isRTL: boolean
}

const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Our Services',
      about: 'Who We Are',
      contact: 'Contact Us',
    },

    // Hero Section
    hero: {
      badge: '✨ Modern Web Technologies',
      title: 'StyleraTech',
      subtitle: 'Software Development Excellence',
      description:
        'StyleraTech is a software development company specializing in modern web technologies and advanced IT solutions. We help businesses achieve their digital goals.',
      cta: {
        primary: 'Get Started',
        secondary: 'Our Services',
      },
      stats: {
        projects: 'Completed Projects',
        clients: 'Happy Clients',
        experience: 'Years Experience',
        team: 'Team Members',
      },
    },

    // Technologies Section
    technologies: {
      title: 'Technologies We Use',
      subtitle:
        'We leverage cutting-edge technologies to build robust, scalable, and innovative solutions for our clients.',
    },

    // Projects Section
    projects: {
      title: 'Our Featured Projects',
      subtitle:
        'Discover some of our most successful projects that showcase our expertise and innovation.',
      viewAll: 'View All Projects',
      items: {
        mset: {
          title: 'Educational Platform',
          description:
            'A modern educational platform built with React and Next.js, enhancing digital learning experiences.',
        },
      },
    },

    // Testimonials Section
    testimonials: {
      title: 'What Our Clients Say',
      subtitle:
        "Don't just take our word for it - hear from some of our satisfied clients about their experience working with us.",
      items: [
        {
          name: 'Ahmed Al-Rashid',
          position: 'CEO, TechVision',
          content:
            'StyleraTech delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is outstanding.',
        },
        {
          name: 'Sarah Johnson',
          position: 'Founder, HealthCare Plus',
          content:
            'The healthcare management system they built for us has revolutionized our operations. The AI features are incredibly accurate and user-friendly.',
        },
        {
          name: 'Mohammed Hassan',
          position: 'CTO, FinanceFlow',
          content:
            'Our mobile banking app developed by StyleraTech has received excellent user feedback. The security features and performance are top-notch.',
        },
        {
          name: 'Lisa Chen',
          position: 'Director, EduTech Solutions',
          content:
            'The educational platform they created has transformed how we deliver online learning. The personalized AI features are game-changing.',
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'Ready to Start Your Project?',
      subtitle:
        'Let us help you transform your ideas into stunning digital reality.',
      startProject: 'Start Your Project',
      freeConsultation: 'Free Consultation',
    },

    services: {
      title: 'Our Distinguished Services',
      subtitle:
        'We provide comprehensive technology solutions tailored to your business needs.',
      web: {
        title: 'Web Development',
        description:
          'Modern, responsive websites built with cutting-edge technologies.',
      },
      mobile: {
        title: 'Mobile Applications',
        description:
          'Native and cross-platform mobile apps for iOS and Android.',
      },
      ai: {
        title: 'Artificial Intelligence',
        description:
          'AI-powered solutions to automate and enhance your business processes.',
      },
      design: {
        title: 'UI/UX Design',
        description:
          'Beautiful, user-centered designs that convert and engage.',
      },
      learnMore: 'Learn More',
      cta: {
        title: 'Have a project in mind?',
        subtitle:
          'Let us help you turn your idea into a stunning digital reality. Get in touch today to discuss your project.',
        button: 'Start Your Project',
      },
    },
    // Our Services
    OurServices: {
      title: 'Our Services',
      subtitle:
        'We provide advanced technology solutions tailored to your needs.',

      web: {
        title: 'Web Development',
        description: 'Modern and fast websites using the latest technologies',
        features: [
          'Next.js & React',
          'Responsive Design',
          'SEO Optimized',
          'High Performance',
        ],
      },
      mobile: {
        title: 'Mobile Applications',
        description: 'Advanced mobile apps for iOS and Android',
        features: [
          'Flutter & React Native',
          'Excellent UX',
          'Optimized Performance',
          'App Store Ready',
        ],
      },
      ai: {
        title: 'Artificial Intelligence',
        description:
          'Smart AI-powered solutions for automation and optimization',
        features: [
          'Machine Learning',
          'Natural Language Processing',
          'Computer Vision',
          'Intelligent Analytics',
        ],
      },
      design: {
        title: 'UI/UX Design',
        description: 'Attractive designs and exceptional user experiences',
        features: [
          'Interface Design',
          'User Experience',
          'Prototypes',
          'User Testing',
        ],
      },
      security: {
        title: 'Cyber Security',
        description: 'Comprehensive protection for systems and data',
        features: [
          'Data Encryption',
          'Security Monitoring',
          'Penetration Testing',
          'Security Awareness',
        ],
      },
      data: {
        title: 'Data Management',
        description: 'Advanced data management and analytics systems',
        features: [
          'Databases',
          'Data Analysis',
          'Smart Reports',
          'Predictive Modeling',
        ],
      },

      // ✅ NEW: How We Work section
      howWeWorkTitle: 'How We Work',
      howWeWorkSubtitle:
        'We follow a clear and proven methodology to ensure we deliver the best results.',
      steps: [
        {
          title: 'Analysis & Research',
          description:
            'We start by understanding your needs and analyzing project requirements thoroughly.',
        },
        {
          title: 'Planning & Design',
          description:
            'We create a comprehensive plan and design solutions aligned with your goals.',
        },
        {
          title: 'Development & Coding',
          description:
            'We develop solutions using the latest technologies and standards.',
        },
        {
          title: 'Launch & Support',
          description:
            'We launch the project and provide continuous support to ensure success.',
        },
      ],

      // ✅ NEW: CTA Section
      ctaTitle: 'Start Your Project Today',
      ctaSubtitle:
        'Contact us now for a free consultation and a custom quote for your project.',
    },
    // About
    about: {
      title: 'Who We Are',
      description:
        'We are a team of passionate developers and designers dedicated to creating innovative digital solutions. Our expertise spans modern web technologies, mobile development, and cutting-edge AI implementations.',
    },

    // Contact
    contact: {
      title: 'Contact Us',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
      },
    },

    // Team
    team: {
      title: 'Our Team',
      subtitle: 'Meet the talented individuals who make our success possible.',
    },
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      about: 'من نحن',
      contact: 'اتصل بنا',
    },

    // Hero Section
    hero: {
      badge: '✨ تقنيات الويب الحديثة',
      title: 'ستايليرا تك',
      subtitle: 'التميز في تطوير البرمجيات',
      description:
        'شركة متخصصة في تطوير البرمجيات والحلول التقنية المتقدمة. نساعد الشركات على تحقيق أهدافها الرقمية.',
      cta: {
        primary: 'ابدأ الآن',
        secondary: 'خدماتنا',
      },
      stats: {
        projects: 'مشروع مكتمل',
        clients: 'عميل سعيد',
        experience: 'سنوات خبرة',
        team: 'عضو فريق',
      },
    },

    // Technologies Section
    technologies: {
      title: 'التقنيات التي نستخدمها',
      subtitle:
        'نستخدم أحدث التقنيات لبناء حلول قوية وقابلة للتطوير ومبتكرة لعملائنا.',
    },

    // Projects Section
    projects: {
      title: 'مشاريعنا المميزة',
      subtitle: 'اكتشف بعض مشاريعنا الأكثر نجاحاً التي تُظهر خبرتنا وابتكارنا.',
      viewAll: 'عرض جميع المشاريع',
      items: {
        mset: {
          title: 'منصة تعليمية حديثة',
          description:
            'منصة تعليمية رقمية متطورة تم إنشاؤها باستخدام React وNext.js لتعزيز تجربة التعلم الإلكترونية.',
        },
      },
    },

    // Testimonials Section
    testimonials: {
      title: 'آراء عملائنا',
      subtitle:
        'لا تأخذ كلامنا فقط - استمع إلى بعض عملائنا الراضين حول تجربتهم في العمل معنا.',
      items: [
        {
          name: 'أحمد الراشد',
          position: 'الرئيس التنفيذي، تك فيجن',
          content:
            'قدمت ستايليرا تك منصة تجارة إلكترونية استثنائية فاقت توقعاتنا. اهتمامهم بالتفاصيل وخبرتهم التقنية متميزة.',
        },
        {
          name: 'سارة جونسون',
          position: 'المؤسسة، هيلث كير بلس',
          content:
            'نظام إدارة الرعاية الصحية الذي بنوه لنا ثورة في عملياتنا. ميزات الذكاء الاصطناعي دقيقة جداً وسهلة الاستخدام.',
        },
        {
          name: 'محمد حسن',
          position: 'مدير التكنولوجيا، فاينانس فلو',
          content:
            'تطبيق الخدمات المصرفية المحمول الذي طورته ستايليرا تك حصل على تقييمات ممتازة من المستخدمين. ميزات الأمان والأداء من الدرجة الأولى.',
        },
        {
          name: 'ليزا تشين',
          position: 'المديرة، إيدو تك سوليوشنز',
          content:
            'المنصة التعليمية التي أنشأوها غيرت طريقة تقديمنا للتعلم الإلكتروني. ميزات الذكاء الاصطناعي المخصصة مذهلة.',
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'هل أنت مستعد لبدء مشروعك؟',
      subtitle: 'دعنا نساعدك في تحويل أفكارك إلى واقع رقمي مبهر.',
      startProject: 'ابدأ مشروعك',
      freeConsultation: 'استشارة مجانية',
    },

    // Services
    services: {
      title: 'خدماتنا المتميزة',
      subtitle: 'نقدم حلول تقنية شاملة مصممة خصيصاً لاحتياجات عملك.',
      web: {
        title: 'تطوير المواقع الإلكترونية',
        description: 'مواقع ويب حديثة ومتجاوبة مبنية بأحدث التقنيات',
      },
      mobile: {
        title: 'تطبيقات الجوال',
        description: 'تطبيقات جوال أصلية ومتعددة المنصات لنظامي iOS و Android',
      },
      ai: {
        title: 'الذكاء الاصطناعي',
        description: 'حلول مدعومة بالذكاء الاصطناعي لأتمتة وتحسين عمليات عملك',
      },
      design: {
        title: 'تصميم UI/UX',
        description: 'تصاميم جميلة تركز على المستخدم وتحقق التحويل والمشاركة',
      },
      learnMore: 'اعرف المزيد',
      cta: {
        title: 'هل لديك مشروع في الاعتبار؟',
        subtitle:
          'دعنا نساعدك في تحويل فكرتك إلى واقع رقمي مذهل. تواصل معنا اليوم لمناقشة مشروعك.',
        button: 'ابدأ مشروعك',
      },
    },
    OurServices: {
      title: 'خدماتنا',
      subtitle: 'نقدم حلولاً تقنية متقدمة مصممة خصيصاً لتلبية احتياجاتك.',

      web: {
        title: 'تطوير المواقع الإلكترونية',
        description: 'مواقع ويب حديثة وسريعة باستخدام أحدث التقنيات',
        features: ['Next.js و React', 'تصميم متجاوب', 'تحسين SEO', 'أداء عالي'],
      },
      mobile: {
        title: 'تطبيقات الجوال',
        description: 'تطبيقات جوال متقدمة لأنظمة iOS و Android',
        features: [
          'Flutter و React Native',
          'تجربة مستخدم متميزة',
          'أداء محسّن',
          'متجر التطبيقات',
        ],
      },
      ai: {
        title: 'الذكاء الاصطناعي',
        description: 'حلول ذكية مدعومة بالذكاء الاصطناعي للأتمتة والتحسين',
        features: [
          'التعلّم الآلي',
          'معالجة اللغة الطبيعية',
          'الرؤية الحاسوبية',
          'التحليل الذكي',
        ],
      },
      design: {
        title: 'تصميم UI/UX',
        description: 'تصميمات جذابة وتجربة مستخدم متميزة',
        features: [
          'تصميم الواجهات',
          'تجربة المستخدم',
          'النماذج الأولية',
          'اختبار المستخدم',
        ],
      },
      security: {
        title: 'الأمن السيبراني',
        description: 'حماية شاملة للأنظمة والبيانات',
        features: [
          'تشفير البيانات',
          'مراقبة الأمان',
          'اختبار الاختراق',
          'التوعية الأمنية',
        ],
      },
      data: {
        title: 'إدارة البيانات',
        description: 'أنظمة إدارة البيانات المتقدمة والتحليلات',
        features: [
          'قواعد البيانات',
          'تحليل البيانات',
          'التقارير الذكية',
          'النمذجة التنبؤية',
        ],
      },

      // ✅ كيف نعمل
      howWeWorkTitle: 'كيف نعمل',
      howWeWorkSubtitle: 'نتبع منهجية واضحة ومجربة لضمان تقديم أفضل النتائج.',
      steps: [
        {
          title: 'التحليل والدراسة',
          description: 'نبدأ بفهم احتياجاتك وتحليل متطلبات المشروع بدقة.',
        },
        {
          title: 'التخطيط والتصميم',
          description: 'نضع خطة شاملة ونصمم الحلول المناسبة لأهدافك.',
        },
        {
          title: 'التطوير والبرمجة',
          description: 'نطور الحلول باستخدام أحدث التقنيات والمعايير.',
        },
        {
          title: 'الإطلاق والدعم',
          description: 'نطلق المشروع ونقدم الدعم المستمر لضمان النجاح.',
        },
      ],

      // ✅ CTA
      ctaTitle: 'ابدأ مشروعك اليوم',
      ctaSubtitle:
        'تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك.',
    },

    // About
    about: {
      title: 'من نحن',
      description:
        'نحن فريق من المطورين والمصممين المتحمسين المكرسين لإنشاء حلول رقمية مبتكرة. تمتد خبرتنا عبر تقنيات الويب الحديثة وتطوير الجوال وتطبيقات الذكاء الاصطناعي المتطورة.',
    },

    // Contact
    contact: {
      title: 'تواصل معنا',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      location: 'الموقع',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        submit: 'إرسال الرسالة',
      },
    },

    // Team
    team: {
      title: 'فريقنا',
      subtitle: 'تعرف على الأفراد الموهوبين الذين يجعلون نجاحنا ممكناً.',
    },
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Set RTL direction for Arabic
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const t = (key: string) => {
    const keys = key.split('.')
    let value = translations[language] as any

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key // Return the key as fallback
      }
    }

    return value
  }

  const isRTL = language === 'ar'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
