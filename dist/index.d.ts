import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import { ChangeEventHandler } from 'react';
import { ColumnBodyOptions } from 'primereact/column';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { CSSProperties } from 'react';
import { default as default_2 } from 'react';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { FormEvent } from 'primereact/ts-helpers';
import { JSX } from 'react/jsx-runtime';
import { MenuItem } from 'primereact/menuitem';
import * as primereact from 'primereact/checkbox';
import * as primereact_2 from 'primereact/inputswitch';
import * as primereact_3 from 'primereact/radiobutton';
import { ProgressBar } from 'primereact/progressbar';
import { ProgressSpinner } from 'primereact/progressspinner';
import { ReactNode } from 'react';
import { SelectButton } from 'primereact/selectbutton';
import { Skeleton } from 'primereact/skeleton';
import { SyntheticEvent } from 'react';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';
import { z } from 'zod';

export { Avatar }

export { AvatarGroup }

export { Badge }

export declare const Blockquote: default_2.FC<BlockquoteProps>;

export declare interface BlockquoteProps extends default_2.BlockquoteHTMLAttributes<HTMLQuoteElement> {
    children: default_2.ReactNode;
    variant?: 'default' | 'primary' | 'secondary' | 'accent';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    cite?: string;
    author?: string;
}

export declare function Button({ label, onPress, disabled, style, showLoading, showRequireConfirmation, className, icon, iconPos, type }: IOptions_3): JSX.Element;

export declare function Calendar({ text, value, placeholder, dateFormat, onChange, showIcon, view, showButtonBar, style, minDate, maxDate, readOnlyInput, showTime, timeOnly, hourFormat, disabledDays, disabledDates, disabled, }: IOptions_4): JSX.Element;

export { Card }

export { Carousel }

export declare function Checkbox({ text, checked, onChange, disabled, style, className, required, readOnly, icon }: IOptions_6): JSX.Element;

export declare const Code: default_2.FC<CodeProps>;

export declare const CodeBlock: default_2.FC<Omit<CodeProps, 'variant'>>;

