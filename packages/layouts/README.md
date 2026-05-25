# @paalstack/react-layouts

Polymorphic layout primitives and typography components for building structured React UIs — all styled with Tailwind CSS v4 and fully typed with TypeScript.

> **Note:** Most consumers should install [`@paalstack/react-ui`](../ui) instead — it re-exports everything from this package in one convenient bundle.

## Docs

[Storybook → Layout docs](https://paalamugan.github.io/paalstack-react-ui/?path=/docs/overview-layouts--docs)

## Installation

```bash
pnpm add @paalstack/react-layouts
# or
npm install @paalstack/react-layouts
# or
yarn add @paalstack/react-layouts
```

## Usage

```tsx
import { Box, Container, Flex, Heading, HStack, Text, VStack } from '@paalstack/react-layouts';

export default function Page() {
  return (
    <Container>
      <VStack gap={4}>
        <Heading as="h1" size="3xl">
          Welcome
        </Heading>
        <Text className="text-muted-foreground">Build beautiful layouts fast.</Text>
        <HStack gap={2}>
          <Box className="rounded-lg bg-card p-4">Card A</Box>
          <Box className="rounded-lg bg-card p-4">Card B</Box>
        </HStack>
      </VStack>
    </Container>
  );
}
```

## Components

| Component    | Description                                                                |
| ------------ | -------------------------------------------------------------------------- |
| `Box`        | Base polymorphic container — renders any HTML element via the `as` prop    |
| `Container`  | Centered, max-width constrained wrapper with responsive horizontal padding |
| `Flex`       | Flexbox container with gap, direction, align, justify, and wrap props      |
| `Stack`      | Generic stack (direction-agnostic) with configurable gap                   |
| `VStack`     | Vertical stack — children arranged top-to-bottom                           |
| `HStack`     | Horizontal stack — children arranged left-to-right                         |
| `Grid`       | CSS Grid container with columns, rows, and gap props                       |
| `Wrap`       | Flexbox wrapping container for tag lists and badge groups                  |
| `Center`     | Centers its child both horizontally and vertically                         |
| `Paper`      | Surface container with background, elevation shadow, and border radius     |
| `Portal`     | Renders children outside the current DOM hierarchy (portals)               |
| `Text`       | Inline/block text element with size and weight variants                    |
| `Heading`    | Semantic heading (`h1`–`h6`) with size scale                               |
| `Typography` | Full-featured typography component with style presets                      |

## Requirements

| Peer dependency | Version |
| --------------- | ------- |
| `react`         | `>= 18` |
| `react-dom`     | `>= 18` |

## License

MIT © [Paalamugan](https://github.com/paalamugan)
