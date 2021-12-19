// 20.編號08 變換文字按鈕

import styled from "styled-components";
const SwipeButtonTopToBottomWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  margin-bottom: 2px;
`;
const Button = styled.a`
  text-decoration: none;
  color: white;
  font-family: sans-serif;
  letter-spacing: -2px;
  font-size: 40px;
  font-weight: 300;
  border: 3px solid white;
  padding: 20px 40px;
  transition: all 1s;
  position: relative;
  overflow: hidden;

  &:before {
    content: "YEAH!";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f44336;
    transform: translateY(-100%);
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover:before {
    transform: translatey(0);
  }
`;
export default function SwipeButtonTopToBottom() {
  return (
    <SwipeButtonTopToBottomWrapper>
      <Button href="#">Hover Me</Button>
    </SwipeButtonTopToBottomWrapper>
  );
}
