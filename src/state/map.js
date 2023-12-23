import { mapTypes } from "../constants/mapTypes";

const generateRoomParams = () => {
  const row = Math.floor(Math.random() * 16);
  const column = Math.floor(Math.random() * 32);
  const width = 3 + Math.floor(Math.random() * 5);
  const height = 3 + Math.floor(Math.random() * 5);
  return [row, column, width, height];
};

const checkRoomParams = (map, row, column, width, height) => {
  for (let i = 0; i < height; ++i)
    if (map[row + i].slice(column, column + width + 2).includes(mapTypes.empty))
      return false;
  return true;
};

const makeHalls = (map) => {
  const verticalHalls = 4 + Math.round(Math.random());
  const horizontalHalls = 3 + Math.round(Math.random());
  let stepY = map.length / horizontalHalls;
  for (let i = 0; i < map.length; i += stepY) {
    let pos = Math.floor(Math.random() * stepY);
    for (let j = 0; j < map[0].length; ++j) map[i + pos][j] = mapTypes.empty;
  }

  let stepX = map[0].length / verticalHalls;
  for (let i = 0; i < map[0].length; i += stepX) {
    let pos = Math.floor(Math.random() * stepX);
    for (let j = 0; j < map.length; ++j) map[j][i + pos] = mapTypes.empty;
  }
};

const makeRooms = (map) => {
  const numberOfRooms = 5 + Math.round(Math.random() * 5);
  let row, column, width, height;
  for (let i = 0; i < numberOfRooms; ++i) {
    while (true) {
      [row, column, width, height] = generateRoomParams();
      if (checkRoomParams(map, row, column, width, height)) break;
    }
    for (let j = 0; j < height; ++j)
      for (let k = 0; k < width; ++k) map[row + j][column + k] = mapTypes.empty;

    for (let j = 0; j < 2; ++j) {
      if (row - j - 1 >= 0)
        map[row - j - 1][column + Math.floor(width / 2)] = mapTypes.empty;
      if (row + height + j < map.length)
        map[row + height + j][column + Math.floor(width / 2)] = mapTypes.empty;
      if (column - j - 1 >= 0)
        map[row + Math.floor(height / 2)][column - j - 1] = mapTypes.empty;
      if (column + width + j < map[0].length)
        map[row + Math.floor(height / 2)][column + width + j] = mapTypes.empty;
    }
  }
};

const generateMap = () => {
  const map = [];
  for (let i = 0; i < 24; ++i) {
    let row = [];
    for (let j = 0; j < 40; ++j) row.push(mapTypes.wall);
    map.push(row);
  }
  makeRooms(map);
  makeHalls(map);
  return map;
};

export const map = generateMap();
