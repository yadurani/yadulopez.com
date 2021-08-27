import { useEffect, useState } from 'react'

import useDebounce from './useDebounce'

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])
  const updateSize = useDebounce(() => {
    setSize([window.innerWidth, window.innerHeight])
  }, 200)

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return size;
}

export default useWindowSize