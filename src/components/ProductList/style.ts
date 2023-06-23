import styled from 'styled-components'

export const StyledProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 50px;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 890px) {
    gap: 30px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    display: flex;
    overflow: auto;

    padding-bottom: 10px;
    padding-right: 10px;
    margin-right: -10px;

    li {
      min-width: 300px;
    }
  }

  @media (max-width: 375px) {
    li {
      min-width: 260px;
    }
  }
`

export const StyledContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Inter', sans-serif;
    max-width: 660px;

    h1 {
        font-size: 14px;
    }

    button {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 12px;
      border-radius: 8px;
      transition: all 0.4s ease 0s;
      width: fit-content;
      padding: 0px 20px;
      height: 32px;
      color: rgb(255, 255, 255);
      background: rgb(39, 174, 96);
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 22px;
        }

        button {
          font-size: 1rem;
        }
    }
`