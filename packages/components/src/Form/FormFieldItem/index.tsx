import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  FieldError as RHFFieldError,
} from 'react-hook-form';
import type { ComboboxValueType } from '../../Combobox';
import type { FormFieldCustomItem, FormFieldFieldItem, FormFieldItemType, FormProps } from '../types';

import { cn } from '@/shared/lib';

import { Checkbox } from '../../Checkbox';
import { CheckboxGroup } from '../../CheckboxGroup/CheckboxGroup';
import { Combobox } from '../../Combobox';
import { DatePicker } from '../../DatePicker';
import { DateRangePicker } from '../../DateRangePicker';
import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from '../../Field';
import { Input } from '../../Input';
import { InputGroup } from '../../InputGroup';
import { MultiSelect } from '../../MultiSelect';
import { NativeCheckbox } from '../../NativeCheckbox';
import { NativeCheckboxGroup } from '../../NativeCheckboxGroup';
import { NativeRadioGroup } from '../../NativeRadioGroup';
import { NumberInput } from '../../NumberInput/NumberInput';
import { RadioGroup } from '../../RadioGroup';
import { Select } from '../../Select';
import { Textarea } from '../../Textarea';
import { FormField } from '../components';
import { FormFieldTypeEnum } from '../types';

export interface FormFieldCustomRendererProps<TData extends FieldValues> {
  field: ControllerRenderProps<TData, FieldPath<TData>>;
  fieldState: ControllerFieldState;
  item: FormFieldCustomItem<TData>;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
}
/**
 * Renders a custom field item.
 * @param field - The field to render
 * @param item - The item to render
 * @param 'aria-invalid' - Whether the field is invalid
 * @param 'aria-describedby' - The describedby attribute
 * @returns The rendered custom field item
 */
export const FormFieldCustomRenderer = <TData extends FieldValues>({
  field,
  fieldState,
  item,
  'aria-invalid': invalid,
  'aria-describedby': describedby,
}: FormFieldCustomRendererProps<TData>) => {
  const fieldProps = { ...field, 'aria-invalid': invalid, 'aria-describedby': describedby };
  return item.render?.({ field: fieldProps, fieldState });
};

export interface FormFieldFieldRendererProps<TData extends FieldValues> {
  field: ControllerRenderProps<TData, FieldPath<TData>>;
  item: FormFieldFieldItem<TData>;
  label: React.ReactNode;
  required?: boolean;
  isInvalid?: boolean;
  error?: RHFFieldError;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
}

/**
 * Renders a field item using the Field component family.
 * Uses Field, FieldLabel, FieldDescription, and FieldError for accessible, composable markup.
 * @param field - The RHF controller field
 * @param item - The field item config
 * @param label - The label to render
 * @param required - Whether the field is required
 * @param isInvalid - Whether the field has a validation error
 * @param error - The RHF field error object
 * @returns The rendered field wrapped in a Field component
 */
export const FormFieldFieldRenderer = <TData extends FieldValues>({
  field,
  item,
  label,
  required,
  isInvalid,
  error,
  'aria-invalid': invalid,
  'aria-describedby': describedby,
}: FormFieldFieldRendererProps<TData>) => {
  const isLocalInvalid = invalid ?? isInvalid;
  const fieldProps = {
    ...field,
    'aria-invalid': isLocalInvalid,
    'aria-describedby': describedby,
  };
  return (
    <Field
      label={label}
      description={item.description}
      errors={isLocalInvalid && error ? [error] : undefined}
      labelProps={{ htmlFor: field.name, required }}
      data-qa={`form-field-${item.name}`}
      data-invalid={isLocalInvalid}
      {...item.fieldProps}
    >
      {item.render({ field: fieldProps })}
    </Field>
  );
};

export type FormFieldItemProps<TData extends FieldValues> = Pick<FormProps<TData>, 'inline'> & {
  control: FormProps<TData>['form']['control'];
  field: FormFieldItemType<TData>;
};

