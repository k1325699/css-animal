import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background: red;
  margin-bottom: 10px;
`;
const HeaderTitle = styled.h1`
  font-size: 28px;
  padding: 10px 0 10px 10px;
`;
const HeaderTitleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Navbar = styled.div`
  padding-left: 15px;
`;
const Nav = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: black;
  font-size: 18px;
  padding: 15px 10px;
  &:hover {
    background: #000;
    color: #fff;
  }
`;
export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        <HeaderTitleLink to="/">幻幻的CSS特效</HeaderTitleLink>
      </HeaderTitle>
      <Navbar>
        <Nav to="/">Button</Nav>
      </Navbar>
    </HeaderWrapper>
  );
}
