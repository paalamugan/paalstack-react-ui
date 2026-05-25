import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../../components/src/Button';
import { HeadlessToast } from './components';
import { toast, Toaster } from './Toast';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Toast',
  component: Toaster,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster closeButton position="top-right" />
      </>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Toaster>;

// --- Props API Stories ---

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event has been created', {
          id: 'event-default',
          duration: 100000000,
        })
      }
    >
      Show Toast
    </Button>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2025 at 9:00 AM',
          id: 'event-with-description',
        })
      }
    >
      With Description
    </Button>
  ),
};

export const Success: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.success('Event has been created successfully', {
          id: 'event-success',
        })
      }
    >
      Success
    </Button>
  ),
};

export const ErrorToast: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.error('Event could not be created', {
          id: 'event-error',
        })
      }
    >
      Error
    </Button>
  ),
};

export const Info: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.info('Be at the area 10 minutes before the event time', {
          id: 'event-info',
        })
      }
    >
      Info
    </Button>
  ),
};

export const Warning: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.warning('Event start time is too close to another event', {
          id: 'event-warning',
        })
      }
    >
      Warning
    </Button>
  ),
};

export const Loading: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.loading('Loading data...', {
          id: 'event-loading',
        })
      }
    >
      Loading
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event has been created', {
          id: 'event-with-action',
          action: {
            label: 'Undo',
            onClick: () => toast.info('Event creation undone'),
          },
        })
      }
    >
      With Action
    </Button>
  ),
};

export const WithCancel: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event has been created', {
          id: 'event-with-cancel',
          cancel: {
            label: 'Cancel',
            onClick: () => toast.info('Cancelled'),
          },
        })
      }
    >
      With Cancel
    </Button>
  ),
};

export const PromiseToast: Story = {
  render: () => {
    const promise = () =>
      new Promise<{ name: string }>((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

    return (
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(promise, {
            id: 'event-promise',
            loading: 'Loading...',
            success: (data) => `${data.name} toast has been added`,
            error: 'Error',
          })
        }
      >
        Promise
      </Button>
    );
  },
};

export const CustomJSX: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.custom((t) => (
          <div className="flex w-[356px] items-center gap-3 rounded-lg border bg-background p-4 shadow-lg">
            <div className="flex-1">
              <p className="text-sm font-semibold">Custom Event</p>
              <p className="text-xs text-muted-foreground">This is a fully custom toast</p>
            </div>
            <Button size="sm" variant="outline" onClick={() => toast.dismiss(t)}>
              Close
            </Button>
          </div>
        ))
      }
    >
      Custom Toast
    </Button>
  ),
};

export const CustomToast: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.custom((t) => (
          <HeadlessToast
            toast={toast}
            id={t}
            title="Event has been created"
            description="Sunday, December 03, 2025 at 9:00 AM"
          />
        ))
      }
    >
      Headless Toast
    </Button>
  ),
};

export const RichColors: Story = {
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster richColors position="top-right" />
      </>
    ),
  ],
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast.success('Successfully completed!', {
            id: 'event-success-rich-colors',
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error('Something went wrong!', {
            id: 'event-error-rich-colors',
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info('Information message', {
            id: 'event-info-rich-colors',
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning('Warning message', {
            id: 'event-warning-rich-colors',
          })
        }
      >
        Warning
      </Button>
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast('Default notification', {
            id: 'event-default-all-types',
          })
        }
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success('Success!', {
            id: 'event-success-all-types',
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error('Error!', {
            id: 'event-error-all-types',
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info('Info', {
            id: 'event-info-all-types',
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning('Warning', {
            id: 'event-warning-all-types',
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.loading('Loading...', {
            id: 'event-loading-all-types',
          })
        }
      >
        Loading
      </Button>
    </div>
  ),
};

export const WithDuration: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast('This toast lasts 10 seconds', { duration: 10000, id: 'event-duration' })}
    >
      Long Duration (10s)
    </Button>
  ),
};

export const Dismissible: Story = {
  render: () => {
    const showToast = () => {
      const toastId: string | number = toast('Dismiss me programmatically', {
        duration: Infinity,
        id: 'event-dismissible',
        action: {
          label: 'Dismiss',
          onClick: () => toast.dismiss(toastId),
        },
      });
    };

    return (
      <Button variant="outline" onClick={showToast}>
        Persistent Toast
      </Button>
    );
  },
};
