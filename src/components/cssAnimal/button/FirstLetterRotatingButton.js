// 05.編號20 黑框旋轉字首放大按鈕
import styled from "styled-components";

const FirstLetterRotatingButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  z-index: 0;
  margin-bottom: 2px;
`;
const Button = styled.a`
  text-decoration: none;
  width: 160px;
  height: 60px;
  color: black;
  border: 2px solid black;
  text-align: center;
  line-height: 60px;
  font-size: 25px;
  position: relative;
  transition: 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    z-index: -1;
    opacity: 0;
    transition: 0.8s;
  }
  &:hover:before {
    opacity: 1;
    transform: rotate(15deg);
  }
  &:hover {
    color: white;
  }
  & span {
    color: transparent;
    position: relative;
  }
  & span:before {
    content: "B";
    position: absolute;
    color: black;
    transition: 0.2s;
  }
  &:hover span:before {
    color: white;
    font-size: 80px;
    transform: translatex(-35px) rotate(360deg);
  }
`;
export default function FirstLetterRotatingButton() {
  return (
    <FirstLetterRotatingButtonWrapper>
      <Button>
        <span>B</span>utton
      </Button>
    </FirstLetterRotatingButtonWrapper>
  );
}
