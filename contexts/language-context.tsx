// 'use client'

// import { join } from 'path'
// import type React from 'react'
// import { createContext, useContext, useState, useEffect } from 'react'

// type Language = 'en' | 'ar'

// interface LanguageContextType {
//   language: Language
//   setLanguage: (lang: Language) => void
//   t: (key: string) => any
//   isRTL: boolean
// }

// const translations = {
//   en: {
//     // CTA Section
//     cta: {
//       title: 'Ready to Start Your Project?',
//       subtitle:
//         'Let us help you transform your ideas into stunning digital reality.',
//       startProject: 'Start Your Project',
//       freeConsultation: 'Free Consultation',
//     },

//     services: {
//       title: 'Our Distinguished Services',
//       subtitle:
//         'We provide comprehensive technology solutions tailored to your business needs.',

//       web: {
//         title: 'Web Development',
//         description:
//           'Modern and fast websites built with the latest technologies.',
//       },

//       mobile: {
//         title: 'Mobile Applications',
//         description:
//           'Advanced mobile apps for iOS and Android with seamless performance.',
//       },

//       ai: {
//         title: 'Artificial Intelligence',
//         description:
//           'Smart AI-powered solutions that automate and optimize your business.',
//       },

//       data: {
//         title: 'Data Management',
//         description:
//           'Advanced systems for managing and analyzing your business data.',
//       },

//       security: {
//         title: 'Cyber Security',
//         description:
//           'Comprehensive protection for your systems and data against threats.',
//       },

//       design: {
//         title: 'UI/UX Design',
//         description:
//           'Creative designs focused on usability and exceptional user experience.',
//       },

//       cloud: {
//         title: 'Cloud Computing',
//         description:
//           'Scalable and secure cloud solutions to power your digital growth.',
//       },

//       business: {
//         title: 'Business Analysis',
//         description:
//           'Advanced analytics to help you make smarter business decisions.',
//       },

//       chatbot: {
//         title: 'Chatbots',
//         description:
//           'Intelligent chatbots for customer support and automated interaction.',
//       },

//       cta: {
//         title: 'Have a project in mind?',
//         subtitle:
//           'Let us help you turn your idea into a stunning digital reality. Get in touch today to discuss your project.',
//         button: 'Start Your Project',
//       },
//     },
//     // Our Services
//     OurServices: {
//       title: 'Our Services',
//       subtitle:
//         'We deliver advanced technology solutions tailored to your needs.',
//       requestQuote: 'Request a Quote',

//       web: {
//         title: 'Web Development',
//         description:
//           'Modern, fast, and scalable websites built with the latest technologies.',
//         features: [
//           'Next.js & React',
//           'Responsive Design',
//           'SEO Optimization',
//           'High Performance',
//         ],
//       },

//       mobile: {
//         title: 'Mobile Applications',
//         description:
//           'Advanced mobile apps for iOS and Android with seamless performance.',
//         features: [
//           'Flutter & React Native',
//           'Excellent User Experience',
//           'Optimized Performance',
//           'App Store Deployment',
//         ],
//       },

//       ai: {
//         title: 'Artificial Intelligence',
//         description:
//           'Intelligent AI-powered solutions to automate and optimize your business.',
//         features: [
//           'Machine Learning',
//           'Natural Language Processing',
//           'Computer Vision',
//           'Smart Analytics',
//         ],
//       },

//       data: {
//         title: 'Data Management',
//         description:
//           'Advanced systems for managing and analyzing your data efficiently.',
//         features: [
//           'Database Systems',
//           'Data Analysis',
//           'Smart Reporting',
//           'Predictive Modeling',
//         ],
//       },

//       security: {
//         title: 'Cyber Security',
//         description:
//           'Comprehensive protection for your systems and data against threats.',
//         features: [
//           'Data Encryption',
//           'Security Monitoring',
//           'Penetration Testing',
//           'Security Awareness Training',
//         ],
//       },

