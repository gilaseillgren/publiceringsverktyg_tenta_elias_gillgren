import styled from "styled-components"

export const ServiceSection = styled.section`
    padding: 5rem 0;
`
export const ServiceCenter = styled.div`
    width: 80vw;
    margin: 0 auto;
    max-width: 800px;
    
    @media screen and (min-width: 676px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
    }
`
export const ServiceBox = styled.article`
    padding: 3rem;
    text-align: center;
    transition: var(--transition);background: rgb(0,0,0);
    background: rgb(0,0,0);
    background: linear-gradient(50deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.788953081232493) 31%, rgba(0,0,0,0.3603816526610645) 100%);
    margin-bottom: 2rem; 

    .service-icon {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        fill: var(--light1);
    }
    h4 {
        color: var(--light1);
    }
    p {
        transition: var(--transition);
    }
`