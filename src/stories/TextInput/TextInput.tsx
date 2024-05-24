import { ComponentProps, useState } from 'react';

export type TextInputProps = ComponentProps<'input'> & {
    label: string;
    name: string;
};
const TextInput = ({ name, type, label, placeholder, value }: TextInputProps) => {
    const [inputValue, setInputValue] = useState(value);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <label htmlFor={name} className="block text-gray-800 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={inputValue}
                onChange={onChange}
                className="shadow appearance-none border rounded px-4 py-2 text-gray-800 w-full outline-none"
            />
        </div>
    );
};

export default TextInput;
