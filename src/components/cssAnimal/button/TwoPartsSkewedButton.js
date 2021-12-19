// 22.編號24 菱形互換長方形按鈕
import styled from "styled-components";

const TwoPartsSkewedButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  z-index: 0;
  background: #10ac84;
`;

const Button = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  position: relative;
  letter-spacing: 7px;
  padding: 18px 30px;
  font-size: 28px;
  color: white;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 50%;
    left: -1%;
    top: -5px;
    background: #ee5253;
    z-index: -1;
    transform: skewx(30deg);
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  &:hover:before {
    transform: skewx(0);
    left: 50%;
    top: 0;
  }
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 50%;
    left: 51%;
    top: 5px;
    background: #0a3d62;
    z-index: -1;
    transform: skewx(30deg);
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  &:hover:after {
    transform: skewx(0);
    left: 0%;
    top: 0;
  }
`;
export default function TwoPartsSkewedButton() {
  return (
    <TwoPartsSkewedButtonWrapper>
      <Button>button</Button>
    </TwoPartsSkewedButtonWrapper>
  );
}