//       design: {
//         title: 'UI/UX Design',
//         description:
//           'Beautiful and intuitive designs that enhance your brand experience.',
//         features: [
//           'Interface Design',
//           'User Experience',
//           'Prototyping',
//           'User Testing',
//         ],
//       },

//       cloud: {
//         title: 'Cloud Computing',
//         description:
//           'Scalable and secure cloud solutions that empower your digital growth.',
//         features: [
//           'AWS & Azure',
//           'Docker & Kubernetes',
//           'CI/CD Pipelines',
//           'Monitoring & Analytics',
//         ],
//       },

//       business: {
//         title: 'Business Analysis',
//         description:
//           'In-depth insights and analytics for smarter, data-driven decisions.',
//         features: [
//           'Dashboards',
//           'Interactive Reports',
//           'Trend Analysis',
//           'KPI Tracking',
//         ],
//       },

//       chatbot: {
//         title: 'Chatbots',
//         description:
//           'Intelligent chatbots that enhance customer support and engagement.',
//         features: [
//           'Natural Language Processing',
//           'Machine Learning',
//           'Omnichannel Integration',
//           'Sentiment Analysis',
//         ],
//       },

//       // ✅ How We Work
//       howWeWorkTitle: 'How We Work',
//       howWeWorkSubtitle:
//         'We follow a clear, proven process to ensure the best results for every project.',
//       steps: [
//         {
//           title: 'Analysis & Research',
//           description:
//             'We start by understanding your needs and analyzing the project requirements.',
//         },
//         {
//           title: 'Planning & Design',
//           description:
//             'We create a detailed plan and design tailored solutions aligned with your goals.',
//         },
//         {
//           title: 'Development & Implementation',
//           description:
//             'We develop robust, scalable solutions using the latest technologies and standards.',
//         },
//         {
//           title: 'Launch & Support',
//           description:
//             'We launch your project and provide continuous support to ensure long-term success.',
//         },
//       ],

//       // ✅ CTA
//       ctaTitle: 'Start Your Project Today',
//       ctaSubtitle:
//         'Get in touch with us now for a free consultation and a personalized project quote.',
//     },

