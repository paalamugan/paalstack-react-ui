import * as React from 'react';

import type { OptionGroupType, OptionType } from '@/shared/types';
import type { ComboboxInputProps, ComboboxProps, ComboboxValueType } from './types';

import { Combobox as ComboboxPrimitive } from '@base-ui/react';

import {
  LuCheck as CheckIcon,
  LuChevronDown as ChevronDownIcon,
  LuLoader as LoaderIcon,
  LuX as XIcon,
} from '@/icons/lu';
import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { isAriaInvalid } from '@/shared/utils';

import { Button } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '../InputGroup';
import { Label } from '../Label';

// ─── Primitive components (Composition API) ───────────────────────────────────

const ComboboxRoot = ComboboxPrimitive.Root;

const ComboboxValue = ({ ...props }: ComboboxPrimitive.Value.Props) => (
  <ComboboxPrimitive.Value data-slot="combobox-value" data-qa="combobox-value" {...props} />
);
ComboboxValue.displayName = 'ComboboxValue';

const ComboboxTrigger = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Trigger>,
  ComboboxPrimitive.Trigger.Props
>(({ className, children, ...props }, ref) => (
  <ComboboxPrimitive.Trigger
    ref={ref}
    data-slot="combobox-trigger"
    data-qa="combobox-trigger"
    className={cn("[&_svg:not([class*='size-'])]:size-4", className)}
    {...props}
  >
    {children}
    <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
  </ComboboxPrimitive.Trigger>
));
ComboboxTrigger.displayName = 'ComboboxTrigger';

const ComboboxClear = ({ className, ...props }: ComboboxPrimitive.Clear.Props) => (
  <ComboboxPrimitive.Clear
    data-slot="combobox-clear"
    data-qa="combobox-clear"
    className={cn(className)}
    {...props}
    render={
      <InputGroupButton variant="ghost" size="icon-xs">
        <XIcon className="pointer-events-none" />
      </InputGroupButton>
    }
  />
);
ComboboxClear.displayName = 'ComboboxClear';

const ComboboxInput = React.forwardRef<React.ElementRef<typeof ComboboxPrimitive.Input>, ComboboxInputProps>(
  ({ className, children, disabled = false, showTrigger = true, showClear = false, ...props }, ref) => (
    <InputGroup className={cn('w-auto', className)}>
      <ComboboxPrimitive.Input ref={ref} render={<InputGroupInput disabled={disabled} />} {...props} />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            render={<ComboboxTrigger />}
            data-slot="input-group-button"
            className="group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
            disabled={disabled}
          />
        )}
        {showClear && <ComboboxClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  ),
);
ComboboxInput.displayName = 'ComboboxInput';

