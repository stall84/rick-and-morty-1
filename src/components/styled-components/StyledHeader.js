import styled from 'styled-components';
import logo from '../../assets/rmpng.png'
import mobileLogo from '../../assets/rmpng-mobile.png';

export const StyledHeader = styled.header`
    height: 25vh;
    width: 100vw;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    @media(max-width: 500px) {
        height: 12.5vh;
        background-image: url(${mobileLogo});
    }
`;