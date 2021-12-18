// 02.編號05 滑動(刷卡)出現按鈕

import styled from "styled-components";
const SwipeButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.a`
  text-decoration: none;
  color: #351435;
  font-family: sans-serif;
  font-size: 45px;
  border: 3px solid #351435;
  padding: 20px 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #351435;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all 0.5s;
    transform: translateX(-100%);
  }
  &:hover:before {
    transform: translatex(0);
  }
  &:hover {
    color: #fff;
  }
`;
export default function SwipeButton() {
  return (
    <SwipeButtonWrapper>
      <Button href="#">Hover me</Button>
    </SwipeButtonWrapper>
  );
}
