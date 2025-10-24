import * as PrimeReact from "primereact/button";
import { useState, type CSSProperties } from "react";
import { ConfirmDialog } from "primereact/confirmdialog";

interface IOptions {
    label?: string | any,
    onPress?: () => void,
    disabled?: boolean,
    style?: CSSProperties,
    showLoading?: boolean,
    showRequireConfirmation?: boolean,
    className?: string;
    icon?: string;
    iconPos?: "left" | "right" | "bottom" | "top";
    type?: "submit" | "reset" | "button";
};

export function Button({ label, onPress, disabled = false, style = {}, showLoading = true, showRequireConfirmation = false, className, icon, iconPos, type }: IOptions) {
    const [ loading, setLoading ] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    async function onPressClick() {
        try {
            if(showRequireConfirmation && !visibleModal) {
                setVisibleModal(true);
                return;
            };
            if(showLoading) await setLoading(true);
    
            if(onPress) await onPress();
        } catch (error) {
            console.error(error); // temp
        } finally {
            if(showLoading) await setLoading(false);
        }
    };

    return (
        <>
            <PrimeReact.Button
                label={label}
                style={{...style, opacity: disabled ? 0.5 : undefined}}
                onClick={onPressClick}
                loading={loading}
                className={className}
                icon={icon}
                iconPos={iconPos}
                type={type}
                disabled={disabled}
            />

            <ConfirmDialog
                header="Atenção"
                message="Tem certeza que deseja continuar esta operação?"
                visible={visibleModal}
                onHide={() => setVisibleModal(false)}
                accept={onPressClick}
                reject={() => setVisibleModal(false)}
                acceptLabel=" "
                acceptClassName="p-button-success"
                acceptIcon="pi pi-check"
                rejectLabel=" "
                rejectClassName="p-button-danger"
                rejectIcon="pi pi-times"
            />
        </>
    );
};