import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Category = () => {
	return (
		<List>
			<SLink to={'/cuisine/italian'}>
				<FaPizzaSlice />
				<h4>Italian</h4>
			</SLink>
			<SLink to={'/cuisine/american'}>
				<FaHamburger />
				<h4>American</h4>
			</SLink>
			<SLink to={'/cuisine/thai'}>
				<GiNoodles />
				<h4>Thai</h4>
			</SLink>
			<SLink to={'/cuisine/japanese'}>
				<GiChopsticks />
				<h4>Japanese</h4>
			</SLink>
		</List>
	)
}

const List = styled.div `
	display: flex;
	justify-content: center;
	margin: 2rem 0;
`;

const SLink = styled(NavLink) `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-right: 2rem;
	text-decoration: none;
	background-color: black;
	color: #fff;
	width: 80px;
	height: 80px;
	cursor: pointer;

	h4 {
		color: #fff;
		font-size: 0.8rem;
	}

	svg {
		color: #fff;
		font-size: 1.5rem;
	}

	&:hover,
	&.active {
		background-color: #f27121;
	}
`;

export default Category