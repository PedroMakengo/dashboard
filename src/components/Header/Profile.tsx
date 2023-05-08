import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Pedro Makengo</Text>
        <Text color="gray.300" fontSize="small">
          pedromakengo@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Pedro Makengo"
        src="https://github.com/pedromakengo.png"
      />
    </Flex>
  )
}