const ComboboxContent = ({
  className,
  side = 'bottom',
  sideOffset = 6,
  align = 'start',
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<ComboboxPrimitive.Positioner.Props, 'side' | 'align' | 'sideOffset' | 'alignOffset' | 'anchor'>) => (
  <ComboboxPrimitive.Portal>
    <ComboboxPrimitive.Positioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      anchor={anchor}
      className="isolate z-50"
    >
      <ComboboxPrimitive.Popup
        data-slot="combobox-content"
        data-qa="combobox-content"
        data-chips={!!anchor}
        className={cn(
          'group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:shadow-none',
          className,
        )}
        {...props}
      />
    </ComboboxPrimitive.Positioner>
  </ComboboxPrimitive.Portal>
);
ComboboxContent.displayName = 'ComboboxContent';

const ComboboxList = ({ className, ...props }: ComboboxPrimitive.List.Props) => (
  <ComboboxPrimitive.List
    data-slot="combobox-list"
    data-qa="combobox-list"
    className={cn(
      'no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto overscroll-contain p-1 data-empty:p-0',
      className,
    )}
    {...props}
  />
);
ComboboxList.displayName = 'ComboboxList';

const ComboboxItem = ({ className, children, ...props }: ComboboxPrimitive.Item.Props) => (
  <ComboboxPrimitive.Item
    data-slot="combobox-item"
    data-qa="combobox-item"
    className={cn(
      "relative flex w-full cursor-pointer items-center gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    {...props}
  >
    {children}
    <ComboboxPrimitive.ItemIndicator
      render={
        <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
          <CheckIcon className="pointer-events-none" />
        </span>
      }
    />
  </ComboboxPrimitive.Item>
);
ComboboxItem.displayName = 'ComboboxItem';

const ComboboxGroup = ({ className, ...props }: ComboboxPrimitive.Group.Props) => (
  <ComboboxPrimitive.Group data-slot="combobox-group" data-qa="combobox-group" className={cn(className)} {...props} />
);
ComboboxGroup.displayName = 'ComboboxGroup';

const ComboboxLabel = ({ className, ...props }: ComboboxPrimitive.GroupLabel.Props) => (
  <ComboboxPrimitive.GroupLabel
    data-slot="combobox-label"
    data-qa="combobox-label"
    className={cn('px-2 py-1.5 text-xs text-muted-foreground', className)}
    {...props}
  />
);
ComboboxLabel.displayName = 'ComboboxLabel';

const ComboboxCollection = ({ ...props }: ComboboxPrimitive.Collection.Props) => (
  <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
);
ComboboxCollection.displayName = 'ComboboxCollection';

const ComboboxEmpty = ({ className, ...props }: ComboboxPrimitive.Empty.Props) => (
  <ComboboxPrimitive.Empty
    data-slot="combobox-empty"
    data-qa="combobox-empty"
    className={cn(
      'hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex',
      className,
    )}
    {...props}
  />
);
ComboboxEmpty.displayName = 'ComboboxEmpty';

const ComboboxSeparator = ({ className, ...props }: ComboboxPrimitive.Separator.Props) => (
  <ComboboxPrimitive.Separator
    data-slot="combobox-separator"
    data-qa="combobox-separator"
    className={cn('-mx-1 my-1 h-px bg-border', className)}
    {...props}
  />
);
ComboboxSeparator.displayName = 'ComboboxSeparator';

const ComboboxChips = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> & ComboboxPrimitive.Chips.Props
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Chips
    ref={ref}
    data-slot="combobox-chips"
    data-qa="combobox-chips"
    className={cn(
      'flex min-h-8 flex-wrap items-center gap-1 rounded-lg border border-input bg-transparent bg-clip-padding px-2.5 py-1 text-sm transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 has-data-[slot=combobox-chip]:px-1 dark:bg-input/30 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40',
      className,
    )}
    {...props}
  />
));
ComboboxChips.displayName = 'ComboboxChips';

const ComboboxChip = ({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean;
}) => (
  <ComboboxPrimitive.Chip
    data-slot="combobox-chip"
    data-qa="combobox-chip"
    className={cn(
      'flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-sm bg-muted px-1.5 text-xs font-medium whitespace-nowrap text-foreground has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0',
      className,
    )}
    {...props}
  >
    {children}
    {showRemove && (
      <ComboboxPrimitive.ChipRemove
        className="-ml-1 opacity-50 hover:opacity-100"
        data-slot="combobox-chip-remove"
        render={
          <Button variant="ghost" size="icon-xs">
            <XIcon className="pointer-events-none" />
          </Button>
        }
      />
    )}
  </ComboboxPrimitive.Chip>
);
ComboboxChip.displayName = 'ComboboxChip';

const ComboboxChipsInput = ({ className, ...props }: ComboboxPrimitive.Input.Props) => (
  <ComboboxPrimitive.Input
    data-slot="combobox-chip-input"
    data-qa="combobox-chip-input"
    className={cn('min-w-16 flex-1 outline-none', className)}
    {...props}
  />
);
ComboboxChipsInput.displayName = 'ComboboxChipsInput';

/** Loading indicator rendered inside the combobox dropdown during remote fetch. */
const ComboboxLoading = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="combobox-loading"
    data-qa="combobox-loading"
    className={cn(
      'flex w-full items-center justify-center gap-2 py-3 text-center text-sm text-muted-foreground',
      className,
    )}
    {...props}
  >
    <LoaderIcon className="size-4 animate-spin" />
    {children}
  </div>
);
ComboboxLoading.displayName = 'ComboboxLoading';

