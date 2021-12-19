// 08.編號12 圓弧降下按鈕

import styled from "styled-components";
const CircularSwappingButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  margin-bottom: 2px;
`;
const Button = styled.button`
  border: 2px solid tomato;
  background: none;
  color: tomato;
  padding: 20px 40px;
  font-size: 25px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  transition: all 0.5s;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: tomato;
    z-index: -1;
    border-radius: 0 0 50% 50%;
    height: 0%;
    transition: all 0.5s;
  }
  &:hover:before {
    height: 190%;
  }
  &:hover {
    color: white;
  }
`;
export default function CircularSwappingButton() {
  return (
    <CircularSwappingButtonWrapper>
      <Button href="#">button</Button>
    </CircularSwappingButtonWrapper>
  );
}
