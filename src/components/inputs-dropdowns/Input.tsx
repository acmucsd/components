import React, { useState, useRef } from 'react';
import './inputs.css'

export interface InputProps {
    theme?: 'light' | 'dark'; // Define theme prop
    type?: 'primary' | 'danger';
    size?: 'desktop' | 'mobile';
    suggestions?: string[];
    onChange?: (value: string) => void;
    
}

export const Input: React.FC<InputProps> = ({
    theme = "light",
    type = 'primary',
    size = 'desktop',
    suggestions = [],
    onChange
}) => {
    const [value, setValue]= useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const bestSuggestion = suggestions.find(s => 
        s.toLowerCase().startsWith(value.toLowerCase()) && s.toLowerCase() !== value.toLowerCase())
        || '';
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        setValue(newVal);
        onChange?.(newVal);
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if ((e.key === 'ArrowRight' || e.key === 'Tab') && bestSuggestion) {
            e.preventDefault();
            setValue(bestSuggestion);
            onChange?.(bestSuggestion);

        }
    }
    return  (      
       
    <div className={`inline-suggest-wrapper ${size}`}>
        <input 
            ref={inputRef}
            className={`input ${theme} ${type} ${size}`}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
        {value && bestSuggestion && (
        <div className={`inline-suggestion ${theme}`}>
          <span>{value}</span>
          <span className="hint">{bestSuggestion.slice(value.length)}</span>
        </div>
      )}
    </div>
        
    );
}