const useComboboxAnchor = () => {
  return React.useRef<HTMLDivElement | null>(null);
};

// ─── Internal helpers ──────────────────────────────────────────────────────────

const isOptionGroup = (opt: OptionType | OptionGroupType | string | number): opt is OptionGroupType =>
  typeof opt === 'object' && opt !== null && 'items' in (opt as object);

const normalizeOption = (option: OptionType | string | number): OptionType => {
  if (typeof option === 'string' || typeof option === 'number') {
    return { value: option.toString(), label: option.toString() };
  }
  return option;
};

const normalizeOptions = (raw: Array<OptionType | string | number>): OptionType[] => raw.map(normalizeOption);

interface NormalizedGroup {
  label: React.ReactNode;
  items: OptionType[];
}

interface NormalizedOptionData {
  isGrouped: boolean;
  /** Flat list of all items across all groups — used as the `items` prop on ComboboxRoot. */
  flatItems: OptionType[];
  /** Populated only when `isGrouped` is true. */
  groups: NormalizedGroup[];
}

const normalizeAllOptions = (raw: Array<OptionType | OptionGroupType | string | number>): NormalizedOptionData => {
  const hasGroups = raw.some(isOptionGroup);

  if (!hasGroups) {
    const flatItems = normalizeOptions(raw as Array<OptionType | string | number>);
    return { isGrouped: false, flatItems, groups: [] };
  }

  const groups: NormalizedGroup[] = [];
  const flatItems: OptionType[] = [];
  const ungrouped: OptionType[] = [];

  for (const opt of raw) {
    if (isOptionGroup(opt)) {
      const items = normalizeOptions(opt.items);
      groups.push({ label: opt.label, items });
      flatItems.push(...items);
    } else {
      const item = normalizeOption(opt);
      ungrouped.push(item);
      flatItems.push(item);
    }
  }

  // Prepend any top-level flat items as an unlabelled group
  if (ungrouped.length > 0) {
    groups.unshift({ label: null, items: ungrouped });
  }

  return { isGrouped: true, flatItems, groups };
};

// ─── Props API (Compound Component) ──────────────────────────────────────────

