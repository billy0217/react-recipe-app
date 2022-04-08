import React, { useEffect, useState } from "react";
import {Wrapper, Card, Gradient } from "./Styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const Veggie = () => {
	const [veggie, setveggie] = useState([]);

	useEffect( () => {
		getVeggie();
	},[]);

	const getVeggie = async () => {
		
		const check = localStorage.getItem('veggie');

		if(check){
			setveggie(JSON.parse(check));
		}else{

			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
			);
			const data = await api.json();
			localStorage.setItem('veggie', JSON.stringify(data.recipes));
			setveggie(data.recipes);
		}
	}
	return(
		<div>
			<Wrapper>
				<h3>Our Vegetarian Picks</h3>
				<Splide options={{ 
					perPage: 3,
					arrows: false,
					pagination: false,
					drag: 'free',
					gap: '5rem'
				}}>
					{
						veggie.map(recipe => {
							return (
								<SplideSlide key={recipe.id}>
									
									<Card>
										<Link to={'/recipe/'+ recipe.id}>
											<p>{recipe.title}</p>
											<img src={recipe.image} alt={recipe.title} />
											<Gradient />
										</Link>
									</Card>

								</SplideSlide>
							);
						})
					}	
				</Splide>
			</Wrapper>
		</div>
	)
}

export default Veggie;