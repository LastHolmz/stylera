'use client'

import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'
import JoinTeamForm from '@/components/join-our-team/join-form'
import { useState } from 'react'

// shadcn/ui components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

interface JoinOurTeamPageProps {
  dictionary: Pick<Dictionary, 'teamSection' | 'ApplyForm'>
  isRTL?: boolean
}

export default function JoinOurTeam({
  dictionary,
  isRTL,
}: JoinOurTeamPageProps) {
  if (!dictionary) return null

  const team = dictionary.teamSection?.team
  if (!team) return null

  const [open, setOpen] = useState(false)

  return (
    <div className='relative z-10'>
      <InViewSection
        className='container mx-auto px-6 py-20'
        variants={defaultContainerVariants}
      >
        {/* Header */}
        <Div
          className={`max-w-3xl mx-auto mb-12 ${
            isRTL ? 'text-right' : 'text-center'
          }`}
          variants={itemVariants}
        >
          <H2
            className='text-4xl md:text-5xl font-bold text-accent mb-4'
            variants={textVariants}
          >
            {team.join_title}
          </H2>
          <P
            className='text-lg md:text-xl text-white/70 leading-relaxed'
            variants={textVariants}
          >
            {team.join_description}
          </P>
        </Div>

        {/* Join Form */}
        <Div
          className='max-w-3xl mx-auto bg-card/10 border border-border rounded-2xl p-10 backdrop-blur-md'
          variants={defaultContainerVariants}
        >
          <JoinTeamForm dictionary={dictionary.ApplyForm} isRTL={isRTL} />
        </Div>

        {/* Easter Egg Section */}
        <Div
          className='max-w-3xl mx-auto mt-12 text-center'
          variants={itemVariants}
        >
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant='outline'
                size='lg'
                className='border-accent cursor-pointer text-accent hover:bg-accent hover:text-white transition-all duration-200 mt-6 flex items-center gap-2 mx-auto'
              >
                <Sparkles className='w-5 h-5' />
                {isRTL
                  ? 'لست متأكدًا إذا كنت يجب أن تتقدم؟ 🤔'
                  : 'Not sure if you should apply? 🤔'}
              </Button>
            </DialogTrigger>
            <DialogContent className='bg-card/90 border-border text-center max-w-md'>
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription className='text-white/80 text-base leading-relaxed'>
                  {isRTL
                    ? 'إرين ييغر أنقذ 20٪ من البشرية بفضل الرَمبلينغ... تعتقد أن هذا القرار كان صائباً؟ إذاً نحن في انتظارك ❤️'
                    : 'Eren Yeager saved 20% of humanity with his Rumbling... think that was the right decision? Then we’re waiting for you ❤️'}
                </DialogDescription>
              </DialogHeader>
              <Button
                onClick={() => setOpen(false)}
                className='mt-4 bg-accent text-white cursor-pointer hover:bg-accent/90'
              >
                {isRTL ? 'تمام، سأفعل ذلك!' : 'Alright, I’m in! 🚀'}
              </Button>
            </DialogContent>
          </Dialog>
        </Div>
      </InViewSection>
    </div>
  )
}
