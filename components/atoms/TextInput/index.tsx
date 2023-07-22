import React, { ChangeEvent } from "react";

export interface TextInputProps {
  type: string;
  label?: string | "";
  placeHolder?: string | "";
  name?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  value?: string | number;
  disabled?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
  label,
  placeHolder,
  name,
  type,
  handleChange,
  maxLength,
  minLength,
  required,
  value,
  disabled,
}: TextInputProps) {
  return (
    <>
      <label
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        name={name}
        aria-describedby="email"
        autoComplete=""
        required={required}
        placeholder={placeHolder}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        disabled={disabled}
      />
    </>
  );
}
