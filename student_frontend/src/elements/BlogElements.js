import styled from "styled-components"

export const BlogArticle = styled.article`
display: block;
margin-bottom: 2rem;
background: var(--clr-grey-10);
transition: var(--transition);
`
export const BlogCard = styled.div`
display: grid;
grid-template-rows: auto 1fr auto;
padding: 1.5rem 1rem;

    h4 {
    color: var(--clr-grey-1);
    }
    p {
    margin-bottom: 1.25rem;
    color: var(--light1);
    }
`
export const BlogFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

    p:first-of-type {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
    }
    
    p {
    margin-bottom: 0;
    font-weight: bold;
    color: var(--clr-grey-5);
    }
`