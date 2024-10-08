import { fontSize, fontWeight } from "@/_shared/typography";
import styled from "styled-components";

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Content = styled.div`
  padding-top: 60px;
  height: 60%;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
  font-weight: ${fontWeight.semiBold};
  font-size: ${fontSize.body1};
  color: #a4a6aa;
`;
