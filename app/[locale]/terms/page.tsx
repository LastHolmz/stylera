import Navigation from '@/components/layout/navigation'
import ShaderBackground from '@/components/ui/Custom-ui/shader-background/shader-background'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  const isRTL = locale === 'ar'

  return (
    <div className='relative'>
      <ShaderBackground>
        <div className='relative z-10'>
          <Navigation dictionary={dictionary.nav} />
          <section className='container mx-auto px-6 py-20'>
            <h1 className='text-3xl md:text-4xl font-bold text-white tracking-tight'>
              {isRTL ? 'شروط الخدمة' : 'Terms of Service'}
            </h1>
            <p className='mt-4 text-white/70 max-w-3xl leading-relaxed'>
              {isRTL
                ? 'تنظم هذه الشروط استخدامك لموقع وخدمات StyleraTech. باستخدامك للموقع، فإنك توافق على الالتزام بهذه الشروط.'
                : 'These Terms govern your use of the StyleraTech website and services. By using our site, you agree to be bound by these Terms.'}
            </p>
          </section>
        </div>
      </ShaderBackground>

      <div className='bg-background'>
        <section className='container mx-auto px-6 py-12 space-y-10'>
          <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl font-semibold text-white'>
              {isRTL
                ? 'الأهلية والاستخدام المقبول'
                : 'Eligibility and Acceptable Use'}
            </h2>
            <ul className='list-disc pl-6 text-white/70 space-y-2 max-w-4xl'>
              <li>
                {isRTL
                  ? 'تتعهد بأن لديك الأهلية القانونية لاستخدام الموقع والالتزام بالشروط.'
                  : 'You represent that you have the legal capacity to use the site and accept these Terms.'}
              </li>
              <li>
                {isRTL
                  ? 'لا يجوز إساءة استخدام الموقع أو محاولة الوصول غير المصرح به أو تعطيل الخدمات.'
                  : 'You must not misuse the site, attempt unauthorized access, or disrupt services.'}
              </li>
              <li>
                {isRTL
                  ? 'توافق على الالتزام بجميع القوانين المحلية والدولية المعمول بها.'
                  : 'You agree to comply with all applicable local and international laws.'}
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl font-semibold text-white'>
              {isRTL ? 'العروض والخدمات' : 'Offerings and Services'}
            </h2>
            <p className='text-white/70 max-w-4xl leading-relaxed'>
              {isRTL
                ? 'نقدم خدمات تطوير برمجيات وتصميم وتجارب رقمية مخصصة. قد تتغير تفاصيل الخدمات أو التسعير، وسنقوم بتحديث الموقع وفقًا لذلك.'
                : 'We provide custom software development, design, and digital experiences. Service details or pricing may change, and the site will be updated accordingly.'}
            </p>
          </div>

          <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl font-semibold text-white'>
              {isRTL ? 'الملكية الفكرية' : 'Intellectual Property'}
            </h2>
            <p className='text-white/70 max-w-4xl leading-relaxed'>
              {isRTL
                ? 'جميع العلامات والشعارات والمحتوى والمواد المرئية على الموقع مملوكة لـ StyleraTech أو مرخصة لها. لا يُسمح بإعادة الاستخدام دون إذن كتابي.'
                : 'All trademarks, logos, content, and visual materials on the site are owned by or licensed to StyleraTech. Reuse is not permitted without written permission.'}
            </p>
          </div>

          <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl font-semibold text-white'>
              {isRTL ? 'المحتوى الذي يقدمه المستخدم' : 'User-Provided Content'}
            </h2>
            <p className='text-white/70 max-w-4xl leading-relaxed'>
              {isRTL
                ? 'عند إرسال رسائل أو نماذج، فإنك تمنحنا ترخيصًا لاستخدامها لغرض تقديم الخدمة والتواصل. تضمن أن المحتوى قانوني وخالٍ من الانتهاكات.'
                : 'When you submit messages or forms, you grant us a license to use them for service delivery and communication. You warrant that the content is lawful and non-infringing.'}
            </p>
          </div>

          <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl font-semibold text-white'>
              {isRTL ? 'السرية والخصوصية' : 'Confidentiality and Privacy'}
            </h2>
            <p className='text-white/70 max-w-4xl leading-relaxed'>
              {isRTL
                ? 'نحترم خصوصيتك ونعالج بياناتك وفق سياسة الخصوصية. يشكل استخدامك للموقع موافقة على تلك السياسة.'
                : 'We respect your privacy and process your data according to our Privacy Policy. Your use of the site constitutes acceptance of that policy.'}
            </p>
          </div>

          <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl font-semibold text-white'>
              {isRTL ? 'التزاماتك' : 'Your Responsibilities'}
            </h2>
            <ul className='list-disc pl-6 text-white/70 space-y-2 max-w-4xl'>
              <li>
                {isRTL
                  ? 'تقديم معلومات دقيقة ومحدثة'
                  : 'Provide accurate, up-to-date information'}
              </li>
              <li>
                {isRTL
                  ? 'حماية سرية بياناتك'
                  : 'Safeguard the confidentiality of your data'}
              </li>
              <li>
                {isRTL
                  ? 'الامتناع عن أي نشاط ضار'
                  : 'Refrain from harmful or abusive activities'}
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl font-semibold text-white'>
              {isRTL ? 'حدود المسؤولية' : 'Limitation of Liability'}
            </h2>
            <p className='text-white/70 max-w-4xl leading-relaxed'>
              {isRTL
                ? 'يتم تقديم الموقع "كما هو" دون ضمانات من أي نوع. لا نتحمل مسؤولية أي أضرار غير مباشرة أو تبعية أو عرضية ناتجة عن استخدام الموقع.'
                : 'The site is provided "as is" without warranties of any kind. We are not liable for any indirect, consequential, or incidental damages arising from your use of the site.'}
            </p>
          </div>

          <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl font-semibold text-white'>
              {isRTL ? 'التعويض' : 'Indemnification'}
            </h2>
            <p className='text-white/70 max-w-4xl leading-relaxed'>
              {isRTL
                ? 'توافق على تعويض StyleraTech وحمايتها من أي مطالبات ناشئة عن استخدامك للموقع أو مخالفتك لهذه الشروط.'
                : 'You agree to indemnify and hold StyleraTech harmless from any claims arising out of your use of the site or breach of these Terms.'}
            </p>
          </div>

          <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl font-semibold text-white'>
              {isRTL ? 'الإلغاء والتعليق' : 'Termination and Suspension'}
            </h2>
            <p className='text-white/70 max-w-4xl leading-relaxed'>
              {isRTL
                ? 'يجوز لنا تعليق أو إنهاء وصولك إلى الموقع عند انتهاك الشروط أو لأي سبب معقول وفق تقديرنا.'
                : 'We may suspend or terminate your access to the site upon violation of these Terms or for any reasonable cause at our discretion.'}
            </p>
          </div>

          <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl font-semibold text-white'>
              {isRTL ? 'القانون الواجب التطبيق' : 'Governing Law'}
            </h2>
            <p className='text-white/70 max-w-4xl leading-relaxed'>
              {isRTL
                ? 'تُفسَّر هذه الشروط وفق القوانين المعمول بها في نطاق عملنا ما لم يُنص على خلاف ذلك في اتفاقية موقعة.'
                : 'These Terms are governed by the laws applicable in our operating jurisdiction unless otherwise specified in a signed agreement.'}
            </p>
          </div>

          <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl font-semibold text-white'>
              {isRTL ? 'التعديلات' : 'Changes to These Terms'}
            </h2>
            <p className='text-white/70 max-w-4xl leading-relaxed'>
              {isRTL
                ? 'قد نقوم بتحديث هذه الشروط من وقت لآخر. استمرار استخدامك للموقع بعد التحديث يعني موافقتك على الشروط المعدلة.'
                : 'We may update these Terms from time to time. Your continued use of the site after updates constitutes acceptance of the revised Terms.'}
            </p>
          </div>

          <div className='space-y-2'>
            <h2 className='text-xl md:text-2xl font-semibold text-white'>
              {isRTL ? 'التواصل' : 'Contact'}
            </h2>
            <p className='text-white/70 max-w-4xl leading-relaxed'>
              {isRTL
                ? 'للاستفسارات المتعلقة بهذه الشروط، راسلنا على: contact@styleratech.com'
                : 'For questions regarding these Terms, contact us at: contact@styleratech.com'}
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
