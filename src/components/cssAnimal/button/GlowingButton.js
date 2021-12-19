// 21.編號09 光線飄過按鈕

import styled from "styled-components";
const GlowingButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
`;
const Button = styled.a`
  text-decoration: none;
  color: white;
  font-family: sans-serif;
  font-size: 40px;
  font-weight: 300;
  border: 3px solid white;
  padding: 20px 40px;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    background: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    position: absolute;
    transition: 0.5s;
    transform: translate(-100%) rotate(45deg);
  }
  &:hover {
    background: #f44336;
  }
  &:hover:before {
    transform: translate(100%) rotate(45deg);
  }
`;
export default function GlowingButton() {
  return (
    <GlowingButtonWrapper>
      <Button href="#">Hover Me</Button>
    </GlowingButtonWrapper>
  );
}
