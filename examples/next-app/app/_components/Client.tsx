'use client';

import { Box, Button, Heading, toast } from '@paalstack/react-ui';

export const Client = () => {
  return (
    <Box className="p-7">
      <Heading>Layout</Heading>
      <Box as="h1" className="p-8 text-2xl font-bold" bg="yellow">
        Client
      </Box>
      <Button
        variant="outline"
        onClick={() => {
          toast('Your message has been sent.');
        }}
      >
        Open a Toast Message
      </Button>
    </Box>
  );
};
