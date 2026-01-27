import React, { FC, useContext } from 'react';
import { RadioGroupContext } from './RadioGroup';
import './radio.css';

export interface RadioProps {
  name?: string;
  value: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  mode?: 'light' | 'dark';
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: FC<RadioProps> = ({
  name: nameProp = '',
  value,
  defaultChecked = false,
  disabled: disabledProp = false,
  mode: modeProp = 'light',
  label,
  onChange: onChangeProp,
}) => {
  const context = useContext(RadioGroupContext);

  // Use context values if available, otherwise fall back to props
  const name = context?.name ?? nameProp;
  const disabled = context?.disabled ?? disabledProp;
  const mode = context?.mode ?? modeProp;

  const modeClass = mode === 'dark' ? 'storybook-radio--dark' : 'storybook-radio--light';

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (context) {
      context.onChange(value);
    }
    onChangeProp?.(event);
  };

  const inputProps = context
    ? { checked: context.value === value }
    : { defaultChecked };

  return (
    <label className={['storybook-radio', modeClass].join(' ')}>
      <input
        type="radio"
        name={name}
        value={value}
        {...inputProps}
        disabled={disabled}
        onChange={onChange}
      />
      {label && <span className="storybook-radio__label">{label}</span>}
    </label>
  );
};
