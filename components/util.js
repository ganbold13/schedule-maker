import dayjs from "dayjs";

export function getMonth() {
    const counter = 0;
  const dayMatrix = new Array(16).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
        return dayjs(new Date(2015, 11, 0))
    });
  });
  return dayMatrix;
}
