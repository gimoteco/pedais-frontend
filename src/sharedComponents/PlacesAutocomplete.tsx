import React, { useRef } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { Input } from "@rebass/forms";
import { Flex } from 'rebass';

export const PlacesAutocomplete = ({ onChange }: { onChange?: (place) => void }) => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: { /* Define search scope here */ },
        debounce: 300
    });

    const ref = useRef<any>();
    useOnclickOutside(ref, () => {
        // When user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
    });

    const handleInput = e => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect = (place) => () => {
        setValue(place.description, false);
        clearSuggestions();
        if (onChange) onChange(place)
    };

    const renderSuggestions = () =>
        data.map(suggestion => {
            const {
                id,
                structured_formatting: { main_text, secondary_text }
            } = suggestion;

            return (
                <li
                    key={id}
                    onClick={handleSelect(suggestion)}
                >
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });

    return (
        <Flex flex={1} flexDirection="column" ref={ref}>
            <Input
                type="text" value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Nome do local" />
            {/* We can use the "status" to decide whether we should display the dropdown or not */}
            {status === 'OK' && <ul>{renderSuggestions()}</ul>}
        </Flex>
    );
};