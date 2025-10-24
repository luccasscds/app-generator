import _ from 'lodash';
import * as primeReact from 'primereact/dataview';
import { useEffect, useState, type ReactNode, } from 'react';

interface ILazyState {
    first: number;
    rows: number;
    page: number;
};
interface IOptions {
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
    items?: any[] | ((options: ILazyState) => Promise<any>);
    layout?: "list" | "grid";
    header?: ReactNode;
    itemTemplate?: (item: any) => ReactNode;
    lazy?: boolean;
    paginator?: boolean;
    paginatorPosition?: "top" | "bottom" | "both";
    totalItems?: number;
    emptyMessage?: string;
    loadingIcon?: ReactNode;
};
export function DataView({
    items,
    layout = "list",
    header,
    itemTemplate,
    lazy,
    paginator = true,
    paginatorPosition = "bottom",
    totalItems,
    emptyMessage = 'Nenhum item encontrado',
    loadingIcon,
}: IOptions) {
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [data, setData] = useState<any[]>([]);
    const [lazyState, setLazyState] = useState<ILazyState>({
        first: 0,
        rows: 10,
        page: 0,
    });

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                await handleData(lazyState);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    async function handleData(options: ILazyState) {
        try {
            setLoading(true);
            if (_.isFunction(items)) {
                const result = await items(options) as any[] || [];
                setData(result);
                setTotalRecords(totalItems || _.first(result)?._count || result?.length || 0);
            } else if (_.isArray(items)) {
                setData(items);
            } else {
                setData([]);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    async function onPage(event: primeReact.DataViewPageEvent) {
        try {
            setLoading(true);
            const { first, rows, page } = event;
            const newLazyState = { first, rows, page };
            setLazyState(newLazyState);
            await handleData(newLazyState);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <primeReact.DataView
            value={data}
            layout={layout}
            header={header}
            itemTemplate={itemTemplate}
            lazy={lazy}
            paginator={paginator}
            paginatorPosition={paginatorPosition}
            rows={lazyState.rows}
            totalRecords={totalRecords}
            first={lazyState.first}
            loading={loading}
            emptyMessage={emptyMessage}
            onPage={onPage}
            loadingIcon={loadingIcon}
        />
    );
}