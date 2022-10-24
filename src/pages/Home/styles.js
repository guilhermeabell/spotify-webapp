import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify_footer {
    background-color: #000;
  }
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
`
