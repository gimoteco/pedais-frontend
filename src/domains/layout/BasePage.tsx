import React from "react";
import { Container } from "./Container";
import { Header } from "./Header";
import { ContentContainer } from "./ContentContainer";
import { Flex } from "rebass";
import { RotatingLoadingIndicator } from "./RotatingLoadingIndicator";

function LoadingIndicator({ isLoading }) {
  if (!isLoading) return null;

  return (
    <Flex height={"100%"} alignItems="center" justifyContent="center">
      <RotatingLoadingIndicator color="primary" />
    </Flex>
  );
}

export const BasePage = ({ children, loading = false, noPadding = false }) => (
  <Container>
    <Header />
    <ContentContainer noPadding={noPadding}>
      {loading ? <LoadingIndicator isLoading={loading} /> : children}
    </ContentContainer>
  </Container>
);
