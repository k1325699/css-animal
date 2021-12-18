// 11.編號14 旋轉替換按鈕

import styled from "styled-components";
const LayersSwappingFromLeftToRightButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  background: grey; ;
`;
const Button = styled.a`
  text-decoration: none;
  color: transparent;
  border: 3px solid #ff0;
  padding: 20px 40px;
  font-size: 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
  position: relative;

  &:before {
    content: "button";
    position: absolute;
    color: #ff0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #363636;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }
  &:hover:before {
    left: 100%;
    transform: scale(0) rotatey(360deg);
  }
  &:after {
    content: "button";
    position: absolute;
    color: #ff0;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #363636;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    transform: scale(0) rotatey(0deg);
    opacity: 0;
  }
  &:hover:after {
    left: 0;
    opacity: 100%;
    transform: scale(1) rotatey(360deg);
  }
`;
export default function LayersSwappingFromLeftToRightButton() {
  return (
    <LayersSwappingFromLeftToRightButtonWrapper>
      <Button href="#">button</Button>
    </LayersSwappingFromLeftToRightButtonWrapper>
  );
}
