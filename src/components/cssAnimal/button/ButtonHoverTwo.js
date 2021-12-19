// 11.編號16 兩層中間掀開按鈕

import styled from "styled-components";
const ButtonHoverTwoWrapper = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: verdana;
  z-index: 0;
  margin-bottom: 2px;
`;
const Button = styled.a`
  width:300px;
  height:60px;
  text-decoration:none;
  font-weight:bold;
  letter-spacing:2px;
  text-align:center;
  line-height:60px;
  text-transform:uppercase;
  transition:.2s;
  position:relative;
  color:white;
}
&:before{
  content:'';
  position:absolute;
  top:-3px;
  left:-3px;
  width:100%;
  height:100%;
  background:#20caff;
  z-index:-1;
  transition:.2s;
  transform-origin:top;
  mix-blend-mode:multiply;
}
&:after{
  content:'';
  position:absolute;
  top:3px;
  left:3px;
  width:100%;
  height:100%;
  background:#ff7675;
  z-index:-1;
  transition:.2s;
  transform-origin:bottom;
  mix-blend-mode:multiply;
}
&:hover:before{
  top:-6px;
  left:0;
  transform:perspective(1000px)  rotatex(75deg);
}
&:hover:after{
  top:6px;
  left:0;
  transform:perspective(1000px)  rotatex(-75deg);
}
&:hover{
  color:#272727;
`;
export default function ButtonHoverTwo() {
  return (
    <ButtonHoverTwoWrapper>
      <Button href="#">
        <span></span>button hover effect
      </Button>
    </ButtonHoverTwoWrapper>
  );
}
