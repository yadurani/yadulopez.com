const useScrollInto = (sectionId) => {
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

export default useScrollInto