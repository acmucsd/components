import React, { FC } from 'react';
import './radio.css';

export interface RadioProps {
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  mode?: 'light' | 'dark';
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: FC<RadioProps> = ({
  name,
  value,
  checked = false,
  disabled = false,
  mode = 'light',
  label,
  onChange,
}) => {
  const modeClass = mode === 'dark' ? 'storybook-radio--dark' : 'storybook-radio--light';

  return (
    <label className={['storybook-radio', modeClass].join(' ')}>
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label && <span className="storybook-radio__label">{label}</span>}
    </label>
  );
};
