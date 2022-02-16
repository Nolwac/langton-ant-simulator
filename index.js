import LangtonAntSimulation from './src/langton-ant-simulator.js';

window.onload = function(){
	let canvas = document.getElementById('canvas');
	let simulator = new LangtonAntSimulation(canvas);// instantiation
	// simulator.antPosition = [200, 200]; // set the initial ant position this way or set it during instantiation alongside other parameters
	// simulator.colors = ['green', 'white']; // to change colors, first value is default color and second value is for color when flipped
	// simulator.direction = 0; // to change initial ant direction
	simulator.simulate(200, Infinity); // simulating infinite ant movements at speed 200
}