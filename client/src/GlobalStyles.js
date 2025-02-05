import { createGlobalStyle } from 'styled-components';
import Medium from './fonts/HelveticaNeueCyr-Medium.otf'
import Bold from './fonts/HelveticaNeueCyr-Bold.otf'
import Black from './fonts/HelveticaNeueCyr-Black.otf'

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  
  body {
    line-height: 1;
    height: 100%;
    width: 100%;
  }
  
  a:active, a:focus { outline: none; }
  
  input, textarea {outline:none;}
  input:active, textarea:active {outline:none;}
  :focus {outline:none;}
  textarea {resize:none;}
  textarea {resize:vertical;}
  textarea {resize:horizontal;}
  
  
  ol,
  ul {
    list-style: none;
  }
  
  blockquote,
  q {
    quotes: none;
  }
  
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  @font-face {
  font-family: Medium;
  src: url(${Medium});
  }

  @font-face {
    font-family: Bold;
    src: url(${Bold});
  }

  @font-face {
    font-family: Black;
    src: url(${Black});
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  body.no-scroll {
    overflow: hidden;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  /*Сброс стилей */
  
  
  html {
    font-size: 55px;
    height: 100%;
    width: 100%;
  }
  
  body {
    margin: 0;
    width: 100%;
    color: #a3a2a8;
    font-family: Medium;
    background-color: #edeef0;
  }
  
  body > div {
    height: 100%;
  }
`;

