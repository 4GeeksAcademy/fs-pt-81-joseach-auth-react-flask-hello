import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";


export const Home = () => {

  

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			
			<Link to ="/register">Registro</Link>
	
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>

	);
}; 