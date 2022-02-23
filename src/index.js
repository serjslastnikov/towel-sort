// You should implement your task here.

module.exports = function towelSort (matrix) {

    resultMatrix = [];
    let i = 1;
    if (!matrix) {
    } else {
    matrix.forEach(function(item) {
      if (i % 2 !== 0) {
        for (k = 0; k < item.length; k++) {
          resultMatrix.push(item[k]);
        }
      i++;
      } else {
        for (k = item.length - 1; k > -1; k--) {
          resultMatrix.push(item[k]);
        }
      i++;
      }
    })
    } 
    return resultMatrix;
  }
