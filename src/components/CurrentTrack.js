import {useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { reducerCases } from '../utils/constants'
import { useStateProvider } from '../utils/StateProvider'

export function CurrentTrack() {
 const [{ token, currentlyPlaying }, dispatch] = useStateProvider()
 useEffect(() => {
  const getCurrentTrack = async () => {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response)
    if(response.data !== "") {
      const {item} = response.data
      const currentlyPlaying = {
        id: item.id,
        name: item.name,
        artists: item.artists.map((artist) => artist.name),
        image: item.album.images[2].url,
      }
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
    }
    
  };

  getCurrentTrack();
}, [token, dispatch]);

  return <Container>
    {
      currentlyPlaying && (
        <div className="track">
          <div className="track_image">
            <img src={currentlyPlaying.image} alt="currentyPlaying" />
          </div>
          <div className="track_info">
            <h4>{currentlyPlaying.name}</h4>
            <h6>{currentlyPlaying.artists.join(", ")}</h6>
          </div>
        </div>
      )
    }
    </Container>
}

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &track_info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      h4 {
        color: white;
      }
      h6 {
        color: #B3B3B3 ;
      }
    }
  }
`;
