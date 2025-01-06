declare module 'react-native/Libraries/Utilities/codegenNativeComponent' {
    export default function codegenNativeComponent<P>(name: string): React.ComponentType<P>;
}

declare module 'react-native/Libraries/Types/CodegenTypes' {
    export type Int32 = number;
    export type Float = number;
    export type WithDefault<T, D> = T | D;
}
