import LangtonAntSimulation from '../../src/langton-ant-simulator.js';

window.onload = function(){
	let canvas = document.getElementById('canvas');
	let simulator = new LangtonAntSimulation(canvas);// instantiation
	simulator.simulate(200, Infinity); // simulating infinite ant movements at speed 200
}