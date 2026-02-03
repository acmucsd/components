import React, { FC, useEffect, useState } from 'react';
import './checkbox.css';

export interface CheckboxProps {
  name: string;
  checked?: boolean;
  disabled?: boolean;
  mode?: 'light' | 'dark';
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  name,
  checked = false,
  disabled = false,
  mode = 'light',
  label,
  onChange,
}) => {
  const modeClass = mode === 'dark' ? 'storybook-checkbox--dark' : 'storybook-checkbox--light';
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <label className={['storybook-checkbox', modeClass].join(' ')}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
      />
      {label && <span className="storybook-checkbox__label">{label}</span>}
    </label>
  );
};
