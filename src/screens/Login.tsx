import React from "react";
import { Flex, Box, Button } from "rebass";
import { Logo } from "../domains/layout/Logo";
import { Input } from "@rebass/forms";
import { Field } from "../sharedComponents/Field";
import { Form } from "react-final-form";
import { observer, inject } from "mobx-react";

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
            <Logo width="45%" />

            <Box width={1} mt={3} mb={2}>
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
  );
}

export default inject("authStore")(observer(Login));
