import React from "react";
import { Container } from "./Container";
import { Header } from "./Header";
import { ContentContainer } from "./ContentContainer";

export const BasePage = ({ children, noPadding = false }) => (
  <Container>
    <Header />
    <ContentContainer noPadding={noPadding}>{children}</ContentContainer>
  </Container>
);
