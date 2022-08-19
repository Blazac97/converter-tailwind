export interface IUnit {
  fullLabel: string
  coef: number // Отношение к СИ
  label: Unit
}
export enum Unit {
  mm = "mm",
  cm = "cm",
  dm = "dm",
  m = "m",
  km = "km",
}



