import StarWarsLogo from "../assets/img/starwars-logo.png";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";

export const Navbar = () => {

	const {store, dispatch} =useGlobalReducer()

	const [favsList, setFavsList] = useState(store.favourites)

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
							Favorites: <span className="bg-secondary border px-2">{store.favourites.length}</span>
						</button>

						<ul className="dropdown-menu">
							{favsList.map((fav) => {
								return (
									<li>{fav}</li>
								)
							})}
						</ul>
						
					</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};