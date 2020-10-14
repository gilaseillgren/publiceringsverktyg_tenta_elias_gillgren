import styled from "styled-components"

 export const LandingSection = styled.section`
    padding: 5rem 0;
    padding-bottom: 0!important;
`
export const LandingText = styled.div`
    text-align: center;
    width: 95%;
    max-width: 600px;
    margin: auto;
    margin-bottom: 7rem;
    
    p {
        color: white;
    }
`
export const LandingNavigation = styled.div`
    grid-template-columns: 1fr 1fr !important;
    column-gap: 0 !important;

    @media screen and (min-width: 676px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        -webkit-column-gap: 2rem;
        column-gap: 2rem;
    }
    a:nth-child(1) article {
        background: var(--special1);
    }
    a:nth-child(2) article {
        background: var(--special2);
    }
    a:nth-child(3) article {
        background: var(--special3);
    }
    a:nth-child(4) article {
        background: var(--special4);
    }
`
export const NavBox = styled.article`
    background: lightgrey;
    padding: 7rem 1.5rem;
    margin-bottom: 0 !important;
    border-radius: 0;
    text-align: center;
    transition: var(--transition);

        h4 {
            color: var(--clr-grey-10);
            font-size: 2rem;
        }
`