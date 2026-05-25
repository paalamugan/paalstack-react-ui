'use client';

import { useCounter } from '@paalstack/react-hooks';
import { LuMoon, LuSun } from '@paalstack/react-icons/lu';
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Text,
  toast,
  Toaster,
  useNextTheme,
} from '@paalstack/react-ui';

export function DemoCard() {
  const [count, { increment, decrement, reset }] = useCounter(0);
  const { isDark, setTheme } = useNextTheme();

  return (
    <Box>
      <Toaster richColors closeButton />
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Counter
            <Badge variant="secondary">{isDark ? 'dark' : 'light'} mode</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Text className="text-4xl font-bold text-center tabular-nums">{count}</Text>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" onClick={() => decrement()}>
              −
            </Button>
            <Button variant="outline" onClick={() => increment()}>
              +
            </Button>
            <Button variant="ghost" onClick={() => reset()}>
              Reset
            </Button>
          </div>
          <Button variant="outline" size="sm" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
            {isDark ? <LuSun className="mr-2 h-4 w-4" /> : <LuMoon className="mr-2 h-4 w-4" />}
            Toggle theme
          </Button>
          <Button size="sm" onClick={() => toast.success('Action completed!')}>
            Show toast
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
