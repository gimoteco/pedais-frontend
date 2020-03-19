import React from "react";
import { inject, observer } from "mobx-react";
import { BasePage } from "../domains/layout/BasePage";
import { Box, Heading } from "rebass";
import { Input, Textarea } from "@rebass/forms";
import { Field } from "../sharedComponents/Field";
import { IconButton } from "../sharedComponents/IconButton";
import { Save } from "react-feather";

function AddLobby() {
  return (
    <BasePage>
      <Heading mb={3}>Adicionar pedal</Heading>

      <Box>
        <Box mb={3}>
          <Field name="Título" input={<Input type="text" />} />
        </Box>

        <Box mb={3}>
          <Field name="Data" input={<Input type="date" />} />
        </Box>

        <Box mb={3}>
          <Field name="Distância" input={<Input type="number" />} unit={"km"} />
        </Box>

        <Box mb={3}>
          <Field name="Altimetria" input={<Input type="number" />} unit={"m"} />
        </Box>

        <Box mb={3}>
          <Field
            name="Instruções de segurança"
            input={
              <Textarea placeholder="Digite aqui instruções para garantir a segurança" />
            }
          />
        </Box>

        <IconButton Icon={Save} variant="secondary">
          Salvar
        </IconButton>
      </Box>
    </BasePage>
  );
}

export default inject("lobbiesStore")(observer(AddLobby));
