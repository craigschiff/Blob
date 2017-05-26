class Solution2 {
  constructor(matrix){
    this.matrix = matrix
    this.bounds = {left: 10, right: -1, top: 10, bottom: -1}
    this.cellCount = 0
    this.visited = {}
  }
  search(){
    findTop(0, 0)
    searchLeft()
    searchBottom()
    searchRight()
    outputResults()
  }
  findTop(i, j){
    let value = this.checkCell(i, j)
    if (!value && j < 9) {
      this.findTop(i, j+1)
    } else if (!value && j == 9){
      this.findTop(i+1, 0)
    } else if (i > 9){
      return
    } else if (value == true){
      this.saveCoordinates(i, j)
      return (i, j)
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

  searchBottom(){
    let i = this.bounds["bottom"]
    if (i == 9) return
    for (let j = 0; j<this.matrix[0].length; j ++){
      if (this.checkCell(i, j)){
        this.saveCoordinates(i, j)
        this.handleBottomOne(i, j)
      }
    }
  }
  handleBottomOne(i, j){
    if (this.checkCell(i+1, j)) {
      this.saveCoordinates(i+1, j)
      this.handleBottomOne(i+1, j)
    } else if (this.checkCell(i, j+1)){
      this.saveCoordinates(i, j+1)
      this.handleBottomOne(i, j+1)
    }
  }

  searchLeft(){
    let j = this.bounds["left"]
    if (j == 0) return
    for (let i = 0; i < this.matrix.length; i ++){
      if (this.checkCell(i, j)){
        this.saveCoordinates(i, j)
        this.handleLeftOne(i, j)
      }
    }
  }
  handleLeftOne(i, j){
    if (this.checkCell(i, j-1)) {
      this.saveCoordinates(i, j-1)
      this.handleLeftOne(i, j-1)
    } else if (this.checkCell(i+1, j)){
      this.saveCoordinates(i+1, j)
      this.handleLeftOne(i + 1, j)
    }
  }
  searchRight(){
    let j = this.bounds["right"]
    if (j == 9) return
    for (let i = 9; i >= 0; i --){
      if (this.checkCell(i, j)){
        this.saveCoordinates(i, j)
        this.handleRightOne(i, j)
      }
    }
  }
  handleRightOne(i, j){
    if (this.checkCell(i, j+1)) {
      this.saveCoordinates(i, j+1)
      this.handleRightOne(i, j+1)
    } else if (this.checkCell(i-1, j)){
      this.saveCoordinates(i-1, j)
      this.handleRightOne(i-1, j)
    }
  }

  checkCell(i, j){
    if (this.visited[i.toString() + j.toString()] == true) return false
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

module.exports = Solution2
