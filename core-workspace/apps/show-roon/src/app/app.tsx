import styled, { ThemeProvider } from 'styled-components';
import NxWelcome from './nx-welcome';
import { FullScreen, useFullScreenHandle } from "react-full-screen";


const StyledApp = styled.div`
  // Your style here
  background-color: "#2ca3e5";
  border: 1em solid blue;
  height: "100%";
  min-height: "100%";
  margin: 0
`;

const StyledHeadingParagraph = styled.p`
  border: solid 2px blue;

  & :fullscreen {
    margin-top: 10px;
    border: solid 2px red;
  }
`;

const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

// Define our `fg` and `bg` on the theme
const theme = {
  fg: "palevioletred",
  bg: "white"
};

// This theme swaps `fg` and `bg`
const invertTheme = ( fg: any, bg: any ) => ({
  fg: bg,
  bg: fg
})

function RenderSVG()
{
  //style="fill:#2ca3e5"
  return(
    <svg style={{fill: "#2ca3e5", marginTop: 484}} data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1125.7 549">
      <path d="M0 0c29.07 12 66.26 14.62 101.86 5.5 28 11.86 62.21 9.26 99.33 0 27.2 12 62.6 9.08 101.32 0 32.29 11.44 65.91 9.68 100.33 0 28.74 11.77 60.76 9.35 94.37 0 29.79 12.5 63.51 8.6 98.34 0 32.45 11.5 67.2 9.64 103.31 0 32.08 11.32 64.95 9.8 98.34 0 31.63 11.54 64.22 9.57 97.34 0 34.82 10.22 68.66 10.9 101.33 0 0 0 68.39 10.51 100.32 0 0 0 21.52-.5 28.81-.5-.21 48.1 1.67 496 0 568H0Z"/>
      </svg>
  )
}

export function App() {

  const handle = useFullScreenHandle();

  return (
    <ThemeProvider theme={theme}>
{RenderSVG()}
     </ThemeProvider>
  );
}

export default App;
