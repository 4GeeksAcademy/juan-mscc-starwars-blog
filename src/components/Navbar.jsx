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
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type='button' data-bs-toggle="dropdown" aria-expanded="false">
							Favorites: <span className="bg-secondary border px-2">{store.favourites.length}</span>
						</button>

						<ul className="dropdown-menu">
							{store.favourites.length == 0 ? (<span>empty</span>) : store.favourites.map((fav) => {
								return (
											<li className='d-flex justify-content-between px-2' key={fav.name}>
												<Link to={'/' + fav.endpoint + '/' + fav.id}><span>{fav.name}</span></Link>

												<i className="fa-solid fa-trash" onClick={() => dispatch({type: 'remove_favourite', payload: {name: fav.name} })}></i>
											</li>									

								)
							})}
						</ul>
						
					</div>
					
				</div>
			</div>
		</nav>
	);
};