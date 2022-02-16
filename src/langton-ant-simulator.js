/*
Langton’s ant is a two-dimensional automata devised by computer scientist Christopher
Langton. When the ant moves the grid tile it was on, it change’s color with respect to some rules, thereby resulting to some
interesting patterns. You can find more details here:
https://en.wikipedia.org/wiki/Langton's_ant.
*/

class LangtonAntSimulation{
	height=null;
	width=null;
	antPosition=null;
	canvas = null;
	cells = []; // array representing the states of the cells
	direction = 0; // 0 is for ant facing up, 1 for right, 2 for down and 3 for left
	colors = ['white', 'black']; // color can be changed
	pen = null; // the canvas drawing context, null at this point

	constructor(
		canvas,
		height=window.innerHeight,
		width=window.innerWidth,
		antPosition=[parseInt(window.innerHeight/2), parseInt(window.innerWidth/2)]
		){
		/**
		 *  Takes one compulsory argument and 3 optional arguments
		 * @param {HTMLCanvasElement} - compulsory
		 * @param {integer} height - optional argument which is expected to be an integer when given
		 * @param {integer} width  - optional argument which is expected to be an integer when given
		 * @param {integer} [antPosition] - optional argument which is expected to be array of 2 integers items
		 */

		if(canvas){
			this.canvas = canvas;
			this.pen = canvas.getContext('2d'); // the canvas drawing context
		}else{
			// we throw an error if there is no canvas provided for the simulation
			throw('A canvas parameter must be provided during object instantiation');
		}
		this.height = height;
		this.width = width;
		this.antPosition = antPosition;
		this.canvas.style.backgroundColor = this.colors[0]; // filling with default color
		this.canvas.width = this.width;
		this.canvas.height = this.height;

		/* now we initialize the canvas cells. Each pixel is going to be treated as a cell.
		false will be the default value for the color state of a cell, and true for the second color.
		*/
		for(let row=0; row<this.height; row++){
			this.cells[row] = []; // initializing an empty array for that row
			for(let col=0; col<this.width; col++){
				this.cells[row][col] = false; // for default color
			}
		}

	}

	flipCell(){
		/**
		 * flips the current cell position of the ant.
		 * Takes no parameter.
		 * return value is the state at that time
		*/
		let state = !this.cells[this.antPosition[0]][this.antPosition[1]];
		this.cells[this.antPosition[0]][this.antPosition[1]] = state; // state now flipped
		// next we change the color after the flip
		if(state){
			// meaning that the color state has value true
			this.pen.fillStyle = this.colors[1]; // the second color
		}else{
			// meaning that the color state has value false
			this.pen.fillStyle = this.colors[0]; // the first color
		}
		this.pen.fillRect(this.antPosition[1], this.antPosition[0], 1, 1); //filling the particular pixel, flipping the color
		return !state// returning that previous color state
	}

	turnClockwise(){
		/**
		 * changes the direction of the ant 90 degrees clockwise
		 * takes no parameter and returns null
		*/
		this.direction = (this.direction + 1) % 4
	}

	turnAntiClockwise(){
		/**
		 * changes the direction of the ant 90 degrees anti-clockwise
		 * takes no parameter and returns null
		*/
		this.direction = ((this.direction - 1) + 4) % 4
	}

	moveForward(){
		/**
		 * moves the ant's postion forward
		 * takes no parameter and returns null
		*/
		switch(this.direction){
			case 0:
				// meaning that ant is facing up
				this.antPosition[0] = ((this.antPosition[0] - 1) + this.height) % this.height;
				break;
			case 1:
				// meaning that ant is facing right
				this.antPosition[1] = (this.antPosition[1] + 1) % this.width;
				break;
			case 2:
				// meaning that ant is facing down
				this.antPosition[0] = (this.antPosition[0] + 1) % this.height;
				break;
			case 3:
				// meaning that ant is facing left
				this.antPosition[1] = ((this.antPosition[1] - 1) + this.width) % this.width;
				break;
		}
	}

	draw(){
		/**
		 * draws the state of the cell for one ant movement
		 * takes no argument and returns null
		*/
		// the first thing we need to do is flip the color of the current cell, then based on the current state we perform some turns
		// with respect to the rules
		let currentState = this.flipCell();
		if(currentState){
			// meaning that it is not the default color
			this.turnClockwise();
		}else{
			// meaning that it is the default color
			this.turnAntiClockwise();
		}
		// finally, we move forward
		this.moveForward();

	}

	iterate(n, start=0, stop=null){
		/**
		 * draws the cell colors after n iterations or stops when the start value is equal to stop value
		 * takes 1 compulsory argument and 2 optional arguments.
		 * @param {integer} n - an integer value specifying the maximum number of iteration
		 * @param {integer} start - an optional integer parameter specifying the starting value, helpful in tracking the total number of iterations
		 * @param {integer} start - an optional integer parameter specifying the stoping value, workds together with start
		*/
		for(let i=0; i<n; i++){
			if((stop !== null && stop > start) || stop==null){
				this.draw();
				start++;
			}else{
				break;
			}
		}
		return start// number of iterations

	}
	simulate(speed, n=Infinity){
		/**
		 * makes speed moves per animation frame until number of moves == n
		 * takes 1 compulsory argument and 1 optional argument
		 * @param {integer} speed - specifying the number of iterations per frame
		 * @param {integer} n - optional argument specifying the total number of iterations that should be done (total number of moves)
		*/
		let self = this;
		let counter = 0
		function frames(){
			counter = self.iterate(speed, counter, n);
			window.requestAnimationFrame(frames);
		}
		frames();
	}

}
export default LangtonAntSimulation; // exporting the module for use