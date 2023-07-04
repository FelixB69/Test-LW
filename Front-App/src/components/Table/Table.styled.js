import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 55px;
	color: #003b58;
	text-align: center;
`;

export const Visualisation = styled.table`
	padding: 30px 20px;
	background-color: #003b58;
	border-radius: 5px;
	min-width: 700px;
	box-shadow: 2px 2px 10px grey;
`;

export const Edition = styled.table`
	padding: 20px;
	background-color: #dfdfdf;
	border-radius: 5px;
	min-width: 800px;
	box-shadow: 2px 2px 10px #dfdfdf;
`;

export const TH = styled.th`
	background-color: #9dcf56;
	border: 1px solid;
	padding: 10px;
`;

export const TD = styled.td`
	background-color: #dfdfdf;
	border: 1px solid #000;
	padding: 9px;
	text-align: center;
`;

export const Slider = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 14px;
`;

export const Button = styled.button`
	margin: 5px 0;
	padding: 8px 0px;
	width: 70px;
	background-color: #9dcf56;
	border-radius: 8px;
	border: 1px solid black;
	font-weight: 600;
	cursor: pointer;

	&:hover {
		background-color: #003b58;
		color: white;
	}
`;
