import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 5px 0;
  color: white;
  background: black;
  margin-top: 10px;
`;
const FooterLink = styled.a`
  text-decoration: none;
  color: white;
`;
export default function Footer() {
  return (
    <Wrapper>
      製作於：<FooterLink href="https://github.com/k1325699">幻幻</FooterLink>
    </Wrapper>
  );
}
