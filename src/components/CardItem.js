import React from "react";

const CardItem = (props) =>{
	
	return (
		<div>
			<p>
				{props.recipe.title}
			</p>
		</div>
	);
}

export default CardItem;