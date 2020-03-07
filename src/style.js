import styled from 'styled-components'

export const DivWrapper = styled.div`
position:relative;
`;
export const Header = styled.p`
margin-left: 20%;

`;

export const TopStickyBar = styled.div`
position: sticky;
top: 0px;
background: #256F53
;
padding: 10px;
text-align: center;
`;

export const SideStickyBar = styled.div`
position: fixed;
width: 20%;
height: 500vh;
background: #E9CCBE;


`;

export const BodyWrapper = styled.div`
display:flex;
margin-left: 20%;

`;
export const BodyText = styled.p`
max-width: 500px;
`;

export const ImageWrapper = styled.figure`
width: 500px;
height: 500px
`;

export const Image = styled.img.attrs({
  src: 'https://res.cloudinary.com/demo/basketball_shot.jpg'
})`
max-width: 100%;

`


export const FormWrapper = styled.div`
display:flex;
justify-content: space-between;
max-width: 1000px;
flex-wrap:wrap;
height:100%;
max-height:300px;
margin-left: 20%;

`;

export const InputBox = styled.input`
margin-bottom:10px

`;

export const GridDiv = styled.div`
    border: 1px solid gray;
    max-width: 300px;
    padding: 5px 10px 5px 10px;
    position : relative;
    margin-left: 20%;
    transform: rotate(20deg);  

`;

export const GridHeading = styled.h1`
  padding-left:15px;
  max-width:100%;
` ;

export const Button = styled.button`
height: 30px;
    background: bisque;
    border: 3px solid darkblue;
    width:100%;
    &:hover {
      cursor:pointer
    }
`

//register-wrapper form input:not(:last-child){

//}

//register-wrapper form input[type='email']:focus,
//register-wrapper form input[type='email']:active,

