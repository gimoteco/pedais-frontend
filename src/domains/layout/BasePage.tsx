import React from "react"
import { Helmet } from "react-helmet"
import { Flex } from "rebass"
import { Container } from "./Container"
import { ContentContainer } from "./ContentContainer"
import { Header } from "./Header"
import { RotatingLoadingIndicator } from "./RotatingLoadingIndicator"
function LoadingIndicator({ isLoading }) {
    if (!isLoading) return null

    return (
        <Flex height={"100%"} alignItems="center" mt={3} justifyContent="center">
            <RotatingLoadingIndicator color="primary" />
        </Flex>
    )
}

const DEFAULT_TITLE = "Pedais"

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
)
