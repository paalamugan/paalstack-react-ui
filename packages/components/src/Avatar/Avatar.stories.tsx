import type { Meta, StoryObj } from '@storybook/react';

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarGroupList,
  AvatarImage,
  AvatarRoot,
} from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'default', 'lg'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

const avatarUrl = 'https://avatars.githubusercontent.com/u/42642576?v=4';
const avatarUrl2 = 'https://avatars.githubusercontent.com/u/1?v=4';
const avatarUrl3 = 'https://avatars.githubusercontent.com/u/2?v=4';

// --- Props API Stories ---

export const Basic: Story = {
  args: {
    src: avatarUrl,
    fallback: 'PS',
  },
};

export const WithFallback: Story = {
  render: () => <Avatar fallback="JD" />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src={avatarUrl} fallback="SM" size="sm" />
      <Avatar src={avatarUrl} fallback="MD" />
      <Avatar src={avatarUrl} fallback="LG" size="lg" />
    </div>
  ),
};

export const FallbackSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar fallback="SM" size="sm" />
      <Avatar fallback="MD" />
      <Avatar fallback="LG" size="lg" />
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src={avatarUrl} fallback="SM" size="sm" badge />
      <Avatar src={avatarUrl} fallback="MD" badge />
      <Avatar src={avatarUrl} fallback="LG" size="lg" badge />
    </div>
  ),
};

export const WithBadgeCustomColor: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src={avatarUrl} fallback="CN" badge badgeProps={{ className: 'bg-green-500' }} />
      <Avatar src={avatarUrl} fallback="CN" badge badgeProps={{ className: 'bg-red-500' }} />
      <Avatar src={avatarUrl} fallback="CN" badge badgeProps={{ className: 'bg-yellow-500' }} />
    </div>
  ),
};

export const BrokenImage: Story = {
  render: () => <Avatar src="https://broken-link.jpg" fallback="BK" />,
};

export const CustomFallbackStyle: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar fallback="AB" fallbackProps={{ className: 'bg-blue-500 text-white' }} />
      <Avatar fallback="CD" fallbackProps={{ className: 'bg-green-500 text-white' }} />
      <Avatar fallback="EF" fallbackProps={{ className: 'bg-purple-500 text-white' }} />
    </div>
  ),
};

export const GroupWithProps: Story = {
  render: () => (
    <AvatarGroupList
      items={[
        { src: avatarUrl, fallback: 'CN' },
        { src: avatarUrl2, fallback: 'U1' },
        { src: avatarUrl3, fallback: 'U2' },
        { fallback: 'JD' },
        { fallback: 'AB' },
      ]}
      max={3}
    />
  ),
};

export const GroupSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AvatarGroupList
        items={[
          { src: avatarUrl, fallback: 'CN', size: 'sm' },
          { src: avatarUrl2, fallback: 'U1', size: 'sm' },
          { fallback: 'JD', size: 'sm' },
          { fallback: 'AB', size: 'sm' },
        ]}
        max={3}
      />
      <AvatarGroupList
        items={[
          { src: avatarUrl, fallback: 'CN' },
          { src: avatarUrl2, fallback: 'U1' },
          { fallback: 'JD' },
          { fallback: 'AB' },
        ]}
        max={3}
      />
      <AvatarGroupList
        items={[
          { src: avatarUrl, fallback: 'CN', size: 'lg' },
          { src: avatarUrl2, fallback: 'U1', size: 'lg' },
          { fallback: 'JD', size: 'lg' },
          { fallback: 'AB', size: 'lg' },
        ]}
        max={3}
      />
    </div>
  ),
};

export const GroupNoMax: Story = {
  render: () => (
    <AvatarGroupList
      items={[
        { src: avatarUrl, fallback: 'CN' },
        { src: avatarUrl2, fallback: 'U1' },
        { src: avatarUrl3, fallback: 'U2' },
        { fallback: 'JD' },
      ]}
    />
  ),
};

// --- Composition API Stories ---

export const CompositionBasic: Story = {
  render: () => (
    <AvatarRoot>
      <AvatarImage src={avatarUrl} alt="User" />
      <AvatarFallback>PS</AvatarFallback>
    </AvatarRoot>
  ),
};

export const CompositionWithBadge: Story = {
  render: () => (
    <AvatarRoot>
      <AvatarImage src={avatarUrl} alt="User" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge className="bg-green-500" />
    </AvatarRoot>
  ),
};

export const CompositionGroup: Story = {
  render: () => (
    <AvatarGroup>
      <AvatarRoot>
        <AvatarImage src={avatarUrl} alt="User 1" />
        <AvatarFallback>CN</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarImage src={avatarUrl2} alt="User 2" />
        <AvatarFallback>U1</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarImage src={avatarUrl3} alt="User 3" />
        <AvatarFallback>U2</AvatarFallback>
      </AvatarRoot>
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  ),
};

export const CompositionSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <AvatarRoot size="sm">
        <AvatarImage src={avatarUrl} alt="Small" />
        <AvatarFallback>SM</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarImage src={avatarUrl} alt="Default" />
        <AvatarFallback>MD</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot size="lg">
        <AvatarImage src={avatarUrl} alt="Large" />
        <AvatarFallback>LG</AvatarFallback>
      </AvatarRoot>
    </div>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar src={avatarUrl} fallback="CN" size="lg" badge badgeProps={{ className: 'bg-green-500' }} />
      <div>
        <p className="text-sm font-medium">Paalamugan</p>
        <p className="text-xs text-muted-foreground">paalamugan.samayamuthu@paalstack.com</p>
      </div>
    </div>
  ),
};

export const TeamMembers: Story = {
  render: () => {
    const members = [
      { name: 'Paalamugan', initials: 'PS', src: avatarUrl, online: true },
      { name: 'Bob', initials: 'BO', src: avatarUrl2, online: true },
      { name: 'Carol', initials: 'CA', src: avatarUrl3, online: false },
      { name: 'Dave', initials: 'DA', online: true },
      { name: 'Eve', initials: 'EV', online: false },
    ];

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Team Members</h3>
        <div className="space-y-3">
          {members.map((member) => (
            <div key={member.name} className="flex items-center gap-3">
              <Avatar
                src={member.src}
                fallback={member.initials}
                badge
                badgeProps={{ className: member.online ? 'bg-green-500' : 'bg-gray-400' }}
              />
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{member.name}</span>
                <span className="text-xs text-muted-foreground">{member.online ? 'Online' : 'Offline'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
