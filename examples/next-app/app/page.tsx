import { Box, Heading, Text } from '@paalstack/react-ui';

import { DemoCard } from './_components/DemoCard';

export default function Home() {
  return (
    <Box as="main" className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 bg-background text-foreground">
      <Heading className="text-4xl font-bold">Paalstack React UI</Heading>
      <Text className="text-muted-foreground">Built with Next.js + Tailwind CSS v4</Text>
      <DemoCard />
    </Box>
  );
}
