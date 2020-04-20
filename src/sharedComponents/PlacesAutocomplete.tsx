import React from "react"
import { Flex } from "rebass"
import usePlacesAutocomplete from "use-places-autocomplete"
import { CustomSelect } from "./CustomSelect"

export const PlacesAutocomplete = ({ onChange, placeholder, ...otherProps }: { onChange?: (place) => void, placeholder?: string }) => {
    const {
        suggestions: { data },
        setValue,
    } = usePlacesAutocomplete({
        requestOptions: { /* Define search scope here */ },
        debounce: 300
    })

    const options = data.map(suggestion => {
        const {
            id,
            structured_formatting: { main_text, secondary_text }
        } = suggestion

        return (
            { value: id, label: `${main_text} - ${secondary_text}` }
        )
    })

    return (
        <Flex flex={1} flexDirection="column">
            <CustomSelect options={options} onInputChange={inputValue => setValue(inputValue)} onChange={onChange} placeholder={placeholder} {...otherProps} />
        </Flex>
    )
}