export interface IPoint {
  x: number;
  y: number;
  equals?: (val: number) => boolean;
}