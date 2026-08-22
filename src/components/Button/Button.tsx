import * as PrimeReact from "primereact/button";
import { useState, type CSSProperties } from "react";
import { ConfirmDialog } from "primereact/confirmdialog";

interface IOptions extends PrimeReact.ButtonProps {
    /**
     * Ação executada ao pressionar o botão.
     * Pode ser assíncrona quando `showLoading` estiver habilitado.
     */
    onPress?: () => void | Promise<void>;

    /**
     * Estilos adicionais aplicados ao botão.
     */
    style?: CSSProperties;

    /**
     * Exibe o estado de carregamento enquanto `onPress` é executado.
     *
     * @default false
     */
    showLoading?: boolean;

    /**
     * Solicita confirmação antes de executar `onPress`.
     *
     * @default false
     */
    showRequireConfirmation?: boolean;
};

/**
 * Botão baseado no PrimeReact com suporte a loading e confirmação.
 *
 * @example
 * ```tsx
 * <Button
 *   label="Excluir"
 *   severity="danger"
 *   showLoading
 *   showRequireConfirmation
 *   onPress={async () => {
 *     await deleteItem();
 *   }}
 * />
 * ```
 */
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