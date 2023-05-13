import {
  Box,
  Icon,
  Link,
  LinkProps as ChakraLinkProps,
  Text,
} from '@chakra-ui/react'
import { ElementType } from 'react'
import { RiDashboardLine, RiContactsLine } from 'react-icons/ri'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
