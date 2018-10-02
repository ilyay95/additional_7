module.exports = function solveSudoku(matrix) {
  // your solution
  let possibleValues = [1,2,3,4,5,6,7,8,9];
  
  for (let row = 0; row < 9; row++) {
  	for(let col = 0; col < 9; col++){
  		if(matrix[row][col] === 0){

  			let gridRow = Math.floor(row / 3) *3;  			
  			let gridCol = Math.floor(col / 3) *3;
        let grid = [];
        
  			for (let i = gridRow; i < (gridRow + 3); i++) {
  				for (let j = gridCol; j < (gridCol + 3); j++) {
  					grid.push(matrix[i][j]);
  				}
  			}
  			 let gridRowColValues = grid;
         for (let i = 0; i < matrix.length; i++) {
          gridRowColValues.push(matrix[row][i]);
          gridRowColValues.push(matrix[i][col]);
         }
         
        let res = possibleValues.filter(f => !gridRowColValues.includes(f));
        let result;

        for (let i = 0; i < res.length; i++) {
          matrix[row][col] = res[i];
          result = solveSudoku(matrix);

          if(result != false){
            return result}
             
        } 
        matrix[row][col] = 0;
        return false;
      }
  	}
  }
  return matrix;
}