/**
 * Renders a single form field item using the Field component family.
 *
 * Internally uses Field, FieldLabel, FieldDescription, and FieldError instead of
 * FormItem / FormLabel / FormControl / FormMessage, enabling the composable Field
 * pattern alongside the config-driven Form component.
 *
 * @example
 * // Used by the config-driven <Form /> component
 * <FormFieldItem control={form.control} field={fieldConfig} />
 *
 * @example
 * // Composable usage with FormField + Field components (shadcn v4 style)
 * <FormField
 *   control={form.control}
 *   name="username"
 *   render={({ field, fieldState }) => (
 *     <Field data-invalid={fieldState.invalid}>
 *       <FieldLabel htmlFor={field.name}>Username</FieldLabel>
 *       <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
 *       <FieldDescription>Choose a unique username.</FieldDescription>
 *       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
 *     </Field>
 *   )}
 * />
 */
export const FormFieldItem = <TData extends FieldValues>({
  inline: formInline,
  control,
  field,
}: FormFieldItemProps<TData>) => {
  const {
    required,
    label,
    labelDescription,
    inline,
    formItemClassName,
    formLabelClassName,
    hideErrorMessage,
    ...item
  } = field;
  const inlineTypes = ['checkbox'];
  const isInline = inline || formInline || inlineTypes.includes(item.type);
  return (
    <FormField
      control={control}
      name={item.name}
      render={({ field: rhfField, fieldState }) => {
        const isInvalid = fieldState.invalid;
        const isInlineType = inlineTypes.includes(item.type);
        return (
          <div className={cn('flex flex-col gap-1', formItemClassName)} data-qa={`form-field-${item.name}`}>
            <div
              className={cn('flex flex-col gap-2', {
                'flex-row items-center': isInline,
              })}
            >
              {label && item.type !== FormFieldTypeEnum.Field && (
                <FieldLabel
                  htmlFor={rhfField.name}
                  required={required}
                  data-qa={`form-label-${item.name}`}
                  className={cn(
                    'gap-0',
                    {
                      'break-word w-36 shrink-0': formInline && !isInlineType,
                      'order-1': isInlineType,
                    },
                    formLabelClassName,
                  )}
                >
                  {label}
                </FieldLabel>
              )}

              <>
                {item.type === FormFieldTypeEnum.Field && (
                  <FormFieldFieldRenderer
                    field={rhfField}
                    item={item}
                    label={label}
                    required={required}
                    isInvalid={isInvalid}
                    error={fieldState.error}
                    aria-invalid={isInvalid}
                  />
                )}
                {item.type === FormFieldTypeEnum.Custom && (
                  <FormFieldCustomRenderer
                    field={rhfField}
                    fieldState={fieldState}
                    item={item}
                    aria-invalid={isInvalid}
                  />
                )}
                {item.type === FormFieldTypeEnum.Input && (
                  <Input
                    {...rhfField}
                    id={rhfField.name}
                    autoComplete={item.autoComplete}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    type={item.inputType || 'text'}
                    aria-invalid={isInvalid}
                    data-qa={`form-input-${item.name}`}
                    {...item?.inputProps}
                    onChange={(event) => {
                      rhfField.onChange(event.currentTarget.value);
                      item.onValueChange?.(event.currentTarget.value);
                      item.onChange?.(event);
                    }}
                  />
                )}
                {item.type === FormFieldTypeEnum.InputGroup && (
                  <InputGroup
                    addonStart={item.addonStart}
                    addonStartAlign={item.addonStartAlign}
                    addonEnd={item.addonEnd}
                    addonEndAlign={item.addonEndAlign}
                    addonStartProps={item.addonStartProps}
                    addonEndProps={item.addonEndProps}
                    className={item.className}
                    {...(item.textareaProps !== undefined
                      ? {
                          textareaProps: {
                            ...rhfField,
                            id: rhfField.name,
                            autoComplete: item.autoComplete,
                            placeholder: item.placeholder,
                            disabled: item.disabled,
                            'aria-invalid': isInvalid,
                            'data-qa': `form-input-group-${item.name}`,
                            ...item.textareaProps,
                            onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => {
                              rhfField.onChange(event.currentTarget.value);
                              item.onValueChange?.(event.currentTarget.value);
                              item.onChange?.(event as unknown as React.ChangeEvent<HTMLInputElement>);
                            },
                          },
                        }
                      : {
                          inputProps: {
                            ...rhfField,
                            id: rhfField.name,
                            autoComplete: item.autoComplete,
                            placeholder: item.placeholder,
                            disabled: item.disabled,
                            type: item.inputType || 'text',
                            'aria-invalid': isInvalid,
                            'data-qa': `form-input-group-${item.name}`,
                            ...item?.inputProps,
                            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                              rhfField.onChange(event.currentTarget.value);
                              item.onValueChange?.(event.currentTarget.value);
                              item.onChange?.(event);
                            },
                          },
                        })}
                  />
                )}
                {item.type === FormFieldTypeEnum.Number && (
                  <NumberInput
                    {...rhfField}
                    id={rhfField.name}
                    value={rhfField.value ?? ''}
                    autoComplete={item.autoComplete}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    aria-invalid={isInvalid}
                    data-qa={`form-number-input-${item.name}`}
                    {...item?.numberInputProps}
                    onChange={(event) => {
                      const value = event.currentTarget.valueAsNumber;
                      rhfField.onChange(Number.isNaN(value) ? undefined : value);
                      item.onValueChange?.(value);
                    }}
                  />
                )}
                {item.type === FormFieldTypeEnum.TextArea && (
                  <Textarea
                    {...rhfField}
                    id={rhfField.name}
                    autoComplete={item.autoComplete}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    aria-invalid={isInvalid}
                    data-qa={`form-textarea-${item.name}`}
                    {...item?.textareaProps}
                    onChange={(event) => {
                      rhfField.onChange(event.currentTarget.value);
                      item.onValueChange?.(event.currentTarget.value);
                      item.onChange?.(event);
                    }}
                  />
                )}
                {item.type === FormFieldTypeEnum.Select && (
                  <Select
                    {...rhfField}
                    id={rhfField.name}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    triggerClassName={item.triggerClassName}
                    contentClassName={item.contentClassName}
                    options={item.options}
                    aria-invalid={isInvalid}
                    data-qa={`form-select-${item.name}`}
                    {...item?.selectProps}
                    onValueChange={(value, eventDetails) => {
                      rhfField.onChange(value || undefined);
                      item.onValueChange?.(value, eventDetails);
                    }}
                  />
                )}
                {item.type === FormFieldTypeEnum.Checkbox && (
                  <Checkbox
                    {...(({ onChange: _onChange, ...rest }) => rest)(rhfField)}
                    id={rhfField.name}
                    disabled={item.disabled}
                    className={item.className}
                    variant={item.variant}
                    aria-invalid={isInvalid}
                    data-qa={`form-checkbox-${item.name}`}
                    {...item?.checkboxProps}
                    onCheckedChange={(checked) => {
                      rhfField.onChange(checked);
                      item.onCheckedChange?.(checked);
                    }}
                  />
                )}
                {item.type === FormFieldTypeEnum.CheckboxGroup && (
                  <CheckboxGroup
                    {...rhfField}
                    inline={item.checkboxInline}
                    className={item.className}
                    options={item.options}
                    labelClassName={item.labelClassName}
                    swapRight={item.swapRight}
                    variant={item.variant}
                    aria-invalid={isInvalid}
                    data-qa={`form-checkbox-group-${item.name}`}
                    {...item?.checkboxGroupProps}
                    selectedValues={rhfField.value?.length ? rhfField.value : undefined}
                    onSelectedValueChange={(values) => {
                      rhfField.onChange(values.length ? values : undefined);
                      item.onSelectedValueChange?.(values);
                    }}
                  />
                )}
                {item.type === FormFieldTypeEnum.NativeCheckbox && (
                  <NativeCheckbox
                    {...rhfField}
                    id={rhfField.name}
                    disabled={item.disabled}
                    className={item.className}
                    aria-invalid={isInvalid}
                    data-qa={`form-native-checkbox-${item.name}`}
                    {...item?.nativeCheckboxProps}
                    onChange={item?.onChange}
                    onCheckedChange={(checked) => {
                      rhfField.onChange(checked);
                      item.onCheckedChange?.(checked);
                    }}
                  />
                )}
                {item.type === FormFieldTypeEnum.NativeCheckboxGroup && (
                  <NativeCheckboxGroup
                    {...rhfField}
                    inline={item.checkboxInline}
                    className={item.className}
                    options={item.options}
                    labelClassName={item.labelClassName}
                    swapRight={item.swapRight}
                    aria-invalid={isInvalid}
                    data-qa={`form-native-checkbox-group-${item.name}`}
                    {...item?.nativeCheckboxGroupProps}
                    value={rhfField.value?.length ? rhfField.value : undefined}
                    onValuesChange={(values) => {
                      rhfField.onChange(values.length ? values : undefined);
                      item.onValuesChange?.(values);
                    }}
                  />
                )}
                {item.type === FormFieldTypeEnum.RadioGroup && (
                  <RadioGroup
                    {...rhfField}
                    id={rhfField.name}
                    inline={item.radioInline}
                    className={item.className}
                    options={item.options}
                    labelClassName={item.labelClassName}
                    swapRight={item.swapRight}
                    variant={item.variant}
                    disabled={item.disabled}
                    aria-invalid={isInvalid}
                    data-qa={`form-radio-group-${item.name}`}
                    {...item?.radioGroupProps}
                    onChange={item?.onChange}
                    onValueChange={(value, eventDetails) => {
                      rhfField.onChange(value || undefined);
                      item.onValueChange?.(value, eventDetails);
                    }}
                  />
                )}
                {item.type === FormFieldTypeEnum.NativeRadioGroup && (
                  <NativeRadioGroup
                    {...rhfField}
                    id={rhfField.name}
                    inline={item.radioInline}
                    className={item.className}
                    options={item.options}
                    labelClassName={item.labelClassName}
                    swapRight={item.swapRight}
                    disabled={item.disabled}
                    aria-invalid={isInvalid}
                    data-qa={`form-native-radio-group-${item.name}`}
                    {...item?.nativeRadioGroupProps}
                    onChange={(event) => {
                      rhfField.onChange(event.currentTarget.value || undefined);
                      item?.onChange?.(event);
                    }}
                  />
                )}
                {item.type === FormFieldTypeEnum.Combobox && (
                  <Combobox
                    {...rhfField}
                    options={item.options}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    aria-invalid={isInvalid}
                    data-qa={`form-combobox-${item.name}`}
                    {...item?.comboboxProps}
                    onValueChange={(value, eventDetails) => {
                      rhfField.onChange(value || undefined);
                      item.onValueChange?.(value as ComboboxValueType, eventDetails);
                    }}
                  />
                )}
                {item.type === FormFieldTypeEnum.MultiSelect && (
                  <MultiSelect
                    {...rhfField}
                    options={item.options}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    aria-invalid={isInvalid}
                    data-qa={`form-multi-select-${item.name}`}
                    {...item?.multiSelectProps}
                    selectedValues={rhfField.value?.length ? rhfField.value : undefined}
                    onSelectedValueChange={(values) => {
                      rhfField.onChange(values.length ? values : undefined);
                      item.onSelectedValueChange?.(values);
                    }}
                  />
                )}
                {item.type === FormFieldTypeEnum.DatePicker && (
                  <DatePicker
                    {...rhfField}
                    date={rhfField.value}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    aria-invalid={isInvalid}
                    data-qa={`form-date-picker-${item.name}`}
                    {...item?.datePickerProps}
                    onDateChange={(value) => {
                      rhfField.onChange(value || undefined);
                      item.onDateChange?.(value);
                    }}
                  />
                )}
                {item.type === FormFieldTypeEnum.DateRangePicker && (
                  <DateRangePicker
                    {...rhfField}
                    dateRange={rhfField.value}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    aria-invalid={isInvalid}
                    data-qa={`form-date-range-picker-${item.name}`}
                    {...item?.dateRangePickerProps}
                    onDateRangeChange={(value) => {
                      rhfField.onChange(value || undefined);
                      item.onDateRangeChange?.(value);
                    }}
                  />
                )}
              </>
            </div>
            <FieldContent>
              {item.description && item.type !== FormFieldTypeEnum.Field && (
                <FieldDescription className={cn({ 'pl-38': formInline })} data-qa={`form-description-${item.name}`}>
                  {item.description}
                </FieldDescription>
              )}
              {!hideErrorMessage && item.type !== FormFieldTypeEnum.Field && isInvalid && (
                <FieldError
                  errors={[fieldState.error]}
                  data-qa={`form-error-message-${item.name}`}
                  className={cn({ 'pl-38': formInline })}
                />
              )}
            </FieldContent>
          </div>
        );
      }}
    />
  );
};
