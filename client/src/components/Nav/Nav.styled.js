import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default {
  Navigation: styled.div`
    width: 100%;
    height: 80px;
    background-color: #ff2ba3;
    justify-content:space-between;
    display: flex;
`,
  Item: styled.div`
    width: 50%;
    height: 100%;
    font-size: 20px;
`,
  NavLinkItem: styled(NavLink)`
    text-decoration:none;
    margin-left: 50%;
    display: block;
    height: 100%;
    max-width: 150px;
    transform: translateX(-50%);
`,
  Title: styled.div`
    margin: 0 auto;
    text-transform:uppercase;
    color: #fff;
    text-align: center;
`,
  Img: styled.img`
    display: block;
    height: 30px;
    width: 30px;
    margin: 10px auto;
`,
  User: styled.div`
    color: #fff;
    display: flex;
    justify-content:center;
    align-items: center;
    height: 100%;
`
}