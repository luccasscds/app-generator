import * as primereact from "primereact/radiobutton";
import { Label } from "../Typography";
import type { CSSProperties } from "react";

interface IOptions {
    text: string;
    checked: boolean;
    onChange?: (event: primereact.RadioButtonChangeEvent) => void;
    disabled?: boolean;
    style?: CSSProperties;
    className?: string;
    required?: boolean;
    readOnly?: boolean;
    tooltip?: string;
    name?: string;
    id?: string;
};
export function RadioButton({
    text,
    checked,
    onChange,
    disabled,
    style,
    className,
    required,
    readOnly,
    tooltip,
    name,
    id,
}: IOptions) {
    return (
        <Label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: disabled ? 'not-allowed' : 'pointer', width: 'fit-content' }}>
            <primereact.RadioButton
                checked={checked}
                disabled={disabled}
                style={style}
                onChange={onChange}
                className={className}
                required={required}
                readOnly={readOnly}
                tooltip={tooltip}
                name={name}
                id={id}
            />
            {text}
        </Label>
    );
};