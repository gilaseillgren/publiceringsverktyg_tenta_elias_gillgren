import styled from "styled-components"

export const AboutPage = styled.section`
    min-height: calc(100vh - 5rem - 9rem);
    padding: 5rem 0;
`
export const AboutCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;

    @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    column-gap: 4rem;
}
`
export const AboutStack = styled.div`
    margin-top: 5rem;
    h3 {
        color: var(--clr-white);
    }
    span {
        display: inline-block;
        background: var(--clr-grey-9);
        color: var(--clr-grey-5);
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.85rem;
        margin-top: 0.5rem;
    }
`

export const AboutText = styled.article`
    grid-column: 2 / 12;
    text-align: center;
`
export const CvButton = styled.div`
    display: block;
    margin: 3rem 0 0 0;
    background: none;
    border: none;
    box-shadow: none;
    
    a {
      color: var(--light1);
    }
`