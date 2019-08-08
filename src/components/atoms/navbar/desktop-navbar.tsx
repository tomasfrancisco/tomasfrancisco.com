import css from "@emotion/css"
import React from "react"
import { Container } from "src/components/atoms/container"
import { Logo } from "src/components/atoms/logo/logo"
import { NavbarLink } from "src/components/molecules"

type DesktopNavbarProps = {
  scrollTop: number
}

export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ scrollTop }) => (
  <nav
    css={css`
      position: fixed;
      width: 100%;
      height: 100px;
      z-index: 10;
      ${scrollTop > 0 &&
        css`
          background-color: rgba(
            255,
            255,
            255,
            ${Math.min(scrollTop / 300, 1).toFixed(2)}
          );
        `};
    `}
  >
    <Container
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
      `}
    >
      {console.log(Math.min(scrollTop / 300, 1).toFixed(2))}
      <div>
        <Logo />
      </div>
      <div>
        <NavbarLink to="#hero">Home</NavbarLink>
        <NavbarLink to="#about">About</NavbarLink>
        <NavbarLink to="#portfolio">Porfolio</NavbarLink>
        <NavbarLink to="#contact">Contact</NavbarLink>
      </div>
    </Container>
  </nav>
)
