import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'


const Recipe = () => {
	let params = useParams();
	const [details, setDetails] = useState([]);
	const [activeTab, setActiveTab] = useState("instructions");

	
	const featchDetails = async () => {

		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
		)
		const detailData = await data.json();
		console.log(detailData)
		setDetails(detailData);
	}

	useEffect(()=>{
		featchDetails();
	},[params.name]);

	return (
		<DetailWrapper>
			<div>
				<h1>{details.title}</h1>
				<img src={details.image} alt="" />
			</div>
			<Info>
				<Button 
					className={activeTab === 'instructions' ? 'active': ""} 
					onClick={()=>setActiveTab('instructions')}
				>
						Instructions
				</Button>
				<Button 
					className={activeTab === 'ingredients' ? 'active' : ""}
					onClick={()=>setActiveTab('ingredients')}
				>
						Ingredients
				</Button>
				{ activeTab === 'instructions' && (
					<div>
						<div dangerouslySetInnerHTML={{ __html: details.summary}}></div>
						<div dangerouslySetInnerHTML={{ __html: details.instructions}}></div>
					</div>
				)}
				{ activeTab === 'ingredients' && (
					<ul>
						{details.extendedIngredients?.map((ingredient)=>(
							<li key={ingredient.id}>{ingredient.origianl}</li>
						))}
					</ul>
				)}
				
			</Info>
			
		</DetailWrapper>
	)
}

const DetailWrapper = styled.div `
	margin-top: 5rem;
	margin-bottom: 5rem;
	display: flex;
	.active {
		background: linear-gradient(35deg, #494949,#313131);
		color: #fff;
	}
	h1,
	h2 {
		margin-bottom: 2rem;
	}
	ul {
		margin-top: 2rem;
	}
	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
`;

const Button = styled.button `
	padding: 1rem 2rem;
	color: #313131;
	background-color: #fff;
	border: 2px solid #000;
	margin-right: 2rem;
	font-weight: 600;
`;

const Info = styled.div `
	margin-left: 5rem;
`;

export default Recipe