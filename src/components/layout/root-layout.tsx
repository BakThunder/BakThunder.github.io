import { Outlet } from 'react-router-dom'

import { HeaderNav } from '@/components/layout/header-nav'
import { PageBackdrop } from '@/components/layout/page-backdrop'
import { Providers } from '@/components/layout/providers'
import { SkipToContent } from '@/components/layout/skip-to-content'
import { SocialLinks } from '@/components/layout/social-links'

export function RootLayout() {
  return (
    <Providers>
      <SkipToContent />
      <PageBackdrop />
      <HeaderNav />
      <SocialLinks />
      <Outlet />
    </Providers>
  )
}