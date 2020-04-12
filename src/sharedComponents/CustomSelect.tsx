import React from "react";
import Select from 'react-select';

export const CustomSelect = ({ options, ...otherProps }) => {
    return <Select styles={{
        container: (provided) => ({
            ...provided,
            width: '100%'
        })
    }} options={options} {...otherProps} />;
};
