import React, { ChangeEvent } from "react";

export interface TextInputProps {
  type: string;
  label?: string | "";
  placeHolder?: string | "";
  name?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
  label,
  placeHolder,
  name,
  type,
  handleChange,
}: TextInputProps) {
  return (
    <>
      <label
        // for="email"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        // id="email"
        name={name}
        // aria-describedby="email"
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </>
  );
}
