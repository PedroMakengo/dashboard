import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react'

import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <Link display="flex" alignItems="center">
            <Icon as={RiDashboardLine} />
            <Text ml="4" fontWeight="medium">
              Dashboard
            </Text>
          </Link>
          <Link display="flex" alignItems="center">
            <Icon as={RiContactsLine} />
            <Text ml="4" fontWeight="medium">
              Usuários
            </Text>
          </Link>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <Link display="flex" alignItems="center">
            <Icon as={RiInputMethodLine} />
            <Text ml="4" fontWeight="medium">
              Formulário
            </Text>
          </Link>
          <Link display="flex" alignItems="center">
            <Icon as={RiGitMergeLine} />
            <Text ml="4" fontWeight="medium">
              Automação
            </Text>
          </Link>
        </NavSection>
      </Stack>
    </Box>
  )
}
