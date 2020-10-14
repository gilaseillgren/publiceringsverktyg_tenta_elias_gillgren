import styled from "styled-components"

export const JobSection = styled.section`
    background: hsl(0deg 0% 0% / 56%);
    padding: 5rem 0;
`
export const JobCenter = styled.div`
    width: 50vw;
    margin: 0 auto;
    max-width: var(--max-width);
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
`
export const JobButton = styled.button`
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    color: var(--light1);
`
export const JobInfo = styled.article`
    text-align: center; 
    h3 {
        font-weight: 400;
        color: var(--light1);
    }
    .job-date {
    letter-spacing: var(--spacing);
    font-style: italic;
}
`