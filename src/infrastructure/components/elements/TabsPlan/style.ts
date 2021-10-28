import styled, { DefaultTheme } from "styled-components";

interface TabProps {
  idTab: number;
  selectTab: number;
  theme?: DefaultTheme;
}

interface OptionSelectProps {
  optionSelect: number;
  option: number;
}

export const TitleTabs = styled.p`
  font-size: 20px;
  margin: 20px 0px;
`
export const ContainerTabs = styled.div`
  display: flex;
`;

export const Tab = styled.div`
  color: ${(props: TabProps) =>
    props.idTab === props.selectTab
      ? props.theme?.colors.primary
      : props.theme?.colors.text.primary};
  padding: 30px;
  cursor: pointer;
  text-align: center;
  letter-spacing: 0.8px;
  font-size: 12px;
  font-weight: bold;
  border-bottom: ${(props: TabProps) =>
    props.idTab === props.selectTab
      ? `2px solid ${props.theme?.colors.primary}`
      : `2px solid #E4E8F7`};
  transition: all 0.5s;
  @media (max-width:960px){
    padding: 10px;
  }
`;

export const ContainerOption = styled.div`
  padding: 40px 0px;
  border-bottom: 1px solid #e4e8f7;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const ContainerName = styled.div`
  margin-left: 20px;
  div {
    display: flex;
    margin: 10px 0px;
    cursor: pointer;
    p {
      margin-left: 10px;
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
export const ImageArrow = styled.img`
  transform: ${(props: OptionSelectProps) =>
    props.option === props.optionSelect ? `rotate(180deg)` : `rotate(0deg)`};
    transition: transform 0.5s;
`;

export const MessageOption = styled.p`
  margin: 10px 40px 10px 60px;
  text-align: justify;
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 14px;
  line-height: 24px;
  transform: ${(props: OptionSelectProps) =>
    props.option === props.optionSelect ? `scaleY(1)` : `scaleY(0)`};
  transition: transform 0.5s;
  transform-origin: top;
  height: ${(props: OptionSelectProps) =>
    props.option === props.optionSelect ? `auto` : `0px`};
`;
