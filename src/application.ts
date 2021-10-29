import { sealed, first } from "./decorators";

@sealed
export default class Application {
  constructor() {
    console.log("Hurray");
  }
  /**
   * Returns the average of two numbers.
   *
   * @remarks
   * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The arithmetic mean of `x` and `y`
   *
   * @beta
   */
  @first()
  public static getAverage(x: number, y: number): number {
    return (x + y) / 2.0;
  }
}
