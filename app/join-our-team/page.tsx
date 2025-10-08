'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'
import Navigation from '@/components/navigation'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
  comeFromBottomItem,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/in-view-section'
import Footer from '@/components/footer'
// Roles
const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'UI/UX Designer',
  'Mobile Developer',
  'Other',
]

export default function JoinOurTeamPage() {
  const { language } = useLanguage()
  const isArabic = language === 'ar'

  // Validation schema
  const applicationSchema = z.object({
    name: z
      .string()
      .min(2, isArabic ? 'الاسم مطلوب ويجب أن يكون أطول' : 'Name is required'),
    email: z
      .string()
      .email(isArabic ? 'بريد إلكتروني غير صالح' : 'Invalid email'),
    role: z
      .string()
      .min(
        1,
        isArabic ? 'الرجاء اختيار المسمى الوظيفي' : 'Please select a role'
      ),
    coverLetter: z.string().optional(),
  })

  type ApplicationForm = z.infer<typeof applicationSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  async function onSubmit(data: ApplicationForm) {
    await new Promise((r) => setTimeout(r, 600))
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className='relative z-10'>
      <Navigation />

      <InViewSection
        className='container mx-auto px-6 py-20'
        variants={defaultContainerVariants}
      >
        <Div
          className='max-w-3xl mx-auto bg-card/10 border border-border rounded-2xl p-10 backdrop-blur-md'
          variants={defaultContainerVariants}
        >
          {/* Header */}
          <Div className='text-center mb-8' variants={itemVariants}>
            <H2
              className='text-3xl font-semibold text-accent mb-4'
              variants={textVariants}
            >
              {isArabic ? 'انضم إلى فريقنا' : 'Join Our Team'}
            </H2>
            <P
              className='text-white/70 leading-relaxed'
              variants={textVariants}
            >
              {isArabic
                ? 'نبحث عن مطورين ومصممين موهوبين في مجالات الواجهة الأمامية والخلفية والتصميم وغير ذلك. قدم طلبك الآن.'
                : "We're looking for talented developers and designers across frontend, backend, and UI/UX. Apply below!"}
            </P>
          </Div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-6'
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            <Div variants={comeFromBottomItem}>
              <Label className='mb-2 block'>
                {isArabic ? 'الاسم الكامل' : 'Full Name'}
              </Label>
              <Input
                {...register('name')}
                placeholder={
                  isArabic ? 'اكتب اسمك الكامل' : 'Enter your full name'
                }
              />
              {errors.name && (
                <p className='text-sm text-destructive mt-1'>
                  {errors.name.message}
                </p>
              )}
            </Div>

            <Div variants={comeFromBottomItem}>
              <Label className='mb-2 block'>
                {isArabic ? 'البريد الإلكتروني' : 'Email'}
              </Label>
              <Input
                {...register('email')}
                placeholder='you@example.com'
                type='email'
              />
              {errors.email && (
                <p className='text-sm text-destructive mt-1'>
                  {errors.email.message}
                </p>
              )}
            </Div>

            <Div variants={comeFromBottomItem}>
              <Label className='mb-2 block'>
                {isArabic ? 'المسمى الوظيفي' : "Role you're applying for"}
              </Label>
              <select
                {...register('role')}
                className='w-full rounded-md border border-border bg-transparent px-3 py-2 text-foreground'
              >
                <option value='' className='text-black'>
                  {isArabic ? 'اختر المسمى' : 'Select a role'}
                </option>
                {roles.map((r) => (
                  <option key={r} value={r} className='text-black'>
                    {r}
                  </option>
                ))}
              </select>
              {errors.role && (
                <p className='text-sm text-destructive mt-1'>
                  {errors.role.message}
                </p>
              )}
            </Div>

            <Div variants={comeFromBottomItem}>
              <Label className='mb-2 block'>
                {isArabic
                  ? 'خطاب التقديم (اختياري)'
                  : 'Cover Letter (optional)'}
              </Label>
              <Textarea
                {...register('coverLetter')}
                placeholder={
                  isArabic
                    ? 'اكتب نبذة قصيرة عنك هنا'
                    : 'Write a short introduction about yourself'
                }
              />
            </Div>

            <Div
              className='flex flex-col sm:flex-row gap-3 items-center'
              variants={comeFromBottomItem}
            >
              <Button
                type='submit'
                variant='default'
                disabled={isSubmitting}
                className='px-8'
              >
                {isSubmitting
                  ? isArabic
                    ? 'جارٍ الإرسال...'
                    : 'Sending...'
                  : isArabic
                  ? 'أرسل الطلب'
                  : 'Submit Application'}
              </Button>

              {(isSubmitted || isSubmitSuccessful) && (
                <P className='text-green-400 text-sm' variants={textVariants}>
                  {isArabic
                    ? 'تم إرسال الطلب بنجاح '
                    : 'Application submitted successfully '}
                </P>
              )}
            </Div>
          </form>
        </Div>
      </InViewSection>
      <Footer />
    </div>
  )
}
