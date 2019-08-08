import React from 'react'
import { Resizer } from 'src/components/atoms/resizer'
import { MobileNavbar } from './mobile-navbar'
import { DesktopNavbar } from './desktop-navbar'

export const Navbar: React.FC<{}> = () => (
  <Resizer delay={10}>
    {({ screenWidth }) =>
      screenWidth < 768 ? <MobileNavbar /> : <DesktopNavbar />
    }
  </Resizer>
)
