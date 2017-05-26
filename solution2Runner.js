var Solution2 = require('./solution2.js')

let matrixArr = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

let matrix2 = [
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]


const findBoundaries = (matrixArr) => {
  let matrix = new Solution2(matrixArr)
  matrix.findTop(0, 0)
  matrix.searchLeft()
  matrix.searchBottom()
  matrix.searchRight()
  matrix.outputResults()
}

findBoundaries(matrixArr)
