// 01.編號04 內部旋轉出現按鈕

import styled from "styled-components";
const RotetingButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
`;
const Button = styled.a`
  text-decoration: none;
  color: #272727;
  font-family: sans-serif;
  font-size: 45px;
  border: 5px solid #272727;
  padding: 20px 40px;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: yellow;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: 0.5s;
  }
  &:hover:before {
    transform: rotate(0deg);
  }
`;
export default function RotetingButton() {
  return (
    <RotetingButtonWrapper>
      <Button href="#">Hover me</Button>
    </RotetingButtonWrapper>
  );
}
