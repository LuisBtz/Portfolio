import { createGlobalStyle } from 'styled-components';


import twreot from '../../assets/fonts/VT323-Regular.eot';
import twrsvg from '../../assets/fonts/VT323-Regular.svg';
import twrttf from '../../assets/fonts/VT323-Regular.ttf';
import twrwoff from '../../assets/fonts/VT323-Regular.woff';
import twrwoff2 from '../../assets/fonts/VT323-Regular.woff2';


export const Typography = createGlobalStyle`
    @font-face {
        font-family: 'VT323';
        src: url('${twreot}');
        src: url('${twrwoff2}') format('woff2'),
            url('${twrwoff}') format('woff'),
            url('${twrttf}') format('truetype'),
            url('${twrsvg}#PPPangramSans-Semibold') format('svg');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
    }
    :root {
    --regular: 'VT323', monospace;
    --black: #000000;
    --white: #FFFFFF;
    --pink: #DB31DE;
    --green: #00FF28;
    --blue: #00FFF6;
    --purple: #8400FF;
    overflow-wrap: break-word;
}
html {
      scroll-behavior: smooth;
      font-size: 18px !important;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
    body {
        background-color: var(--black);
        color: var(--white);
        font-size: 16px;
        font-family: var(--regular);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`
