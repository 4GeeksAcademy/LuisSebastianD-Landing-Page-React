import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let cardContent = [
	{
		image: "https://images.igdb.com/igdb/image/upload/t_720p/sxcn4siijskumtcdr44e.webp",
		title: "Slay the spire",
		description: "Básicamente un juego de cartas por turnos, subes por una torre encontrando enemigos en cada piso a los que debes derrotar."
	},
	{
		image: "https://images.igdb.com/igdb/image/upload/t_720p/utiqzpxj43lughwr2wbi.webp",
		title: "Control",
		description: "Es un juego de disparos con una historia interesante y cosas complejas como un edificio que cambia su forma u objetos que alteran el espacio.",
	},
	{
		image: "https://images.igdb.com/igdb/image/upload/t_720p/qseegzssgetrybgbplrv.webp",
		title: "God of war",
		description: "Un juego de aventura ambientado en la mitología nórdica de la que se puede aprender mucho. Tiene bastante acción y efectos especiales.",
	},
	{
		image: "https://images.igdb.com/igdb/image/upload/t_720p/scp634.webp",
		title: "Crow Country",
		description: "Es un juego de acción y puzzles con un estilo retro. Eres una detective investigando dentro de un parque de diversiones. La historia es intrigante.",
	}
]

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="row">
					<Hero />
				</div>
				<div className="row">
					{cardContent.map((card) => {
						return <Card image={card.image} title={card.title} description={card.description} />;
					})}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;