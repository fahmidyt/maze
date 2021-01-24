// Fungsi untuk input/output console
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

// Fungsi write dalam maze
function insideMaze(sizeMaze = 0, isWayLeft = true, currentRow = 0) {
	var col = 0;
	while (col < sizeMaze - 2) {
		if (!((currentRow + 1) % 2 == 0)) {
			if (isWayLeft && col == 0) {
				readline.write(' ');
			} else if (!isWayLeft && col == sizeMaze - 3) {
				readline.write(' ');
			} else {
				readline.write('@');
			}
		} else readline.write(' ');

		col++;
	}
}

// Fungsi maze utama
function maze(sizeMaze = 0) {
	var left = true;
	var row = 0;

	while (row < sizeMaze) {
		readline.write('@');
		insideMaze(sizeMaze, left, row);
		readline.write('@\n');

		if ((row + 1) % 2 == 0) {
			left = !left;
		}

		row++;
	}
}

function main() {
	readline.question('Size of Maze (S): ', (size) => {
		maze(parseInt(size));

		readline.close();
	});
}

// Run MAIN function
main();
