# @paalstack/react-components

Accessible, unstyled-first React UI components built on top of [Base UI](https://base-ui.com/), styled with Tailwind CSS v4, and powered by TypeScript.

> **Note:** Most consumers should install [`@paalstack/react-ui`](../ui) instead — it re-exports everything from this package along with providers, layouts, hooks, and global styles in one convenient bundle.

## Docs

[Storybook → Component docs](https://paalamugan.github.io/paalstack-react-ui/)

## Installation

```bash
pnpm add @paalstack/react-components
# or
npm install @paalstack/react-components
# or
yarn add @paalstack/react-components
```

## Usage

```tsx
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Text } from '@paalstack/react-components';

export default function Demo() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Hello
          <Badge variant="secondary">New</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Text className="text-muted-foreground">Welcome to Paalstack UI.</Text>
        <Button className="mt-4">Get started</Button>
      </CardContent>
    </Card>
  );
}
```

## Component highlights

| Category         | Components                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| **Layout**       | `Box`, `Card`, `Separator`, `ScrollArea`, `ResizablePanel`                                        |
| **Typography**   | `Text`, `Heading`                                                                                 |
| **Form**         | `Button`, `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `OTPInput` |
| **Feedback**     | `Alert`, `Badge`, `Progress`, `Skeleton`, `Spinner`, `Toaster`                                    |
| **Overlay**      | `Dialog`, `Drawer`, `Popover`, `Tooltip`, `AlertDialog`, `Sheet`                                  |
| **Navigation**   | `Tabs`, `Breadcrumb`, `Pagination`, `NavigationMenu`                                              |
| **Data display** | `Table`, `DataTable`, `Avatar`, `Carousel`, `Calendar`, `Chart`                                   |
| **Command**      | `Command`, `Combobox`                                                                             |
| **Disclosure**   | `Accordion`, `Collapsible`                                                                        |
| **Error pages**  | `ErrorNotFound`, `ErrorInternalServer`, `ErrorForbidden`                                          |

## Requirements

| Peer dependency | Version |
| --------------- | ------- |
| `react`         | `>= 18` |
| `react-dom`     | `>= 18` |

## License

MIT © [Paalamugan](https://github.com/paalamugan)
