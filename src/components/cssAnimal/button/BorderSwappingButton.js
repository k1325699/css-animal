// 19.編號18 四條線對應互換按鈕
import styled from "styled-components";

const BorderSwappingButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: verdana;
  z-index: 0;
  background: #212121;
`;
const Button = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: 3px;
  height: 60px;
  width: 200px;
  line-height: 60px;
  text-align: center;
  color: #fdc518;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    height: 90px;
    width: 200px;
    top: -15px;
    left: 0;
    border-left: 2px solid red;
    border-right: 2px solid #fdc518;
    transition: 0.4s;
  }
  &:after {
    content: "";
    position: absolute;
    height: 60px;
    width: 230px;
    top: 0;
    left: -15px;
    border-top: 2px solid red;
    border-bottom: 2px solid #fdc518;
    transition: 0.4s;
    transition-delay: 0.2s;
  }
  &:hover:before {
    transform: rotatey(180deg);
  }
  &:hover:after {
    transform: rotatex(-180deg);
  }
`;
export default function BorderSwappingButton() {
  return (
    <BorderSwappingButtonWrapper>
      <Button href="#">Hover Me</Button>
    </BorderSwappingButtonWrapper>
  );
}
