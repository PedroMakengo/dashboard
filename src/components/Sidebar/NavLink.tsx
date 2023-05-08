import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import { ElementType } from 'react'
import { RiDashboardLine, RiContactsLine } from 'react-icons/ri'

interface NavLinkProps {
  icon: ElementType
  children: string
}

export function NavLink({ icon, children }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center">
      <Icon as={icon} />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
