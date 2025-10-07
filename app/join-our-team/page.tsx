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

// Define available roles
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

  // Localized validation schema
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

  // Local success state
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function onSubmit(data: ApplicationForm) {
    // Simulate successful submission
    await new Promise((r) => setTimeout(r, 600))
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className='relative z-10'>
      <Navigation />
      <main className='container mx-auto px-6 py-20'>
        <div className='max-w-3xl mx-auto bg-card/10 border border-border rounded-2xl p-10'>
          <h1 className='text-3xl font-semibold text-white mb-4 text-center'>
            {isArabic ? 'انضم إلى فريقنا' : 'Join Our Team'}
          </h1>
          <p className='text-white/70 mb-8 text-center leading-relaxed'>
            {isArabic
              ? 'نبحث عن مطورين ومصممين موهوبين في مجالات الواجهة الأمامية والخلفية والتصميم وغير ذلك. قدم طلبك الآن.'
              : "We're looking for talented developers and designers across frontend, backend, and UI/UX. Apply below!"}
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-6'
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            {/* Full Name */}
            <div>
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
            </div>

            {/* Email */}
            <div>
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
            </div>

            {/* Role */}
            <div>
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
            </div>

            {/* Cover Letter */}
            <div>
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
            </div>

            {/* Submit Button */}
            <div className='flex flex-col sm:flex-row gap-3 items-center'>
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
                <p className='text-green-400 text-sm'>
                  {isArabic
                    ? 'تم إرسال الطلب بنجاح '
                    : 'Application submitted successfully '}
                </p>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
