'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Div, P, comeFromBottomItem, textVariants } from '@/constants/animation'

interface JoinTeamFormProps {
  dictionary: Dictionary['ApplyForm']
  isRTL?: boolean
}

export default function JoinTeamForm({ dictionary, isRTL }: JoinTeamFormProps) {
  const t = dictionary
  if (!t) return null

  const roles = [t.frontend, t.backend, t.fullstack, t.uiux, t.mobile, t.other]

  const applicationSchema = z.object({
    name: z.string().min(2, t.nameError || 'Name is required'),
    email: z.string().email(t.emailError || 'Invalid email'),
    role: z.string().min(1, t.roleError || 'Please select a role'),
    coverLetter: z.string().optional(),
  })

  type ApplicationForm = z.infer<typeof applicationSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setValue,
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  async function onSubmit(data: ApplicationForm) {
    await new Promise((r) => setTimeout(r, 600))
    // console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-6'
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Name */}
      <Div variants={comeFromBottomItem}>
        <Label className='mb-2 block'>{t.nameLabel || 'Full Name'}</Label>
        <Input {...register('name')} placeholder={t.namePlaceholder} />
        {errors.name && (
          <p className='text-sm text-destructive mt-1'>{errors.name.message}</p>
        )}
      </Div>

      {/* Email */}
      <Div variants={comeFromBottomItem}>
        <Label className='mb-2 block'>{t.emailLabel}</Label>
        <Input
          {...register('email')}
          placeholder={t.emailPlaceholder}
          type='email'
        />
        {errors.email && (
          <p className='text-sm text-destructive mt-1'>
            {errors.email.message}
          </p>
        )}
      </Div>

      {/* Role — now using Shadcn Select */}
      <Div variants={comeFromBottomItem}>
        <Label className='mb-2 block'>{t.roleLabel}</Label>
        <Select
          onValueChange={(value) => setValue('role', value)}
          defaultValue=''
        >
          <SelectTrigger
            isRTL={isRTL}
            className='w-full bg-transparent border border-border text-foreground'
          >
            <SelectValue
              placeholder={t.rolePlaceholder}
              className='text-muted-foreground'
            />
          </SelectTrigger>
          <SelectContent
            className={`bg-popover text-popover-foreground font-[cairo]`}
          >
            {roles.map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.role && (
          <p className='text-sm text-destructive mt-1'>{errors.role.message}</p>
        )}
      </Div>

      {/* Cover Letter */}
      <Div variants={comeFromBottomItem}>
        <Label className='mb-2 block'>{t.coverLetterLabel}</Label>
        <Textarea
          {...register('coverLetter')}
          placeholder={t.coverLetterPlaceholder}
        />
      </Div>

      {/* Submit */}
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
          {isSubmitting ? t.sending : t.submit}
        </Button>

        {(isSubmitted || isSubmitSuccessful) && (
          <P className='text-green-400 text-sm' variants={textVariants}>
            {t.success}
          </P>
        )}
      </Div>
    </form>
  )
}