/**
 * Combobox Component
 *
 * Autocomplete input and command palette with a list of suggestions.
 * Combines a text input with a dropdown list for searchable selection.
 * Supports both local (client-side) filtering and remote (async) data fetching.
 *
 * @example
 * // Props API — basic usage
 * import { Combobox } from '@paalstack/react-ui';
 *
 * const [value, setValue] = useState('');
 *
 * <Combobox
 *   options={['React', 'Vue', 'Angular', 'Svelte']}
 *   value={value}
 *   onValueChange={setValue}
 *   placeholder="Select framework..."
 * />
 *
 * @example
 * // Props API — remote fetch
 * <Combobox
 *   label="User"
 *   value={userId}
 *   onValueChange={setUserId}
 *   placeholder="Search users..."
 *   fetchOptions={async (query) => {
 *     const res = await fetch(`/api/users?q=${encodeURIComponent(query)}`);
 *     return res.json(); // [{ value: '1', label: 'Alice' }, ...]
 *   }}
 *   fetchDebounce={400}
 *   loadingMessage="Searching users…"
 *   emptyOptionMessage="No users found."
 * />
 *
 * @example
 * // Props API — with label and validation
 * <Combobox
 *   label="Country"
 *   options={countries}
 *   value={country}
 *   onValueChange={setCountry}
 *   required
 *   isInvalid={!country}
 *   errorMessage="Please select a country"
 * />
 *
 * @example
 * // Composition API — basic
 * import { ComboboxRoot, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from '@paalstack/react-ui';
 *
 * <ComboboxRoot>
 *   <ComboboxInput placeholder="Search..." />
 *   <ComboboxContent>
 *     <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
 *     <ComboboxList>
 *       <ComboboxItem value="react">React</ComboboxItem>
 *       <ComboboxItem value="vue">Vue</ComboboxItem>
 *       <ComboboxItem value="angular">Angular</ComboboxItem>
 *     </ComboboxList>
 *   </ComboboxContent>
 * </ComboboxRoot>
 *
 * @example
 * // Composition API — with groups
 * <ComboboxRoot>
 *   <ComboboxInput placeholder="Search frameworks..." />
 *   <ComboboxContent>
 *     <ComboboxList>
 *       <ComboboxGroup>
 *         <ComboboxLabel>Frontend</ComboboxLabel>
 *         <ComboboxItem value="react">React</ComboboxItem>
 *         <ComboboxItem value="vue">Vue</ComboboxItem>
 *       </ComboboxGroup>
 *       <ComboboxSeparator />
 *       <ComboboxGroup>
 *         <ComboboxLabel>Backend</ComboboxLabel>
 *         <ComboboxItem value="express">Express</ComboboxItem>
 *         <ComboboxItem value="fastify">Fastify</ComboboxItem>
 *       </ComboboxGroup>
 *     </ComboboxList>
 *     <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
 *   </ComboboxContent>
 * </ComboboxRoot>
 */
type ComboboxInputRef = React.ElementRef<typeof ComboboxInput>;

