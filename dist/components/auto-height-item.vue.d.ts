declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    h: {
        type: NumberConstructor;
        required: true;
    };
    rowHeight: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: ArrayConstructor;
        default: () => number[];
    };
    minH: {
        type: NumberConstructor;
        default: number;
    };
    maxH: {
        type: NumberConstructor;
        default: number;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:h": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    h: {
        type: NumberConstructor;
        required: true;
    };
    rowHeight: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: ArrayConstructor;
        default: () => number[];
    };
    minH: {
        type: NumberConstructor;
        default: number;
    };
    maxH: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    "onUpdate:h"?: ((...args: any[]) => any) | undefined;
}>, {
    minH: number;
    maxH: number;
    rowHeight: number;
    margin: unknown[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
