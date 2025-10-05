'use client'

import { useLanguage } from '@/contexts/language-context'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    image: '/project-ecommerce.jpg',
    category: 'E-commerce',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    image: '/project-healthcare.jpg',
    category: 'Healthcare',
    technologies: ['Next.js', 'PostgreSQL', 'AI'],
  },
  {
    id: 3,
    image: '/project-fintech.jpg',
    category: 'FinTech',
    technologies: ['React Native', 'Python', 'AWS'],
  },
  {
    id: 4,
    image: '/project-education.jpg',
    category: 'Education',
    technologies: ['Flutter', 'Firebase', 'ML'],
  },
  {
    id: 5,
    image: '/project-logistics.jpg',
    category: 'Logistics',
    technologies: ['Vue.js', 'Express', 'Redis'],
  },
  {
    id: 6,
    image: '/project-social.jpg',
    category: 'Social Media',
    technologies: ['React', 'GraphQL', 'Docker'],
  },
]

export default function ProjectsSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section className='py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            {' '}
            {t('projects.title')}
          </h2>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>
            {t('projects.subtitle')}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className='bg-slate-800/50 border-slate-700 overflow-hidden hover:bg-slate-700/50 transition-all duration-300 group'
            >
              <div className='aspect-video bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden'>
                <img
                  src={`/.jpg?height=300&width=400&query=${project.category} application interface`}
                  alt={
                    t(`projects.items.${index}.title`) ||
                    `${project.category} Platform`
                  }
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300' />
              </div>

              <div className='p-6'>
                <div className='flex items-center justify-between mb-3'>
                  <span className='text-blue-400 text-sm font-medium'>
                    {project.category}
                  </span>
                  <div className='flex gap-2'>
                    <Button
                      size='sm'
                      variant='ghost'
                      className='h-8 w-8 p-0 text-slate-400 hover:text-white'
                    >
                      <Github className='h-4 w-4' />
                    </Button>
                    <Button
                      size='sm'
                      variant='ghost'
                      className='h-8 w-8 p-0 text-slate-400 hover:text-white'
                    >
                      <ExternalLink className='h-4 w-4' />
                    </Button>
                  </div>
                </div>

                <h3 className='text-white font-semibold text-lg mb-2'>
                  {t(`projects.items.${index}.title`) ||
                    `${project.category} Platform`}
                </h3>
                <p className='text-slate-300 text-sm mb-4 leading-relaxed'>
                  {t(`projects.items.${index}.description`) ||
                    `Advanced ${project.category.toLowerCase()} solution with modern features`}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg'>
            {t('projects.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  )
}
