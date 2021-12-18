// 10.編號13 三層旋轉按鈕

import styled from "styled-components";
const RotatingThreeLayersButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  background: #262626;
  margin-bottom: 2px;
`;
const Button = styled.a`
  text-decoration: none;
  background: #f1c40f;
  color: #fff;
  padding: 20px 40px;
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;

  &:before {
    content: "button";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2ce771;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: top;
    transform: rotatex(270deg);
    transition: 0.5s;
  }
  &:after {
    content: "button";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: top;
    transform: rotatex(270deg);
    transition: 0.5s;
    transition-delay: 0.25s;
  }
  &:hover:before,
  &:hover:after {
    transform: rotatex(0);
  }
`;
export default function RotatingThreeLayersButton() {
  return (
    <RotatingThreeLayersButtonWrapper>
      <Button href="#">button</Button>
    </RotatingThreeLayersButtonWrapper>
  );
}
