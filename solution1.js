class Solution1 {
  constructor(matrix){
    this.matrix = matrix
    this.bounds = {left: 10, right: -1, top: 10, bottom: -1}
    this.cellCount = 0
    this.visited = {}
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
    // this.cellCount ++
    // this.visited[i.toString()+j.toString()] = 1
    if (j < this.bounds["left"]){
      this.bounds["left"] = j
      // this.boundCoordinates["left"] = (i, j)
    }
    if (j > this.bounds["right"]){
      this.bounds["right"] = j
      // this.boundCoordinates[right] = (i, j)
    }
    if (i > this.bounds["bottom"]){
      this.bounds["bottom"] = i
      // this.boundCoordinates[bottom] = (i, j)
    }
    if (i < this.bounds["top"]){
      this.bounds["top"] = i
      // this.boundCoordinates[top] = (i, j)
    }
  }

    // next - start at "left"most. check down, "left". never go right. last check is rest of "left"Bound column. if something further "left" would have to pass it. then follow it.
    // take in current '1' cell as arg (this.boundCoordinates["left"])
    // calls other methods. start with going down until find 1
    // "left" goes down and "left". right down and right. bottom across and down.

    // best way - traverse outside of matrix. check "left", then check down, then check right, then check up (but depending on where coming from)
    // second place -- checking 0's? or down across from "left"?
  searchBottom(){
    let i = this.bounds["bottom"] + 1
    if (i > 9) return
    for (let j = 0; j<this.matrix[0].length; j ++){
      if (this.checkCell(i, j)){
        this.saveCoordinates(i, j)
        this.handleBottomOne(i, j)
        return
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
    } else {
      this.searchBottom()
    }

  }

  searchLeft(){
    let j = this.bounds["left"] - 1
    if (j < 0) return
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
    } else {
      this.searchLeft()
    }
  }
  searchRight(){
    let j = this.bounds["right"] + 1
    if (j > 9) return
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
    } else {
      this.searchRight()
    }
  }

  checkCell(i, j){
    if (this.visited[i.toString()+j.toString()] == true) return false
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

module.exports = Solution1
