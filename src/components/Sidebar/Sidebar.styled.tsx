import { colors } from "@/_shared/colors";
import { fontSize, fontWeight } from "@/_shared/typography";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 4px 0 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  height: 100%;
  overflow: auto;
`;

export const Footer = styled.div`
  background-color: ${colors.gray900};
`;

export const List = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Menu = styled.li`
  width: 110px;
  color: ${colors.gray650};
  font-size: ${fontSize.cpation3};
  font-weight: ${fontWeight.semiBoldRegular};
  text-align: center;
  list-style: none;
  padding: 5px 18px 5px 18px;
  cursor: pointer;
  transition: 0.5s ease;
  &.selected {
    color: ${colors.white};
  }
`;
