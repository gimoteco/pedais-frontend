import React from "react";
import { Container } from "./Container";
import { Header } from "./Header";
import { ContentContainer } from "./ContentContainer";
import { Flex } from "rebass";
import { RotatingLoadingIndicator } from "./RotatingLoadingIndicator";
import { Helmet } from "react-helmet"
function LoadingIndicator({ isLoading }) {
  if (!isLoading) return null;

  return (
    <Flex height={"100%"} alignItems="center" mt={3} justifyContent="center">
      <RotatingLoadingIndicator color="primary" />
    </Flex>
  );
}

const DEFAULT_TITLE = 'Pedais'


export const BasePage = ({ children, title = DEFAULT_TITLE, loading = false, noPadding = false }) => (
  <Container>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />
    <ContentContainer noPadding={noPadding}>
      {loading ? <LoadingIndicator isLoading={loading} /> : children}
    </ContentContainer>
  </Container>
);
