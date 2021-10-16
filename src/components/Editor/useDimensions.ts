import debounce from '@mui/utils/debounce'
import { useEffect, useRef, useState } from 'react'

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.onresize = debounce(handleResize)
    window.onload = handleResize
  }, [])

  return dimensions
}
