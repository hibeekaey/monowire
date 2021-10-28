import Application from "./application";

const arithmetic1 = new Application();
const arithmetic2 = new Application();
console.log(
  arithmetic1,
  arithmetic2,
  Application.getAverage(2, 2),
  Application.getAverage(2, 8)
);
