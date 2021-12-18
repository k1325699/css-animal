// 18.編號21 四條線向內合併按鈕
import styled from "styled-components";

const FourBordersGrowingButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  z-index: 0;
  background: #272727;
`;
const Button = styled.button`
  background: transparent;
  border: none;
  position: relative;
  width: 300px;
  height: 90px;
  text-transform: uppercase;
  line-height: 60px;
  text-align: center;
  color: white;
  font-size: 24px;
  letter-spacing: 15px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 4px;
    background: white;
    transition: 0.5s;
  }
  &:hover:before {
    left: 0;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 4px;
    background: white;
    transition: 0.5s;
  }
  &:hover:after {
    right: 0;
  }
  span:before {
    content: "";
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 4px;
    height: 100%;
    background: white;
    transition: 0.5s;
  }
  &:hover span:before {
    bottom: 0;
  }
  span:after {
    content: "";
    position: absolute;
    top: -100%;
    right: 0;
    width: 4px;
    height: 100%;
    background: white;
    transition: 0.5s;
  }
  &:hover span:after {
    top: 0;
  }
`;
export default function FourBordersGrowingButton() {
  return (
    <FourBordersGrowingButtonWrapper>
      <Button>
        button<span></span>
      </Button>
    </FourBordersGrowingButtonWrapper>
  );
}
