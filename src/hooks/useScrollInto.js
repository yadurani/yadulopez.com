import PropTypes from 'prop-types'

const useScrollInto = ( sectionId ) => {
  const handleScroll = () => {
    const getId = document.getElementById(sectionId)
    if (typeof window !== 'undefined') {
      window.scroll({
        top: getId.offsetTop - 20,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  return handleScroll
}

useScrollInto.propTypes = {
  sectionId: PropTypes.string.isRequired
}

export default useScrollInto