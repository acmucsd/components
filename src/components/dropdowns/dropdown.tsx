import React, {useState} from 'react';
import './dropdown.css';

export interface DropdownProps {
    theme?: 'light' | 'dark';
    size?: 'desktop' | 'mobile';
    suggestions?: string[];
    onChange?: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
    theme = 'light',
    size = "desktop",
    suggestions = [],
    onChange

}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setIsSelected] = useState<string | null>(null);
    // const options = {[...(selected ? [selected] : []), ...suggestions.filter(s => s !== selected)]};
    // const filtered = selected ? suggestions.filter(s => s !== selected) : suggestions;
    const options = [...suggestions].sort((a, b) => a.localeCompare(b));
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (option: string) => {
        setIsSelected(option);
        setIsOpen(false);
        onChange?.(option);
    }

    return (
        <div className={`dropdown-wrapper ${theme} ${size}`}>
            <div className="dropdown-header" onClick={toggleDropdown}>
                <span>{selected ?? 'Select an option'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M16.59 9.09L12 13.67L7.41 9.09L6 10.5L12 16.5L18 10.5L16.59 9.09Z" fill="black"/>
                </svg>
            </div>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, i) => (
                        <li key={i} className="dropdown-item" onClick={() => handleSelect(option)}>
                        {option}
                    </li>
                    ))}
                </ul>
            )}
        </div>
    );
}