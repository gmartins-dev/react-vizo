import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
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
        bg="#222435"
        align="center"
        justify="center"
        h="100%"
        flexDirection="column"
      >
        <Image
          marginTop="80px"
          marginBottom="20px"
          boxSize="150px"
          src="https://images2.imgbox.com/15/7b/KyR4jsKB_o.png"
          alt="Dolphin Avatar"
        />
        <VStack>
          <Box
            background="rgba( 34, 36, 53, 0.25 )"
            backdropFilter="auto"
            backdropBlur="4px"
            boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
            p={10}
            rounded="md"
            w={560}
            h={420}
            borderRadius="10px"
            border="1px"
            borderColor="#38A6D8"
            marginBottom="200px"
          >
            <form onSubmit={handleSubmit}>
              <Text
                fontSize="22px"
                fontWeight="bold"
                color="#FFFFFF"
                marginBottom="50px"
                textAlign="center"
              >
                Faça login em sua conta icoHype
              </Text>
              <FormControl>
                <Input
                  size="lg"
                  type="text"
                  placeholder="Insira seu e-mail"
                  marginBottom="15px"
                  borderRadius="1em"
                  border="2px"
                  borderColor="#38A6D8"
                />
                <Input
                  size="lg"
                  type="password"
                  placeholder="Insira sua senha"
                  borderRadius="1em"
                  border="2px"
                  borderColor="#38A6D8"
                />
              </FormControl>
              <Text
                fontSize="14px"
                fontWeight="bold"
                marginTop="15px"
              >
                <Link color="#246483" fontWeight="bold">
                  Esqueceu sua senha?
                </Link>
              </Text>
              <Button
                size="lg"
                bg="#00628B"
                type="submit"
                width="full"
                marginTop="30px"
                marginBottom="20px"
                borderRadius="1em"
                fontSize="18px"
                fontWeight="bold"
              >
                Fazer login
              </Button>

              <Text
                fontSize="14px"
                fontWeight="bold"
                marginTop="10px"
                color="#246483"
              >
                Não tem uma conta icoHype?&nbsp;
                <Link color="#C35B38" fontWeight="bold">
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
