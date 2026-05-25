import type { TextProps } from '@/layouts/Text';
import type { FC } from 'react';

import { Text } from '@/layouts/Text';
import { cn } from '@/shared/lib';

interface ErrorMessageProps extends Omit<TextProps, 'children'> {
  /**
   * The error message to display.
   */
  message?: React.ReactNode;
  /**
   * Additional class names to apply to the error message.
   */
  className?: string;
  /**
   * Optional label for the error message to be displayed.
   * this label will be suffix with "is required"
   */
  label?: string;
}

/**
 * ErrorMessage Component
 *
 * Displays error messages for form fields and validation feedback.
 * Automatically integrates with form components like Input, Select, Checkbox, etc.
 *
 * @example
 * // Basic usage
 * import { ErrorMessage } from '@paalstack/react-ui';
 *
 * <ErrorMessage message="This field is required" />
 *
 * @example
 * // With label (auto-generates message)
 * <ErrorMessage label="Email" />
 * // Outputs: "Email is required"
 *
 * @example
 * // Form field with error
 * const [email, setEmail] = useState('');
 * const [error, setError] = useState('');
 *
 * <div className="space-y-2">
 *   <Label htmlFor="email">Email</Label>
 *   <Input
 *     id="email"
 *     type="email"
 *     value={email}
 *     onChange={(e) => setEmail(e.target.value)}
 *     isInvalid={!!error}
 *   />
 *   {error && <ErrorMessage message={error} />}
 * </div>
 *
 * @example
 * // Conditional error display
 * <div>
 *   <Input
 *     label="Password"
 *     type="password"
 *     value={password}
 *     onChange={handleChange}
 *     isInvalid={passwordError}
 *   />
 *   <ErrorMessage message={passwordError && "Password must be at least 8 characters"} />
 * </div>
 *
 * @example
 * // Multiple validation messages
 * const errors = [];
 * if (password.length < 8) errors.push("At least 8 characters");
 * if (!/[A-Z]/.test(password)) errors.push("One uppercase letter");
 * if (!/[0-9]/.test(password)) errors.push("One number");
 *
 * <div>
 *   <Input label="Password" type="password" />
 *   {errors.length > 0 && (
 *     <div className="space-y-1">
 *       {errors.map((error, i) => (
 *         <ErrorMessage key={i} message={`• ${error}`} />
 *       ))}
 *     </div>
 *   )}
 * </div>
 *
 * @example
 * // Form validation
 * const [formErrors, setFormErrors] = useState({});
 *
 * const validate = () => {
 *   const errors = {};
 *   if (!name) errors.name = "Name is required";
 *   if (!email) errors.email = "Email is required";
 *   else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Invalid email format";
 *   setFormErrors(errors);
 *   return Object.keys(errors).length === 0;
 * };
 *
 * <form onSubmit={(e) => { e.preventDefault(); if (validate()) handleSubmit(); }}>
 *   <div>
 *     <Input
 *       label="Name"
 *       value={name}
 *       onChange={(e) => setName(e.target.value)}
 *       isInvalid={!!formErrors.name}
 *     />
 *     <ErrorMessage message={formErrors.name} />
 *   </div>
 *   <div>
 *     <Input
 *       label="Email"
 *       type="email"
 *       value={email}
 *       onChange={(e) => setEmail(e.target.value)}
 *       isInvalid={!!formErrors.email}
 *     />
 *     <ErrorMessage message={formErrors.email} />
 *   </div>
 *   <Button type="submit">Submit</Button>
 * </form>
 *
 * @example
 * // Custom styling
 * <ErrorMessage
 *   message="Custom error message"
 *   className="text-xs font-bold"
 * />
 *
 * @example
 * // With icon
 * <div className="flex items-start gap-2">
 *   <AlertCircleIcon className="size-4 text-danger mt-0.5" />
 *   <ErrorMessage message="Something went wrong" />
 * </div>
 *
 * @example
 * // Server-side validation errors
 * const [serverErrors, setServerErrors] = useState({});
 *
 * const handleSubmit = async () => {
 *   try {
 *     await api.submitForm(data);
 *   } catch (error) {
 *     setServerErrors(error.response.data.errors);
 *   }
 * };
 *
 * <form>
 *   <Input label="Username" isInvalid={!!serverErrors.username} />
 *   <ErrorMessage message={serverErrors.username} />
 *
 *   <Input label="Email" isInvalid={!!serverErrors.email} />
 *   <ErrorMessage message={serverErrors.email} />
 * </form>
 *
 * @example
 * // Real-time validation
 * const [username, setUsername] = useState('');
 * const [usernameError, setUsernameError] = useState('');
 *
 * useEffect(() => {
 *   if (username && username.length < 3) {
 *     setUsernameError('Username must be at least 3 characters');
 *   } else if (username && !/^[a-zA-Z0-9_]+$/.test(username)) {
 *     setUsernameError('Username can only contain letters, numbers, and underscores');
 *   } else {
 *     setUsernameError('');
 *   }
 * }, [username]);
 *
 * <div>
 *   <Input
 *     label="Username"
 *     value={username}
 *     onChange={(e) => setUsername(e.target.value)}
 *     isInvalid={!!usernameError}
 *   />
 *   <ErrorMessage message={usernameError} />
 * </div>
 *
 * @example
 * // With auto-generated message using label
 * <div>
 *   <Select label="Country" options={countries} isInvalid={!selectedCountry} />
 *   {!selectedCountry && <ErrorMessage label="Country" />}
 * </div>
 * // Displays: "Country is required"
 */
export const ErrorMessage: FC<ErrorMessageProps> = ({ message, className, label, ...props }) => {
  const errorMessage = message || (label ? `${label} is required` : '');
  if (!errorMessage) return null;
  return (
    <Text className={cn('mt-2 text-sm font-normal text-danger', className)} data-qa="error-message" {...props}>
      {errorMessage}
    </Text>
  );
};
