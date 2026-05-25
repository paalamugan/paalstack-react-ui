import type { FieldValues } from 'react-hook-form';
import type { FormProps } from './types';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

import { Button } from '../Button';
import { FormRoot } from './components';
import { FormFieldItems } from './FormFieldItems';

/**
 * Form Component
 *
 * A powerful form component built on react-hook-form with automatic field rendering.
 * Handles validation, submission, and error states automatically.
 *
 * @example
 * // Basic usage
 * import { Form } from '@paalstack/react-ui';
 * import { useForm } from 'react-hook-form';
 * import { z } from 'zod';
 * import { zodResolver } from '@hookform/resolvers/zod';
 *
 * const formSchema = z.object({
 *   name: z.string().min(1, 'Name is required'),
 *   email: z.string().email('Invalid email address'),
 * });
 *
 * const form = useForm({
 *   resolver: zodResolver(formSchema),
 *   defaultValues: { name: '', email: '' },
 * });
 *
 * <Form
 *   form={form}
 *   onSubmit={(data) => console.log(data)}
 *   fields={[
 *     { name: 'name', label: 'Name', type: 'input', required: true },
 *     { name: 'email', label: 'Email', type: 'input', inputType: 'email', required: true },
 *   ]}
 * />
 *
 * @example
 * // Different field types
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     { name: 'name', label: 'Name', type: 'input' },
 *     { name: 'email', label: 'Email', type: 'input', inputType: 'email' },
 *     { name: 'bio', label: 'Bio', type: 'textarea' },
 *     { name: 'country', label: 'Country', type: 'select', options: countries },
 *     { name: 'terms', label: 'Accept terms', type: 'checkbox' },
 *     { name: 'birthdate', label: 'Birth Date', type: 'date-picker' },
 *     { name: 'amount', label: 'Amount', type: 'input-group', addonStart: '$', addonEnd: 'USD' },
 *     { name: 'notes', label: 'Notes', type: 'field', render: ({ field }) => <Input {...field} /> },
 *   ]}
 * />
 *
 * @example
 * // Custom submit and reset buttons
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={fields}
 *   submitText="Create Account"
 *   resetText="Clear Form"
 *   submitButtonColor="success"
 * />
 *
 * @example
 * // Hide buttons
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={fields}
 *   hideResetButton
 *   hideSubmitButton
 * >
 *   <div className="flex gap-2">
 *     <Button type="submit">Custom Submit</Button>
 *     <Button type="button" variant="outline" onClick={() => form.reset()}>
 *       Custom Reset
 *     </Button>
 *   </div>
 * </Form>
 *
 * @example
 * // Custom submit button component
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={fields}
 *   SubmitButton={({ isSubmitting, onFormSubmit }) => (
 *     <Button
 *       type="submit"
 *       onClick={onFormSubmit}
 *       isLoading={isSubmitting}
 *       className="w-full"
 *     >
 *       {isSubmitting ? 'Saving...' : 'Save Changes'}
 *     </Button>
 *   )}
 * />
 *
 * @example
 * // Registration form
 * const registerSchema = z.object({
 *   username: z.string().min(3, 'Username must be at least 3 characters'),
 *   email: z.string().email('Invalid email'),
 *   password: z.string().min(8, 'Password must be at least 8 characters'),
 *   confirmPassword: z.string(),
 * }).refine(data => data.password === data.confirmPassword, {
 *   message: "Passwords don't match",
 *   path: ['confirmPassword'],
 * });
 *
 * const form = useForm({
 *   resolver: zodResolver(registerSchema),
 * });
 *
 * <Form
 *   form={form}
 *   onSubmit={handleRegister}
 *   fields={[
 *     { name: 'username', label: 'Username', type: 'input', required: true },
 *     { name: 'email', label: 'Email', type: 'input', inputType: 'email', required: true },
 *     { name: 'password', label: 'Password', type: 'input', inputType: 'password', required: true },
 *     { name: 'confirmPassword', label: 'Confirm Password', type: 'input', inputType: 'password', required: true },
 *   ]}
 *   submitText="Create Account"
 *   hideResetButton
 * />
 *
 * @example
 * // Profile edit form
 * <Form
 *   form={form}
 *   onSubmit={updateProfile}
 *   fields={[
 *     { name: 'firstName', label: 'First Name', type: 'input', required: true },
 *     { name: 'lastName', label: 'Last Name', type: 'input', required: true },
 *     { name: 'email', label: 'Email', type: 'input', inputType: 'email', required: true },
 *     { name: 'phone', label: 'Phone', type: 'input', inputType: 'tel' },
 *     { name: 'bio', label: 'Bio', type: 'textarea', placeholder: 'Tell us about yourself' },
 *     { name: 'country', label: 'Country', type: 'select', options: countries },
 *   ]}
 *   submitText="Save Changes"
 *   resetText="Cancel"
 * />
 *
 * @example
 * // Contact form
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Contact Us</CardTitle>
 *     <CardDescription>Fill out the form below and we'll get back to you</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <Form
 *       form={form}
 *       onSubmit={sendMessage}
 *       fields={[
 *         { name: 'name', label: 'Name', type: 'input', required: true },
 *         { name: 'email', label: 'Email', type: 'input', inputType: 'email', required: true },
 *         { name: 'subject', label: 'Subject', type: 'input', required: true },
 *         { name: 'message', label: 'Message', type: 'textarea', required: true },
 *       ]}
 *       submitText="Send Message"
 *       hideResetButton
 *     />
 *   </CardContent>
 * </Card>
 *
 * @example
 * // Inline form layout
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={fields}
 *   inline
 *   submitText="Search"
 * />
 *
 * @example
 * // With submission state
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={fields}
 *   isSubmitting={isLoading}
 *   submitText="Save"
 * />
 *
 * @example
 * // Multi-step form (with custom children)
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={getCurrentStepFields(step)}
 *   hideSubmitButton
 *   hideResetButton
 * >
 *   <div className="flex justify-between">
 *     {step > 1 && (
 *       <Button variant="outline" onClick={() => setStep(step - 1)}>
 *         Previous
 *       </Button>
 *     )}
 *     {step < totalSteps ? (
 *       <Button onClick={() => setStep(step + 1)}>
 *         Next
 *       </Button>
 *     ) : (
 *       <Button type="submit">Submit</Button>
 *     )}
 *   </div>
 * </Form>
 *
 * @example
 * // Error handling
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   onSubmitError={(errors) => {
 *     console.error('Form validation errors:', errors);
 *     toast.error('Please fix the errors in the form');
 *   }}
 *   fields={fields}
 * />
 *
 * @example
 * // Number field with validation
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'quantity',
 *       label: 'Quantity',
 *       type: 'number',
 *       required: true,
 *       numberInputProps: {
 *         min: 1,
 *         max: 100,
 *         step: 1,
 *       }
 *     },
 *     {
 *       name: 'price',
 *       label: 'Price',
 *       type: 'number',
 *       placeholder: '0.00',
 *       numberInputProps: {
 *         min: 0,
 *         step: 0.01,
 *       }
 *     },
 *   ]}
 * />
 *
 * @example
 * // Multi-select field
 * const skills = [
 *   { label: 'JavaScript', value: 'js' },
 *   { label: 'TypeScript', value: 'ts' },
 *   { label: 'React', value: 'react' },
 *   { label: 'Node.js', value: 'node' },
 * ];
 *
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'skills',
 *       label: 'Technical Skills',
 *       type: 'multi-select',
 *       options: skills,
 *       placeholder: 'Select your skills...',
 *       required: true
 *     },
 *   ]}
 * />
 *
 * @example
 * // Checkbox-group field
 * const interests = ['Reading', 'Sports', 'Music', 'Travel', 'Gaming'];
 *
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'interests',
 *       label: 'Interests',
 *       type: 'checkbox-group',
 *       options: interests,
 *       required: true
 *     },
 *   ]}
 * />
 *
 * @example
 * // Combobox field (searchable select)
 * const cities = [
 *   { label: 'New York', value: 'ny' },
 *   { label: 'Los Angeles', value: 'la' },
 *   { label: 'Chicago', value: 'chi' },
 *   { label: 'Houston', value: 'hou' },
 * ];
 *
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'city',
 *       label: 'City',
 *       type: 'combobox',
 *       options: cities,
 *       placeholder: 'Search city...',
 *       required: true
 *     },
 *   ]}
 * />
 *
 * @example
 * // Date-range-picker field
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'tripDates',
 *       label: 'Travel Dates',
 *       type: 'date-range-picker',
 *       required: true
 *     },
 *     {
 *       name: 'availabilityDates',
 *       label: 'Availability',
 *       type: 'date-range-picker',
 *       placeholder: 'Select date range...'
 *     },
 *   ]}
 * />
 *
 * @example
 * // Custom field type with component
 * const CustomColorPicker: FormFieldCustomItem<TData>['render'] = ({ field }) => (
 *   <input
 *     type="color"
 *     value={field.value}
 *     onChange={field.onChange}
 *     className="w-full h-10 rounded border"
 *   />
 * );
 *
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'favoriteColor',
 *       label: 'Favorite Color',
 *       type: 'custom',
 *       render: CustomColorPicker
 *     },
 *   ]}
 * />
 *
 * @example
 * // Custom field type with render function
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'firstName',
 *       label: 'First Name',
 *       type: 'custom',
 *       required: true,
 *       render: ({ field }) => (
 *         <Input
 *           type="text"
 *           placeholder="Enter first name"
 *           {...field}
 *         />
 *       )
 *     },
 *   ]}
 * />
 *
 * @example
 * // Custom field with advanced component (file upload)
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'avatar',
 *       label: 'Profile Picture',
 *       type: 'custom',
 *       render: ({ field }) => (
 *         <div className="flex items-center gap-4">
 *           {field.value && (
 *             <img
 *               src={field.value}
 *               alt="Preview"
 *               className="size-20 rounded-full object-cover"
 *             />
 *           )}
 *           <Input
 *             type="file"
 *             accept="image/*"
 *             onChange={(e) => {
 *               const file = e.target.files?.[0];
 *               if (file) {
 *                 const reader = new FileReader();
 *                 reader.onloadend = () => {
 *                   field.onChange(reader.result);
 *                 };
 *                 reader.readAsDataURL(file);
 *               }
 *             }}
 *           />
 *         </div>
 *       )
 *     },
 *   ]}
 * />
 *
 * @example
 * // Custom field with rich text editor
 * import { Editor } from '@tinymce/tinymce-react';
 *
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'content',
 *       label: 'Article Content',
 *       type: 'custom',
 *       required: true,
 *       render: ({ field }) => (
 *         <Editor
 *           value={field.value}
 *           onEditorChange={field.onChange}
 *           init={{
 *             height: 400,
 *             menubar: false,
 *             plugins: ['link', 'lists', 'image'],
 *             toolbar: 'bold italic | alignleft aligncenter | bullist numlist'
 *           }}
 *         />
 *       )
 *     },
 *   ]}
 * />
 *
 * @example
 * // Input-group field (input with addons)
 * import { InputGroupText } from '@paalstack/react-ui';
 *
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'amount',
 *       label: 'Amount',
 *       type: 'input-group',
 *       placeholder: '0.00',
 *       inputType: 'number',
 *       addonStart: <InputGroupText>$</InputGroupText>,
 *       addonEnd: <InputGroupText>USD</InputGroupText>,
 *     },
 *     {
 *       name: 'website',
 *       label: 'Website',
 *       type: 'input-group',
 *       placeholder: 'yoursite',
 *       addonStart: <InputGroupText>https://</InputGroupText>,
 *       addonEnd: <InputGroupText>.com</InputGroupText>,
 *     },
 *   ]}
 * />
 *
 * @example
 * // Input-group with textarea
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'code',
 *       label: 'Code',
 *       type: 'input-group',
 *       textareaProps: { rows: 4, placeholder: 'Enter code...' },
 *       addonStart: <InputGroupText>script.js</InputGroupText>,
 *     },
 *   ]}
 * />
 *
 * @example
 * // Field type (wraps control in Field component: label, description, error)
 * import { Input } from '@paalstack/react-ui';
 *
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'username',
 *       label: 'Username',
 *       description: 'Choose a unique username.',
 *       type: 'field',
 *       required: true,
 *       render: ({ field }) => <Input {...field} id={field.name} placeholder="Enter username" />,
 *     },
 *   ]}
 * />
 *
 * @example
 * // Custom field with tags input
 * import { TagsInput } from 'react-tag-input-component';
 *
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'tags',
 *       label: 'Tags',
 *       type: 'custom',
 *       render: ({ field }) => (
 *         <TagsInput
 *           value={field.value || []}
 *           onChange={field.onChange}
 *           placeHolder="Enter tags"
 *         />
 *       )
 *     },
 *   ]}
 * />
 *
 * @example
 * // Custom field with slider
 * import { Slider } from '@paalstack/react-ui';
 *
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'volume',
 *       label: 'Volume',
 *       type: 'custom',
 *       render: ({ field }) => (
 *         <div className="space-y-2">
 *           <Slider
 *             value={[field.value || 50]}
 *             onValueChange={(values) => field.onChange(values[0])}
 *             max={100}
 *             step={1}
 *           />
 *           <div className="text-sm text-gray-500">
 *             Current value: {field.value || 50}
 *           </div>
 *         </div>
 *       )
 *     },
 *   ]}
 * />
 *
 * @example
 * // Custom field with rating component
 * import { Rating } from 'react-simple-star-rating';
 *
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     {
 *       name: 'rating',
 *       label: 'Rate this product',
 *       type: 'custom',
 *       required: true,
 *       render: ({ field }) => (
 *         <Rating
 *           onClick={field.onChange}
 *           initialValue={field.value || 0}
 *           size={30}
 *         />
 *       )
 *     },
 *   ]}
 * />
 *
 * @example
 * // Complete survey form with all field types
 * <Form
 *   form={form}
 *   onSubmit={handleSubmit}
 *   fields={[
 *     { name: 'fullName', label: 'Full Name', type: 'input', required: true },
 *     { name: 'email', label: 'Email', type: 'input', inputType: 'email', required: true },
 *     { name: 'age', label: 'Age', type: 'number', numberInputProps: { min: 18, max: 100 } },
 *     { name: 'feedback', label: 'Feedback', type: 'textarea', rows: 4 },
 *     { name: 'country', label: 'Country', type: 'select', options: countries },
 *     { name: 'subscribe', label: 'Subscribe to newsletter', type: 'checkbox' },
 *     { name: 'languages', label: 'Languages', type: 'multi-select', options: languages },
 *     { name: 'experience', label: 'Experience Level', type: 'radio-group', options: ['Beginner', 'Intermediate', 'Advanced'] },
 *     { name: 'topics', label: 'Topics of Interest', type: 'checkbox-group', options: topics },
 *     { name: 'preferredCity', label: 'Preferred City', type: 'combobox', options: cities },
 *     { name: 'startDate', label: 'Start Date', type: 'date-picker' },
 *     { name: 'availability', label: 'Availability Period', type: 'date-range-picker' },
 *   ]}
 *   submitText="Submit Survey"
 * />
 *
 * @example
 * // Settings form
 * <Form
 *   form={form}
 *   onSubmit={saveSettings}
 *   fields={[
 *     { name: 'language', label: 'Language', type: 'select', options: languages },
 *     { name: 'theme', label: 'Theme', type: 'radio-group', options: ['Light', 'Dark', 'System'] },
 *     { name: 'fontSize', label: 'Font Size', type: 'number', numberInputProps: { min: 12, max: 24, step: 1 } },
 *   ]}
 *   submitText="Save Settings"
 *   actionClassName="justify-end"
 * />
 *
 * @tip Use 'number' type for numeric inputs with min/max validation
 * @tip Use 'multi-select' for selecting multiple options from a list
 * @tip Use 'checkbox-group' when users need to select multiple checkboxes
 * @tip Use 'combobox' for searchable dropdowns with many options
 * @tip Use 'date-range-picker' for selecting start and end dates
 * @tip Use 'custom' type to integrate your own custom form components
 * @tip CheckboxGroup component for managing multiple checkboxes together
 * @tip NativeCheckbox is simpler and more lightweight than Checkbox component
 * @tip Use NativeCheckboxGroup for easier management of multiple checkbox options
 */
