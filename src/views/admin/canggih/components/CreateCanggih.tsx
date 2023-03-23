import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import Card from "components/card/Card";
import { addMember } from "stores/member/member.slice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const CreateCanggih = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const toast = useToast();
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const formik = useFormik({
    initialValues: {
      id: "",
      nama: "",
      usia: 0,
      statusPerkawinan: "",
      alamat: "",
      pekerjaan: "",
      ringkasanKehidupan: "",
      uploadFoto: "https://i.imgur.com/4Yq2X7a.jpg",
    },
    onSubmit: (values) => {
      values.id = values.nama.trim().replace(/\s+/g, "-").toLowerCase();
			dispatch(addMember(values));
			localStorage.removeItem('form-canggih')
      history.push("/admin/canggih");
    },
  });

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
      if (navigator.onLine) {
        toast({
          title: "Your internet is connected",
          description: "You can now use the app",
          status: "success",
          duration: 3000,
          isClosable: true,
				});
				localStorage.setItem('form-canggih', JSON.stringify(formik.values))
      } else {
        toast({
          title: "Your internet is disconnected",
          description: "You can't use the app",
          status: "error",
          duration: 3000,
          isClosable: true,
				});
				localStorage.setItem('form-canggih', JSON.stringify(formik.values))
      }
    };

    // Listen to the online status
    window.addEventListener("online", handleStatusChange);

    // Listen to the offline status
    window.addEventListener("offline", handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
	}, [isOnline, formik]);
	
	// make every minutes to save to localStorage
	useEffect(() => {

		const interval = setInterval(() => {
			localStorage.setItem('form-canggih', JSON.stringify(formik.values))
			toast({
				title: "Saved",
				description: "Form telah tersimpan otomatis",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}, 60000);

		return () => clearInterval(interval);
	}, [formik])

	useEffect(() => {

		const data = localStorage.getItem('form-canggih')
		if (data) {
			formik.setValues(JSON.parse(data))
		}

	}, [])



  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <Box>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                mb="8px"
              >
                Nama
                <Text>*</Text>
              </FormLabel>
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Masukan nama"
                mb="24px"
                size="lg"
                type="text"
                variant="auth"
                name="nama"
                value={formik.values.nama}
                onChange={formik.handleChange}
              />
            </Box>
            <Box>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                mb="8px"
              >
                Usia
                <Text>*</Text>
              </FormLabel>
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Masukan usia"
                mb="24px"
                size="lg"
                type="number"
                variant="auth"
                name="usia"
                value={formik.values.usia}
                onChange={formik.handleChange}
              />
            </Box>
            <Box>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                mb="8px"
              >
                Status Perkawinan
                <Text>*</Text>
              </FormLabel>
              <RadioGroup
                mb="24px"
                name="statusPerkawinan"
                onChange={formik.handleChange}
                value={formik.values.statusPerkawinan}
              >
                <Stack direction="row">
                  <Radio
                    value="Belum Kawin"
                    onChange={formik.handleChange}
                    name="statusPerkawinan"
                  >
                    Belum Kawin
                  </Radio>
                  <Radio
                    value="Kawin"
                    onChange={formik.handleChange}
                    name="statusPerkawinan"
                  >
                    Kawin
                  </Radio>
                  <Radio
                    value="Cerai"
                    onChange={formik.handleChange}
                    name="statusPerkawinan"
                  >
                    Cerai
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Box>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                mb="8px"
              >
                Alamat
                <Text>*</Text>
              </FormLabel>
              <Textarea
                fontSize="sm"
                mb="24px"
                name="alamat"
                placeholder="Masukan alamat"
                value={formik.values.alamat}
                onChange={formik.handleChange}
              />
            </Box>
            <Box>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                mb="8px"
              >
                Perkerjaan
                <Text>*</Text>
              </FormLabel>
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Masukan pekerjaan"
                mb="24px"
                size="lg"
                type="text"
                name="pekerjaan"
                value={formik.values.pekerjaan}
                onChange={formik.handleChange}
              />
            </Box>
            <Box>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                mb="8px"
              >
                Ringkasan Kehidupan
                <Text>*</Text>
              </FormLabel>
              <Textarea
                fontSize="sm"
                mb="24px"
                name="ringkasanKehidupan"
                placeholder="Masukan alamat"
                value={formik.values.ringkasanKehidupan}
                onChange={formik.handleChange}
              />
            </Box>
            <Box>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                mb="8px"
              >
                Upload Foto
              </FormLabel>
              <Input
                isRequired={false}
                fontSize="sm"
                placeholder="Masukan pekerjaan"
                mb="24px"
                type="file"
                name="pekerjaan"
              />
            </Box>
            <Button
              type="submit"
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
            >
              Sign In
            </Button>
          </FormControl>
        </form>
      </Card>
    </Box>
  );
};

export default CreateCanggih;
