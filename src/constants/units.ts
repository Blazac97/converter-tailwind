export interface IUnit {
  fullLabel: string
  coef: number // Отношение к СИ
  label: Unit
}
export enum Unit {
  // ===============================Lenght
  mm = "mm",
  cm = "cm",
  in = "in",
  dm = "dm",
  ft = "ft",
  yd = "yd",
  m = "m",
  km = "km",
  // =============================Time
  millisecond = "milliseconds",
  second="seconds",
  minute="minutes",
  hour="hours",
  day="days",
  week="weeks",
  month="months",
  year="years",
  century="centuries",
  // ============================Mass
  milligram="mg",
  gram="g",
  kilogram="kg",
  tonne="t",
  megatone="Mt",
  pound="lb",
  ounce="oz",
  // ============================Volume
  mmvolume="millimeters",
  ml="milliliters",
  floz="oz",
  centimetersvolume="centimeters",
  liters="liters",
  aGalone="aGalone",
  bGalone="bGalone",
  aPint="aPint",
  bPint="bPint",
  barrel="barrel",
}



