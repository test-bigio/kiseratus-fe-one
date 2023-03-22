import { Box, Button, SimpleGrid, useDisclosure, Flex, Center, Text, Square } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "stores/hooks";
import { getPopulations } from "stores/population/population.action";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { countries } from "stores/population/population.action";

const Information = () => {
  const dispatch = useAppDispatch();
  const { populations } = useAppSelector((state) => state.population);

  useEffect(() => {
    dispatch(getPopulations());
  }, [dispatch]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Country Population",
      },
    },
  };

  const data = {
    labels: countries,
    datasets: [
      {
        label: "Country",
        data: populations.map((population) => population.count),
        orderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const dataPie = {
    labels: countries,
    datasets: [
      {
        fill: true,
        label: "Country",
        data: populations.map((population) => population.count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <Box>
          <Bar options={options} data={data} />
        </Box>
        <Box>
          <Line options={options} data={data} />
        </Box>
      </SimpleGrid>
      <Flex justifyContent="center">
        <Box width="500px" >
          <Pie options={options} data={dataPie}/>
        </Box>
      </Flex>
    </Box>
  );
};

export default Information;
