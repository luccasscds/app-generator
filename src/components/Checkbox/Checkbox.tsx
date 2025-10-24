import * as primereact from "primereact/checkbox";
import { Label } from "../Typography";
import type { CSSProperties } from "react";

interface IOptions {
    text: string;
    checked: boolean;
    onChange?: (event: primereact.CheckboxChangeEvent) => void;
    disabled?: boolean;
    style?: CSSProperties;
    className?: string;
    required?: boolean;
    readOnly?: boolean;
    icon?: string;
};
export function Checkbox({ text, checked, onChange, disabled, style, className, required, readOnly, icon = "pi pi-check" }: IOptions) {
    return (
        <Label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: disabled ? 'not-allowed' : 'pointer', width: 'fit-content' }}>
            <primereact.Checkbox
                checked={checked}
                disabled={disabled}
                style={style}
                onChange={onChange}
                className={className}
                required={required}
                readOnly={readOnly}
                icon={icon}
            />
            {text}
        </Label>
    );
};