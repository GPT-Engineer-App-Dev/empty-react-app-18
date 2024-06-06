import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Button } from '@chakra-ui/react';
import { SupabaseAuthUI, useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const Login = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  return (
    <Container centerContent>
      <Box width="100%" maxWidth="md" mt={8}>
        {session ? (
          <Button onClick={logout} width="100%">Logout</Button>
        ) : (
          <SupabaseAuthUI />
        )}
      </Box>
    </Container>
  );
};

export default Login;