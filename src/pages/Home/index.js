import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import { reducerCases } from '../../utils/constants'
import { useStateProvider } from '../../contexts/StateProvider'
import { Body } from '../../components/Body'
import { Footer } from '../../components/Footer'
import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import updatedComponent from '../../components/BackgroundHOC'

import { getUserInfo } from '../../services/me'

import { Container } from './styles'

function Home({ bodyScroll, headerBackground, navBackground, bodyRef }) {
  const [{}, dispatch] = useStateProvider()

  const getUser = async () => {
    try {
      const response = await getUserInfo()
      const user = {
        userId: response.id,
        userName: response.display_name,
      }

      dispatch({ type: reducerCases.SET_USER, userInfo: user })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

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

Home.propTypes = {
  headerBackground: PropTypes.bool.isRequired,
  navBackground: PropTypes.bool.isRequired,
  bodyScroll: PropTypes.func.isRequired,
  bodyRef: PropTypes.object.isRequired,
}

export default updatedComponent(Home)
