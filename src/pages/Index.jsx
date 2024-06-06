import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const navigate = useNavigate();
  const { session, logout } = useSupabaseAuth();

  const handleAuthAction = () => {
    if (session) {
      logout();
    } else {
      navigate("/login");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Your New React App</Text>
        <Text>This is an empty React application. Start building your amazing project here!</Text>
      <Button onClick={handleAuthAction}>
          {session ? "Logout" : "Login"}
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;