import type { OptionGroupType, OptionType } from '@/shared/types';
import type { Combobox as ComboboxPrimitive } from '@base-ui/react';
import type { Label } from '../Label';
import type {
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxLoading,
  ComboboxRoot,
  ComboboxValue,
} from './Combobox';

export type ComboboxValueType = {
  value: string;
  label: string;
};

export type ComboboxInputProps = ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean;
  showClear?: boolean;
};

export type ComboboxOptionType = OptionType | OptionGroupType | string | number;

export interface ComboboxProps<
  TValue = string,
  Multiple extends boolean | undefined = false,
> extends React.ComponentProps<typeof ComboboxRoot<TValue, Multiple>> {
  /**
   * List of items for local (client-side) filtering.
   * When `fetchOptions` is provided this acts as the initial/fallback list shown
   * before the user starts typing. Defaults to [].
   */
  options?: Array<ComboboxOptionType>;
  /** Whether to select the option as the value @default false */
  selectOptionAsValue?: boolean;
  /** Whether the combobox is open */
  open?: boolean;
  /** @param open whether the combobox is open */
  onOpenChange?: (open: boolean) => void;
  /** Optional label for the combobox */
  label?: React.ReactNode;
  /** Optional placeholder for the search input @default Search... */
  placeholder?: string;
  /** Whether the combobox is required */
  required?: boolean;
  /** Optional disabled for the combobox */
  disabled?: boolean;
  /** Optional onBlur handler for the combobox */
  onBlur?: () => void;
  /** Whether the select is invalid. */
  'aria-invalid'?: boolean;
  /** whether the select is invalid */
  isInvalid?: boolean;
  /** Optional inline for the combobox */
  inline?: boolean;
  /** Optional contentClassName for the combobox */
  contentClassName?: string;
  /** Optional className for the combobox */
  className?: string;
  /** Optional id for the combobox */
  id?: string;
  /** The error message for the combobox */
  errorMessage?: string;
  /** onClear handler for the combobox to clear the value */
  onClear?: () => void;
  /** Message displayed when no options match the search */
  emptyOptionMessage?: React.ReactNode;
  /** Props for the input */
  inputProps?: React.ComponentProps<typeof ComboboxInput>;
  /** Props for the content */
  contentProps?: React.ComponentProps<typeof ComboboxContent>;
  /** Props for the list */
  listProps?: React.ComponentProps<typeof ComboboxList>;
  /** Props for the item */
  itemProps?: React.ComponentProps<typeof ComboboxItem>;
  /** Props for the empty */
  emptyProps?: React.ComponentProps<typeof ComboboxEmpty>;
  /** Props for the group */
  groupProps?: React.ComponentProps<typeof ComboboxGroup>;
  /** Props for the collection */
  collectionProps?: React.ComponentProps<typeof ComboboxCollection>;
  /** Props for the value */
  valueProps?: React.ComponentProps<typeof ComboboxValue>;
  /** Props for the label */
  labelProps?: React.ComponentProps<typeof Label>;
  /** Props for the combobox label */
  groupLabelProps?: React.ComponentProps<typeof ComboboxLabel>;
  /**
   * Props forwarded to the `ComboboxChips` container rendered when `multiple` is true.
   * Use this to customise the chip-container's className, aria attributes, etc.
   */
  chipsProps?: React.ComponentProps<typeof ComboboxChips>;
  /**
   * Props forwarded to every `ComboboxChip` rendered inside the chips container.
   * Useful for controlling `showRemove`, className, or other per-chip options.
   */
  chipProps?: React.ComponentProps<typeof ComboboxChip>;
  /**
   * Props forwarded to the `ComboboxChipsInput` (the text input inside the
   * chips container) when `multiple` is true.
   */
  chipsInputProps?: React.ComponentProps<typeof ComboboxChipsInput>;

  // ── Remote fetch ────────────────────────────────────────────────────────────
  /**
   * Async function called with the current search query to fetch options
   * from a remote source. When provided, local client-side filtering is
   * bypassed — the combobox displays whatever the function resolves with.
   *
   * @example
   * fetchOptions={async (query) => {
   *   const res = await fetch(`/api/users?q=${query}`);
   *   return res.json(); // Array<OptionType | string | number>
   * }}
   */
  fetchOptions?: (query: string) => Promise<Array<ComboboxOptionType>>;
  /**
   * Debounce delay in milliseconds before `fetchOptions` is called after the
   * user stops typing. @default 300
   */
  fetchDebounce?: number;
  /**
   * External loading flag. When `true` the loading indicator is shown inside
   * the dropdown. Auto-managed when `fetchOptions` is provided; pass this prop
   * explicitly only if you need to control the loading state from outside.
   */
  isLoading?: boolean;
  /**
   * Content rendered inside the dropdown while loading.
   * @default 'Loading...'
   */
  loadingMessage?: React.ReactNode;
  /** Props for the loading */
  loadingProps?: React.ComponentProps<typeof ComboboxLoading>;
}
