import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Card } from "../components/Card.jsx";
import CardList from "../components/CardList.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container text-center mt-5">
			<CardList 
				title="Characters"
				endpoint="people"
				fields={[
					{ label: "Gender", key:'gender' },
					{ label: "Eye Color", key:'eye_color' },
					{ label: "Hair Color", key:'hair_color' }
				]}
			/>
			<CardList 
				title="Locations"
				endpoint="planets"
				fields={[
					{ label: "Population", key:'population' },
					{ label: "Terrain", key:'terrain' },
				]}
			/>
			<CardList 
				title="Vehicles"
				endpoint="starships"
				fields={[
					{ label: "Crew", key:'crew' },
					{ label: "Passengers", key:'passengers' },
				]}
			/>
		</div>
	);
}; 