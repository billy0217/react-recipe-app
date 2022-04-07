import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {

	const [input, setInput] = useState("");
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate('/search/'+ input);
		
	};

	return (
		<FormStyle onSubmit={submitHandler}>
			
			<div>
				<FaSearch></FaSearch>
				<input onChange={ (e)=> setInput(e.target.value) } type="text" value={input}/>
			</div>
		</FormStyle>
	)
}

const FormStyle = styled.form `
	margin: 2rem auto;
	max-width: 600px;
	div {
		position: relative;
		width: 100%;
	}
	input {
		border: none;
		background-color: #7a7979;
		font-size: 1rem;
		padding: 1rem 2.5rem;
		border-radius: 20px;
		width: 100%;
		color: #fff;
	}
	svg {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(100%,-50%);
		color: #fff;
	}
`;

export default Search