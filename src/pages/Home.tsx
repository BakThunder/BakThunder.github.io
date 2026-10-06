import { AboutHero } from '@/components/about/about-hero'
import { Experience } from '@/components/experience/experience'
import { Hero } from '@/components/hero/hero'
import { Projects } from '@/components/projects/projects'
import { Skillset } from '@/components/skillset/skillset'
import { WhatIDo } from '@/components/what-i-do/what-i-do'
import { usePageMeta } from '@/lib/use-page-meta'

export default function Home() {
  usePageMeta()

  return (
    <main className="relative bg-[#0e0e10]">
      <Hero />
      <AboutHero />
      <WhatIDo />
      <Experience lang="ru" />
      <Skillset lang="ru" />
      <Projects lang="ru" />
    </main>
  )
}