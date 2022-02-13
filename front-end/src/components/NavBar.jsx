import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiCart } from "react-icons/bi";

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
			<div className='container'>
				<div className='d-flex justify-content-between align-items-center w-100'>
					<div className='d-flex'>
						<Link to='/' className='navbar-brand'>
							THE<b className='text-primary'>SNEAKERS</b>
						</Link>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNav'
							aria-controls='navbarNav'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div className='collapse navbar-collapse' id='navbarNav'>
							<ul className='navbar-nav'>
								<li className='nav-item'>
									<NavLink to='/' className='nav-link active'>
										Home
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='/products' className='nav-link'>
										Shop
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<Link to='/cart' className='text-dark'>
						<BiCart size={24} />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
