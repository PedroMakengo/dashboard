import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-01-18T00:00:00.00Z',
      '2022-03-18T00:00:00.00Z',
      '2021-03-18T00:00:00.00Z',
      '2021-03-18T00:00:00.00Z',
      '2021-03-18T00:00:00.00Z',
      '2021-03-18T00:00:00.00Z',
      '2021-03-18T00:00:00.00Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.8,
      opacityTo: 0.3,
    },
  },
}
const series = [{ name: 'series1', data: [31, 120, 120, 5, 30, 80] }]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1120} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={'8'} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
              <Chart
                options={options}
                series={series}
                type="area"
                height={150}
              />
            </Text>
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de Abertura
              <Chart
                options={options}
                series={series}
                type="area"
                height={150}
              />
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
