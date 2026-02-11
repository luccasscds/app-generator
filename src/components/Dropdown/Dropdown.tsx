import _ from 'lodash';
import * as primeReact from 'primereact/dropdown';
import { useEffect, useState } from 'react';

interface ILazyState {
    first: number;
    rows: number;
    page: number;
    filter?: string;
};
interface IOptions {
    placeholder?: string;
    title?: string;
    selected?: any;
    /**
     * Existe dois tipos de opções de dados: estáticas e dinâmicas.
     * A opção estática é um array fixo de objetos, enquanto a opção dinâmica é carregada sob demanda.
     * ex:
     * ```tsx
     * options={async (options) => {
     *      try {
     *          const resp = await (await fetch(`https://68a36c3dc5a31eb7bb204fce.mockapi.io/api/users?page=${options.page+1}&limit=${options.rows}&name=${options.filter}&orderBy=name&order=asc`)).json();
     *          return resp;
     *      } catch (error) {
     *          return [];
     *      }
     * }}
     * ```
     */
    options?: any[] | ((options: ILazyState) => Promise<any[]>);
    optionLabel?: string;
    optionValue?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    onSelect?: (value?: any) => void;
    filter?: boolean;
    emptyMessage?: string;
    emptyFilterMessage?: string;
    showFilterClear?: boolean;
    showClear?: boolean;
    /**
     * Total de itens para a paginação funcionar corretamente.
     */
    totalItems?: number;
    /**
     * Se você estiver usando lazy, a função `filtro` deve retornar um objeto com as propriedades `first`, `rows` e `filter`.
     */
    lazy?: boolean;
    style?: React.CSSProperties;
};
export function Dropdown({
    placeholder = "...",
    title,
    selected,
    options,
    optionLabel,
    optionValue,
    disabled,
    readOnly,
    required,
    onSelect,
    filter,
    emptyMessage = "Nenhuma opção encontrada",
    emptyFilterMessage = "Nenhuma opção encontrada",
    showFilterClear,
    showClear,
    totalItems,
    lazy = false,
    style,
}: IOptions) {
    const limitData = 10;
    const defaultLazyState: ILazyState = {
        first: 0,
        rows: limitData,
        page: 0,
        filter: '',
    };

    const [data, setData] = useState<any[]>([]);
    const [selectedValue, setSelectedValue] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [forceUpdate, setForceUpdate] = useState<boolean>(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [lazyState, setLazyState] = useState(defaultLazyState);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                if (_.isArray(options)) {
                    setData(options);
                    if (optionValue) {
                        setSelectedValue(options.find((item) => item[optionValue] == selected));
                    };
                    setTotalRecords(totalItems || _.first(options)?._count || options.length || 0);
                };
                setSelectedValue(selected);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [forceUpdate, selected]);

    async function onChange(e: primeReact.DropdownChangeEvent) {
        setSelectedValue(e.value);
        if (onSelect && optionValue) {
            onSelect(data.find((item) => item[optionValue] === e.value));
        };
    };

    async function onShow() {
        try {
            await setLazyState(defaultLazyState);
            if (_.isArray(options)) {
                setForceUpdate(!forceUpdate);
                return;
            };
            
            setLoading(true);
            if (_.isFunction(options)) {
                const response = await options(defaultLazyState);
                setData(response);
                setTotalRecords(totalItems || _.first(response)?._count || response.length || 0);
            };
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        };
    };

    async function onScrollCapture(e: any) {
        try {
            const { scrollTop, scrollHeight, clientHeight } = e.target;
            if (scrollTop + clientHeight >= scrollHeight - 10) { // tolerância de 10px
                if (_.isFunction(options) && data.length < totalRecords) {
                    setLoading(true);
                    const newStart = lazyState.first + lazyState.rows;
                    const newLazy = {
                        ...lazyState,
                        first: newStart,
                        rows: limitData,
                        page: Math.floor(newStart / limitData),
                    };
                    const newData = await options(newLazy);
                    await setData((prevData) => [...prevData, ...newData]);
                    await setLazyState(newLazy);
                }
            };
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    async function onFilter(e: primeReact.DropdownFilterEvent) {
        try {
            if (lazy && _.isFunction(options) && e.filter) {
                setLoading(true);
                const newLazy = {
                    ...defaultLazyState,
                    filter: e.filter,
                };
                const response = await options(newLazy);
                setData(response);
                setTotalRecords(totalItems || _.first(response)?._count || response.length || 0);
                setLazyState(newLazy);
            };
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <primeReact.Dropdown
            placeholder={placeholder}
            title={title}
            value={selectedValue}
            options={data}
            optionLabel={optionLabel}
            optionValue={optionValue}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            onShow={onShow}
            onScrollCapture={_.debounce(onScrollCapture, 500)}
            onChange={onChange}
            onFilter={onFilter}
            filter={filter}
            emptyMessage={emptyMessage}
            emptyFilterMessage={emptyFilterMessage}
            showFilterClear={showFilterClear}
            showClear={showClear}
            loading={loading}
            style={style}
        />
    )
}