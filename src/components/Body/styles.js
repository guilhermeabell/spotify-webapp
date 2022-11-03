import styled from 'styled-components'

export const Playlist = styled.div`
  margin: 0 2rem;
  align-items: center;
  grid-template-columns: 15vw 85vw;
  display: flex;
  gap: 2rem;
  .image {
    img {
      height: 15rem;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 25px;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    color: #e0dede;
    .title {
      color: white;
      font-size: 4rem;
      gap: 1rem;
    }
  }
`
export const Container = styled.div`
  .list {
    .header_row {
      display: grid;
      grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
      color: #dddcdc;
      margin-top: 1rem;
      position: sticky;
      top: 15vh;
      padding: 1rem 3rem;
      transition: 0.3s ease-in-out;
      background-color: ${({ headerBackground }) => (headerBackground ? '#000000DC' : 'none')};
    }
    .tracks {
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      margin-bottom: 5rem;
    }
    .row {
      padding: 0.5rem 1rem;
      display: grid;
      grid-template-columns: 0.3fr 3.1fr 1.9fr 0.1fr;
      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
      }
      .col {
        display: flex;
        align-items: center;
        color: #dddcdc;
        img {
          height: 40px;
        }
      }
      .detail {
        display: flex;
        gap: 1rem;
        .info {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`

export const Image = styled.div`
  img {
    height: 15rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  color: #e0dede;
`

export const Title = styled.h1`
  color: white;
  font-size: 4rem;
  gap: 1rem;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
  color: #dddcdc;
  margin-top: 1rem;
  position: sticky;
  top: 15vh;
  padding: 1rem 3rem;
  transition: 0.3s ease-in-out;
  background-color: ${({ headerBackground }) => (headerBackground ? '#000000DC' : 'none')};
`

export const Tracks = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 5rem;
`

export const Row = styled.div`
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 0.3fr 3.1fr 1.9fr 0.1fr;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const Col = styled.div`
  display: flex;
  align-items: center;
  color: #dddcdc;
  img {
    height: 40px;
  }
`

export const ImageCol = styled.div`
  height: 40px;
`

export const Detail = styled.div`
  display: flex;
  gap: 1rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`
