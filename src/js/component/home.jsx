import { number } from "prop-types";
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const HomeCSS = {
	background: "#3b302a",
	color: "black",
	fontWeight: "bold",
	border: "none",
	display: "flex",
	marginTop: "200px",
	justifyContent: "center",
	alignItems: "center",
	height: "120px",
	//
	marginX: "200px",
};

const CardCSS={
	background:"black",
	color: "white",
	width: "80px",
    height: "100px",
	fontSize: "40px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	margin: "5px",
	borderRadius: "20%",
}

const BotonCSS={
	background: "#1e90ff",
	justifyContent: "center",
	alignItems: "center",
	display: "flex",
	color: "white",
	marginLeft: "1000px",
	border: "none",
	width: "80px",
    height: "30px",
	marginTop: "10px",
}

const Home = ({segundos}) => {
	//convierto en String
	let string= segundos.toString()
	//lo separo en unidades
	let card1=string[string.length-1];
	let card2=string[string.length-2];
	let card3=string[string.length-3];
	let card4=string[string.length-4];
	let card5=string[string.length-5];
	let card6=string[string.length-6];


	return (
	<div ClasName="container-fluid" style={HomeCSS}>
		<div style={CardCSS}><i class="far fa-clock"></i></div>
		<div style={CardCSS}>{card6==undefined?"0":card6}</div>
		<div style={CardCSS}>{card5==undefined?"0":card5}</div>
		<div style={CardCSS}>{card4==undefined?"0":card4}</div>
		<div style={CardCSS}>{card3==undefined?"0":card3}</div>
		<div style={CardCSS}>{card2==undefined?"0":card2}</div>
		<div style={CardCSS}>{card1==undefined?"0":card1}</div>
		</div>);
};

export default Home;
