import { boardType, checkWinner } from '../src/components/GameBoard';

describe('check if board has winner', () => {
  test('boardState 1', () => {
    const boardState: boardType = [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ];
    expect(checkWinner(boardState)).toBe(false);
  });
  test('boardState 2', () => {
    const boardState: boardType = [
      [0, 2, 2],
      [2, 0, 2],
      [2, 2, 0],
    ];
    expect(checkWinner(boardState)).toBe(true);
  });
  test('boardState 3', () => {
    const boardState: boardType = [
      [0, 2, 1],
      [2, 1, 2],
      [1, 2, 0],
    ];
    expect(checkWinner(boardState)).toBe(true);
  });
  test('boardState 4', () => {
    const boardState: boardType = [
      [2, 2, 1],
      [2, 2, 1],
      [1, 0, 0],
    ];
    expect(checkWinner(boardState)).toBe(false);
  });
  test('boardState 5', () => {
    const boardState: boardType = [
      [0, 2, 2],
      [2, 0, 2],
      [2, 2, 0],
    ];
    expect(checkWinner(boardState)).toBe(true);
  });
  test('boardState 6', () => {
    const boardState: boardType = [
      [1, 1, 1],
      [2, 2, 2],
      [2, 2, 2],
    ];
    expect(checkWinner(boardState)).toBe(true);
  });
  test('boardState 7', () => {
    const boardState: boardType = [
      [2, 2, 2],
      [1, 1, 1],
      [2, 2, 2],
    ];
    expect(checkWinner(boardState)).toBe(true);
  });
  test('boardState 8', () => {
    const boardState: boardType = [
      [2, 2, 2],
      [2, 2, 2],
      [1, 1, 1],
    ];
    expect(checkWinner(boardState)).toBe(true);
  });
  test('boardState 9', () => {
    const boardState: boardType = [
      [0, 2, 2],
      [0, 2, 2],
      [0, 1, 1],
    ];
    expect(checkWinner(boardState)).toBe(true);
  });
  test('boardState 10', () => {
    const boardState: boardType = [
      [2, 0, 2],
      [2, 0, 2],
      [1, 0, 1],
    ];
    expect(checkWinner(boardState)).toBe(true);
  });
  test('boardState 11', () => {
    const boardState: boardType = [
      [2, 0, 0],
      [2, 2, 0],
      [1, 1, 0],
    ];
    expect(checkWinner(boardState)).toBe(true);
  });
});
