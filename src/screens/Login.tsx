import React from "react";
import { Flex, Box, Button } from "rebass";
import { Logo } from "../domains/layout/Logo";
import { Input } from "@rebass/forms";
import { Field } from "../sharedComponents/Field";

export default function Login() {
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
      <Flex width={[1, 1 / 2]} flexDirection="column">
        <Logo width="45%" />

        <Box width={1} mt={3} mb={2}>
          <Field
            name={"Email"}
            input={
              <Input type="email" name="email" placeholder="seu@email.com.br" />
            }
          />
        </Box>

        <Box width={1} mb={2}>
          <Field
            name={"Senha"}
            input={
              <Input type="password" name="password" placeholder="senha" />
            }
          />
        </Box>

        <Button variant="transparent" mt={3}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
