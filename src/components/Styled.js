import styled from 'styled-components';


export const Wrapper = styled.div `
		margin: 4rem 0rem
	`;

export const Card = styled.div `
		min-height: 20rem;
		border-radius: 2rem;
		overflow: hidden;
		position: relative;

		img {
			width: 100%;
			border-radius: 2rem;
			position: absolute;
			left: 0;
			height: 100%;
			object-fit: cover;
		}

		p {
			position: absolute;
			z-index: 10;
			left: 50%;
			bottom: 0;
			transform: translate(-50%, 0%);
			color: #fff;
			text-algin:center;
			font-weight: 600;
			font-size: 1rem;
			height: 40%;
			display: flex;
			justify-content: center;
			align-items: center;

		}
	`;

export const Gradient = styled.div `
		z-index: 3;
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.5));
	`;
