import { Input } from "@rebass/forms"
import { inject, observer } from "mobx-react"
import React from "react"
import { Form } from "react-final-form"
import { Box, Button, Flex } from "rebass"
import { Logo } from "../domains/layout/Logo"
import { Field } from "../sharedComponents/Field"

function Login({ authStore }) {
    return (
        <Flex
            height="100vh"
            bg="primary"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width={1}
            p={3}
        >
            <Form initialValues={{}} onSubmit={console.log}>
                {({ handleSubmit }) => (
                    <Flex
                        as="form"
                        width={[1, 1 / 2]}
                        flexDirection="column"
                        onSubmit={handleSubmit}
                    >
                        <Flex justifyContent="center">
                            <Logo width={["200px", "300px"]} />
                        </Flex>

                        <Box width={1} mt={4} mb={2}>
                            <Field
                                label="Email"
                                name="email"
                                variant="login"
                                input={
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="seu@email.com.br"
                                    />
                                }
                            />
                        </Box>

                        <Box width={1} mb={2}>
                            <Field
                                name="password"
                                label="Senha"
                                variant="login"
                                input={
                                    <Input type="password" name="password" placeholder="senha" />
                                }
                            />
                        </Box>

                        <Button variant="transparent" mt={3} type="submit">
                            Entrar
                        </Button>

                        <Button
                            variant="transparent"
                            mt={3}
                            type="button"
                            onClick={authStore.loginWithFacebook}
                        >
                            Entrar com Facebook
                        </Button>
                    </Flex>
                )}
            </Form>
        </Flex>
    )
}

export default inject("authStore")(observer(Login))
