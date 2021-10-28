import styled from "styled-components";

interface ContainerHeaderProps {
  boxShadow: boolean;
  theme?: any;
}

export const ContainerHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 20px 100px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props: ContainerHeaderProps) =>
    props.boxShadow ? `1px solid #E4E8F7` : "none"};
  @media (max-width: 980px) {
    padding: 20px;
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;
`;

export const MessageContact = styled.div`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 14px;
  margin-right: 20px;
  font-weight: 400;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const PhoneNumber = styled.a`
  text-decoration: none;
  display: flex;
  color: ${(props) => props.theme.colors.secondary};
`;
export const NumberDesktop = styled.p`
  @media (max-width: 500px) {
    display: none;
  }
`;
export const NumberMobile = styled.p`
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;
