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

interface JoinOurTeamPageProps {
  dictionary: Pick<Dictionary, 'teamSection' | 'ApplyForm'>
  isRTL?: boolean
}

export default function JoinOurTeamPage({
  dictionary,
  isRTL,
}: JoinOurTeamPageProps) {
  if (!dictionary) return null

  const team = dictionary.teamSection?.team
  if (!team) return null

  return (
    <div className='relative z-10'>
      <InViewSection
        className='container mx-auto px-6 py-20'
        variants={defaultContainerVariants}
      >
        {/* Page Header (moved outside card) */}
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

        {/* Join Form Card */}
        <Div
          className='max-w-3xl mx-auto bg-card/10 border border-border rounded-2xl p-10 backdrop-blur-md'
          variants={defaultContainerVariants}
        >
          <JoinTeamForm dictionary={dictionary.ApplyForm} isRTL={isRTL} />
        </Div>
      </InViewSection>
    </div>
  )
}
