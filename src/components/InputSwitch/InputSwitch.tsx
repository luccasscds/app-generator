import * as primereact from "primereact/inputswitch";
import { Label } from "../Typography";

interface IOptions {
    checked: boolean;
    text?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    onChange?: (event: primereact.InputSwitchChangeEvent) => void;
    className?: string;
    required?: boolean;
    readOnly?: boolean;
};
export function InputSwitch({
    text,
    checked,
    disabled,
    style,
    onChange,
    className,
    required,
    readOnly,
}: IOptions) {
    return (
        <Label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: disabled ? 'not-allowed' : 'pointer', width: 'fit-content' }}>
            <primereact.InputSwitch
                checked={checked}
                disabled={disabled}
                style={style}
                onChange={onChange}
                className={className}
                required={required}
                readOnly={readOnly}
            />
            {text}
        </Label>
    );
};