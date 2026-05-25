import { useCounter } from '@paalstack/react-hooks';
import { LuMoon, LuSun } from '@paalstack/react-icons/lu';
import { Badge, Box, Button, Card, CardContent, CardHeader, CardTitle, Text, useTheme } from '@paalstack/react-ui';

export default function App() {
  const [count, { increment, decrement, reset }] = useCounter(0);
  const { theme, toggleTheme } = useTheme();

  return (
    <Box className="min-h-screen bg-background text-foreground p-8">
      <Card className="max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Counter
            <Badge variant="secondary">{theme} mode</Badge>
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
          <Button variant="outline" size="sm" onClick={toggleTheme}>
            {theme === 'light' ? <LuMoon className="mr-2 h-4 w-4" /> : <LuSun className="mr-2 h-4 w-4" />}
            Toggle theme
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
