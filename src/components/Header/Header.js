import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f5ccff;
  box-shadow: 6px 6px 17px #c27fd3;
  margin-bottom: 3px;
`;
const HeaderTitle = styled.h1`
  font-size: 28px;
  padding: 15px 0 15px 15px;
  font-style: italic;
  font-weight: bold;
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
  padding: 20px 40px;
  transition: 0.5s;
  ${(props) =>
    props.$active &&
    `
    background: #712ddf;
    color:#fff;
  `}
  &:hover {
    background: #712ddf;
    color: #fff;
  }
`;
export default function Header() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <HeaderWrapper>
      <HeaderTitle>
        <HeaderTitleLink to="/">幻幻的CSS特效</HeaderTitleLink>
      </HeaderTitle>
      <Navbar>
        <Nav to="/" $active={location.pathname === "/"}>
          Button
        </Nav>
      </Navbar>
    </HeaderWrapper>
  );
}
