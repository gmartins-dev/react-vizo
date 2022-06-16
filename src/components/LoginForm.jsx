import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
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
          boxSize="100px"
          src="https://images2.imgbox.com/de/33/7SZiivv9_o.png"
          alt="Dolphin Avatar"
        />
        <VStack>
          <Box
            bgGradient="radial(#38A6D8, #35576E)"
            opacity="0.75"
            p={10}
            rounded="md"
            w={560}
            h={400}
            borderRadius="1em"
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
                Faça login em sua conta iconHype
              </Text>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Insira seu e-mail"
                  marginBottom="15px"
                  borderRadius="1em"
                  border="1px"
                  borderColor="#38A6D8"
                />
                <Input
                  type="password"
                  placeholder="Insira sua senha"
                  borderRadius="1em"
                  border="1px"
                  borderColor="#38A6D8"
                />
              </FormControl>
              <Text
                fontSize="14px"
                fontWeight="bold"
                marginTop="10px"
                marginTop="15px"
              >
                <Link color="#246483" fontWeight="bold">
                  Esqueceu sua senha?
                </Link>
              </Text>
              <Button
                bg="#246483"
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
