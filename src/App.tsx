import React from 'react';
import logo from './logo.svg';
import './App.css';
import bus from './svg/bus.svg'
import { Rating} from './components/Rating/Rating';
import { styled } from 'styled-components';
import { Link1 } from './components/Link.styled';
import { StyledBtn } from './components/Button.styled';
import { Menu } from './components/Menu.styled';
import { myTheme } from './styles/ThemeStyles';
import { Card } from './components/Card';


function App() {
  console.log("App rendered");
  return (
    <div className="App">
      {/* <PageTitle title={"This is App component"} />
      <PageTitle title={"Users"} />
      Article 1
      <Accordion titleValue={"Hello"} body1Value={1} collapsed={true} />
      <Accordion titleValue={"Menu"}  body1Value={2} collapsed={true}/>
    Article 2
    <Rating value={3}/> 
    <Rating value={5}/> */}
      {/* <Menu>
        <ul>
          <li><a href="">menu item 1</a></li>
          <li><a href="">menu item 2</a></li>
          <li><a href="">menu item 3</a></li>
        </ul>
      </Menu> */}


      <Box>
        <Card/>
        {/* <StyledBtn color={myTheme.color.primary} radius='20px' btnType={"primary"} > Menu</StyledBtn>
        <StyledBtn color={myTheme.color.secondary} btnType={"outlined"}> Menu</StyledBtn>
        <StyledBtn radius=''>Menu</StyledBtn>
        <StyledBtn textType={"textprimary"}>Menu</StyledBtn> */}

        
        
        
        {/* <StyledBtn as='a' href='#'> Article 2</StyledBtn> //(attribute as) 
        <StyledBtn as={Link1} href='#'> Article Link 2</StyledBtn>
        <SuperBtn1>Super Article 2</SuperBtn1> */}

      </Box>
    </div>
  );
}
type PageTitlePropsType={
  title: string
}
function PageTitle(props:PageTitlePropsType){
  return <h1>{ props.title }</h1>
}




  /* ampersand*/


const Box= styled.div`
  height: 100vh;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 20px;

  button{
  cursor:pointer
}
/* Interpolation  to select particular component */
  ${Link1}{
    cursor: zoom-in;
  }

  @media ${myTheme.media.mobile}{
    flex-direction: column;
  }
`







export default App;
