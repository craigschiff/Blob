
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
  search(i, j, prevDir){
    if (j<this.bounds['right'] && j>this.bounds['left']) return
    switch (prevDir) {
      case "left":
        this.searchPrevDirLeft(i, j)
        break;
      case "right":
        this.searchPrevDirRight(i, j)
        break;
      case "down":
        this.searchPrevDirDown(i, j)
        break;
      case "up":
        this.searchPrevDirUp(i, j)
        break;
      default:
        this.searchPrevDirLeft(i, j)
    }
  }
  searchPrevDirLeft(i, j){
    if (this.checkCell(i, j-1)){
      this.search(i, j-1, "left")
    } else if (this.checkCell(i+1, j)){
        this.search(i+1, j, "down")
      } else if (this.checkCell(i-1, j)){
        this.search(i-1, j, "up")
      }
  }
  searchPrevDirRight(i, j){
    if (this.checkCell(i+1, j)){
      this.search(i+1, j, "down")
    } else if (this.checkCell(i, j+1)){
      this.search(i, j+1, "right")
    } else if (this.checkCell(i-1, j)){
      this.search(i-1, j, "up")
      }
  }
  searchPrevDirDown(i, j){
    if (this.checkCell(i, j-1)){
      this.search(i, j-1, "left")
    } else if (this.checkCell(i+1, j)){
        this.search(i+1, j, "down")
      } else if (this.checkCell(i, j+1)){
        this.checkCell(i, j+1)
        this.search(i, j+1, "right")
      }
  }
  searchPrevDirUp(i, j){
    if (this.checkCell(i, j+1)){
      this.search(i, j+1, "right")
    } else if (this.checkCell(i-1, j)){
        this.search(i-1, j, "up")
      } else if (this.checkCell(i, j-1)){
        this.search(i, j-1, "left")
      }
  }

  checkCell(i, j){
    if (this.visited[`${i}${j}`] == true) return false
    if (i < 0 || i > 9 || j < 0 || j > 9) return false
    // console.log(i, j)
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
