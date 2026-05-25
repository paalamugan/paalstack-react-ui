import type { ColorVariant } from '@/shared/constants';
import type { ReactNode } from 'react';
import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormReset,
  UseFormReturn,
} from 'react-hook-form';
import type { ButtonProps } from '../Button';
import type { CheckboxProps } from '../Checkbox';
import type { CheckboxGroupProps } from '../CheckboxGroup/CheckboxGroup';
import type { ComboboxProps, ComboboxValueType } from '../Combobox';
import type { DatePickerProps } from '../DatePicker';
import type { DateRangePickerProps } from '../DateRangePicker';
import type { FieldProps } from '../Field';
import type { InputProps } from '../Input';
import type { InputGroupProps } from '../InputGroup/InputGroup';
import type { MultiSelectProps } from '../MultiSelect';
import type { NativeCheckboxProps } from '../NativeCheckbox';
import type { NativeCheckboxGroupProps } from '../NativeCheckboxGroup';
import type { NativeRadioGroupProps } from '../NativeRadioGroup';
import type { NumberInputProps } from '../NumberInput';
import type { RadioGroupProps } from '../RadioGroup';
import type { SelectProps } from '../Select';
import type { TextareaProps } from '../Textarea';

interface CommonFormFieldItem<TData> {
  name: Path<TData>;
  label?: ReactNode;
  labelDescription?: ReactNode;
  description?: ReactNode;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  inline?: boolean;
  formItemClassName?: string;
  formLabelClassName?: string;
  hideErrorMessage?: boolean;
}

/**
 * The form field type enum
 */
export enum FormFieldTypeEnum {
  Input = 'input',
  Number = 'number',
  TextArea = 'textarea',
  Select = 'select',
  Checkbox = 'checkbox',
  MultiSelect = 'multi-select',
  RadioGroup = 'radio-group',
  NativeRadioGroup = 'native-radio-group',
  NativeCheckbox = 'native-checkbox',
  CheckboxGroup = 'checkbox-group',
  NativeCheckboxGroup = 'native-checkbox-group',
  Combobox = 'combobox',
  DatePicker = 'date-picker',
  DateRangePicker = 'date-range-picker',
  InputGroup = 'input-group',
  Field = 'field',
  Custom = 'custom',
}

export type FormInputProps = Omit<
  InputProps,
  'inline' | 'label' | 'className' | 'disabled' | 'placeholder' | 'name' | 'required'
>;

