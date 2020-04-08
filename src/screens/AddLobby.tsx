import React from "react";
import { BasePage } from "../domains/layout/BasePage";
import { Box, Heading, Button, ImageProps } from "rebass";
import { Input, Textarea } from "@rebass/forms";
import { Field } from "../sharedComponents/Field";
import { IconButton } from "../sharedComponents/IconButton";
import { Save } from "react-feather";
import { Form } from "react-final-form";
import { format, parse } from "date-fns";
import { ImageWithPlaceholder } from "../domains/lobby/ImageWithPlaceholder";
import { IMAGE_HEIGHT } from "../domains/lobby/ImagePlaceholder";
import { uploadFileAsset } from "../utils/asset";
import { observer, inject } from "mobx-react";

interface ImagePreviewProps extends ImageProps {
  image?: File;
  onClick(): void;
}

const ImagePreview = ({
  image = undefined,
  onClick,
  ...otherProps
}: ImagePreviewProps) => {
  const imageUrl = image && URL.createObjectURL(image);

  return (
    <ImageWithPlaceholder
      onClick={onClick}
      width={1}
      height={IMAGE_HEIGHT}
      url={imageUrl}
      {...otherProps}
    />
  );
};

const initialValues = {
  "cover-image": [],
  date: format(new Date(), "yyyy-MM-dd")
};


function AddLobby({ addLobbyStore }) {
  const imageInputRef = React.useRef<HTMLInputElement | null>(null);

  async function onSubmit(values) {
    let newFilename

    if (values["cover-image"][0])
      newFilename = await uploadFileAsset(values["cover-image"][0])

    addLobbyStore.add({
      name: values.title,
      date: parse(`${values.date} ${values.hour}`, 'yyyy-MM-dd HH:mm', new Date()),
      coverImage: newFilename,
      elevationGain: parseFloat(values['elevation-gain']),
      distance: parseFloat(values.distance),
    })
  }

  return (
    <BasePage>
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
              <Field label="Data" name="date" input={<Input type="date" />} />
            </Box>

            <Box mb={3}>
              <Field label="Hora" name="hour" input={<Input type="time" />} />
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

            <IconButton Icon={Save} variant="secondary">
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

export default inject("addLobbyStore")(observer(AddLobby));

