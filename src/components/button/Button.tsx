import React from 'react';
import './button.css';

/** Primary UI component for user interaction */
export interface ButtonProps {
  mode?: 'light' | 'dark',
  primary?: boolean,
  danger?: boolean,
  desktop?: 'desktop' | 'mobile',
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  mode = 'light',
  primary = true,
 
  size = 'medium', 
  label, 
  desktop = 'desktop',
  danger = false,
  ...props }) => {
     
    const modeClass = mode === 'dark' ? 'storybook-button--dark' : 'storybook-button--light';


    const variantClass = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

 
    const dangerClass = danger ? 'storybook-button--danger' : '';

 
    const deviceClass = desktop  === 'desktop' ? `storybook-button--desktop--${size}` : `storybook-button--mobile--${size}`;

  
  return (
    <button
      type="button"
      className={['storybook-button', deviceClass, dangerClass, variantClass, modeClass].join(' ')}
      
      {...props}
    >
      {label}
    </button>
  );
};