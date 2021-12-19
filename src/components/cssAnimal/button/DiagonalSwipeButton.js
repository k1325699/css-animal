// 09.編號26 三角空洞合併按鈕
import styled from "styled-components";

const DiagonalSwipeButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  z-index: 0;
  font-weight: bold;
`;

const Button = styled.a`
  text-decoration: none;
  position: relative;
  width: 250px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: #250e74;
  border: 4px solid #250e74;
  font-size: 24px;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: 0.5s;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-top: 40px solid #250e74;
    border-bottom: 40px solid #250e74;
    border-right: 40px solid transparent;
    z-index: -1;
    transform: translatex(-100%);
    transition: 0.5s;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-top: 40px solid #250e74;
    border-bottom: 40px solid #250e74;
    border-left: 40px solid transparent;
    z-index: -1;
    transform: translatex(100%);
    transition: 0.5s;
  }
  &:hover {
    color: white;
  }
  &:hover:before,
  &:hover:after {
    transform: translatex(0);
  }
`;
export default function DiagonalSwipeButton() {
  return (
    <DiagonalSwipeButtonWrapper>
      <Button>button</Button>
    </DiagonalSwipeButtonWrapper>
  );
}