//     // About
//     about: {
//       title: 'Who We Are',
//       description:
//         'We are a team of passionate developers and designers dedicated to creating innovative digital solutions. Our expertise spans modern web technologies, mobile development, and cutting-edge AI implementations.',
//     },
//     // Contact Page
//     contactPage: {
//       title: 'Contact Us',
//       subtitle:
//         'We are here to help you transform your ideas into digital reality. Contact us today and get a free consultation',
//       phone: 'Phone',
//       email: 'Email',
//       location: 'Location',
//       whatsapp: 'WhatsApp',
//       businessHours: {
//         title: 'Business Hours',
//         subtitle: "We're available during these hours",
//         weekdays: 'Weekdays',
//         weekdaysTime: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
//         weekend: 'Weekend',
//         weekendTime: 'Friday - Saturday: Closed',
//       },
//       locationSection: {
//         title: 'Our Location',
//         subtitle: 'Visit us at our office in the heart of Libya',
//         officeTitle: 'StyleraTech Office',
//         address: 'Address',
//         mapPlaceholder: 'Click to Open Map',
//         mapSubtext: 'View our location on Google Maps',
//       },
//       faq: {
//         title: 'Frequently Asked Questions',
//         subtitle:
//           'Find answers to common questions about our services and process',
//         questions: [
//           {
//             question: 'What services do you offer?',
//             answer:
//               'We offer comprehensive technology solutions including web development, mobile applications, AI solutions, and UI/UX design. Our team specializes in modern technologies and can handle projects of any scale.',
//           },
//           {
//             question: 'How long does a typical project take?',
//             answer:
//               'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.',
//           },
//           {
//             question: 'Do you provide ongoing support and maintenance?',
//             answer:
//               'Yes, we offer comprehensive support and maintenance packages to ensure your application continues to perform optimally. This includes updates, security patches, and technical support.',
//           },
//           {
//             question: 'What is your development process?',
//             answer:
//               'We follow an agile development methodology with regular client communication, iterative development, and thorough testing. Our process includes discovery, design, development, testing, and deployment phases.',
//           },
//           {
//             question: 'Can you work with existing systems?',
//             answer:
//               'We have extensive experience integrating with existing systems and can help modernize legacy applications or build new features that work seamlessly with your current infrastructure.',
//           },
//           {
//             question: 'What technologies do you specialize in?',
//             answer:
//               'We specialize in modern web technologies including React, Next.js, Node.js, Python, mobile development with React Native and Flutter, and AI/ML technologies including TensorFlow and various cloud platforms.',
//           },
//         ],
//         cta: {
//           title: "Didn't find an answer to your question?",
//           subtitle: 'Contact us directly and we will answer all your inquiries',
//           whatsappButton: 'Message us on WhatsApp',
//           emailButton: 'Send an Email',
//         },
//       },
//       form: {
//         title: 'Start Your Project With Us',
//         subtitle:
//           'Fill out the form below and we will contact you within 24 hours',
//         name: 'Name',
//         email: 'Email',
//         phone: 'Phone',
//         company: 'Company',
//         projectType: 'Project Type',
//         projectTypeOptions: {
//           placeholder: 'Select project type',
//           web: 'Web Development',
//           mobile: 'Mobile App',
//           ai: 'AI Solution',
//           design: 'UI/UX Design',
//           other: 'Other',
//         },
//         message: 'Project Description',
//         messagePlaceholder:
//           'Tell us about your project, goals, and any specific requirements...',
//         submit: 'Send Message',
//         sending: 'Sending...',
//         required: '*',
//         placeholders: {
//           name: 'John Doe',
//           email: 'john@example.com',
//           phone: '+218 92 123 4567',
//           company: 'Ebtkar Tech',
//           message:
//             'Tell us about your project, goals, and any specific requirements...',
//         },
//         successMessage: 'Your message has been sent successfully!',
//       },
//     },
//     // Contact
//     contact: {
//       title: 'Contact Us',
//       phone: 'Phone',
//       email: 'Email',
//       location: 'Location',
//       form: {
//         name: 'Name',
//         email: 'Email',
//         message: 'Message',
//         submit: 'Send Message',
//       },
//     },

//     // Team
//     team: {
//       title: 'Our Team',
//       subtitle: 'Meet the talented individuals who make our success possible.',
//     },
//   },
//   ar: {
//     // CTA Section
//     cta: {
//       title: 'هل أنت مستعد لبدء مشروعك؟',
//       subtitle: 'دعنا نساعدك في تحويل أفكارك إلى واقع رقمي مبهر.',
//       startProject: 'ابدأ مشروعك',
//       freeConsultation: 'استشارة مجانية',
//     },

//     // Services
//     services: {
//       title: 'خدماتنا المتميزة',
//       subtitle: 'نقدم حلولاً تقنية شاملة مصممة خصيصاً لتلبية احتياجات عملك.',

//       web: {
//         title: 'تطوير المواقع الإلكترونية',
//         description: 'مواقع ويب حديثة وسريعة باستخدام أحدث التقنيات.',
//       },

//       mobile: {
//         title: 'تطبيقات الجوال',
//         description:
//           'تطبيقات جوال متقدمة لأنظمة iOS و Android بأداء سلس ومتميز.',
//       },

//       ai: {
//         title: 'الذكاء الاصطناعي',
//         description:
//           'حلول ذكية مدعومة بالذكاء الاصطناعي لأتمتة وتحسين الأعمال.',
//       },

//       data: {
//         title: 'إدارة البيانات',
//         description: 'أنظمة متقدمة لإدارة وتحليل بيانات عملك بكفاءة عالية.',
//       },

//       security: {
//         title: 'الأمن السيبراني',
//         description: 'حماية شاملة للأنظمة والبيانات ضد التهديدات الرقمية.',
//       },

//       design: {
//         title: 'تصميم UI/UX',
//         description: 'تصميمات إبداعية تركز على سهولة الاستخدام وتجربة مميزة.',
//       },

