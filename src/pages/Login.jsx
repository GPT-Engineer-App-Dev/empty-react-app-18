import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { SupabaseAuthUI, useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { session } = useSupabaseAuth();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <SupabaseAuthUI />
    </Container>
  );
};

export default Login;