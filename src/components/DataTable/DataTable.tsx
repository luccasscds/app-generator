import { useEffect, useState } from 'react';
import { DataTable as DataTableTemp, type DataTableSelectionSingleChangeEvent, type DataTableStateEvent } from 'primereact/datatable';
import { Column, type ColumnBodyOptions } from 'primereact/column';
import _ from 'lodash';

interface ILazyState {
    first: number;
    rows: number;
    page: number;
    /**
     * - 1: Ascending order
     * - -1: Descending order
     * - 0, null or undefined: No sorting
     */
    sortField?: string;
    sortOrder?: 0 | 1 | -1 | null | undefined;
};
interface IOptions {
    /**
     * Se você estiver usando lazy, passe uma função que retorna os dados.
     * Caso contrário, passe um array de dados diretamente.
     * ```
     * data={async (data) => {
        const resp = await(await fetch(`https://randomuser.me/api?nat=BR&seed=foobar&page=${data.page +1}&results=${data.rows}`)).json();
        return resp.results;
      }}
     * ```
     */
    data?: any[] | ((options: ILazyState) => Promise<any>);
    columns?: {
        field: string,
        title?: string,
        format?: 'boolean' | 'currency' | 'CPF' | 'phone' | 'date',
        template?: (data: any, options: ColumnBodyOptions) => any
    }[];
    onPress?: (data: any) => void;
    lazy?: boolean;
    /**
     * Se você estiver usando lazy, defina o total de itens para a paginação funcionar corretamente.
     * Se você não estiver usando lazy, pode ignorar este parâmetro.
     */
    totalItems?: number;
    /**
     * @default true
     */
    removableSort?: boolean;
};
export function DataTable({ onPress, data, columns, lazy, totalItems = 0, removableSort = true }: IOptions) {
    const limitData = 10;

    const [rowsPerPageOptions] = useState([10, 20, 50]);
    const [selection, setSelection] = useState(null as any);
    const [itemsLocal, setItemsLocal] = useState(null as any | null);
    const [totalRecords, setTotalRecords] = useState(0);
    const [loading, setLoading] = useState(false);
    const [lazyState, setLazyState] = useState<ILazyState>({
        first: 0,
        rows: limitData,
        page: 0,
        sortField: undefined,
        sortOrder: null,
    });
    
    useEffect(() => {
        loadLazyData();
    }, [lazyState, data]);

    const loadLazyData = async () => {
        try {
            setLoading(true);
            if (_.isFunction(data)) {
                const result = await data(lazyState) as any[] || [];
                
                setTotalRecords(totalItems || result[0]?._count || result.length || 0);
                handleItems(result);
            } else if (_.isArray(data)) {
                handleItems(data);
            };
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        } finally {
            setLoading(false);
        }
    };

    function handleItems(newItems: any) {
        if (!newItems) return;
        
        setItemsLocal(newItems.map((item: any) => {
            const newItem = { ...item };
            newItem._data = item;
            columns?.forEach((column) => {
                // if (_.has(newItem, column.field)) {
                    // if (column.format === 'boolean') {
                    //     newItem[column.field] = newItem[column.field] ? 'Sim' : 'Não';
                    // } else if (column.format === 'phone') {
                    //     newItem[column.field] = tools.number.formatPhoneNumber(newItem[column.field]);
                    // } else if (column.format === 'currency' && _.isNumber(newItem[column.field])) {
                    //     newItem[column.field] = tools.number.formatToReal(newItem[column.field]);
                    // } else if (column.format === 'CPF') {
                    //     newItem[column.field] = tools.number.formatCPF(newItem[column.field]);
                    // } else if (column.format === 'date') {
                    //     newItem[column.field] = moment(newItem[column.field], 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm');
                    // } else {
                        newItem[column.field] = newItem[column.field]?.toString();
                    // }
                // }
            });
            return newItem;
        }))
    };

    function onPage(event: DataTableStateEvent) {
        setLazyState((prev) => ({
            ...prev,
            first: event.first,
            rows: event.rows,
            page: (event.page || 0),
        }));
    };

    function onSort(event: DataTableStateEvent) {
        setLazyState((prev) => ({
            ...prev,
            sortField: event.sortField,
            sortOrder: event.sortOrder,
        }));
    };

    return (
        <DataTableTemp
            value={itemsLocal}
            responsiveLayout='scroll'
            stripedRows
            removableSort={removableSort}
            emptyMessage="Nenhum registro encontrado"
            showGridlines
            size='normal'

            // Scroll
                scrollable
                scrollHeight="flex"
            
            // resizable
                resizableColumns

            // Selection
                selectionPageOnly={lazy}
                selectionMode={onPress ? 'single' : undefined}
                selection={selection}
                onSelectionChange={(e: DataTableSelectionSingleChangeEvent<any>) => {
                    setSelection(e.value);
                    if(onPress) onPress(e.value._data);
                }}

            // Pagination
                paginator={lazy}
                paginatorTemplate={'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown'}
                currentPageReportTemplate="{first} - {last} de {totalRecords}"
                rows={lazyState.rows}
                rowsPerPageOptions={rowsPerPageOptions}
            
            // lazy loading
                lazy={lazy}
                loading={loading}
                first={lazyState.first}
                totalRecords={totalRecords}
                sortField={lazyState.sortField}
                sortOrder={lazyState.sortOrder}
                onPage={onPage}
                onSort={onSort}

            style={{ flex: 0, height: 'auto' }}
        >
            {columns?.map((column) => (
                <Column
                    key={column.field}
                    field={column.field}
                    header={column.title}
                    sortable={removableSort}
                    body={column.template}
                />
            ))}
        </DataTableTemp>
    )
};