export interface FormFieldInputItem<TData>
  extends CommonFormFieldItem<TData>, Partial<Pick<FormInputProps, 'onValueChange' | 'onChange'>> {
  type: 'input';
  autoComplete?: 'off' | 'on';
  inputType?: React.ComponentPropsWithoutRef<'input'>['type'];
  inputProps?: Omit<FormInputProps, 'onValueChange' | 'onChange'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldNumberInputItem<TData>
  extends CommonFormFieldItem<TData>, Partial<Pick<NumberInputProps, 'onValueChange'>> {
  type: 'number';
  autoComplete?: 'off' | 'on';
  numberInputProps?: Omit<NumberInputProps, 'label' | 'value' | 'onValueChange'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldTextAreaItem<TData>
  extends CommonFormFieldItem<TData>, Partial<Pick<TextareaProps, 'onValueChange' | 'onChange'>> {
  type: 'textarea';
  autoComplete?: 'off' | 'on';
  textareaProps?: Omit<TextareaProps, 'label' | 'name' | 'onValueChange' | 'onChange'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldSelectItem<TData>
  extends CommonFormFieldItem<TData>, Partial<Pick<SelectProps, 'onValueChange'>> {
  type: 'select';
  options: SelectProps['options'];
  triggerClassName?: string;
  contentClassName?: string;
  selectProps?: Omit<SelectProps, 'label' | 'placeholder' | 'name' | 'onValueChange' | 'options'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldCheckboxItem<TData>
  extends Omit<CommonFormFieldItem<TData>, 'placeholder'>, Partial<Pick<CheckboxProps, 'onCheckedChange'>> {
  type: 'checkbox';
  variant?: ColorVariant;
  checkboxProps?: Omit<CheckboxProps, 'label' | 'name' | 'type' | 'onCheckedChange'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldNativeCheckboxItem<TData>
  extends
    Omit<CommonFormFieldItem<TData>, 'placeholder'>,
    Partial<Pick<NativeCheckboxProps, 'onChange' | 'onCheckedChange'>> {
  type: 'native-checkbox';
  nativeCheckboxProps?: Omit<NativeCheckboxProps, 'label' | 'name' | 'onCheckedChange' | 'onChange'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldCheckboxGroupItem<TData>
  extends Omit<CommonFormFieldItem<TData>, 'placeholder'>, Partial<Pick<CheckboxGroupProps, 'onSelectedValueChange'>> {
  type: 'checkbox-group';
  options: CheckboxGroupProps['options'];
  checkboxInline?: boolean;
  labelClassName?: string;
  swapRight?: boolean;
  variant?: ColorVariant;
  checkboxGroupProps?: Omit<CheckboxGroupProps, 'label' | 'name' | 'selectedValues' | 'onSelectedValueChange'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldNativeCheckboxGroupItem<TData>
  extends Omit<CommonFormFieldItem<TData>, 'placeholder'>, Partial<Pick<NativeCheckboxGroupProps, 'onValuesChange'>> {
  type: 'native-checkbox-group';
  options: NativeCheckboxGroupProps['options'];
  checkboxInline?: boolean;
  labelClassName?: string;
  swapRight?: boolean;
  nativeCheckboxGroupProps?: Omit<NativeCheckboxGroupProps, 'label' | 'name' | 'onValuesChange' | 'options'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldRadioGroupItem<TData>
  extends
    Omit<CommonFormFieldItem<TData>, 'placeholder'>,
    Partial<Pick<RadioGroupProps, 'onChange' | 'onValueChange'>> {
  type: 'radio-group';
  options: RadioGroupProps['options'];
  radioInline?: boolean;
  labelClassName?: string;
  swapRight?: boolean;
  variant?: ColorVariant;
  radioGroupProps?: Omit<RadioGroupProps, 'label' | 'name' | 'onValueChange' | 'onChange' | 'options'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldNativeRadioGroupItem<TData>
  extends
    Omit<CommonFormFieldItem<TData>, 'placeholder'>,
    Partial<Pick<NativeRadioGroupProps, 'onChange' | 'onCheckedChange'>> {
  type: 'native-radio-group';
  options: NativeRadioGroupProps['options'];
  radioInline?: boolean;
  labelClassName?: string;
  swapRight?: boolean;
  nativeRadioGroupProps?: Omit<NativeRadioGroupProps, 'label' | 'name' | 'onCheckedChange' | 'onChange' | 'options'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldComboboxItem<TData>
  extends CommonFormFieldItem<TData>, Partial<Pick<ComboboxProps<ComboboxValueType>, 'onValueChange' | 'value'>> {
  type: 'combobox';
  options: ComboboxProps['options'];
  comboboxProps?: Omit<ComboboxProps<ComboboxValueType>, 'label' | 'onValueChange' | 'value' | 'multiple'> & {
    'data-qa'?: string;
    multiple?: boolean;
  };
}

export interface FormFieldMultiSelectItem<TData>
  extends CommonFormFieldItem<TData>, Partial<Pick<MultiSelectProps, 'onSelectedValueChange'>> {
  type: 'multi-select';
  options: MultiSelectProps['options'];
  multiSelectProps?: Omit<MultiSelectProps, 'label' | 'selectedValues' | 'onSelectedValueChange'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldDatePickerItem<TData>
  extends CommonFormFieldItem<TData>, Partial<Pick<DatePickerProps, 'onDateChange'>> {
  type: 'date-picker';
  datePickerProps?: Omit<DatePickerProps, 'label' | 'onDateChange'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldDateRangePickerItem<TData>
  extends CommonFormFieldItem<TData>, Partial<Pick<DateRangePickerProps, 'onDateRangeChange'>> {
  type: 'date-range-picker';
  dateRangePickerProps?: Omit<DateRangePickerProps, 'label' | 'onDateRangeChange'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldInputGroupItem<TData>
  extends
    CommonFormFieldItem<TData>,
    Partial<Pick<FormInputProps, 'onValueChange' | 'onChange'>>,
    Omit<InputGroupProps, 'inputProps' | 'textareaProps' | 'children' | 'onValueChange' | 'onChange'> {
  type: 'input-group';
  autoComplete?: 'off' | 'on';
  inputType?: React.ComponentPropsWithoutRef<'input'>['type'];
  inputProps?: Omit<FormInputProps, 'onValueChange' | 'onChange'> & {
    'data-qa'?: string;
  };
  textareaProps?: Omit<TextareaProps, 'label' | 'name' | 'onValueChange' | 'onChange'> & {
    'data-qa'?: string;
  };
}

export interface FormFieldFieldItem<TData extends FieldValues> extends CommonFormFieldItem<TData> {
  type: 'field';
  render: (props: {
    field: ControllerRenderProps<TData, Path<TData>> & {
      'aria-invalid'?: boolean;
      'aria-describedby'?: string;
    };
  }) => ReactNode;
  fieldProps?: Omit<FieldProps, 'label' | 'description' | 'error' | 'errors' | 'issues' | 'children'>;
}

export interface FormFieldCustomItem<TData extends FieldValues> extends CommonFormFieldItem<TData> {
  type: 'custom';
  render: (props: {
    field: ControllerRenderProps<TData, Path<TData>> & {
      'aria-invalid'?: boolean;
      'aria-describedby'?: string;
    };
    fieldState: ControllerFieldState;
  }) => ReactNode;
}

export type FormFieldItemType<TData extends FieldValues> =
  | FormFieldInputItem<TData>
  | FormFieldNumberInputItem<TData>
  | FormFieldTextAreaItem<TData>
  | FormFieldSelectItem<TData>
  | FormFieldCheckboxItem<TData>
  | FormFieldNativeCheckboxItem<TData>
  | FormFieldMultiSelectItem<TData>
  | FormFieldRadioGroupItem<TData>
  | FormFieldNativeRadioGroupItem<TData>
  | FormFieldCheckboxGroupItem<TData>
  | FormFieldNativeCheckboxGroupItem<TData>
  | FormFieldComboboxItem<TData>
  | FormFieldDatePickerItem<TData>
  | FormFieldDateRangePickerItem<TData>
  | FormFieldInputGroupItem<TData>
  | FormFieldFieldItem<TData>
  | FormFieldCustomItem<TData>;

export interface FormProps<TData extends FieldValues> extends React.PropsWithChildren {
  /**
   * The form object from react-hook-form
   */
  form: UseFormReturn<TData>;
  /**
   * The fields to render
   */
  fields: FormFieldItemType<TData>[];
  /**
   * The callback will fired when the form is submitted
   */
  onSubmit?: SubmitHandler<TData>;
  /**
   * The callback will fired when the form is submitted with error
   */
  onSubmitError?: SubmitErrorHandler<TData> | undefined;
  /**
   * The text to display on the submit button
   */
  submitText?: React.ReactNode;
  /**
   * The submit button component
   */
  SubmitButton?: React.ComponentType<{
    /**
     * Whether the form is submitting or not
     */
    isSubmitting: boolean;
    /**
     * You have to call this function to submit the form, If you do that then the form will be submitted and onSubmit callback will be called if there is no error
     * Only use this function when you want to submit the form manually or <Button type="button" />
     * @param e Event
     * @example <Button type="button" isLoading={isSubmitting} onClick={onFormSubmit}>Submit</Button>
     */
    onFormSubmit?: React.FormEventHandler<HTMLFormElement>;
  }>;
  /**
   * The submit button variant
   */
  submitButtonVariant?: ButtonProps['variant'];
  /**
   * The submit button color
   */
  submitButtonColor?: ButtonProps['color'];
  /**
   * The props for the submit button
   */
  submitButtonProps?: ButtonProps;
  /**
   * The props for the reset button
   */
  resetButtonProps?: ButtonProps;
  /**
   * The class name for the submit button
   */
  submitClassName?: string;
  /**
   * Whether the form is submitting or not
   */
  isSubmitting?: boolean;
  /**
   * The callback will fired when the form is reset
   */
  onReset?: () => void;
  /**
   * The text to display on the reset button
   */
  resetText?: React.ReactNode;
  /**
   * The reset button component
   */
  ResetButton?: React.ComponentType<{ onFormReset: UseFormReset<TData> }>;
  /**
   * The reset button variant
   */
  resetButtonVariant?: ButtonProps['variant'];
  /**
   * The reset button color
   */
  resetButtonColor?: ButtonProps['color'];
  /**
   * The class name for the reset button
   */
  resetClassName?: string;
  /**
   * Whether the form is resetting or not
   */
  isResetting?: boolean;
  /**
   * The class name for the form element
   */
  className?: string;
  /**
   * The parent class name for reset and submit buttons
   */
  actionClassName?: string;
  /**
   * Whether to hide the reset button
   */
  hideResetButton?: boolean;
  /**
   * Whether to hide the submit button
   */
  hideSubmitButton?: boolean;
  /**
   * Whether to display the form inline
   */
  inline?: boolean;
  /**
   * The ref for the form element
   */
  formRef?: React.MutableRefObject<HTMLFormElement | null>;
  /**
   * The id for the form element
   */
  id?: string;
  /**
   * Whether support the browser native form validation or not (default is true)
   */
  noValidate?: boolean;
}
