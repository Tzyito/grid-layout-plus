declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    isDraggable: {
        type: BooleanConstructor;
        default: null;
    };
    isResizable: {
        type: BooleanConstructor;
        default: null;
    };
    isBounded: {
        type: BooleanConstructor;
        default: null;
    };
    static: {
        type: BooleanConstructor;
        default: boolean;
    };
    minH: {
        type: NumberConstructor;
        default: number;
    };
    minW: {
        type: NumberConstructor;
        default: number;
    };
    maxH: {
        type: NumberConstructor;
        default: number;
    };
    maxW: {
        type: NumberConstructor;
        default: number;
    };
    x: {
        type: NumberConstructor;
        required: true;
    };
    y: {
        type: NumberConstructor;
        required: true;
    };
    w: {
        type: NumberConstructor;
        required: true;
    };
    h: {
        type: NumberConstructor;
        required: true;
    };
    i: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    dragIgnoreFrom: {
        type: StringConstructor;
        default: string;
    };
    dragAllowFrom: {
        type: StringConstructor;
        default: null;
    };
    resizeIgnoreFrom: {
        type: StringConstructor;
        default: string;
    };
    preserveAspectRatio: {
        type: BooleanConstructor;
        default: boolean;
    };
    dragOption: {
        type: ObjectConstructor;
        default: () => {};
    };
    resizeOption: {
        type: ObjectConstructor;
        default: () => {};
    };
    rowHeight: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: ArrayConstructor;
        default: () => number[];
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:h": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    isDraggable: {
        type: BooleanConstructor;
        default: null;
    };
    isResizable: {
        type: BooleanConstructor;
        default: null;
    };
    isBounded: {
        type: BooleanConstructor;
        default: null;
    };
    static: {
        type: BooleanConstructor;
        default: boolean;
    };
    minH: {
        type: NumberConstructor;
        default: number;
    };
    minW: {
        type: NumberConstructor;
        default: number;
    };
    maxH: {
        type: NumberConstructor;
        default: number;
    };
    maxW: {
        type: NumberConstructor;
        default: number;
    };
    x: {
        type: NumberConstructor;
        required: true;
    };
    y: {
        type: NumberConstructor;
        required: true;
    };
    w: {
        type: NumberConstructor;
        required: true;
    };
    h: {
        type: NumberConstructor;
        required: true;
    };
    i: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    dragIgnoreFrom: {
        type: StringConstructor;
        default: string;
    };
    dragAllowFrom: {
        type: StringConstructor;
        default: null;
    };
    resizeIgnoreFrom: {
        type: StringConstructor;
        default: string;
    };
    preserveAspectRatio: {
        type: BooleanConstructor;
        default: boolean;
    };
    dragOption: {
        type: ObjectConstructor;
        default: () => {};
    };
    resizeOption: {
        type: ObjectConstructor;
        default: () => {};
    };
    rowHeight: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: ArrayConstructor;
        default: () => number[];
    };
}>> & Readonly<{
    "onUpdate:h"?: ((...args: any[]) => any) | undefined;
}>, {
    isDraggable: boolean;
    isResizable: boolean;
    isBounded: boolean;
    static: boolean;
    minH: number;
    minW: number;
    maxH: number;
    maxW: number;
    dragIgnoreFrom: string;
    dragAllowFrom: string;
    resizeIgnoreFrom: string;
    preserveAspectRatio: boolean;
    dragOption: Record<string, any>;
    resizeOption: Record<string, any>;
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
