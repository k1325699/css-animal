// 15.編號22 波浪上升按鈕
import styled, { keyframes } from "styled-components";

const WavyButtonWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  z-index: 0;
  background: #272727;
  margin-bottom: 2px;
`;
const wavy = keyframes`
  100%{transform:rotate(360deg)}
`;
const Button = styled.a`
  text-decoration: none;
  padding: 15px 30px;
  color: #00aeff;
  font-size: 18px;
  letter-spacing: 3px;
  border: 2px solid #00aeff;
  text-transform: uppercase;
  position: relative;
  transition: 0.8s;
  overflow: hidden;

  .wave {
    position: absolute;
    width: 100%;
    height: 160%;
    left: 0;
    top: 100%;
    background: #00aeff;
    z-index: -1;
    transition: 0.8s;
  }
  .wave:before {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    background: #272727;
    border-radius: 40%;
    top: -480px;
    left: -230px;
    z-index: -1;
    animation: ${wavy} 3s linear infinite;
  }
  &:hover .wave {
    top: -60%;
  }
  &:hover {
    color: #fff;
  }
`;
export default function WavyButton() {
  return (
    <WavyButtonWrapper>
      <Button>
        button
        <div className="wave"></div>
      </Button>
    </WavyButtonWrapper>
  );
}
