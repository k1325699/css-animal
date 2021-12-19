// 07.編號07 內部旋轉出現按鈕

import styled from "styled-components";
const RotetingButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
`;
const Button = styled.a`
  text-decoration: none;
  color: #e1332d;
  font-family: sans-serif;
  letter-spacing: -2px;
  font-size: 40px;
  font-weight: 300;
  border: 3px solid #e1332d;
  padding: 20px 40px;
  transition: all 1s;
  &:hover {
    font-weight: 900;
    letter-spacing: 10px;
    border: 7px solid #e1332d;
  }
`;
export default function StretchinButton() {
  return (
    <RotetingButtonWrapper>
      <Button href="#">Button</Button>
    </RotetingButtonWrapper>
  );
}
