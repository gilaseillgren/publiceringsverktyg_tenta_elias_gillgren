import styled from "styled-components"

export const HeroHeader = styled.header`
   margin-top: -5rem;
   height: 85vh;
   background: url(https://res.cloudinary.com/dwbikbv7n/image/upload/v1602507112/mountains-background_qsvpbf.jpg);
   position: relative;
   background-position: top;
   background-repeat: no-repeat;
   background-size: cover;

   h1 {
    color: white;
   }
   p {
    color: white;
   }
`
 export const HeroCenter = styled.div`
    height: 100%;
    display: grid;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
`
export const HeroInfo = styled.article`
    text-align: center;
`