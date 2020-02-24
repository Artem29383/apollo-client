import styled from 'styled-components';

export default {
  body: styled.div`
    position:relative;
    background-color: #151515;
    min-height: calc(100%);
`,
  form: styled.div`
    width: 400px;
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 260px;
    background-color: #BDA7A7;
    border-radius: 10px;
`,
  title: styled.div`
    text-align: center;
    color: red;
    padding-top: 10px;
`,
  inputDiv: styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  margin: 30px 0;
  padding: 0 50px;
`,
  input: styled.input`
    border: none;
    width: 100%;
    padding: 5px 0 5px 15px;
    border-radius: 5px;
`,
  button: styled.button`
    border-radius: 5px;
    border: none;
    line-height: 2;
    max-width: 100px;
    text-transform: uppercase;
    color: red;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
`
}