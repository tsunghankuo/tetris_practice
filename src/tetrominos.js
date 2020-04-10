export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0'},
  I: {
      shape: [
              [0, 'I', 0, 0],
              [0, 'I', 0, 0],
              [0, 'I', 0, 0],
              [0, 'I', 0, 0]
            ],
      color: '108,92,231',
  },
  J: {
      shape: [
              [0, 'J', 0],
              [0, 'J', 0],
              ['J', 'J', 0]
            ],
      color: '162, 155, 254',
  },
  L: {
      shape: [
              [0, 'L', 0],
              [0, 'L', 0],
              [0, 'L', 'L']
            ],
      color: '116, 185, 255',
  },
  O: {
      shape: [
              ['O', 'O'],
              ['O','O'],
            ],
      color: '85, 239, 196',
  },
  S: {
      shape: [
              [0, 'S', 'S'],
              ['S', 'S', 0],
              [0, 0, 0]
            ],
      color: '253, 203, 110',
  },
  T: {
      shape: [
              [0, 0, 0],
              ['T', 'T', 'T'],
              [0, 'T', 0]
            ],
      color: '225, 112, 85',
  },
  Z: {
      shape: [
              ['Z', 'Z', 0],
              [0, 'Z', 'Z'],
              [0, 0, 0]
            ],
      color: '214, 48, 49',
  },
}

export const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ';
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
}
