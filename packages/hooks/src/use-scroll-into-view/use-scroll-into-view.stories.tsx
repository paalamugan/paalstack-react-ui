import { Button } from '@/components/index';
import { Box, Center, Paper, Text } from '@/layouts/index';

import { useScrollIntoView } from './use-scroll-into-view';

export default { title: 'Hooks/UI And Dom/useScrollIntoView' };

export function Usage() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <Center className="flex-col gap-4">
      <Button
        onClick={() =>
          scrollIntoView({
            alignment: 'center',
          })
        }
        color="blue"
      >
        Scroll to target
      </Button>
      <Box
        className="w-full bg-blue-100"
        style={{
          height: '50vh',
        }}
      />
      <Text ref={targetRef}>Hello there</Text>
    </Center>
  );
}

export function ParentNode() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<HTMLDivElement, HTMLDivElement>();

  return (
    <Center className="gap-4">
      <Paper ref={scrollableRef} className="h-80" style={{ overflowY: 'scroll', flex: 1 }}>
        <Box className="pt-108 pb-128">
          <Paper ref={targetRef} className="w-full bg-blue-100 p-8">
            <Text>Scroll me into view</Text>
          </Paper>
        </Box>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Center>
  );
}

export function ScrollXAxis() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<HTMLDivElement, HTMLDivElement>({ axis: 'x' });

  return (
    <Center className="gap-4">
      <Paper ref={scrollableRef} className="h-44 w-84" style={{ overflowX: 'scroll' }}>
        <Box className="pr-128 pl-80">
          <Paper ref={targetRef} className="w-max bg-blue-100 p-8">
            <Text>Scroll me into view</Text>
          </Paper>
        </Box>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Center>
  );
}
