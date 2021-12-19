// 03.編號06 從中間分割按鈕

import styled from "styled-components";
const ButtonHoverWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
`;
const Button = styled.a`
  text-decoration: none;
  color: #262626;
  font-family: sans-serif;
  letter-spacing: 2px;
  font-size: 45px;
  border: 3px solid #262626;
  padding: 20px 40px;
  position: relative;
  transition: all 0.5s;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #262626;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all 0.5s;
    transform: rotateX(90deg);
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #262626;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all 0.5s;
    transform: rotateY(90deg);
  }
  &:hover:before {
    transform: rotateX(0deg);
  }
  &:hover:after {
    transform: rotateY(0deg);
  }
  &:hover {
    color: #fff;
  }
`;
export default function ButtonHover() {
  return (
    <ButtonHoverWrapper>
      <Button href="#">Hover me</Button>
    </ButtonHoverWrapper>
  );
}
