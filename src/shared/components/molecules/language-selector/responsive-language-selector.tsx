import React from 'react'
import { LanguageSelector } from './language-selector.component'
import { CompactLanguageSelector } from './compact-language-selector.component'

export const ResponsiveLanguageSelector: React.FC = () => {
  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:block">
        <LanguageSelector />
      </div>
      
      {/* Mobile version */}
      <div className="md:hidden">
        <CompactLanguageSelector />
      </div>
    </>
  )
}