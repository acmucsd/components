import React from 'react';
import './button.css';

/** Primary UI component for user interaction */
export interface ButtonProps {
  mode: 'light' | 'dark',
  variant?: 'primary' | 'secondary',
  danger?: boolean,
  desktop?: boolean,
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  mode = 'light',
  variant = 'primary',
  backgroundColor, 
  size = 'medium', 
  label, 
  desktop = true,
  danger = false,
  ...props }) => {
      // Main mode: light or dark
    const modeClass = mode === 'dark' ? 'storybook-button--dark' : 'storybook-button--light';

  // Variant: primary or secondary
    const variantClass = variant === 'primary' ? 'storybook-button--primary' : 'storybook-button--secondary';

  // Danger state: danger or no danger
    const dangerClass = danger ? 'storybook-button--danger' : '';

  // Device type: desktop or mobile
    const deviceClass = desktop ? 'storybook-button--desktop' : 'storybook-button--mobile';

  // Size: small, medium, or large
    const sizeClass = `storybook-button--${size}`;
  return (
    <button
      type="button"
      className={['storybook-button', deviceClass, sizeClass, dangerClass, variantClass, modeClass].join(' ')}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};