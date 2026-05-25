import * as React from 'react';

import { mergeProps } from '@base-ui/react/merge-props';

import { assignRef } from './assign-ref';

type AnyProps = Record<string, unknown>;
/**
 *
 * @param refs The refs to be merged.
 * @returns The merged ref callback function.
 */
export const mergeRefs = <T,>(...refs: (React.Ref<T> | undefined | null)[]): React.RefCallback<T> => {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (ref) assignRef(ref as React.ForwardedRef<T>, value as T);
    });
  };
};

export interface SlotProps extends AnyProps {
  children?: React.ReactNode;
}
/**
 * A slot component that renders its children as a slot.
 * @param props The props for the slot.
 * @param ref The ref to be forwarded to the slot.
 * @returns The slot component.
 */
export const Slot = React.forwardRef<HTMLElement, SlotProps>(({ children, ...slotProps }, ref) => {
  if (!React.isValidElement(children)) {
    return (children ?? null) as React.ReactElement | null;
  }

  const child = children as React.ReactElement<AnyProps>;
  const childProps = child.props as AnyProps;

  // React 18.3 places a non-enumerable `ref` getter on element.props in DEV mode.
  // Destructuring `{ ref, ...rest } = element.props` calls that getter, which fires:
  //   "[Component]: ref is not a prop. Trying to access it will result in `undefined`..."
  // Object.entries() only visits own enumerable properties, safely skipping the getter.
  const childPropsWithoutRef = Object.fromEntries(
    Object.entries(childProps).filter(([key]) => key !== 'ref'),
  ) as AnyProps;

  const merged = mergeProps(slotProps, childPropsWithoutRef) as AnyProps;

  if (ref) {
    // In React 19, `ref` is a regular enumerable prop in element.props.
    // In React 18.3, `ref` is a non-enumerable getter → Object.keys() won't include it.
    // We check enumerability to safely read the child ref only in React 19.
    const hasEnumerableChildRef = Object.keys(childProps).includes('ref');
    const childRef = hasEnumerableChildRef ? (childProps as AnyProps & { ref: React.Ref<unknown> }).ref : null;

    merged.ref = childRef ? mergeRefs(ref as React.Ref<unknown>, childRef as React.Ref<unknown>) : ref;
  }

  // When ref is null/undefined, cloneElement preserves the child's original element.ref.
  return React.cloneElement(child, merged);
});
Slot.displayName = 'Slot';
