import React, { useState, useEffect } from 'react'
import debounce from 'debounce'

type ScrollRenderProps = {
  scrollTop: number
}

type ScrollerProps = {
  delay?: number
  children(props: ScrollRenderProps): React.ReactElement
}

export const Scroller: React.FC<ScrollerProps> = ({ delay = 500, children }) => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const getWindowScrollTop = (): number => window.pageYOffset || document.documentElement.scrollTop

    const scrollHandler = debounce(
      () => {
        window.requestAnimationFrame(() => {
          setScrollTop(getWindowScrollTop())
        })
      },
      delay,
      delay === 0
    )

    window.addEventListener('scroll', scrollHandler)

    scrollHandler() // Call on first render

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return children({ scrollTop })
}
