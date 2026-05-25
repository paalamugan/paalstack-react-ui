import { useCounter } from '@paalstack/react-hooks';
import { HiAcademicCap, HiOutlineAcademicCap } from '@paalstack/react-icons/hi';
import { Box, Button, Flex, Heading, HStack, Stack, Text, useTheme } from '@paalstack/react-ui';

import './App.css';

function App() {
  const [count, { increment, decrement }] = useCounter(0);
  const { theme, toggleTheme } = useTheme();
  return (
    <Stack>
      <HStack className="justify-between">
        <Heading>Sample React UI</Heading>
        <Button onClick={toggleTheme} variant="outline" className="mr-2">
          Switch To {theme === 'light' ? 'Dark' : 'Light'}
        </Button>
      </HStack>
      <Box>
        <Text className="inset-s-0 mb-2">Count: {count}</Text>
        <Button onClick={() => increment()} variant="outline" className="mr-2">
          Increment
        </Button>
        <Button onClick={() => decrement()} variant="outline">
          Decrement
        </Button>
        <Stack>
          <Flex className="mt-6 items-center justify-center gap-2">
            Solid Icon:
            <HiAcademicCap className="h-6 w-6" />
          </Flex>
          <Flex className="mt-6 items-center justify-center gap-2">
            Outline Icon:
            <HiOutlineAcademicCap className="h-6 w-6" />
          </Flex>
        </Stack>
      </Box>
    </Stack>
  );
}

export default App;