//       cloud: {
//         title: 'الحوسبة السحابية',
//         description: 'حلول سحابية آمنة وقابلة للتوسع لدعم نموك الرقمي.',
//       },

//       business: {
//         title: 'تحليل الأعمال',
//         description: 'تحليلات متقدمة لمساعدتك في اتخاذ قرارات استراتيجية أفضل.',
//       },

//       chatbot: {
//         title: 'روبوتات المحادثة',
//         description: 'روبوتات ذكية لخدمة العملاء والتفاعل الآلي بكفاءة.',
//       },

//       cta: {
//         title: 'هل لديك مشروع في الاعتبار؟',
//         subtitle:
//           'دعنا نساعدك في تحويل فكرتك إلى واقع رقمي مذهل. تواصل معنا اليوم لمناقشة مشروعك.',
//         button: 'ابدأ مشروعك',
//       },
//     },

//     OurServices: {
//       title: 'خدماتنا',
//       subtitle: 'نقدم حلولاً تقنية متقدمة مصممة خصيصاً لتلبية احتياجاتك.',
//       requestQuote: 'اطلب عرض سعر',

//       web: {
//         title: 'تطوير المواقع الإلكترونية',
//         description: 'مواقع ويب حديثة وسريعة باستخدام أحدث التقنيات.',
//         features: ['Next.js و React', 'تصميم متجاوب', 'تحسين SEO', 'أداء عالي'],
//       },

//       mobile: {
//         title: 'تطبيقات الجوال',
//         description: 'تطبيقات جوال متقدمة لأنظمة iOS و Android بأداء متميز.',
//         features: [
//           'Flutter و React Native',
//           'تجربة مستخدم متميزة',
//           'أداء محسّن',
//           'متجر التطبيقات',
//         ],
//       },

//       ai: {
//         title: 'الذكاء الاصطناعي',
//         description:
//           'حلول ذكية مدعومة بالذكاء الاصطناعي لأتمتة وتحسين الأعمال.',
//         features: [
//           'التعلّم الآلي',
//           'معالجة اللغة الطبيعية',
//           'الرؤية الحاسوبية',
//           'التحليل الذكي',
//         ],
//       },

//       data: {
//         title: 'إدارة البيانات',
//         description: 'أنظمة متقدمة لإدارة وتحليل البيانات بكفاءة عالية.',
//         features: [
//           'قواعد البيانات',
//           'تحليل البيانات',
//           'التقارير الذكية',
//           'النمذجة التنبؤية',
//         ],
//       },

//       security: {
//         title: 'الأمن السيبراني',
//         description: 'حماية شاملة للأنظمة والبيانات من التهديدات الرقمية.',
//         features: [
//           'تشفير البيانات',
//           'مراقبة الأمان',
//           'اختبار الاختراق',
//           'التوعية الأمنية',
//         ],
//       },

//       design: {
//         title: 'تصميم UI/UX',
//         description:
//           'تصميمات جذابة وتجربة مستخدم متميزة تلائم هوية علامتك التجارية.',
//         features: [
//           'تصميم الواجهات',
//           'تجربة المستخدم',
//           'النماذج الأولية',
//           'اختبار المستخدم',
//         ],
//       },

//       cloud: {
//         title: 'الحوسبة السحابية',
//         description: 'حلول سحابية متقدمة قابلة للتوسع لدعم نموك الرقمي.',
//         features: [
//           'AWS و Azure',
//           'Docker و Kubernetes',
//           'CI/CD',
//           'المراقبة والتحليل',
//         ],
//       },

//       business: {
//         title: 'تحليل الأعمال',
//         description: 'تحليلات متقدمة تساعدك على اتخاذ قرارات استراتيجية دقيقة.',
//         features: [
//           'لوحات المعلومات',
//           'التقارير التفاعلية',
//           'تحليل الاتجاهات',
//           'تتبع مؤشرات الأداء (KPI)',
//         ],
//       },