const ComboboxForwardRef = React.forwardRef<ComboboxInputRef, ComboboxProps<unknown, boolean | undefined>>(
  function Combobox(
    {
      label,
      options,
      selectOptionAsValue = false,
      placeholder = 'Search...',
      required,
      value,
      onValueChange,
      onBlur,
      isInvalid: invalid,
      disabled,
      inline,
      contentClassName,
      className,
      id,
      errorMessage,
      open: controlledOpen,
      onOpenChange,
      onClear,
      emptyOptionMessage = 'No items found.',
      inputProps,
      contentProps,
      listProps,
      groupProps,
      itemProps,
      emptyProps,
      chipsProps,
      chipProps,
      chipsInputProps,
      collectionProps,
      valueProps,
      labelProps,
      groupLabelProps,
      loadingProps,
      fetchOptions,
      fetchDebounce = 300,
      isLoading: externalLoading,
      loadingMessage = 'Loading...',
      ...props
    },
    ref,
  ) {
    const isOptionValue = selectOptionAsValue || typeof options?.[0] === 'string' || typeof options?.[0] === 'number';

    const isInvalid = invalid ?? isAriaInvalid(props['aria-invalid']);
    const labelId = id || label?.toString().toLowerCase().replace(/\s/g, '-') || '';
    const isMultiple = !!props.multiple;

    // Ref for the chips container — used as the dropdown anchor in multiple mode
    const chipsRef = React.useRef<HTMLDivElement | null>(null);

    // ── Local options (normalized once) ────────────────────────────────────────
    const normalizedData = React.useMemo(() => normalizeAllOptions(options ?? []), [options]);
    const localOptions = normalizedData.isGrouped ? normalizedData.groups : normalizedData.flatItems;

    // ── Remote fetch state ─────────────────────────────────────────────────────
    const [inputValue, setInputValue] = React.useState('');
    const [remoteOptions, setRemoteOptions] = React.useState<Array<OptionType> | Array<OptionGroupType>>([]);
    const [isFetching, setIsFetching] = React.useState(false);

    // Debounced remote fetch — runs whenever the search query changes
    React.useEffect(() => {
      if (!fetchOptions) return;

      if (!inputValue.trim()) {
        setRemoteOptions([]);
        setIsFetching(false);
        return;
      }

      setIsFetching(true);

      const controller = new AbortController();

      const timer = setTimeout(async () => {
        try {
          const raw = await fetchOptions(inputValue);
          if (!controller.signal.aborted) {
            const normalized = normalizeAllOptions(raw);
            setRemoteOptions(normalized.isGrouped ? normalized.groups : normalized.flatItems);
          }
        } catch {
          if (!controller.signal.aborted) {
            setRemoteOptions([]);
          }
        } finally {
          if (!controller.signal.aborted) {
            setIsFetching(false);
          }
        }
      }, fetchDebounce);

      return () => {
        clearTimeout(timer);
        controller.abort();
      };
    }, [inputValue, fetchOptions, fetchDebounce]);

    // Reset remote state when value is cleared externally
    React.useEffect(() => {
      if (fetchOptions && !value) {
        setInputValue('');
        setRemoteOptions([]);
        setIsFetching(false);
      }
    }, [value, fetchOptions]);

    // ── Derived values ─────────────────────────────────────────────────────────
    // When remote fetch is active and user has typed, show fetched results.
    // Otherwise fall back to local options (initial list or static data).
    const isRemoteActive = fetchOptions && inputValue.trim();
    const activeOptions = isRemoteActive ? remoteOptions : localOptions;

    // Render as groups only when options are grouped and no remote fetch is active
    const shouldRenderGroups = normalizedData.isGrouped && !isRemoteActive;

    // Show loading indicator while debouncing + fetching or external loading flag
    const showLoading = isFetching || !!externalLoading;

    // Capture input value changes to drive the remote fetch.
    // We type the event parameter to match what ComboboxInput's onChange expects
    // (a base-ui augmented event) so that it can be forwarded without casting.
    type InputOnChange = NonNullable<React.ComponentProps<typeof ComboboxInput>['onChange']>;
    type InputChangeEvent = Parameters<InputOnChange>[0];

    const handleInputChange = React.useCallback(
      (e: InputChangeEvent) => {
        if (fetchOptions) {
          setInputValue((e as React.ChangeEvent<HTMLInputElement>).target?.value ?? '');
          // Clear stale results immediately so the loading state shows a clean dropdown
          setRemoteOptions([]);
        }
        if (isMultiple) {
          chipsInputProps?.onChange?.(e);
        } else {
          inputProps?.onChange?.(e);
        }
      },
      [fetchOptions, isMultiple, chipsInputProps, inputProps],
    );

    return (
      <>
        <Box
          className={cn(
            'flex w-full flex-col gap-2',
            {
              'flex-row items-center': inline,
            },
            className,
          )}
          data-qa="combobox-container"
        >
          {label && (
            <Label htmlFor={labelId} required={required} data-qa="combobox-label" {...labelProps}>
              {label}
            </Label>
          )}
          <ComboboxRoot
            items={activeOptions}
            value={value}
            onValueChange={onValueChange}
            open={controlledOpen}
            onOpenChange={onOpenChange}
            inputRef={ref}
            {...props}
          >
            {isMultiple ? (
              <ComboboxChips ref={chipsRef} aria-invalid={isInvalid} {...chipsProps}>
                <ComboboxValue {...valueProps}>
                  {(selectedValues: unknown) => {
                    const values = Array.isArray(selectedValues) ? (selectedValues as OptionType[]) : [];
                    return (
                      <>
                        {values.map((item: OptionType | string | number) => {
                          if (typeof item === 'string' || typeof item === 'number') {
                            return (
                              <ComboboxChip key={item} {...chipProps}>
                                {item}
                              </ComboboxChip>
                            );
                          }
                          return (
                            <ComboboxChip key={item.key || item.value} {...chipProps}>
                              {item.label}
                            </ComboboxChip>
                          );
                        })}
                        <ComboboxChipsInput
                          id={labelId}
                          placeholder={placeholder}
                          disabled={disabled}
                          onBlur={onBlur}
                          aria-invalid={isInvalid}
                          ref={ref}
                          {...chipsInputProps}
                          onChange={fetchOptions ? handleInputChange : chipsInputProps?.onChange}
                        />
                      </>
                    );
                  }}
                </ComboboxValue>
              </ComboboxChips>
            ) : (
              <ComboboxInput
                placeholder={placeholder}
                disabled={disabled}
                showClear={!!value}
                onBlur={onBlur}
                id={labelId}
                aria-invalid={isInvalid}
                ref={ref}
                {...inputProps}
                onChange={fetchOptions ? handleInputChange : inputProps?.onChange}
              />
            )}
            <ComboboxContent anchor={isMultiple ? chipsRef : undefined} className={contentClassName} {...contentProps}>
              {showLoading ? (
                <ComboboxLoading {...loadingProps}>{loadingMessage}</ComboboxLoading>
              ) : (
                <>
                  <ComboboxEmpty {...emptyProps}>{emptyOptionMessage}</ComboboxEmpty>
                  {shouldRenderGroups ? (
                    <ComboboxList {...listProps}>
                      {(group: NormalizedGroup, index: number) => {
                        return (
                          <ComboboxGroup key={index} items={group.items} data-qa="combobox-group" {...groupProps}>
                            {group.label && (
                              <ComboboxLabel data-qa="combobox-group-label" {...groupLabelProps}>
                                {group.label}
                              </ComboboxLabel>
                            )}
                            <ComboboxCollection {...collectionProps}>
                              {(item: OptionType | string | number) => {
                                if (typeof item === 'string' || typeof item === 'number') {
                                  return (
                                    <ComboboxItem key={item} value={item} data-qa="combobox-group-item" {...itemProps}>
                                      {item}
                                    </ComboboxItem>
                                  );
                                }
                                return (
                                  <ComboboxItem
                                    key={item.key || item.value}
                                    value={isOptionValue ? item.value : item}
                                    data-qa="combobox-group-item"
                                    disabled={item.disabled}
                                    {...itemProps}
                                    className={cn(itemProps?.className, item.className)}
                                  >
                                    {item.labelContent || item.label}
                                  </ComboboxItem>
                                );
                              }}
                            </ComboboxCollection>

                            {index < normalizedData.groups.length - 1 && <ComboboxSeparator />}
                          </ComboboxGroup>
                        );
                      }}
                    </ComboboxList>
                  ) : (
                    <ComboboxList {...listProps}>
                      {(option: OptionType | string | number) => {
                        if (typeof option === 'string' || typeof option === 'number') {
                          return (
                            <ComboboxItem key={option} value={option} data-qa="combobox-item" {...itemProps}>
                              {option}
                            </ComboboxItem>
                          );
                        }
                        return (
                          <ComboboxItem
                            key={option.key || option.value}
                            value={isOptionValue ? option.value : option}
                            data-qa="combobox-item"
                            disabled={option.disabled}
                            {...itemProps}
                            className={cn(itemProps?.className, option.className)}
                          >
                            {option.labelContent || option.label}
                          </ComboboxItem>
                        );
                      }}
                    </ComboboxList>
                  )}
                </>
              )}
            </ComboboxContent>
          </ComboboxRoot>
        </Box>
        {isInvalid && <ErrorMessage data-qa="combobox-error-message" message={errorMessage} />}
      </>
    );
  },
);

ComboboxForwardRef.displayName = 'Combobox';

const Combobox = ComboboxForwardRef as <
  TValue extends ComboboxValueType | string | number,
  Multiple extends boolean | undefined = false,
>(
  props: ComboboxProps<TValue, Multiple> & React.RefAttributes<ComboboxInputRef>,
) => React.ReactElement | null;

export {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxClear,
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
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
};
