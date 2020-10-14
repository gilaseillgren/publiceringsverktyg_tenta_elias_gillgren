import styled from "styled-components"

export const ContactPage = styled.section`
display: grid;
place-items: center;
padding: 5rem 0;
min-height: calc(100vh - 5rem - 9rem);
`
export const ContactForm = styled.article`
background: var(--clr-white);
text-align: center;
box-shadow: var(--light-shadow);
transition: var(--transition);
width: 90vw;
max-width: 35rem;
`
export const ContactHeading = styled.h3`    
padding-top: 1.25rem;
color: var(--clr-primary-3);
`
export const FormGroup = styled.div`    
padding: 1rem 1.5rem;
`
export const ContactInput = styled.input`  
display: block;
text-align: center;
width: 100%;
padding: 0.75rem 1rem;
border: none;
margin-bottom: 1.25rem;
background: var(--clr-primary-9);
text-transform: uppercase;
letter-spacing: var(--spacing);
`
export const ContactTextarea = styled.textarea`  
display: block;
text-align: center;
width: 100%;
padding: 0.75rem 1rem;
border: none;
margin-bottom: 1.25rem;
background: var(--clr-primary-9);
text-transform: uppercase;
letter-spacing: var(--spacing);
`
export const ContactSumbitButton = styled.button`  
display: block;
width: 100%;
padding: 1rem;
border-radius: 0;
text-transform: uppercase;
background: var(--clr-primary-5);
color: var(--clr-primary-9);
letter-spacing: var(--spacing);
font-weight: 700;
transition: var(--transition);
font-size: 0.875rem;
border: 2px solid transparent;
cursor: pointer;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`


