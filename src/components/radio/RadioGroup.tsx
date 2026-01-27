import React, { createContext, FC, useState } from 'react';
import './radio.css';

export interface RadioGroupContextType {
  name: string;
  value: string | undefined;
  disabled?: boolean;
  mode?: 'light' | 'dark';
  onChange: (value: string) => void;
}

export const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined);

export interface RadioGroupProps {
  name: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  mode?: 'light' | 'dark';
  onChange?: (value: string) => void;
  children: React.ReactNode;
  orientation?: 'vertical' | 'horizontal';
}

export const RadioGroup: FC<RadioGroupProps> = ({
  name,
  value: controlledValue,
  defaultValue,
  disabled = false,
  mode = 'light',
  onChange,
  children,
  orientation = 'vertical',
}) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleChange = (value: string) => {
    if (!isControlled) {
      setInternalValue(value);
    }
    onChange?.(value);
  };

  const orientationClass = orientation === 'horizontal'
    ? 'storybook-radio-group--horizontal'
    : '';

  const contextValue: RadioGroupContextType = {
    name,
    value: currentValue,
    disabled,
    mode,
    onChange: handleChange,
  };

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div className={['storybook-radio-group', orientationClass].filter(Boolean).join(' ')}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};
