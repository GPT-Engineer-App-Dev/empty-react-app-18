import { Container, Heading, VStack, Box, Text, Spinner } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";

const Events = () => {
  const { data: events, isLoading, error } = useEvents();

  if (isLoading) {
    return (
      <Container centerContent>
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent>
        <Text color="red.500">Failed to load events: {error.message}</Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={6}>Events</Heading>
      <VStack spacing={4} align="stretch">
        {events.map(event => (
          <Box key={event.id} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{event.name}</Heading>
            <Text mt={4}>{new Date(event.date).toLocaleDateString()}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Events;