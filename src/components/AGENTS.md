# Componentes

Este diretório contém a API pública de componentes do `app-generator`. Estas
instruções se aplicam a alterações em `src/components` e ao código que consome
esses componentes.

## Importação

- Em aplicações consumidoras, importe sempre da raiz do pacote.
- Dentro desta biblioteca, prefira imports relativos para componentes do mesmo
  módulo e mantenha `src/components/index.ts` como o barrel público.
- Não importe um componente diretamente do PrimeReact quando existir um wrapper
  equivalente no `app-generator`.
- Antes de usar uma propriedade de um wrapper, confira sua interface no arquivo
  do componente. Os wrappers não expõem necessariamente todas as propriedades
  do PrimeReact.

```tsx
import { Button, DataTable, H1 } from 'app-generator';
```

Não use caminhos internos em aplicações consumidoras:

```tsx
// Evite
import { Button } from 'app-generator/src/components/Button/Button';
```

## Tipos de componente

### Wrappers próprios

Estes componentes acrescentam comportamento ou restringem a API original:

- `Button`: loading durante `onPress` e confirmação opcional.
- `Calendar`: calendário com label e padrões definidos pela biblioteca.
- `Checkbox`: checkbox controlado com label.
- `DataTable`: tabela com colunas declarativas e carregamento local ou lazy.
- `DataView`: lista ou grid com carregamento local ou lazy.
- `Dropdown`: seleção local ou assíncrona, filtro e scroll incremental.
- `InputSwitch`: switch controlado com label.
- `MenuBar`: toolbar e menu lateral do usuário.
- `RadioButton`: radio controlado com label.
- `ThemeSelector`: seletor dos temas suportados pela biblioteca.

### Tipografia

Use os componentes tipográficos em vez de criar estilos de texto repetidos:

- Títulos: `Heading`, `H1`, `H2`, `H3`, `H4`, `H5`, `H6`.
- Texto: `Text`, `Paragraph`, `Span`.
- Outros: `Link`, `Code`, `InlineCode`, `CodeBlock`, `Label` e `Blockquote`.

### Reexports do PrimeReact

Os demais exports de `src/components/index.ts`, como `Dialog`, `Toast`, `Card`,
`InputText` e `Toolbar`, são reexports diretos. Para suas propriedades e seus
eventos, siga a documentação da versão do PrimeReact declarada em
`package.json`.

### Ícones

O projeto usa [PrimeIcons](https://v9.primereact.org/icons/#list). Consulte a página
oficial para ver a lista completa de nomes disponíveis.

O CSS dos ícones já é importado pela entrada pública do `app-generator`. Não
importe `primeicons/primeicons.css` novamente na aplicação consumidora.

Use sempre a classe base `pi` seguida da classe do ícone `pi-{nome}`. Ícones
independentes podem ser renderizados com `i` ou `span`:

```tsx
<i className="pi pi-check" />
<i className="pi pi-times" />
<span className="pi pi-search" />
<span className="pi pi-user" />
```

Nas propriedades `icon` dos componentes, informe as classes como uma string:

```tsx
import { Button, Checkbox } from 'app-generator';

<Button icon="pi pi-save" label="Salvar" />
<Button icon="pi pi-trash" label="Excluir" severity="danger" />

<Checkbox
  text="Selecionado"
  checked={checked}
  icon="pi pi-check"
/>
```

Não omita os prefixos:

```tsx
// Incorreto
<Button icon="save" />

// Correto
<Button icon="pi pi-save" />
```

O tamanho e a cor de um ícone independente são controlados como texto:

```tsx
<i className="pi pi-check" style={{ color: 'green', fontSize: '1.5rem' }} />
<i className="pi pi-times" style={{ color: 'red', fontSize: '2rem' }} />
```

Adicione `pi-spin` para animar um ícone:

```tsx
<i className="pi pi-spinner pi-spin" style={{ fontSize: '2rem' }} />
```

## Exemplos

### Button

Use `onPress` para a ação principal. Ative `showLoading` em ações assíncronas e
`showRequireConfirmation` em ações que exigem confirmação.

```tsx
import { Button } from 'app-generator';

<Button
  label="Excluir"
  severity="danger"
  showLoading
  showRequireConfirmation
  onPress={async () => {
    await deleteItem();
  }}
/>
```

### Campos controlados

`Checkbox`, `InputSwitch` e `RadioButton` recebem o estado atual em `checked`.
Atualize o estado pelo valor retornado no evento.

```tsx
import { Checkbox, InputSwitch } from 'app-generator';

<Checkbox
  text="Aceito os termos"
  checked={accepted}
  onChange={(event) => setAccepted(Boolean(event.checked))}
/>

<InputSwitch
  text="Ativo"
  checked={active}
  onChange={(event) => setActive(Boolean(event.value))}
/>
```

### Dropdown

Para dados locais, informe `options`, `optionLabel` e `optionValue`. Quando
`optionValue` estiver definido, `onSelect` recebe o objeto completo selecionado,
e não somente seu valor.

```tsx
import { Dropdown } from 'app-generator';

<Dropdown
  placeholder="Selecione um usuário"
  options={users}
  optionLabel="name"
  optionValue="id"
  selected={userId}
  onSelect={(user) => setUserId(user?.id)}
/>
```

Para dados assíncronos, a função de `options` recebe paginação zero-based. O
campo `page` começa em `0`; converta-o caso a API comece em `1`. Informe
`totalItems` para permitir o carregamento das próximas páginas.

```tsx
<Dropdown
  filter
  lazy
  optionLabel="name"
  optionValue="id"
  totalItems={totalUsers}
  options={async ({ page, rows, filter }) => {
    return api.listUsers({ page: page + 1, limit: rows, search: filter });
  }}
/>
```

### DataTable

`data` aceita um array ou uma função assíncrona. No modo `lazy`, informe
`totalItems`; alternativamente, o primeiro item retornado pode possuir `_count`.
`onPress` recebe o objeto original da linha selecionada.

```tsx
import { DataTable } from 'app-generator';

<DataTable
  lazy
  totalItems={totalUsers}
  columns={[
    { field: 'name', title: 'Nome' },
    { field: 'email', title: 'E-mail' },
  ]}
  data={async ({ page, rows, sortField, sortOrder }) => {
    return api.listUsers({
      page: page + 1,
      limit: rows,
      sortField,
      sortOrder,
    });
  }}
  onPress={(user) => openUser(user.id)}
/>
```

### DataView

`items` aceita um array ou uma função assíncrona. A função recebe `first`,
`rows` e `page`; use `itemTemplate` para renderizar cada item.

```tsx
import { DataView } from 'app-generator';

<DataView
  layout="grid"
  lazy
  totalItems={totalProducts}
  items={({ page, rows }) => api.listProducts({ page: page + 1, limit: rows })}
  itemTemplate={(product) => <ProductCard product={product} />}
/>
```

## Alterações

- Preserve a API pública existente, salvo quando houver uma mudança planejada.
- Exporte novos componentes em `src/components/index.ts`.
- Exporte também os tipos públicos necessários ao consumidor; não obrigue o
  uso de caminhos internos para obter tipos.
- Prefira interfaces tipadas a `any` ao criar ou ampliar APIs.
- Mantenha componentes controlados quando seu valor vier por props.
- Não replique internamente lógica já oferecida por um wrapper existente.
- Adicione ou atualize testes `*.spec.ts` ao mudar comportamento.
- Execute `npm test` e `npm run build` após alterações nos componentes.
- Atualize este arquivo quando adicionar um wrapper ou mudar um contrato de uso.
