import { Link, useNavigate } from "react-router-dom"

const NavBar = () => {
	const navigate = useNavigate();
	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
		else {
			navigate('/')
		}
	};

	return (
		<div className="navbar shadow-md sticky top-0 z-50 bg-transparent backdrop-blur-md">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
						<li><Link>Book A Stot For Tution</Link></li>
						<li><Link to={'/card'}>See All Available Posts</Link></li>
						<li>
							<Link>Parent</Link>
							<ul className="p-2">
								<li><Link>Submenu 1</Link></li>
								<li><Link>Submenu 2</Link></li>
							</ul>
						</li>
					</ul>
				</div>
				<Link className="btn btn-ghost text-xl" to={'/'}>daisyUI</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li><Link to={'/tution-slot'}>Book A Stot For Tution</Link></li>
					<li><Link to={'/card'}>See All Available Posts</Link></li>
				</ul>
				<div className="dropdown dropdown-bottom dropdown-center">
					<div tabIndex={0} role="button" className="btn m-1">More ⬇️</div>
					<ul
						tabIndex={0}
						className="dropdown-content menu bg-base-100 border border-base-300 rounded-box z-10 w-52 p-2 shadow-md"
					>
						<li><button onClick={()=>scrollToSection("bookings")}>Active Tutoring Sessions</button></li>
						<li><button onClick={()=>scrollToSection("tuition-history")}>Learning History</button></li>
						<li><button onClick={()=>scrollToSection("earning-history")}>My Teaching Earnings</button></li>
						<li><button onClick={()=>scrollToSection("pending-requests")}>Pending Class Requests</button></li>
						<li><Link to={'/premium-plans'}>Go Premium</Link></li>
					</ul>
				</div>
			</div>

			<div className="navbar-end">
				<div className="tooltip tooltip-left cursor-pointer" data-tip="checkout your profile">
					<div className="avatar">
						<div className="max-w-12 rounded-full" onClick={() => navigate('/profile')}>
							<img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" alt="avatar" />
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default NavBar