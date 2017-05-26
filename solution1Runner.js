var Solution1 = require('./solution1.js')

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
  let matrix = new Solution1(matrixArr)
  matrix.findTop(0, 0)
  matrix.searchLeft()
  matrix.searchBottom()
  matrix.searchRight()
  matrix.outputResults()
}

findBoundaries(matrixArr)
