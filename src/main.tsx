/* oxlint-disable import/no-unassigned-import */

import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import '@fontsource-variable/fraunces'

import { initClickToSource } from '@bakdotdev/dev-tools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RootLayout } from '@/components/layout/root-layout'

import { isDev } from './config.ts'
import About from './pages/About.tsx'
import Home from './pages/Home.tsx'
import Projects from './pages/Projects.tsx'

import './index.css'
import './i18n'

const root = document.querySelector('#root')

if (!root) {
  throw new Error('Root element not found')
}
if (isDev) {
  initClickToSource({})
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)