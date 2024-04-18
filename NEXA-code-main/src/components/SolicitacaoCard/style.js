import styled from "styled-components";

const  Maior = styled.div`
    margin-top: .5rem;
    width: 20rem;
    background-color: white;
    
    h1 {
        font-size : 1.2rem;
        display : flex;
        justify-content : space-between;
        padding : 0.5rem; 
    }
    p#tipo{
        text-align: center;
        text-transform: uppercase;
        font-size: 1.3rem;

    }
    p#indo{ 
        display: flex;
        justify-content: space-between;
        padding: 0.3rem;
        padding-right : 1em;
        align-items: center;

        span:nth-child(2){
            font-size: 1.7em;
        }

    }
`;
export {Maior} ;
