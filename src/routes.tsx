import { Icon } from '@chakra-ui/react';
import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart, MdOutlineCalculate, MdDateRange, MdAccountTree } from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Formula from 'views/admin/formula';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';
import Jadwal from 'views/admin/jadwal'
import Table40 from 'views/admin/table4.0'

// Auth Imports
import SignInCentered from 'views/auth/signIn';
import Information from 'views/admin/information';
import Dashboard from 'views/admin/dashboard';
import canggih from 'views/admin/canggih';
import CreateCanggih from 'views/admin/canggih/components/CreateCanggih';
import SilsilahKeluarga from 'views/admin/silsilah-keluarga';

const routes = [
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
		name: 'Table 4.0',
		layout: '/admin',
		path: '/table',
		icon: <Icon as={MdDateRange} width='20px' height='20px' color='inherit'/>,
		component: Table40,
		role: ['tukang-tabel']
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
		path: '/canggih/tambah',
		icon: <Icon as={MdDateRange} width='20px' height='20px' color='inherit'/>,
		component: CreateCanggih,
		show: false,
		role: ['tukang-form-canggih']
	},
	{
		name: 'Form Canggih',
		layout: '/admin',
		path: '/canggih',
		icon: <Icon as={MdDateRange} width='20px' height='20px' color='inherit'/>,
		component: canggih,
		role: ['tukang-form-canggih']
	},
	{
		name: 'Silsilah Keluarga',
		layout: '/admin',
		path: '/silsilah-keluarga',
		icon: <Icon as={MdAccountTree} width='20px' height='20px' color='inherit'/>,
		component: SilsilahKeluarga,
		role: ['tukang-keluarga']
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