//       chatbot: {
//         title: 'روبوتات المحادثة',
//         description:
//           'روبوتات ذكية لخدمة العملاء والدعم باستخدام الذكاء الاصطناعي.',
//         features: [
//           'معالجة اللغة الطبيعية',
//           'التعلم الآلي',
//           'تكامل متعدد القنوات',
//           'تحليل المشاعر',
//         ],
//       },

//       // ✅ How We Work
//       howWeWorkTitle: 'كيف نعمل',
//       howWeWorkSubtitle: 'نتبع منهجية واضحة ومجربة لضمان تقديم أفضل النتائج.',
//       steps: [
//         {
//           title: 'التحليل والدراسة',
//           description: 'نبدأ بفهم احتياجاتك وتحليل متطلبات المشروع بدقة.',
//         },
//         {
//           title: 'التخطيط والتصميم',
//           description: 'نضع خطة شاملة ونصمم الحلول المناسبة لأهدافك.',
//         },
//         {
//           title: 'التطوير والبرمجة',
//           description: 'نطور الحلول باستخدام أحدث التقنيات والمعايير.',
//         },
//         {
//           title: 'الإطلاق والدعم',
//           description: 'نطلق المشروع ونقدم الدعم المستمر لضمان النجاح.',
//         },
//       ],

//       // ✅ CTA
//       ctaTitle: 'ابدأ مشروعك اليوم',
//       ctaSubtitle:
//         'تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك.',
//     },

