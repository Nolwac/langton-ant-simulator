import LangtonAntSimulation from '../../src/langton-ant-simulator.js';

window.onload = function(){
	let canvas = document.getElementById('canvas');
	let simulator = new LangtonAntSimulation(canvas);// instantiation
	simulator.simulate(200, 11000); // simulating 11000 ant movements at speed 200
}