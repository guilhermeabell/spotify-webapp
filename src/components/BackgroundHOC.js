import React, { useState, useRef } from 'react'

function updatedComponent(OriginalComponent) {
  function newComponent() {
    const bodyRef = useRef()
    const [headerBackground, setHeaderBackground] = useState(false)
    const [navBackground, setNavBackground] = useState(false)

    const bodyScroll = () => {
      bodyRef.current.scrollTop >= 268 ? setHeaderBackground(true) : setHeaderBackground(false)
      bodyRef.current.scrollTop >= 30 ? setNavBackground(true) : setNavBackground(false)
    }
    return <OriginalComponent bodyScroll={bodyScroll} headerBackground={headerBackground} bodyRef={bodyRef} navBackground={navBackground} />
  }
  return newComponent
}

export default updatedComponent
