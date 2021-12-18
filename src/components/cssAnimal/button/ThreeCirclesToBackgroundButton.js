// 12.編號15 三顆球交互按鈕

import styled from "styled-components";
const ThreeCirclesToBackgroundButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: verdana;
  background: #272727;
  z-index: 0;
`;
const Button = styled.a`
  width: 220px;
  height: 80px;
  text-decoration: none;
  color: #ff0;
  font-size: 26px;
  letter-spacing: 4px;
  text-align: center;
  line-height: 80px;
  text-transform: uppercase;
  transition: 0.5s;
  position: relative;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: #ff0;
    border-radius: 50%;
    transform: translatey(-50%);
    transition: 0.3s;
    z-index: -1;
    opacity: 0;
  }
  &:before {
    left: 0;
    box-shadow: -100px 0 0 #ff0;
  }
  &:after {
    right: 0;
    box-shadow: 100px 0 0 #ff0;
  }
  &:hover:before {
    left: 50%;
    transform: translateX(-50%) translatey(-50%);
    box-shadow: 30px 0 0 #ff0;
    opacity: 1;
  }
  &:hover:after {
    right: 50%;
    transform: translateX(50%) translatey(-50%);
    box-shadow: -30px 0 0 #ff0;
    opacity: 1;
  }
  & span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ff0;
    border-radius: 8px;
    z-index: -1;
    transform: scale(0);
    transition: 0.3s;
  }
  &:hover span {
    transform: scale(1);
    transition-delay: 0.4s;
  }
  &:hover {
    color: #262626;
    transition-delay: 0.4s;
  }
`;
export default function ThreeCirclesToBackgroundButton() {
  return (
    <ThreeCirclesToBackgroundButtonWrapper>
      <Button href="#">
        <span></span>hover me
      </Button>
    </ThreeCirclesToBackgroundButtonWrapper>
  );
}
