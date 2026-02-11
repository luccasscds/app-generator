import * as PrimeReact from "primereact/button";
import { useState, type CSSProperties } from "react";
import { ConfirmDialog } from "primereact/confirmdialog";

interface IOptions extends PrimeReact.ButtonProps {
    onPress?: () => void,
    style?: CSSProperties,
    showLoading?: boolean,
    showRequireConfirmation?: boolean,
};

export function Button(options: IOptions) {
    const [ loading, setLoading ] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    async function onPressClick() {
        try {
            if(options.showRequireConfirmation && !visibleModal) {
                setVisibleModal(true);
                return;
            };
            if(options.showLoading) await setLoading(true);
    
            if(options.onPress) await options.onPress();
        } catch (error) {
            console.error(error); // temp
        } finally {
            if(options.showLoading) await setLoading(false);
        }
    };

    return (
        <>
            <PrimeReact.Button
                {...options}
                // label={label}
                style={{...options.style, opacity: options.disabled ? 0.5 : undefined}}
                onClick={onPressClick}
                loading={loading}
                // className={className}
                // icon={icon}
                // iconPos={iconPos}
                // type={type}
                // disabled={disabled}
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