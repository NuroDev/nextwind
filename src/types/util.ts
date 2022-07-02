import type { ComponentProps, JSXElementConstructor, PropsWithChildren } from 'react';

/**
 * With Children
 *
 * @description Adds an optional `ReactNode` property called `children`
 *
 * @example
 * ```ts
 * interface Props extends WithChildren {
 * 	foo: string;
 * }
 * ```
 *
 * @example
 * ```ts
 * type Props = WithChildren<{
 * 	foo: string;
 * }>
 * ```
 */
export type WithChildren<T = {}> = PropsWithChildren<T>;

/**
 * With ClassName
 *
 * @description Adds an optional `className` property to a provided generic type
 *
 * @example
 * ```ts
 * interface Props extends WithClassName {
 * 	foo: string;
 * }
 * ```
 *
 * @example
 * ```ts
 * type Props = WithClassName<{
 * 	foo: string;
 * }>
 * ```
 */
export type WithClassName<T = {}> = T & {
	className?: string;
};

/**
 * With Props
 *
 * @description Extracts the prop types from the typeof of a provided React component
 *
 * @example
 * ```tsx
 * interface ParentProps {
 * 	foo: string;
 * }
 *
 * function Parent (props: ParentProps) {
 * 	return <>Hello World</>
 * }
 *
 * interface Props extends WithProps<typeof Parent> {}
 * ```
 */
export type WithProps<
	T extends keyof JSX.IntrinsicElements | JSXElementConstructor<U>,
	U = any,
> = ComponentProps<T>;
