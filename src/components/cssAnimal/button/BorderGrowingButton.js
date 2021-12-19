// 13.編號19 外框對角拉長按鈕
import styled from "styled-components";

const BorderGrowingButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: verdana;
  z-index: 0;
  background: #272727;
  margin-bottom: 2px;
`;
const Button = styled.button`
  border: none;
  padding: 12px 40px;
  background: #c47135;
  color: white;
  font-size: 22px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: -5px;
    left: -5px;
    border-top: 2px solid #c47135;
    border-left: 2px solid #c47135;
    transition: 0.5s;
  }
  &:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    bottom: -5px;
    right: -5px;
    border-bottom: 2px solid #c47135;
    border-right: 2px solid #c47135;
    transition: 0.5s;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
    height: 100%;
  }
`;
export default function BorderGrowingButton() {
  return (
    <BorderGrowingButtonWrapper>
      <Button>submit</Button>
    </BorderGrowingButtonWrapper>
  );
}
