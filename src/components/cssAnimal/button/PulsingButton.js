// 23.編號25 hover放射active上下按動按鈕
import styled from "styled-components";

const PulsingButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  z-index: 0;
  background: #10ac84;
  font-weight: bold;
  margin-bottom: 2px;
`;

const Button = styled.a`
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  padding: 25px 50px;
  background: white;
  color: #777;
  border-radius: 100px;
  font-size: 24px;
  transition: 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 100px;
    transition: 0.4s;
    z-index: -1;
  }
  &:hover:before {
    transform: scalex(1.4) scaley(1.6);
    opacity: 0;
  }
  &:hover {
    transform: translatey(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translatey(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
export default function PulsingButton() {
  return (
    <PulsingButtonWrapper>
      <Button>hover me</Button>
    </PulsingButtonWrapper>
  );
}
