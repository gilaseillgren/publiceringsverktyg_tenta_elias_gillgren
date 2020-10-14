import styled from "styled-components"

 export const ProjectSection = styled.section`
 padding: 5rem 0;
`
export const ProjectCenter = styled.section`
width: 90vw;
margin: 0 auto;
max-width: 1170px;

@media screen and (min-width: 992px) {
    width: 95vw;
}
`
export const ProjectArticle = styled.article`
display: grid;
margin-bottom: 4rem;

@media screen and (min-width: 992px) {
    grid-template-columns: repeat(9, 1fr);
    align-items: center;
}
`
export const ProjectInfo = styled.div`
background: var(--clr-white);
padding: 1rem 2rem;
border: 0;
@media screen and (min-width: 992px) {
    z-index: 1;
    grid-column: 4 /9;
    grid-row: 1 / 1;
}
    p {
    color: var(--clr-primary-1);
    }
`
export const ProjectStack = styled.div`
margin-bottom: 1rem;
    span {
    text-transform: uppercase;
    display: inline-block;
    font-weight: 900;
    font-size: 0.7rem;
    align-items: center;
    color: var(--clr-primary-9);
    padding: 7px 12px;
    margin: 0 10px 0 0;
    background-color: var(--clr-primary-2);
    }
`
export const ProjectLinks = styled.div`
padding-top: 1rem;
`