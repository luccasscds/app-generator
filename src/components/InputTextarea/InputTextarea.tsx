import * as primereact from "primereact/inputtextarea";
import { Label } from "../Typography";
import type { ChangeEventHandler, CSSProperties } from "react";

interface IOptions {
    text?: string;
    rows?: number;
    cols?: number;
    value?: string;
    disabled?: boolean;
    style?: CSSProperties;
    className?: string;
    required?: boolean;
    readOnly?: boolean;
    autoResize?: boolean;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};
export function InputTextarea({ 
    text,
    rows,
    cols,
    value,
    disabled,
    style,
    className,
    required,
    readOnly,
    autoResize,
    onChange,
 }: IOptions) {
    return (
        <Label style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '0.5rem', width: 'fit-content', cursor: disabled ? 'not-allowed' : 'pointer' }}>
            {text}
            <primereact.InputTextarea
                rows={rows}
                cols={cols}
                value={value}
                onChange={onChange}
                disabled={disabled}
                style={style}
                className={className}
                required={required}
                readOnly={readOnly}
                autoResize={autoResize}
            />
        </Label>
    );
};