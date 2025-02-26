import React from 'react';
import './button.css';

/** Primary UI component for user interaction */
export interface ButtonProps {
  mode?: 'light' | 'dark',
  // variant?: 'primary' | 'secondary',
  primary?: boolean,
  danger?: boolean,
  desktop?: 'desktop' | 'mobile',
  // backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  mode = 'light',
  primary = true,
  // backgroundColor, 
  size = 'medium', 
  label, 
  desktop = 'desktop',
  danger = false,
  ...props }) => {
      // Main mode: light or dark
    const modeClass = mode === 'dark' ? 'storybook-button--dark' : 'storybook-button--light';

  // Variant: primary or secondary
    const variantClass = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  // Danger state: danger or no danger
    const dangerClass = danger ? 'storybook-button--danger' : '';

  // Device type: desktop or mobile
    const deviceClass = desktop  === 'desktop' ? `storybook-button--desktop--${size}` : `storybook-button--mobile--${size}`;

  // Size: small, medium, or large
    // const sizeClass = `storybook-button--${size}`;
  return (
    <button
      type="button"
      className={['storybook-button', deviceClass, dangerClass, variantClass, modeClass].join(' ')}
      // style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};