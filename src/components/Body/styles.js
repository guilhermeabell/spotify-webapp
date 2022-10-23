import styled from 'styled-components'

const Container = styled.div`
  .playlist {
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
  }
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
