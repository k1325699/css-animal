// 06.編號23 斜線旋轉按鈕
import styled from "styled-components";

const TwoCutsButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  z-index: 0;
`;

const Button = styled.a`
  text-decoration: none;
  width: 160px;
  height: 60px;
  color: black;
  line-height: 60px;
  text-align: center;
  text-transform: capitalize;
  font-size: 25px;
  position: relative;
  transition: 0.2s;
  overflow: hidden;

  & span {
    position: absolute;
    width: 156px;
    height: 56px;
    top: 0;
    left: 0;
    background: transparent;
    border: 2px solid black;
    z-index: -1;
  }
  span:before {
    content: "";
    position: absolute;
    width: 8%;
    height: 500%;
    background: white;
    top: 50%;
    left: 50%;
    transition: 0.2s;
    transform: translate(-50%, -50%) rotate(-60deg);
  }
  &:hover span:before {
    width: 100%;
    background: black;
    transform: translate(-50%, -50%) rotate(60deg);
  }
  &:hover {
    color: white;
  }
`;
export default function TwoCutsButton() {
  return (
    <TwoCutsButtonWrapper>
      <Button>
        button
        <span></span>
      </Button>
    </TwoCutsButtonWrapper>
  );
}