export declare interface CodeProps extends default_2.HTMLAttributes<HTMLElement> {
    children: default_2.ReactNode;
    variant?: 'inline' | 'block';
    language?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

export declare const config: {
    init(): void;
    localePrimeReact(): void;
    zod(): void;
};

export { ConfirmDialog }

export declare function DataTable({ onPress, data, columns, lazy, totalItems, removableSort }: IOptions): JSX.Element;

declare function DataView_2({ items, layout, header, itemTemplate, lazy, paginator, paginatorPosition, totalItems, emptyMessage, loadingIcon, }: IOptions_2): JSX.Element;
export { DataView_2 as DataView }

export { Dialog }

export { Divider }

export declare function Dropdown({ placeholder, title, selected, options, optionLabel, optionValue, disabled, readOnly, required, onSelect, filter, emptyMessage, emptyFilterMessage, showFilterClear, showClear, totalItems, lazy, }: IOptions_5): JSX.Element;

export declare const H1: default_2.FC<Omit<HeadingProps, 'level'>>;

export declare const H2: default_2.FC<Omit<HeadingProps, 'level'>>;

export declare const H3: default_2.FC<Omit<HeadingProps, 'level'>>;

export declare const H4: default_2.FC<Omit<HeadingProps, 'level'>>;

export declare const H5: default_2.FC<Omit<HeadingProps, 'level'>>;

export declare const H6: default_2.FC<Omit<HeadingProps, 'level'>>;

export declare function handleError(error: any): {
    message: string;
    stack: string | undefined;
} | {
    message: any;
    stack?: undefined;
};

export declare const handleZod: {
    date(name?: string): z.ZodString;
    time(fieldName: string): z.ZodString;
    dateTime(fieldName: string): z.ZodString;
    cpf(): z.ZodString;
    cep(): z.ZodString;
    core: typeof z.core;
    globalRegistry: z.core.$ZodRegistry<z.core.GlobalMeta, z.core.$ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
    registry: typeof z.core.registry;
    config: typeof z.core.config;
    $output: typeof z.core.$output;
    $input: typeof z.core.$input;
    $brand: typeof z.core.$brand;
    clone: typeof z.core.util.clone;
    regexes: typeof z.core.regexes;
    treeifyError: typeof z.core.treeifyError;
    prettifyError: typeof z.core.prettifyError;
    formatError: typeof z.core.formatError;
    flattenError: typeof z.core.flattenError;
    toJSONSchema: typeof z.core.toJSONSchema;
    TimePrecision: {
        readonly Any: null;
        readonly Minute: -1;
        readonly Second: 0;
        readonly Millisecond: 3;
        readonly Microsecond: 6;
    };
    NEVER: never;
    locales: typeof z.core.locales;
    ZodISODateTime: z.core.$constructor<z.ZodISODateTime, z.core.$ZodISODateTimeDef>;
    ZodISODate: z.core.$constructor<z.ZodISODate, z.core.$ZodStringFormatDef<"date">>;
    ZodISOTime: z.core.$constructor<z.ZodISOTime, z.core.$ZodISOTimeDef>;
    ZodISODuration: z.core.$constructor<z.ZodISODuration, z.core.$ZodStringFormatDef<"duration">>;
    iso: typeof z.iso;
    coerce: typeof z.coerce;
    string(params?: string | z.core.$ZodStringParams): z.ZodString;
    string<T extends string>(params?: string | z.core.$ZodStringParams): z.core.$ZodType<T, T>;
    email(params?: string | z.core.$ZodEmailParams): z.ZodEmail;
    guid(params?: string | z.core.$ZodGUIDParams): z.ZodGUID;
    uuid(params?: string | z.core.$ZodUUIDParams): z.ZodUUID;
    uuidv4(params?: string | z.core.$ZodUUIDv4Params): z.ZodUUID;
    uuidv6(params?: string | z.core.$ZodUUIDv6Params): z.ZodUUID;
    uuidv7(params?: string | z.core.$ZodUUIDv7Params): z.ZodUUID;
    url(params?: string | z.core.$ZodURLParams): z.ZodURL;
    httpUrl(params?: string | Omit<z.core.$ZodURLParams, "protocol" | "hostname">): z.ZodURL;
    emoji(params?: string | z.core.$ZodEmojiParams): z.ZodEmoji;
    nanoid(params?: string | z.core.$ZodNanoIDParams): z.ZodNanoID;
    cuid(params?: string | z.core.$ZodCUIDParams): z.ZodCUID;
    cuid2(params?: string | z.core.$ZodCUID2Params): z.ZodCUID2;
    ulid(params?: string | z.core.$ZodULIDParams): z.ZodULID;
    xid(params?: string | z.core.$ZodXIDParams): z.ZodXID;
    ksuid(params?: string | z.core.$ZodKSUIDParams): z.ZodKSUID;
    ipv4(params?: string | z.core.$ZodIPv4Params): z.ZodIPv4;
    ipv6(params?: string | z.core.$ZodIPv6Params): z.ZodIPv6;
    cidrv4(params?: string | z.core.$ZodCIDRv4Params): z.ZodCIDRv4;
    cidrv6(params?: string | z.core.$ZodCIDRv6Params): z.ZodCIDRv6;
    base64(params?: string | z.core.$ZodBase64Params): z.ZodBase64;
    base64url(params?: string | z.core.$ZodBase64URLParams): z.ZodBase64URL;
    e164(params?: string | z.core.$ZodE164Params): z.ZodE164;
    jwt(params?: string | z.core.$ZodJWTParams): z.ZodJWT;
    stringFormat<Format extends string>(format: Format, fnOrRegex: ((arg: string) => z.core.util.MaybeAsync<unknown>) | RegExp, _params?: string | z.core.$ZodStringFormatParams): z.ZodCustomStringFormat<Format>;
    hostname(_params?: string | z.core.$ZodStringFormatParams): z.ZodCustomStringFormat<"hostname">;
    hex(_params?: string | z.core.$ZodStringFormatParams): z.ZodCustomStringFormat<"hex">;
    hash<Alg extends z.core.util.HashAlgorithm, Enc extends z.core.util.HashEncoding = "hex">(alg: Alg, params?: {
        enc?: Enc;
    } & z.core.$ZodStringFormatParams): z.ZodCustomStringFormat<`${Alg}_${Enc}`>;
    number(params?: string | z.core.$ZodNumberParams): z.ZodNumber;
    int(params?: string | z.core.$ZodCheckNumberFormatParams): z.ZodInt;
    float32(params?: string | z.core.$ZodCheckNumberFormatParams): z.ZodFloat32;
    float64(params?: string | z.core.$ZodCheckNumberFormatParams): z.ZodFloat64;
    int32(params?: string | z.core.$ZodCheckNumberFormatParams): z.ZodInt32;
    uint32(params?: string | z.core.$ZodCheckNumberFormatParams): z.ZodUInt32;
    boolean(params?: string | z.core.$ZodBooleanParams): z.ZodBoolean;
    bigint(params?: string | z.core.$ZodBigIntParams): z.ZodBigInt;
    int64(params?: string | z.core.$ZodBigIntFormatParams): z.ZodBigIntFormat;
    uint64(params?: string | z.core.$ZodBigIntFormatParams): z.ZodBigIntFormat;
    symbol(params?: string | z.core.$ZodSymbolParams): z.ZodSymbol;
    any(): z.ZodAny;
    unknown(): z.ZodUnknown;
    never(params?: string | z.core.$ZodNeverParams): z.ZodNever;
    array<T extends z.core.SomeType>(element: T, params?: string | z.core.$ZodArrayParams): z.ZodArray<T>;
    keyof<T extends z.ZodObject>(schema: T): z.ZodEnum<z.core.util.KeysEnum<T["_zod"]["output"]>>;
    object<T extends z.core.$ZodLooseShape = Partial<Record<never, z.core.SomeType>>>(shape?: T, params?: string | z.core.$ZodObjectParams): z.ZodObject<z.core.util.Writeable<T>, z.core.$strip>;
    strictObject<T extends z.core.$ZodLooseShape>(shape: T, params?: string | z.core.$ZodObjectParams): z.ZodObject<T, z.core.$strict>;
    looseObject<T extends z.core.$ZodLooseShape>(shape: T, params?: string | z.core.$ZodObjectParams): z.ZodObject<T, z.core.$loose>;
    union<const T extends readonly z.core.SomeType[]>(options: T, params?: string | z.core.$ZodUnionParams): z.ZodUnion<T>;
    discriminatedUnion<Types extends readonly [z.core.$ZodTypeDiscriminable, ...z.core.$ZodTypeDiscriminable[]], Disc extends string>(discriminator: Disc, options: Types, params?: string | z.core.$ZodDiscriminatedUnionParams): z.ZodDiscriminatedUnion<Types, Disc>;
    intersection<T extends z.core.SomeType, U extends z.core.SomeType>(left: T, right: U): z.ZodIntersection<T, U>;
    tuple<T extends readonly [z.core.SomeType, ...z.core.SomeType[]]>(items: T, params?: string | z.core.$ZodTupleParams): z.ZodTuple<T, null>;
    tuple<T extends readonly [z.core.SomeType, ...z.core.SomeType[]], Rest extends z.core.SomeType>(items: T, rest: Rest, params?: string | z.core.$ZodTupleParams): z.ZodTuple<T, Rest>;
    tuple(items: [], params?: string | z.core.$ZodTupleParams): z.ZodTuple<[], null>;
    record<Key extends z.core.$ZodRecordKey, Value extends z.core.SomeType>(keyType: Key, valueType: Value, params?: string | z.core.$ZodRecordParams): z.ZodRecord<Key, Value>;
    partialRecord<Key extends z.core.$ZodRecordKey, Value extends z.core.SomeType>(keyType: Key, valueType: Value, params?: string | z.core.$ZodRecordParams): z.ZodRecord<Key & z.core.$partial, Value>;
    map<Key extends z.core.SomeType, Value extends z.core.SomeType>(keyType: Key, valueType: Value, params?: string | z.core.$ZodMapParams): z.ZodMap<Key, Value>;
    set<Value extends z.core.SomeType>(valueType: Value, params?: string | z.core.$ZodSetParams): z.ZodSet<Value>;
    nativeEnum<T extends z.core.util.EnumLike>(entries: T, params?: string | z.core.$ZodEnumParams): z.ZodEnum<T>;
    literal<const T extends ReadonlyArray<z.core.util.Literal>>(value: T, params?: string | z.core.$ZodLiteralParams): z.ZodLiteral<T[number]>;
    literal<const T extends z.core.util.Literal>(value: T, params?: string | z.core.$ZodLiteralParams): z.ZodLiteral<T>;
    file(params?: string | z.core.$ZodFileParams): z.ZodFile;
    transform<I = unknown, O = I>(fn: (input: I, ctx: z.core.ParsePayload) => O): z.ZodTransform<Awaited<O>, I>;
    optional<T extends z.core.SomeType>(innerType: T): z.ZodOptional<T>;
    nullable<T extends z.core.SomeType>(innerType: T): z.ZodNullable<T>;
    nullish<T extends z.core.SomeType>(innerType: T): z.ZodOptional<z.ZodNullable<T>>;
    _default<T extends z.core.SomeType>(innerType: T, defaultValue: z.core.util.NoUndefined<z.core.output<T>> | (() => z.core.util.NoUndefined<z.core.output<T>>)): z.ZodDefault<T>;
    prefault<T extends z.core.SomeType>(innerType: T, defaultValue: z.core.input<T> | (() => z.core.input<T>)): z.ZodPrefault<T>;
    nonoptional<T extends z.core.SomeType>(innerType: T, params?: string | z.core.$ZodNonOptionalParams): z.ZodNonOptional<T>;
    success<T extends z.core.SomeType>(innerType: T): z.ZodSuccess<T>;
    nan(params?: string | z.core.$ZodNaNParams): z.ZodNaN;
    pipe<const A extends z.core.SomeType, B extends z.core.$ZodType<unknown, z.core.output<A>> = z.core.$ZodType<unknown, z.core.output<A>, z.core.$ZodTypeInternals<unknown, z.core.output<A>>>>(in_: A, out: B | z.core.$ZodType<unknown, z.core.output<A>>): z.ZodPipe<A, B>;
    codec<const A extends z.core.SomeType, B extends z.core.SomeType = z.core.$ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>(in_: A, out: B, params: {
        decode: (value: z.core.output<A>, payload: z.core.ParsePayload<z.core.output<A>>) => z.core.input<B>;
        encode: (value: z.core.input<B>, payload: z.core.ParsePayload<z.core.input<B>>) => z.core.output<A>;
    }): z.ZodCodec<A, B>;
    readonly<T extends z.core.SomeType>(innerType: T): z.ZodReadonly<T>;
    templateLiteral<const Parts extends z.core.$ZodTemplateLiteralPart[]>(parts: Parts, params?: string | z.core.$ZodTemplateLiteralParams): z.ZodTemplateLiteral<z.core.$PartsToTemplateLiteral<Parts>>;
    lazy<T extends z.core.SomeType>(getter: () => T): z.ZodLazy<T>;
    promise<T extends z.core.SomeType>(innerType: T): z.ZodPromise<T>;
    _function(): z.ZodFunction;
    _function<const In extends Array<z.core.$ZodType> = z.core.$ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>[]>(params: {
        input: In;
    }): z.ZodFunction<z.ZodTuple<In, null>, z.core.$ZodFunctionOut>;
    _function<const In extends Array<z.core.$ZodType> = z.core.$ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>[], const Out extends z.core.$ZodFunctionOut = z.core.$ZodFunctionOut>(params: {
        input: In;
        output: Out;
    }): z.ZodFunction<z.ZodTuple<In, null>, Out>;
    _function<const In extends z.core.$ZodFunctionIn = z.core.$ZodFunctionArgs>(params: {
        input: In;
    }): z.ZodFunction<In, z.core.$ZodFunctionOut>;
    _function<const Out extends z.core.$ZodFunctionOut = z.core.$ZodFunctionOut>(params: {
        output: Out;
    }): z.ZodFunction<z.core.$ZodFunctionIn, Out>;
    _function<In extends z.core.$ZodFunctionIn = z.core.$ZodFunctionArgs, Out extends z.core.$ZodType = z.core.$ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>(params?: {
        input: In;
        output: Out;
    }): z.ZodFunction<In, Out>;
    check<O = unknown>(fn: z.core.CheckFn<O>): z.core.$ZodCheck<O>;
    custom<O>(fn?: (data: unknown) => unknown, _params?: string | z.core.$ZodCustomParams | undefined): z.ZodCustom<O, O>;
    refine<T>(fn: (arg: NoInfer<T>) => z.core.util.MaybeAsync<unknown>, _params?: string | z.core.$ZodCustomParams): z.core.$ZodCheck<T>;
    superRefine<T>(fn: (arg: T, payload: z.core.$RefinementCtx<T>) => void | Promise<void>): z.core.$ZodCheck<T>;
    json(params?: string | z.core.$ZodCustomParams): z.ZodJSONSchema;
    preprocess<A, U extends z.core.SomeType, B = unknown>(fn: (arg: B, ctx: z.core.$RefinementCtx) => A, schema: U): z.ZodPipe<z.ZodTransform<A, B>, U>;
    ZodType: z.core.$constructor<z.ZodType>;
    _ZodString: z.core.$constructor<z._ZodString>;
    ZodString: z.core.$constructor<z.ZodString>;
    ZodStringFormat: z.core.$constructor<z.ZodStringFormat>;
    ZodEmail: z.core.$constructor<z.ZodEmail>;
    ZodGUID: z.core.$constructor<z.ZodGUID>;
    ZodUUID: z.core.$constructor<z.ZodUUID>;
    ZodURL: z.core.$constructor<z.ZodURL>;
    ZodEmoji: z.core.$constructor<z.ZodEmoji>;
    ZodNanoID: z.core.$constructor<z.ZodNanoID>;
    ZodCUID: z.core.$constructor<z.ZodCUID>;
    ZodCUID2: z.core.$constructor<z.ZodCUID2>;
    ZodULID: z.core.$constructor<z.ZodULID>;
    ZodXID: z.core.$constructor<z.ZodXID>;
    ZodKSUID: z.core.$constructor<z.ZodKSUID>;
    ZodIPv4: z.core.$constructor<z.ZodIPv4>;
    ZodIPv6: z.core.$constructor<z.ZodIPv6>;
    ZodCIDRv4: z.core.$constructor<z.ZodCIDRv4>;
    ZodCIDRv6: z.core.$constructor<z.ZodCIDRv6>;
    ZodBase64: z.core.$constructor<z.ZodBase64>;
    ZodBase64URL: z.core.$constructor<z.ZodBase64URL>;
    ZodE164: z.core.$constructor<z.ZodE164>;
    ZodJWT: z.core.$constructor<z.ZodJWT>;
    ZodCustomStringFormat: z.core.$constructor<z.ZodCustomStringFormat>;
    ZodNumber: z.core.$constructor<z.ZodNumber>;
    ZodNumberFormat: z.core.$constructor<z.ZodNumberFormat>;
    ZodBoolean: z.core.$constructor<z.ZodBoolean>;
    ZodBigInt: z.core.$constructor<z.ZodBigInt>;
    ZodBigIntFormat: z.core.$constructor<z.ZodBigIntFormat>;
    ZodSymbol: z.core.$constructor<z.ZodSymbol>;
    ZodUndefined: z.core.$constructor<z.ZodUndefined>;
    undefined: typeof z.undefined;
    ZodNull: z.core.$constructor<z.ZodNull>;
    null: typeof z.null;
    ZodAny: z.core.$constructor<z.ZodAny>;
    ZodUnknown: z.core.$constructor<z.ZodUnknown>;
    ZodNever: z.core.$constructor<z.ZodNever>;
    ZodVoid: z.core.$constructor<z.ZodVoid>;
    void: typeof z.void;
    ZodDate: z.core.$constructor<z.ZodDate>;
    ZodArray: z.core.$constructor<z.ZodArray>;
    ZodObject: z.core.$constructor<z.ZodObject>;
    ZodUnion: z.core.$constructor<z.ZodUnion>;
    ZodDiscriminatedUnion: z.core.$constructor<z.ZodDiscriminatedUnion>;
    ZodIntersection: z.core.$constructor<z.ZodIntersection>;
    ZodTuple: z.core.$constructor<z.ZodTuple>;
    ZodRecord: z.core.$constructor<z.ZodRecord>;
    ZodMap: z.core.$constructor<z.ZodMap>;
    ZodSet: z.core.$constructor<z.ZodSet>;
    ZodEnum: z.core.$constructor<z.ZodEnum>;
    enum: typeof z.enum;
    ZodLiteral: z.core.$constructor<z.ZodLiteral>;
    ZodFile: z.core.$constructor<z.ZodFile>;
    ZodTransform: z.core.$constructor<z.ZodTransform>;
    ZodOptional: z.core.$constructor<z.ZodOptional>;
    ZodNullable: z.core.$constructor<z.ZodNullable>;
    ZodDefault: z.core.$constructor<z.ZodDefault>;
    ZodPrefault: z.core.$constructor<z.ZodPrefault>;
    ZodNonOptional: z.core.$constructor<z.ZodNonOptional>;
    ZodSuccess: z.core.$constructor<z.ZodSuccess>;
    ZodCatch: z.core.$constructor<z.ZodCatch>;
    catch: typeof z.catch;
    ZodNaN: z.core.$constructor<z.ZodNaN>;
    ZodPipe: z.core.$constructor<z.ZodPipe>;
    ZodCodec: z.core.$constructor<z.ZodCodec>;
    ZodReadonly: z.core.$constructor<z.ZodReadonly>;
    ZodTemplateLiteral: z.core.$constructor<z.ZodTemplateLiteral>;
    ZodLazy: z.core.$constructor<z.ZodLazy>;
    ZodPromise: z.core.$constructor<z.ZodPromise>;
    ZodFunction: z.core.$constructor<z.ZodFunction>;
    function: typeof z._function;
    ZodCustom: z.core.$constructor<z.ZodCustom>;
    instanceof: typeof z.instanceof;
    stringbool: (_params?: string | z.core.$ZodStringBoolParams) => z.ZodCodec<z.ZodString, z.ZodBoolean>;
    lt: typeof z.core._lt;
    lte: typeof z.core._lte;
    gt: typeof z.core._gt;
    gte: typeof z.core._gte;
    positive: typeof z.core._positive;
    negative: typeof z.core._negative;
    nonpositive: typeof z.core._nonpositive;
    nonnegative: typeof z.core._nonnegative;
    multipleOf: typeof z.core._multipleOf;
    maxSize: typeof z.core._maxSize;
    minSize: typeof z.core._minSize;
    size: typeof z.core._size;
    maxLength: typeof z.core._maxLength;
    minLength: typeof z.core._minLength;
    length: typeof z.core._length;
    regex: typeof z.core._regex;
    lowercase: typeof z.core._lowercase;
    uppercase: typeof z.core._uppercase;
    includes: typeof z.core._includes;
    startsWith: typeof z.core._startsWith;
    endsWith: typeof z.core._endsWith;
    property: typeof z.core._property;
    mime: typeof z.core._mime;
    overwrite: typeof z.core._overwrite;
    normalize: typeof z.core._normalize;
    trim: typeof z.core._trim;
    toLowerCase: typeof z.core._toLowerCase;
    toUpperCase: typeof z.core._toUpperCase;
    ZodError: z.core.$constructor<z.ZodError>;
    ZodRealError: z.core.$constructor<z.ZodError>;
    parse: <T extends z.core.$ZodType>(schema: T, value: unknown, _ctx?: z.core.ParseContext<z.core.$ZodIssue>, _params?: {
        callee?: z.core.util.AnyFunc;
        Err?: z.core.$ZodErrorClass;
    }) => z.core.output<T>;
    parseAsync: <T extends z.core.$ZodType>(schema: T, value: unknown, _ctx?: z.core.ParseContext<z.core.$ZodIssue>, _params?: {
        callee?: z.core.util.AnyFunc;
        Err?: z.core.$ZodErrorClass;
    }) => Promise<z.core.output<T>>;
    safeParse: <T extends z.core.$ZodType>(schema: T, value: unknown, _ctx?: z.core.ParseContext<z.core.$ZodIssue>) => z.ZodSafeParseResult<z.core.output<T>>;
    safeParseAsync: <T extends z.core.$ZodType>(schema: T, value: unknown, _ctx?: z.core.ParseContext<z.core.$ZodIssue>) => Promise<z.ZodSafeParseResult<z.core.output<T>>>;
    encode: <T extends z.core.$ZodType>(schema: T, value: z.core.output<T>, _ctx?: z.core.ParseContext<z.core.$ZodIssue>) => z.core.input<T>;
    decode: <T extends z.core.$ZodType>(schema: T, value: z.core.input<T>, _ctx?: z.core.ParseContext<z.core.$ZodIssue>) => z.core.output<T>;
    encodeAsync: <T extends z.core.$ZodType>(schema: T, value: z.core.output<T>, _ctx?: z.core.ParseContext<z.core.$ZodIssue>) => Promise<z.core.input<T>>;
    decodeAsync: <T extends z.core.$ZodType>(schema: T, value: z.core.input<T>, _ctx?: z.core.ParseContext<z.core.$ZodIssue>) => Promise<z.core.output<T>>;
    safeEncode: <T extends z.core.$ZodType>(schema: T, value: z.core.output<T>, _ctx?: z.core.ParseContext<z.core.$ZodIssue>) => z.ZodSafeParseResult<z.core.input<T>>;
    safeDecode: <T extends z.core.$ZodType>(schema: T, value: z.core.input<T>, _ctx?: z.core.ParseContext<z.core.$ZodIssue>) => z.ZodSafeParseResult<z.core.output<T>>;
    safeEncodeAsync: <T extends z.core.$ZodType>(schema: T, value: z.core.output<T>, _ctx?: z.core.ParseContext<z.core.$ZodIssue>) => Promise<z.ZodSafeParseResult<z.core.input<T>>>;
    safeDecodeAsync: <T extends z.core.$ZodType>(schema: T, value: z.core.input<T>, _ctx?: z.core.ParseContext<z.core.$ZodIssue>) => Promise<z.ZodSafeParseResult<z.core.output<T>>>;
    setErrorMap(map: z.core.$ZodErrorMap): void;
    getErrorMap(): z.core.$ZodErrorMap<z.core.$ZodIssue> | undefined;
    ZodIssueCode: {
        readonly invalid_type: "invalid_type";
        readonly too_big: "too_big";
        readonly too_small: "too_small";
        readonly invalid_format: "invalid_format";
        readonly not_multiple_of: "not_multiple_of";
        readonly unrecognized_keys: "unrecognized_keys";
        readonly invalid_union: "invalid_union";
        readonly invalid_key: "invalid_key";
        readonly invalid_element: "invalid_element";
        readonly invalid_value: "invalid_value";
        readonly custom: "custom";
    };
    ZodFirstPartyTypeKind: typeof z.ZodFirstPartyTypeKind;
};

export declare const Heading: default_2.FC<HeadingProps>;

export declare interface HeadingProps extends default_2.HTMLAttributes<HTMLHeadingElement> {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: default_2.ReactNode;
    variant?: 'default' | 'primary' | 'secondary' | 'accent';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
    align?: 'left' | 'center' | 'right' | 'justify';
}

declare interface ILazyState {
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
}

declare interface ILazyState_2 {
    first: number;
    rows: number;
    page: number;
}

declare interface ILazyState_3 {
    first: number;
    rows: number;
    page: number;
    filter?: string;
}

export declare const InlineCode: default_2.FC<Omit<CodeProps, 'variant'>>;

export declare function Input({ id, label, value, name, inputMode, placeholder, disabled, maxLength, readOnly, style, size, ref, required, onChange, password, feedback, toggleMask }: IOption_2): JSX.Element;

export declare function InputSwitch({ text, checked, disabled, style, onChange, className, required, readOnly, }: IOptions_7): JSX.Element;

export declare function InputTextarea({ text, rows, cols, value, disabled, style, className, required, readOnly, autoResize, onChange, }: IOptions_8): JSX.Element;

declare interface IOption {
    model: MenuItem[];
    user?: {
        image?: string;
        name?: string;
    };
}

declare interface IOption_2 {
    id?: string;
    label?: string;
    value?: string;
    name?: string;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    placeholder?: string;
    disabled?: boolean;
    maxLength?: number;
    readOnly?: boolean;
    style?: CSSProperties;
    size?: string | number;
    ref?: any;
    required?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    password?: boolean;
    feedback?: boolean;
    toggleMask?: boolean;
}

declare interface IOptions {
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
        field: string;
        title?: string;
        format?: 'boolean' | 'currency' | 'CPF' | 'phone' | 'date';
        template?: (data: any, options: ColumnBodyOptions) => any;
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
}

declare interface IOptions_2 {
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
    items?: any[] | ((options: ILazyState_2) => Promise<any>);
    layout?: "list" | "grid";
    header?: ReactNode;
    itemTemplate?: (item: any) => ReactNode;
    lazy?: boolean;
    paginator?: boolean;
    paginatorPosition?: "top" | "bottom" | "both";
    totalItems?: number;
    emptyMessage?: string;
    loadingIcon?: ReactNode;
}

declare interface IOptions_3 {
    label?: string | any;
    onPress?: () => void;
    disabled?: boolean;
    style?: CSSProperties;
    showLoading?: boolean;
    showRequireConfirmation?: boolean;
    className?: string;
    icon?: string;
    iconPos?: "left" | "right" | "bottom" | "top";
    type?: "submit" | "reset" | "button";
}

declare interface IOptions_4 {
    text?: string;
    placeholder?: string;
    value?: Date | null;
    onChange?(event: FormEvent<Date, SyntheticEvent<Element, Event>>): void;
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
}

declare interface IOptions_5 {
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
    options?: any[] | ((options: ILazyState_3) => Promise<any[]>);
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
}

declare interface IOptions_6 {
    text: string;
    checked: boolean;
    onChange?: (event: primereact.CheckboxChangeEvent) => void;
    disabled?: boolean;
    style?: CSSProperties;
    className?: string;
    required?: boolean;
    readOnly?: boolean;
    icon?: string;
}

declare interface IOptions_7 {
    checked: boolean;
    text?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    onChange?: (event: primereact_2.InputSwitchChangeEvent) => void;
    className?: string;
    required?: boolean;
    readOnly?: boolean;
}

declare interface IOptions_8 {
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
}

declare interface IOptions_9 {
    text: string;
    checked: boolean;
    onChange?: (event: primereact_3.RadioButtonChangeEvent) => void;
    disabled?: boolean;
    style?: CSSProperties;
    className?: string;
    required?: boolean;
    readOnly?: boolean;
    tooltip?: string;
    name?: string;
    id?: string;
}

export declare const Label: default_2.FC<LabelProps>;

export declare interface LabelProps extends default_2.LabelHTMLAttributes<HTMLLabelElement> {
    children: default_2.ReactNode;
    variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'error' | 'success' | 'warning';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
    required?: boolean;
}

export declare const Link: default_2.FC<LinkProps>;

export declare interface LinkProps extends default_2.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: default_2.ReactNode;
    variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'muted';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
    underline?: 'none' | 'hover' | 'always';
    external?: boolean;
}

export declare function MenuBar({ model, user }: IOption): JSX.Element | null;

export declare const Paragraph: default_2.FC<Omit<TextProps, 'as'>>;

export { ProgressBar }

export { ProgressSpinner }

export declare function RadioButton({ text, checked, onChange, disabled, style, className, required, readOnly, tooltip, name, id, }: IOptions_9): JSX.Element;

export { SelectButton }

export { Skeleton }

export declare const Span: default_2.FC<Omit<TextProps, 'as'>>;

export { Tag }

declare const Text_2: default_2.FC<TextProps>;
export { Text_2 as Text }

export declare interface TextProps extends default_2.HTMLAttributes<HTMLParagraphElement> {
    children: default_2.ReactNode;
    variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'muted' | 'error' | 'success' | 'warning';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
    align?: 'left' | 'center' | 'right' | 'justify';
    as?: 'p' | 'span' | 'div';
}

export { Toast }

export declare const TypographyExample: default_2.FC;

export { }


declare module '@tanstack/react-router' {
    interface FileRoutesByPath {
        '/': {
            id: '/';
            path: '/';
            fullPath: '/';
            preLoaderRoute: typeof IndexRouteImport;
            parentRoute: typeof rootRouteImport;
        };
    }
}


declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
