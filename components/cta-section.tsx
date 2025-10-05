'use client'

import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTASection() {
  const { t, isRTL } = useLanguage()

  return (
    <section className='py-20 px-4'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-slate-700'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'>
            {t('cta.title')}
          </h2>
          <p className='text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto'>
            {t('cta.subtitle')}
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group'>
              {t('cta.startProject')}
              <ArrowRight
                className={`w-5 h-5 ${
                  isRTL ? 'mr-2 rotate-180' : 'ml-2'
                } group-hover:translate-x-1 transition-transform`}
              />
            </Button>
            <Button
              variant='outline'
              className='border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg group bg-transparent'
            >
              <MessageCircle className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('cta.freeConsultation')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
