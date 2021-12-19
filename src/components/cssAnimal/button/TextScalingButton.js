// 04.編號11 縮放按鈕

import styled from "styled-components";
const TextScalingButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.a`
  text-decoration: none;
  color: #262626;
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
    background: #262626;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    transform: scale(5);
    opacity: 0;
  }
  &:hover:before {
    transform: scale(1);
    opacity: 1;
  }
`;
export default function TextScalingButton() {
  return (
    <TextScalingButtonWrapper>
      <Button href="#">Hover Me</Button>
    </TextScalingButtonWrapper>
  );
}
