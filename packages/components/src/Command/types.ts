import type { HTMLTailwindStyledComponentProps } from '@/shared/types';
import type { ReactNode } from 'react';

export interface CommandGroupItem {
  /**
   * Optional icon to display for the command item
   */
  icon?: React.ReactNode;
  /**
   * The label for the command item
   */
  label: React.ReactNode;
  /**
   * Optional shortcut to display for the command item
   */
  shortcut?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional id for the command item
   */
  className?: string;
}

export interface CommandGroupList {
  /**
   * The heading for the command group
   */
  heading: string;
  /**
   * The items for the command group
   */
  items: CommandGroupItem[];
  /**
   * Optional className for the command group
   */
  className?: string;
}

export interface CommandNoResultFoundProps extends HTMLTailwindStyledComponentProps<'div'> {
  /**
   * The number of options in the popover list
   */
  optionsLength: number;
  /**
   * Optional message to display when no results are found
   * @default 'No results found{searchValue ? ` for "${searchValue}"` : ''}'.''
   * */
  emptyOptionMessage?: ReactNode;
  /**
   * Optional content to display when no results are found
   */
  emptyOptionContent?: ReactNode;
  /**
   * Optional search value
   */
  searchValue: string;
  /**
   * Optional initial search content when the search value is empty
   */
  initialSearchContent?: ReactNode;
}
