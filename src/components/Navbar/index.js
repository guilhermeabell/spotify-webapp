import React from 'react'
import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { useStateProvider } from '../../contexts/StateProvider'

import * as S from './styles'

export function Navbar(navBackground) {
  const [{ userInfo }] = useStateProvider()
  return (
    <S.Container navBackground={navBackground}>
      <div className="search_bar">
        <FaSearch />
        <input type="text" placeholder="Artistas, músicas ou podcasts" />
      </div>
      <div className="avatar">
        <a href="#">
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </S.Container>
  )
}

Navbar.propTypes = {
  navBackground: PropTypes.bool.isRequired,
}
