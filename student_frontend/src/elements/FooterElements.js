import styled from "styled-components"

export const FooterContainer = styled.footer`
    height: 9rem;
    text-align: center;
    display: grid;
    place-items: self-start;
    padding: 2rem;

    h4 {
    margin-top: 0.5rem;
    color: var(--clr-white);
    font-weight: normal;
    font-size: 0.8rem;
    }
    span {
    color: var(--clr-primary-5);
    }
    .social-link {
    color: var(--clr-white);
    }
    .social-link:hover {
    color: var(--clr-primary-5);
    }
`