import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import type { ChangeEventHandler, CSSProperties } from "react";
import { Label } from "../Typography";

interface IOption {
    id?: string;
    label?: string;
    value?: string;
    name?: string;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    placeholder?: string;
    disabled?: boolean;
    maxLength?: number;
    readOnly?: boolean;
    style?: CSSProperties;
    size?: string | number;
    ref?: any;
    required?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    password?: boolean;
    feedback?: boolean;
    toggleMask?: boolean;
};
export function Input({ id, label, value, name, inputMode, placeholder, disabled, maxLength, readOnly, style, size, ref, required, onChange, password, feedback = true, toggleMask = false }: IOption) {
    const containerStyle = { display: 'flex', flexDirection: 'column', gap: '0.25rem' } as any;
    if (password) {
        return (
            <div style={containerStyle}>
                <Label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {label}
                    <Password
                        id={id}
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        feedback={feedback}
                        toggleMask={toggleMask}
                        inputStyle={{ width: '100%' }}
                    />
                </Label>
            </div>
        )
    };

    return (
        <div style={containerStyle}>
            <Label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {label}
                <InputText
                    id={id}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    inputMode={inputMode}
                    disabled={disabled}
                    maxLength={maxLength}
                    readOnly={readOnly}
                    style={style}
                    size={size}
                    ref={ref}
                    required={required}
                    onChange={onChange}
                />
            </Label>
        </div>
    )
}