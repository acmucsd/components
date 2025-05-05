import React, { useState, useRef } from 'react';
import './inputs.css'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    theme?: 'light' | 'dark'; // Define theme prop
    variant?: 'primary' | 'error';
    inputSize?: 'desktop' | 'mobile';
    suggestions?: string[];
    onValueChange?: (value: string) => void;
    
}

export const Input: React.FC<InputProps> = ({
    theme = "light",
    variant = 'primary',
    inputSize = 'desktop',
    suggestions = [],
    onValueChange,
    ...rest
}) => {
    const [value, setValue]= useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const bestSuggestion = suggestions.find(s => 
        s.toLowerCase().startsWith(value.toLowerCase()) && s.toLowerCase() !== value.toLowerCase())
        || '';
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        setValue(newVal);
        onValueChange?.(newVal);
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if ((e.key === 'ArrowRight' || e.key === 'Tab') && bestSuggestion) {
            e.preventDefault();
            setValue(bestSuggestion);
            onValueChange?.(bestSuggestion);

        }
    }
    return  (      
       
    <div className={`inline-suggest-wrapper ${inputSize}`}>
        <input 
            ref={inputRef}
            className={`input ${theme} ${variant} ${inputSize}`}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            {...rest}
        />
        {value && bestSuggestion && (
        <div className={`inline-suggestion ${theme}`}>
          <span>{value}</span>
          <span className="hint"
                onClick={() => {
                    setValue(bestSuggestion);
                    onValueChange?.(bestSuggestion);
                    inputRef.current?.focus(); // optional: put focus back in input
                }}
          >{bestSuggestion.slice(value.length)}</span>
        </div>
      )}
    </div>
        
    );
}