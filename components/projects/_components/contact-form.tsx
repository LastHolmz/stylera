'use client'

import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import ContactImage from '@/public/images/contactImage.png'
import { Send } from 'lucide-react'

interface ProjectsContactFormProps {
  dictionary: Dictionary['allProjects']
  isRTL?: boolean
}

export default function ProjectsContactForm({
  dictionary,
  isRTL,
}: ProjectsContactFormProps) {
  if (!dictionary) return null

  return (
    <section className='bg-slate-900 py-20 px-4'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-lg bg-slate-800/30 backdrop-blur-md border border-slate-700 min-h-[650px] md:min-h-[750px]'>
        {/* Left Image + Text */}
        <div className='relative flex h-[450px] md:h-auto'>
          <Image
            src={ContactImage}
            alt='Contact us'
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 50vw'
            priority
          />

          {/* Custom Gradient Overlay */}
          <div
            className='absolute inset-0 bg-gradient-to-t from-[#0E162B]/80 to-[#0E162B]/20'
            aria-hidden='true'
          />

          {/* Bottom Text */}
          <div
            className={`absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white ${
              isRTL ? 'text-right' : 'text-left'
            }`}
          >
            <div className='max-w-md'>
              <h3 className='text-2xl md:text-3xl font-bold mb-3'>
                {dictionary.footerTitle}
              </h3>
              <p className='text-slate-300 text-base leading-relaxed'>
                {dictionary.footerSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div
          className={`flex flex-col justify-center p-8 md:p-16 bg-slate-900 ${
            isRTL ? 'text-right' : 'text-left'
          }`}
        >
          <h3 className='text-3xl font-semibold text-white mb-2'>
            {dictionary.contactForm.heading}
          </h3>
          <p className='text-slate-400 mb-10 text-base'>
            {dictionary.contactForm.subheading}
          </p>

          <form className='flex flex-col gap-8'>
            {/* Name Input */}
            <div>
              <label
                htmlFor='name'
                className='block text-slate-300 text-sm mb-2'
              >
                {dictionary.contactForm.nameLabel}
              </label>
              <Input
                id='name'
                type='text'
                placeholder={dictionary.contactForm.namePlaceholder}
                className='bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 h-12 rounded-lg'
              />
            </div>

            {/* Phone Input */}
            <div>
              <label
                htmlFor='phone'
                className='block text-slate-300 text-sm mb-2'
              >
                {dictionary.contactForm.phoneLabel}
              </label>
              <Input
                id='phone'
                type='tel'
                placeholder={dictionary.contactForm.phonePlaceholder}
                className='bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 h-12 rounded-lg'
              />
            </div>

            {/* Send Button */}
            <Button className='bg-cyan-600 hover:bg-cyan-700 text-white flex items-center justify-center gap-2 py-6 text-lg rounded-xl shadow-md'>
              <Send className='h-5 w-5' />
              {dictionary.contactForm.sendButton}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
