import styled from "styled-components"

 export const Aside = styled.aside`
    background: var(--clr-grey-10);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    place-items: center;
    opacity: 0;
    transition: var(--transition);
    transform: translateX(-100%);
`
export const CloseButton = styled.button`
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
`
export const SideContainer = styled.div`
ul {
    list-style-type: none;
}
li {
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
    opacity: 0;
}
li:nth-of-type(1) {
    animation-delay: 0.10s;
}
li:nth-of-type(2) {
    animation-delay: 0.20s;
}
li:nth-of-type(3) {
    animation-delay: 0.30s;
}
li:nth-of-type(4) {
    animation-delay: 0.40s;
}
li:nth-of-type(5) {
    animation-delay: 0.50s;
}

a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: var(--clr-grey-10);
    letter-spacing: var(--spacing);
    margin-bottom: 0.5rem;
    font-size: 2rem;
    transition: var(--transition);
    border-radius: var(--radius);
    text-decoration:none;
}
`