// Chakra imports
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useMemo, useReducer, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Field, Form, Formik } from "formik";

export default function Table40() {
  // Chakra Color Mode
  const columnHelper = createColumnHelper<any>();
  
  let columns:any = [
    columnHelper.accessor("firstName", {
      header: "First Name",
    }),
    columnHelper.accessor((row) => row.lastName, {
      header: "Last Name",
    }),
    columnHelper.accessor("age", {
      header: "Age",
    }),
    columnHelper.accessor("visits", {
      header: "Visits",
    }),
    columnHelper.accessor("status", {
      header: "Status",
    }),
    columnHelper.accessor("progress", {
      header: "Profile Progress",
    }),
  ];

  const [data] = useState(() => [...defaultData]);
  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const tabel40 = useMemo(() => {
    return (
    <Table variant="striped" colorScheme="teal">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
  )
},[columns])

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex direction="column" w='50%' sx={{ marginBottom: 10 }}>
        <Formik
          initialValues={{
            kolom: "",
            header: "",
            baris: "",
          }}
          onSubmit={async (values) => {
            columns.push(
              columnHelper.accessor(values.kolom, {
                header: values.header,
              })
            )
            // return setColumnData(values)
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <Form>
            <Heading>Tabel Configurasi</Heading>
            <Flex direction="column" sx={{ marginBottom: 4 }}>
              <label htmlFor="kolom">Kolom</label>
              <Input id="kolom" name="kolom" onChange={handleChange} value={values.kolom} placeholder="kolom" />

              <label htmlFor="header">Header</label>
              <Input id="header" name="header" onChange={handleChange} value={values.header} placeholder="header" />

              <label htmlFor="baris">Jumlah Baris</label>
              <Input id="baris" name="baris" placeholder="baris" onChange={handleChange} value={values.baris} />
            </Flex>
            <Button variant="solid" colorScheme="blue" type="submit">
              Submit
            </Button>
          </Form>
          )}
        </Formik>
      </Flex>
      <Heading>TABEL</Heading>
      {tabel40}
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </Box>
  );
}

const defaultData: any = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];


