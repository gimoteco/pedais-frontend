import React from "react";
import { BasePage } from "../domains/layout/BasePage";
import { Box, Heading, Button } from "rebass";
import { Input, Textarea } from "@rebass/forms";
import { Field } from "../sharedComponents/Field";
import { IconButton } from "../sharedComponents/IconButton";
import { Save } from "react-feather";
import { Form } from "react-final-form";
import { format, parse } from "date-fns";
import { observer, inject } from "mobx-react";
import { PlacesAutocomplete } from "../sharedComponents/PlacesAutocomplete";
import { CustomSelect } from "../sharedComponents/CustomSelect";
import { ImagePreview } from "../sharedComponents/ImagePreview";

const initialValues = {
  "cover-image": [],
  date: format(new Date(), "yyyy-MM-dd")
};

function AddLobby({ addLobbyStore, groupsStore }) {
  const imageInputRef = React.useRef<HTMLInputElement | null>(null);
  const { add: { pending: loading } } = addLobbyStore
  async function onSubmit(values) {
    console.log(values)
    addLobbyStore.add({
      name: values.title,
      date: parse(`${values.date} ${values.hour}`, 'yyyy-MM-dd HH:mm', new Date()),
      coverImage: values["cover-image"][0],
      group: values["group"]?.value,
      elevationGain: parseFloat(values['elevation-gain']),
      distance: parseFloat(values.distance),
    })
  }

  const groupOptions = groupsStore.groups.map(group => ({
    label: group.name,
    value: group.id
  }))

  return (
    <BasePage title="Pedais - Adicionar pedal">
      <Heading mb={3}>Adicionar pedal</Heading>

      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, values }) => (
          <Box as="form" onSubmit={handleSubmit}>
            <Box mb={3}>
              <ImagePreview
                image={values["cover-image"][0]}
                onClick={() => imageInputRef.current!.click()}
                mb={3}
              />
              <Field
                label="Imagem de capa"
                name="cover-image"
                input={<Input ref={imageInputRef} type="file" />}
              />
            </Box>

            <Box mb={3}>
              <Field
                label="Título"
                name="title"
                input={<Input type="text" />}
              />
            </Box>

            <Box mb={3}>
              <Field
                label="Grupo"
                name="group"
                input={<CustomSelect options={groupOptions} />}
              />
            </Box>

            <Box mb={3}>
              <Field label="Data" name="date" input={<Input type="date" />} />
            </Box>

            <Box mb={3}>
              <Field label="Hora" name="hour" input={<Input type="time" />} />
            </Box>

            <Box mb={3}>
              <Field label="Ponto de encontro" name="encounter-point" input={<PlacesAutocomplete />} />
            </Box>

            <Box mb={3}>
              <Field
                label="Distância"
                name="distance"
                input={<Input type="number" />}
                unit={"km"}
              />
            </Box>

            <Box mb={3}>
              <Field
                name="elevation-gain"
                label="Altimetria"
                input={<Input type="number" />}
                unit={"m"}
              />
            </Box>

            <Box mb={3}>
              <Field
                name="safety-instructions"
                label="Instruções de segurança"
                input={
                  <Textarea placeholder="Digite aqui instruções para garantir a segurança" />
                }
              />
            </Box>

            <IconButton loading={loading} Icon={Save} variant="secondary">
              Salvar
            </IconButton>

            <Button color="text" bg="transparent">
              Cancelar
            </Button>
          </Box>
        )}
      </Form>
    </BasePage>
  );
}

export default inject("addLobbyStore", "groupsStore")(observer(AddLobby));