//     // Contact
//     contact: {
//       title: 'تواصل معنا',
//       phone: 'الهاتف',
//       email: 'البريد الإلكتروني',
//       location: 'الموقع',
//       form: {
//         name: 'الاسم',
//         email: 'البريد الإلكتروني',
//         message: 'الرسالة',
//         submit: 'إرسال الرسالة',
//       },
//     },
//     // Contact Page
//     contactPage: {
//       title: 'تواصل معنا',
//       subtitle:
//         'نحن هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي. تواصل معنا اليوم واحصل على استشارة مجانية',
//       phone: 'الهاتف',
//       email: 'البريد الإلكتروني',
//       location: 'الموقع',
//       whatsapp: 'واتساب',
//       businessHours: {
//         title: 'ساعات العمل',
//         subtitle: 'نحن متاحون خلال هذه الأوقات',
//         weekdays: 'أيام الأسبوع',
//         weekdaysTime: 'الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً',
//         weekend: 'عطلة نهاية الأسبوع',
//         weekendTime: 'الجمعة - السبت: مغلق',
//       },
//       locationSection: {
//         title: 'موقعنا',
//         subtitle: 'قم بزيارتنا في مكتبنا في قلب ليبيا',
//         officeTitle: 'مكتب ستايليرا تك',
//         address: 'العنوان',
//         mapPlaceholder: 'اضغط لفتح الخريطة',
//         mapSubtext: 'اعرض موقعنا على خرائط جوجل',
//       },
//       faq: {
//         title: 'الأسئلة الشائعة',
//         subtitle: 'اعثر على إجابات للأسئلة الشائعة حول خدماتنا وعملياتنا',
//         questions: [
//           {
//             question: 'ما هي الخدمات التي تقدمونها؟',
//             answer:
//               'نقدم حلولاً تقنية شاملة تشمل تطوير المواقع الإلكترونية، وتطبيقات الجوال، وحلول الذكاء الاصطناعي، وتصميم واجهات المستخدم. فريقنا متخصص في التقنيات الحديثة ويمكنه التعامل مع المشاريع بأي حجم.',
//           },
//           {
//             question: 'كم من الوقت يستغرق المشروع عادةً؟',
//             answer:
//               'تختلف مدة المشاريع حسب التعقيد والنطاق. قد يستغرق موقع ويب بسيط من 2-4 أسابيع، بينما قد تستغرق التطبيقات المعقدة من 3-6 أشهر. نقدم جداول زمنية تفصيلية خلال الاستشارة الأولية.',
//           },
//           {
//             question: 'هل تقدمون الدعم والصيانة المستمرة؟',
//             answer:
//               'نعم، نقدم باقات دعم وصيانة شاملة لضمان استمرار تطبيقك في الأداء الأمثل. يشمل ذلك التحديثات، وإصلاحات الأمان، والدعم التقني.',
//           },
//           {
//             question: 'ما هي عملية التطوير لديكم؟',
//             answer:
//               'نتبع منهجية تطوير رشيقة مع تواصل منتظم مع العميل، وتطوير تكراري، واختبار شامل. تشمل عمليتنا مراحل الاكتشاف والتصميم والتطوير والاختبار والنشر.',
//           },
//           {
//             question: 'هل يمكنكم العمل مع الأنظمة الموجودة؟',
//             answer:
//               'لدينا خبرة واسعة في التكامل مع الأنظمة الموجودة ويمكننا المساعدة في تحديث التطبيقات القديمة أو بناء ميزات جديدة تعمل بسلاسة مع بنيتك التحتية الحالية.',
//           },
//           {
//             question: 'ما هي التقنيات التي تتخصصون فيها؟',
//             answer:
//               'نتخصص في تقنيات الويب الحديثة بما في ذلك React و Next.js و Node.js و Python، وتطوير الجوال باستخدام React Native و Flutter، وتقنيات الذكاء الاصطناعي/التعلم الآلي بما في ذلك TensorFlow ومنصات السحابة المختلفة.',
//           },
//         ],
//         cta: {
//           title: 'لم تجد إجابة لسؤالك؟',
//           subtitle: 'تواصل معنا مباشرة وسنجيب على جميع استفساراتك',
//           whatsappButton: 'راسلنا على واتساب',
//           emailButton: 'أرسل بريداً إلكترونياً',
//         },
//       },
//       form: {
//         title: 'ابدأ مشروعك معنا',
//         subtitle: 'املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة',
//         name: 'الاسم',
//         email: 'البريد الإلكتروني',
//         phone: 'الهاتف',
//         company: 'الشركة',
//         projectType: 'نوع المشروع',
//         projectTypeOptions: {
//           placeholder: 'اختر نوع المشروع',
//           web: 'تطوير المواقع',
//           mobile: 'تطبيق جوال',
//           ai: 'حل ذكاء اصطناعي',
//           design: 'تصميم UI/UX',
//           other: 'أخرى',
//         },
//         message: 'وصف المشروع',
//         messagePlaceholder: 'أخبرنا عن مشروعك وأهدافك وأي متطلبات محددة...',
//         submit: 'إرسال الرسالة',
//         sending: 'جارٍ الإرسال...',
//         required: '*',
//         placeholders: {
//           name: 'أحمد محمد',
//           email: 'ahmed@example.com',
//           phone: '+218 92 123 4567',
//           company: 'شركة ابتكار',
//           message: 'أخبرنا عن مشروعك وأهدافك والمتطلبات الخاصة...',
//         },
//         successMessage: 'تم إرسال رسالتك بنجاح!',
//       },
//     },
//     // Team
//     team: {
//       title: 'فريقنا',
//       subtitle: 'تعرف على الأفراد الموهوبين الذين يجعلون نجاحنا ممكناً.',
//     },
//   },
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(
//   undefined
// )

// export function LanguageProvider({ children }: { children: React.ReactNode }) {
//   const [language, setLanguage] = useState<Language>('en')

//   useEffect(() => {
//     // Set RTL direction for Arabic
//     document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
//     document.documentElement.lang = language
//   }, [language])

//   const t = (key: string) => {
//     const keys = key.split('.')
//     let value = translations[language] as any

//     for (const k of keys) {
//       if (value && typeof value === 'object' && k in value) {
//         value = value[k]
//       } else {
//         console.warn(`Translation key not found: ${key}`)
//         return key // Return the key as fallback
//       }
//     }

//     return value
//   }

//   const isRTL = language === 'ar'

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
//       {children}
//     </LanguageContext.Provider>
//   )
// }

// export function useLanguage() {
//   const context = useContext(LanguageContext)
//   if (context === undefined) {
//     throw new Error('useLanguage must be used within a LanguageProvider')
//   }
//   return context
// }
