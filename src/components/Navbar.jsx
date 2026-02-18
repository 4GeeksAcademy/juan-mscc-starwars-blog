import StarWarsLogo from "../assets/img/starwars-logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src={StarWarsLogo} alt="" style={{height: '50px', width: 'auto'}} />
					{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type='button' data-bs-toggle="dropdown" aria-expanded="false">
							Favorites: <span className="bg-secondary border px-2">0</span>
						</button>

						<ul className="dropdown-menu">
							<li>Action</li>
							<li>Another action</li>
							<li>Something else here</li>
						</ul>
						
					</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};