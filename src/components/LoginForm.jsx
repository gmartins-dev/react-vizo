import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function LoginForm() {
  function handleSubmit() {
    console.log('formulario enviado');
  }

  return (
    <main>
      <Flex
        bg="blue.900"
        align="center"
        justify="center"
        h="100vh"
      >
        <VStack>
          <Box
            bg="white"
            opacity="10"
            p={10}
            rounded="md"
            w={410}
            h={400}
          >
            <form onSubmit={handleSubmit}>
              <Text
                fontSize="20px"
                fontWeight="bold"
                color="blue.900"
                marginBottom="50px"
              >
                Faça login em sua conta iconHype
              </Text>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Insira seu e-mail"
                />
                <Input
                  type="password"
                  placeholder="Insira sua senha"
                />
              </FormControl>
              <Text marginTop="15px">
                <Link color="blue.900" fontWeight="bold">
                  Esqueceu sua senha?
                </Link>
              </Text>
              <Button
                colorScheme="facebook"
                type="submit"
                width="full"
                marginTop="30px"
                marginBottom="20px"
              >
                Fazer login
              </Button>

              <Text marginTop="10px">
                Não tem uma conta icoHype?&nbsp;
                <Link color="blue.900" fontWeight="bold">
                  Crie uma aqui.
                </Link>
              </Text>
            </form>
          </Box>
        </VStack>
      </Flex>
    </main>
  );
}
