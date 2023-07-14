import React, {ChangeEvent} from "react";

interface OptionsInput {
  value: string | '';
  label: string | '';
}

interface SelectInput_props {
  label?: string;
  placeHolder?: string;
  name?: string;
  options: OptionsInput[];
  required?: boolean;
  handleChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

export default function SelectInput({ options, label, placeHolder, name, handleChange, required }: SelectInput_props) {
  return (
    <>
      <label className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>

      <select
        // aria-label="Favorite Game"
        name={name}
        className="form-select d-block w-100 rounded-pill text-lg"
        onChange={handleChange}
        required={required}
      >
        {placeHolder && <option value='' disabled selected>{placeHolder}</option>}

        {options.map((key, index) => (
          <option value={key.value} key={index}>
            {key.label}
          </option>
        ))}
      </select>
    </>
  );
}
