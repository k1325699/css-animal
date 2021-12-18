// 07.編號10 卡片切換按鈕

import styled from "styled-components";
const TwoLayersSwappingButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
`;
const Button = styled.a`
  text-decoration: none;
  background: #262626;
  color: transparent;
  font-family: sans-serif;
  font-size: 40px;
  font-weight: 300;
  border: 3px solid #262626;
  padding: 20px 40px;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;

  &:before {
    content: "Hover Me";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #fffa65;
    color: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }
  &:after {
    content: "Hover Me";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #fffa65;
    color: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    transform: translate(-100%, 100%);
  }
  &:hover:before {
    transform: translate(100%, -100%);
  }
  &:hover:after {
    transform: translate(0, 0);
  }
`;
export default function TwoLayersSwappingButton() {
  return (
    <TwoLayersSwappingButtonWrapper>
      <Button href="#">Hover Me</Button>
    </TwoLayersSwappingButtonWrapper>
  );
}
