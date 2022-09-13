function createBoard(rows, columns) {

  return Array(rows).fill(0).map((_, row) => {
    return Array(columns).fill(0).map((_, column) => {
      return {
        row,
        column,
        opened: false,
        flagged: false,
        mined: false,
        exploded: false, nearMines: 0
      }
    })
  })
}

function spreadMines(board, minesAmount) {

  const rows = board.length
  const columns = board[0].length
  let minesplanted = 0
  while (minesAmount > minesplanted) {
    const rowSelected = parseInt(Math.random() * rows, 10)
    const colSelected = parseInt(Math.random() * columns, 10)

    if (!board[rowSelected][colSelected].mined) {
      board[rowSelected][colSelected].mined = true
      minesplanted++
    }
  }
}

function createMinedBoard(rows, columns, minesAmount) {
  const board = createBoard(rows, columns)
  spreadMines(board, minesAmount)
  return board
}
export { createMinedBoard }