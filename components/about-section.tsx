'use client'

import { Target, Users, Lightbulb, Award } from 'lucide-react'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from './ui/Custom-ui/in-view-section'

interface AboutSectionProps {
  dictionary?: Dictionary['whoWeAre']
  isRTL?: boolean
}

export default function AboutSection({ dictionary, isRTL }: AboutSectionProps) {
  if (!dictionary) return null

  const icons = [Target, Users, Lightbulb, Award]

  // Convert the values record into an array for rendering
  const values = Object.entries(dictionary.values?.items || {}).map(
    ([, value], index) => ({
      ...value,
      icon: icons[index % icons.length],
    })
  )

  return (
    <InViewSection
      id='about'
      className='py-24 relative bg-card/20'
      variants={defaultContainerVariants}
    >
      <Div className='container mx-auto px-6'>
        {/* Header */}
        <Div
          className='max-w-4xl mx-auto mb-20 text-center'
          variants={itemVariants}
        >
          <H2
            className='text-4xl text-center md:text-5xl font-light text-white mb-8'
            variants={textVariants}
          >
            <span className='font-medium ltr:instrument text-accent'>
              {dictionary.title}
            </span>
          </H2>

          <P
            className='text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8'
            variants={textVariants}
          >
            {dictionary.subtitle}
          </P>

          {/* Story Paragraphs */}
          {dictionary.story?.paragraphs?.map((para, i) => (
            <P
              key={i}
              className='text-lg text-white/70 font-light leading-relaxed mb-4'
              variants={textVariants}
            >
              {para}
            </P>
          ))}
        </Div>

        {/* Mission & Vision */}
        <Div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20'>
          <Div
            className={`bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-border rounded-2xl p-8 ${
              isRTL ? 'text-right' : 'text-left'
            }`}
            variants={itemVariants}
          >
            <h3 className='text-2xl font-semibold text-white mb-6'>
              {dictionary.vision.title}
            </h3>
            <p className='text-white/80 font-light leading-relaxed'>
              {dictionary.vision.text}
            </p>
          </Div>

          <Div
            className={`bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm border border-border rounded-2xl p-8 ${
              isRTL ? 'text-right' : 'text-left'
            }`}
            variants={itemVariants}
          >
            <h3 className='text-2xl font-semibold text-white mb-6'>
              {dictionary.mission.title}
            </h3>
            <p className='text-white/80 font-light leading-relaxed'>
              {dictionary.mission.text}
            </p>
          </Div>
        </Div>

        {/* Values */}
        <Div className={`mb-20 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h3 className='text-3xl font-light text-white mb-12 text-center'>
            <span className='font-medium ltr:instrument text-accent'>
              {dictionary.values.title}
            </span>
          </h3>

          <Div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Div
                  key={index}
                  variants={itemVariants}
                  className='group text-center hover:scale-105 transition-transform duration-300'
                >
                  <div className='w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent p-5 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300'>
                    <Icon className='w-full h-full text-white' />
                  </div>
                  <h4 className='text-lg select-none font-semibold text-white mb-3'>
                    {value.title}
                  </h4>
                  <p className='text-white/70 select-none font-light leading-relaxed text-sm'>
                    {value.description}
                  </p>
                </Div>
              )
            })}
          </Div>
        </Div>

        {/* Timeline */}
        <Div
          className='bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border border-border rounded-2xl p-12'
          variants={itemVariants}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-center'>
            {Object.entries(dictionary.timeline?.items || {}).map(
              ([year, text]) => (
                <div key={year}>
                  <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                    {year}
                  </div>
                  <div className='text-white/70 font-light'>{text}</div>
                </div>
              )
            )}
          </div>
        </Div>
      </Div>
    </InViewSection>
  )
}
