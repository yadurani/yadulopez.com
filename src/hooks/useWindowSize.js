import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import useDebounce from './useDebounce'

const useWindowSize = ( delay ) => {
  const [size, setSize] = useState([0, 0])
  const updateSize = useDebounce(() => {
    setSize([window.innerWidth, window.innerHeight])
  }, delay)
  
  useEffect(() => {
    window.addEventListener('resize', updateSize)
    updateSize();
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size;
}

useWindowSize.propTypes = {
  delay: PropTypes.number
}

useWindowSize.defaultProps = {
  delay: 0
}

export default useWindowSize