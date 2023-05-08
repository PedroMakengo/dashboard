import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'

import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
import { SearchBox } from './SearchBox'
import { Profile } from './Profile'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1120}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="title" w="64">
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>

      <SearchBox />

      <Flex align="center" ml="auto">
        <Profile />
      </Flex>
    </Flex>
  )
}
