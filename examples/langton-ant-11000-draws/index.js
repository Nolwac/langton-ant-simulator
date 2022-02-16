import LangtonAntSimulation from '../../src/langton-ant-simulator.js';

window.onload = function(){
	let canvas = document.getElementById('canvas');
	let simulator = new LangtonAntSimulation(canvas);// instantiation
    simulator.iterate(11000) // drawing the result of 11000 moves
}