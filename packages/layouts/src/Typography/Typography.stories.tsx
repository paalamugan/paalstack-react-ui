import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta = {
  title: 'Layouts/Typography',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const H1Story: Story = {
  name: 'H1',
  render: () => <Typography.H1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.</Typography.H1>,
  args: {},
};

export const H2Story: Story = {
  name: 'H2',
  render: () => <Typography.H2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.</Typography.H2>,
  args: {},
};

export const H3Story: Story = {
  name: 'H3',
  render: () => <Typography.H3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.</Typography.H3>,
  args: {},
};

export const H4Story: Story = {
  name: 'H4',
  render: () => <Typography.H4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.</Typography.H4>,
  args: {},
};

export const H5Story: Story = {
  name: 'H5',
  render: () => <Typography.H5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.</Typography.H5>,
  args: {},
};

export const H6Story: Story = {
  name: 'H6',
  render: () => <Typography.H6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.</Typography.H6>,
  args: {},
};

export const PStory: Story = {
  name: 'P',
  render: (args) => (
    <Typography.P {...args}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.</Typography.P>
  ),
  args: {},
};

export const BlockQuoteStory: Story = {
  name: 'BlockQuote',
  render: (args) => (
    <Typography.BlockQuote {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.
    </Typography.BlockQuote>
  ),
  args: {},
};

export const TableStory: Story = {
  name: 'Table',
  render: () => (
    <div className="my-6 w-full overflow-y-auto">
      <Typography.Table className="w-full">
        <Typography.THead>
          <Typography.TR className="m-0 border-t border-slate-300 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
            <Typography.TH className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right">
              King&apos;s Treasury
            </Typography.TH>
            <Typography.TH className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right">
              People&apos;s happiness
            </Typography.TH>
          </Typography.TR>
        </Typography.THead>
        <Typography.TBody>
          <Typography.TR className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
            <Typography.TD className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right">
              Empty
            </Typography.TD>
            <Typography.TD className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right">
              Overflowing
            </Typography.TD>
          </Typography.TR>
          <Typography.TR className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
            <Typography.TD className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right">
              Modest
            </Typography.TD>
            <Typography.TD className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right">
              Satisfied
            </Typography.TD>
          </Typography.TR>
          <Typography.TR className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-600 dark:even:bg-slate-800">
            <Typography.TD className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right">
              Full
            </Typography.TD>
            <Typography.TD className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right">
              Ecstatic
            </Typography.TD>
          </Typography.TR>
        </Typography.TBody>
      </Typography.Table>
    </div>
  ),
  args: {},
};

export const ListULStory: Story = {
  name: 'List UL',
  render: () => (
    <Typography.UL className="my-6 ml-6 list-disc [&>li]:mt-2">
      <Typography.LI>1st level of puns: 5 gold coins</Typography.LI>
      <Typography.LI>2nd level of jokes: 10 gold coins</Typography.LI>
      <Typography.LI>3rd level of humor: 15 gold coins</Typography.LI>
    </Typography.UL>
  ),
  args: {},
};

export const ListOLStory: Story = {
  name: 'List OL',
  render: () => (
    <Typography.OL className="my-6 ml-6 list-decimal [&>li]:mt-2">
      <Typography.LI>1st level of puns: 5 gold coins</Typography.LI>
      <Typography.LI>2nd level of jokes: 10 gold coins</Typography.LI>
      <Typography.LI>3rd level of humor: 15 gold coins</Typography.LI>
    </Typography.OL>
  ),
  args: {},
};

export const CodeStory: Story = {
  name: 'Code',
  render: (args) => (
    <Typography.Code {...args}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.</Typography.Code>
  ),
  args: {},
};

export const LeadStory: Story = {
  name: 'Lead',
  render: (args) => (
    <Typography.Lead {...args}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.</Typography.Lead>
  ),
  args: {},
};

export const LargeStory: Story = {
  name: 'Large',
  render: (args) => (
    <Typography.Large {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.
    </Typography.Large>
  ),
  args: {},
};

export const SmallStory: Story = {
  name: 'Small',
  render: (args) => (
    <Typography.Small {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.
    </Typography.Small>
  ),
  args: {},
};

export const SubtleStory: Story = {
  name: 'Subtle',
  render: (args) => (
    <Typography.Subtle {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.
    </Typography.Subtle>
  ),
  args: {},
};

export const StrongStory: Story = {
  name: 'Strong',
  render: (args) => (
    <Typography.Strong {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim.
    </Typography.Strong>
  ),
  args: {},
};
