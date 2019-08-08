import React, { useState, useEffect } from 'react'
import debounce from 'debounce'

type RezizerRenderProps = {
  screenWidth: number
}

type ResizerProps = {
  delay?: number
  children(props: RezizerRenderProps): React.ReactElement
}

export const Resizer: React.FC<ResizerProps> = ({ delay = 500, children }) => {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const getScreenWidth = (): number => screen.width

    const resizeHandler = debounce(
      () => {
        setScreenWidth(getScreenWidth())
      },
      delay,
      delay === 0
    )

    window.addEventListener('resize', resizeHandler)

    resizeHandler() // Call on first render

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  console.log('screenWidth', screenWidth)

  return children({ screenWidth })
}
