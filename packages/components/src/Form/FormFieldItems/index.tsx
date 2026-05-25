import type { FieldValues } from 'react-hook-form';
import type { FormProps } from '../types';

import { FormFieldItem } from '../FormFieldItem';

export type FormFieldItemsProps<TData extends FieldValues> = Pick<FormProps<TData>, 'fields' | 'inline'> & {
  control: FormProps<TData>['form']['control'];
};
export const FormFieldItems = <TData extends FieldValues>({ fields, ...props }: FormFieldItemsProps<TData>) => {
  return (
    <>
      {fields.map((field) => (
        <FormFieldItem key={field.name} field={field} {...props} />
      ))}
    </>
  );
};
