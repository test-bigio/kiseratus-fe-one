import { Icon } from '@chakra-ui/react';
import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart, MdOutlineCalculate } from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import Formula from 'views/admin/formula';
import Jadwal40 from 'views/admin/jadwal4.0/Jadwal4.0';

// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
	{
		name: 'Main Dashboard',
		layout: '/admin',
		path: '/default',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: MainDashboard,
		role: ["tukang-jadwal", "tukang-keluarga", "tukang-form-unik", "tukang-formula", "tukang-form-canggih", "tukang-tabel", "tukang-segala-tukang"]
	},
  {
    name: "Jadwal 4.0",
    layout: "/admin",
    path: "/jadwal40",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: Jadwal40,
    secondary: true,
    role: [
      "tukang-jadwal",
      "tukang-keluarga",
      "tukang-form-unik",
      "tukang-formula",
      "tukang-form-canggih",
      "tukang-tabel",
      "tukang-segala-tukang",
    ],
  },
	{
		name: 'Formula',
		layout: '/admin',
		path: '/formula',
		icon: <Icon as={MdOutlineCalculate} width='20px' height='20px' color='inherit' />,
		component: Formula,
		role: ['tukang-formula']
	},
	{
		name: 'Sign In',
		layout: '/auth',
		path: '/sign-in',
		icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
		component: SignInCentered
	},
];

export default routes;
