// 14.編號17 四塊向內合併按鈕

import styled from "styled-components";

const SplittedButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: verdana;
  z-index: 0;
  background: #222;
`;
const Button = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 25px;
  color: #f6b93b;
  letter-spacing: 3px;
  padding: 25px 50px;
  border: 3px solid #f6b93b;
  transition: 0.5s;
  position: relative;
  overflow: hidden;

  &:before,
  &:after,
  span:before,
  span:after {
    content: "";
    position: absolute;
    width: 25%;
    height: 100%;
    background: #f6b93b;
    z-index: -1;
    transition: 0.5s;
  }
  &:before {
    top: 0;
    left: -25%;
  }
  &:after {
    top: -100%;
    left: 25%;
    transition-delay: 0.1s;
  }
  &:hover:before {
    top: 0;
    left: 0;
  }
  &:hover:after {
    top: 0;
    left: 25%;
  }
  span:before {
    top: 100%;
    left: 50%;
    transition-delay: 0.2s;
  }
  span:after {
    top: 0;
    left: 100%;
    transition-delay: 0.3s;
  }
  &:hover span:before {
    top: 0;
    left: 50%;
  }
  &:hover span:after {
    top: 0;
    left: 75%;
  }
  &:hover {
    color: #222;
  }
`;
export default function SplittedButton() {
  return (
    <SplittedButtonWrapper>
      <Button href="#">
        <span></span>Hover Me
      </Button>
    </SplittedButtonWrapper>
  );
}
