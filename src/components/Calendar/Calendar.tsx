import * as primeReact from 'primereact/calendar';
import type { FormEvent } from 'primereact/ts-helpers';
import type { CSSProperties, SyntheticEvent } from 'react';
import { Label } from '../Typography';

interface IOptions {
    text?: string;
    placeholder?: string;
    value?: Date | null;
    onChange?(event: FormEvent<Date, SyntheticEvent<Element, Event>>): void
    view?: "month" | "year" | "date";
    dateFormat?: string;
    showIcon?: boolean;
    showButtonBar?: boolean;
    style?: CSSProperties;
    minDate?: Date;
    maxDate?: Date;
    readOnlyInput?: boolean;
    showTime?: boolean;
    timeOnly?: boolean;
    hourFormat?: "12" | "24";
    /**
     * Array dos dias desabilitados.
     * Exemplo: [0, 6] desabilita domingos e sábados
     */
    disabledDays?: number[];
    disabledDates?: Date[];
    disabled?: boolean;
};
export function Calendar({
    text,
    value,
    placeholder,
    dateFormat = "mm/dd/yy",
    onChange,
    showIcon = true,
    view = "date",
    showButtonBar,
    style,
    minDate,
    maxDate,
    readOnlyInput,
    showTime,
    timeOnly,
    hourFormat = "24",
    disabledDays,
    disabledDates,
    disabled,
}: IOptions) {
    return (
        <Label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', cursor: disabled ? 'not-allowed' : 'pointer', width: 'fit-content' }}>
            {text}
            <primeReact.Calendar
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                view={view}
                dateFormat={dateFormat}
                showIcon={showIcon}
                showButtonBar={showButtonBar}
                style={style}
                minDate={minDate}
                maxDate={maxDate}
                readOnlyInput={readOnlyInput}
                showTime={showTime}
                hourFormat={hourFormat}
                timeOnly={timeOnly}
                disabledDays={disabledDays}
                disabledDates={disabledDates}
                disabled={disabled}
            />
        </Label>
    )
}