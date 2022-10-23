import styled from 'styled-components'

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &__info {
      display: flex;
      flex-direction: column;
      .track_name {
        color: white;
      }
      .track_artist {
        color: #b3b3b3;
        font-size: 10px;
      }
    }
  }
`
