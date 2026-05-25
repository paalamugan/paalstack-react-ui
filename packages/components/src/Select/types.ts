import type { OptionType } from '@/shared/types';

export interface SelectOptionGroupType {
  label?: string;
  options: OptionType[];
}

export type SelectOption = OptionType | SelectOptionGroupType | string | number;
