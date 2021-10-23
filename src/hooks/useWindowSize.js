import { useEffect, useState } from 'react'

import useDebounce from './useDebounce'

const useWindowSize = ( delay = 0) => {
  const [size, setSize] = useState([0, 0])
  const updateSize = useDebounce(() => {
    setSize([window.innerWidth, window.innerHeight])
  }, delay)
  useEffect(() => {
    window.addEventListener('resize', updateSize)
    updateSize();
    return () => window.removeEventListener('resize', updateSize)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return size;
}

export default useWindowSize