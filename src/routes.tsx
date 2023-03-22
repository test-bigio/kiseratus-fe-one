import { Icon } from '@chakra-ui/react';
import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart, MdOutlineCalculate, MdDateRange } from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Formula from 'views/admin/formula';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';
import Jadwal from 'views/admin/jadwal'

// Auth Imports
import SignInCentered from 'views/auth/signIn';
import Information from 'views/admin/information';
import Dashboard from 'views/admin/dashboard';
import canggih from 'views/admin/canggih';

const routes = [
	{
		name: 'Main Dashboard',
		layout: '/admin',
		path: '/default',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: MainDashboard,
		role: ["tukang-jadwal", "tukang-keluarga", "tukang-form-unik", "tukang-formula", "tukang-form-canggih", "tukang-tabel", "tukang-segala-tukang", 'tukang-grafik']
	},
	{
		name: 'Main Dashboard',
		layout: '/admin',
		path: '/dashboard',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: Dashboard,
		role: ["tukang-jadwal", "tukang-keluarga", "tukang-form-unik", "tukang-formula", "tukang-form-canggih", "tukang-tabel", "tukang-segala-tukang", 'tukang-grafik']
	},
	// {
	// 	name: 'NFT Marketplace',
	// 	layout: '/admin',
	// 	path: '/nft-marketplace',
	// 	icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
	// 	component: NFTMarketplace,
	// 	secondary: true
	// },
	{
		name: 'Formula',
		layout: '/admin',
		path: '/formula',
		icon: <Icon as={MdOutlineCalculate} width='20px' height='20px' color='inherit' />,
		component: Formula,
		role: ['tukang-formula']
	},
	{
		name: 'Jadwal 4.0',
		layout: '/admin',
		path: '/jadwal',
		icon: <Icon as={MdDateRange} width='20px' height='20px' color='inherit'/>,
		component: Jadwal,
		role: ['tukang-jadwal']
	},
	{
		name: 'Halaman Informasi',
		layout: '/admin',
		path: '/informasi',
		icon: <Icon as={MdDateRange} width='20px' height='20px' color='inherit'/>,
		component: Information,
		role: ['tukang-grafik']
	},
	{
		name: 'Form Canggih',
		layout: '/admin',
		path: '/canggih',
		icon: <Icon as={MdDateRange} width='20px' height='20px' color='inherit'/>,
		component: canggih,
		role: ['tukang-form-canggih']
	},
	// {
	// 	name: 'Data Tables',
	// 	layout: '/admin',
	// 	icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
	// 	path: '/data-tables',
	// 	component: DataTables
	// },
	// {
	// 	name: 'Profile',
	// 	layout: '/admin',
	// 	path: '/profile',
	// 	icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
	// 	component: Profile
	// },
	{
		name: 'Sign In',
		layout: '/auth',
		path: '/sign-in',
		icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
		component: SignInCentered
	},
	// {
	// 	name: 'RTL Admin',
	// 	layout: '/rtl',
	// 	path: '/rtl-default',
	// 	icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
	// 	component: RTL
	// }
];

export default routes;
