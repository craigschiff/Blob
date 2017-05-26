
class Solution3 {
  constructor(matrix){
    this.matrix = matrix
    this.bounds = {left: 10, right: -1, top: 10, bottom: -1}
    this.cellCount = 0
    this.visited = {}
  }
  findTop(i, j){
    let value = this.checkCell(i, j)
    if (!value && (j < 9)) {
      return this.findTop(i, j+1)
    } else if (!value && j == 9){
      return this.findTop(i+1, 0)
    } else if (i > 9){
      return
    } else if (value){
      this.saveCoordinates(i, j)
      return {i, j}
    }
  }
  saveCoordinates(i, j){
    if (j < this.bounds["left"]){
      this.bounds["left"] = j
    }
    if (j > this.bounds["right"]){
      this.bounds["right"] = j
    }
    if (i > this.bounds["bottom"]){
      this.bounds["bottom"] = i
    }
    if (i < this.bounds["top"]){
      this.bounds["top"] = i
    }
  }
  searchCircleLeft(i, j){
    if (this.checkCell(i, j-1)){
      this.searchCircleLeft(i, j-1)
    } else if (this.checkCell(i+1, j)){
        this.searchCircleLeft(i+1, j)
      } else {
        this.searchCircleBottom(i, j+1)
      }
  }
  searchCircleBottom(i, j){
    if (this.checkCell(i+1, j)){
      this.searchCircleBottom(i+1, j)
    } else if (this.checkCell(i, j+1)){
      this.searchCircleBottom(i, j+1)
    } else {
      this.searchCircleRight(i-1, j)
    }
  }
  searchCircleRight(i, j){
    if (this.checkCell(i, j+1)){
      this.searchCircleRight(i, j+1)
    } else if (this.checkCell(i-1, j)){
      this.searchCircleRight(i-1, j)
    }
  }

  checkCell(i, j){
    if (this.visited[`${i}${j}`] == true) return false
    if (i < 0 || i > 9 || j < 0 || j > 9) return false
    this.cellCount ++
    if (this.matrix[i][j] == 0){
      this.visited[`${i}${j}`] = true
      return false
    } else {
      this.visited[`${i}${j}`] = true
      this.saveCoordinates(i, j)
      return true
    }
  }

  outputResults(){
    let result = "The boundaries are:" + "\n" +
              "Left: " + this.bounds["left"] + "\n" +
              "Right: " + this.bounds["right"] + "\n" +
              "Top: " + this.bounds["top"] + "\n" +
              "Bottom: " + this.bounds["bottom"] + "\n" +
              "Cell Count: " + this.cellCount
    console.log(result)
    return result
  }
}

module.exports = Solution3