export const Form = <TData extends FieldValues>({
  form,
  onSubmit,
  onSubmitError,
  fields,
  className,
  submitText = 'Submit',
  SubmitButton,
  submitButtonVariant = 'solid',
  submitButtonColor = 'primary',
  submitClassName,
  resetText = 'Reset',
  ResetButton,
  resetButtonVariant = 'outline',
  resetButtonColor,
  resetClassName,
  actionClassName,
  hideResetButton = false,
  hideSubmitButton = false,
  noValidate = true,
  inline: formInline,
  formRef,
  id,
  isSubmitting: isFormSubmitting,
  isResetting,
  onReset,
  children,
  submitButtonProps,
  resetButtonProps,
}: FormProps<TData>) => {
  const isSubmitting = isFormSubmitting ?? form.formState.isSubmitting;
  const isActionSectionVisible = !hideResetButton || !hideSubmitButton || !!ResetButton || !!SubmitButton;

  return (
    <FormRoot {...form}>
      <form
        id={id}
        ref={formRef}
        noValidate={noValidate}
        onSubmit={onSubmit ? form.handleSubmit(onSubmit, onSubmitError) : undefined}
        className={cn('space-y-4', className)}
        data-qa="form"
      >
        <FormFieldItems fields={fields} inline={formInline} control={form.control} />
        {children}
        {isActionSectionVisible && (
          <Box className={cn('flex gap-3', actionClassName)}>
            {ResetButton ? (
              <ResetButton onFormReset={form.reset} data-qa="form-reset-button" />
            ) : (
              !hideResetButton && (
                <Button
                  type="reset"
                  variant={resetButtonVariant}
                  color={resetButtonColor}
                  disabled={isResetting}
                  onClick={() => {
                    form.reset();
                    onReset?.();
                  }}
                  className={resetClassName}
                  data-qa="form-reset-button"
                  {...resetButtonProps}
                >
                  {resetText}
                </Button>
              )
            )}
            {SubmitButton ? (
              <SubmitButton
                isSubmitting={isSubmitting}
                onFormSubmit={onSubmit ? form.handleSubmit(onSubmit, onSubmitError) : undefined}
                data-qa="form-submit-button"
              />
            ) : (
              !hideSubmitButton && (
                <Button
                  type="submit"
                  variant={submitButtonVariant}
                  color={submitButtonColor}
                  isLoading={isSubmitting}
                  className={submitClassName}
                  data-qa="form-submit-button"
                  {...submitButtonProps}
                >
                  {submitText}
                </Button>
              )
            )}
          </Box>
        )}
      </form>
    </FormRoot>
  );
};

Form.displayName = 'Form';
