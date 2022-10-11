
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { reducerCases } from "../utils/constants";
import { useStateProvider } from "../utils/StateProvider";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export function Spotify() {
  const [{ token }, dispatch] = useStateProvider();

  const bodyRef = useRef()
  const [navBackground, setNavBackground] = useState(false)
  const [headerBackground, setHeaderBackground] = useState(false)

  const bodyScroll = () => {
    bodyRef.current.scrollTop >= 30 ? setNavBackground(true) : setNavBackground(false)
    bodyRef.current.scrollTop >= 268 ? setHeaderBackground(true) : setHeaderBackground(false)
  }

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      // console.log({ data });
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      };
      // console.log(userInfo);
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);

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
  );
}

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify_body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    .body {
      overflow: auto;
      height: 100%;
      width: 100%;
      &::-webkit-scrollbar {
      width: 0.7rem;
      background-color: rgba(255, 255, 255, 0.6);
    }
    }
  }
`;
