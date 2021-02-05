import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

${'' /* Navbar */}
  .nav-menu {
    background-color: #272727;
    width: 250px;
    height : 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;  
    transition: 850ms

   
  }
  .nav-menu.active{
    left: 0;
    transition: 250ms;
  }
  .nav-text{
    justify-content: start;
    align-items: center;
    padding: 10px 0px 9px 16px;
    list-style: none;
    height: 60px;

    a{
     text-decoration: none;
     color: #f5f5f5;
     font-size: 20px;
     width: 95%;
     height: 100%;
     display: flex;
     align-items: center;
     padding: 0 16px;
     border-radius:4px;
     margin-top: 20px;

     &:hover{
       background-color: #1a83ff;
     }
    }
  }
  .nav-menu-items{
    width: 100%;
  }
  .navbar-toggle{
    background-color: #121212;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .nav-span{
    margin-left: 16px;
  }
  .menu-bars{
    font-size: 40px;
  }
  ${'' /* ///////////////////// */}
       ${'' /* Navbar End */}
${'' /* ///////////////////// */}
`;

export default GlobalStyle;
