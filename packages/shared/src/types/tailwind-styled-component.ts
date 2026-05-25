import type { ValidationMap, WeakValidationMap } from 'prop-types';
import type { ForwardedRef } from 'react';
import type { TailwindBoxVariants } from './common';

export type As = React.ElementType;
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export interface TailwindStyledComponentProps extends TailwindBoxVariants {
  'data-qa'?: string;
}

export type HTMLTailwindStyledComponentProps<T extends As> = Omit<
  PropsOf<T>,
  'ref' | keyof TailwindStyledComponentProps
> &
  TailwindStyledComponentProps & { as?: As };

export type OmitCommonProps<Target, OmitAdditionalProps extends keyof Record<PropertyKey, never> = never> = Omit<
  Target,
  'transition' | 'as' | 'textColor' | 'translate' | OmitAdditionalProps
>;

export type RightJoinProps<
  SourceProps extends object = NonNullable<unknown>,
  OverrideProps extends object = NonNullable<unknown>,
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

type Assign<T, U> = Omit<T, keyof U> & U;

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = NonNullable<unknown>,
  AsComponent extends As = As,
> = (RightJoinProps<ComponentProps, AdditionalProps> | RightJoinProps<AsProps, AdditionalProps>) & {
  as?: AsComponent;
};

export type ComponentWithAs<Component extends As, Props extends object = NonNullable<unknown>> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<React.ComponentProps<Component>, React.ComponentProps<AsComponent>, Props, AsComponent>,
    ref?: ForwardedRef<Component>,
  ): React.ReactElement;

  displayName?: string;
  propTypes?: WeakValidationMap<unknown>;
  contextTypes?: ValidationMap<unknown>;
  id?: string;
};

export interface TailwindStyledComponent<T extends As, P extends object = NonNullable<unknown>> extends ComponentWithAs<
  T,
  Assign<TailwindStyledComponentProps, P>
> {}
