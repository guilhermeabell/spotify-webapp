import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { reducerCases } from '../../utils/constants'
import { useStateProvider } from '../../contexts/StateProvider'
import { Body } from '../Body'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { Sidebar } from '../Sidebar'
import updatedComponent from '../BackgroundHOC'
import PropTypes from 'prop-types'

import { Container } from './styles'

function Spotify({ bodyScroll, headerBackground, navBackground, bodyRef }) {
  const [{ token }, dispatch] = useStateProvider()

  // const bodyRef = useRef()
  // const [navBackground, setNavBackground] = useState(false)
  // const [headerBackground, setHeaderBackground] = useState(false)

  // const bodyScroll = () => {
  //   bodyRef.current.scrollTop >= 30 ? setNavBackground(true) : setNavBackground(false)
  //   bodyRef.current.scrollTop >= 268 ? setHeaderBackground(true) : setHeaderBackground(false)
  // }

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      })
      // console.log({ data });
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      }
      // console.log(userInfo);
      dispatch({ type: reducerCases.SET_USER, userInfo })
    }
    getUserInfo()
  }, [dispatch, token])

  return (
    <Container>
      <div className="spotify_body">
        <Sidebar />
        <div className="body" ref={bodyRef} onScroll={bodyScroll}>
          <Navbar navBackground={navBackground} />
          <div className="body_content">
            <Body headerBackground={headerBackground} />
          </div>
        </div>
      </div>
      <div className="spotify_footer">
        <Footer />
      </div>
    </Container>
  )
}

Spotify.propTypes = {
  headerBackground: PropTypes.bool.isRequired,
  navBackground: PropTypes.bool.isRequired,
  bodyScroll: PropTypes.func.isRequired,
  bodyRef: PropTypes.object.isRequired,
}

export default updatedComponent(Spotify)
