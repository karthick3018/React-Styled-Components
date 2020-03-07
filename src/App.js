import React from 'react';
import {
  DivWrapper,
  Header,
  TopStickyBar,
  SideStickyBar,
  BodyText,
  BodyWrapper,
  FormWrapper,
  InputBox,
  ImageWrapper,
  Image,
  GridDiv,
  GridHeading,
  Button
} from './style';

function App() {
  return (
     <DivWrapper>

      <TopStickyBar>Nav bar</TopStickyBar>

      <SideStickyBar>Side Bar</SideStickyBar>
      

       <Header> Lorem ipsum </Header>


       <BodyWrapper>
          <BodyText>
            The standard Lorem Ipsum passage, used since the 1500s
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </BodyText>
        
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        
       </BodyWrapper> 
       <FormWrapper>
          Box 1<InputBox/>
          Box 2<InputBox/>
          Box 3<InputBox/>
          Box 4<InputBox/>
          Box 5<InputBox/>
          Box 6<InputBox/>
          Box 7<InputBox/>
          Box 8<InputBox/>
        </FormWrapper>

        <GridDiv>
          <GridHeading>
            Heading 1
          </GridHeading>

          <Image/>

          <BodyText>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."What am I going to do with all these render props components now that react hooks solve the code reuse problem better than render props ever did?
          </BodyText>

          <Button>Start Button</Button>
        
        </GridDiv>

     </DivWrapper>
  );
}


export default App;

















