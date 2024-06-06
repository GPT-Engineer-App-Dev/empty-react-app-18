import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Navbar = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" color="white" fontSize="lg" fontWeight="bold" mr={4}>
            Home
          </Link>
          <Link as={RouterLink} to="/events" color="white" fontSize="lg" fontWeight="bold">
            Events
          </Link>
        </Flex>
        <Button onClick={logout} colorScheme="teal" variant="outline">
          {session ? 'Logout' : 'Login'}
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;