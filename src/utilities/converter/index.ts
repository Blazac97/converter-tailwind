import { IUnit } from "constants/units";
export interface IConvertResult {
  unit: IUnit
  result: number
}
const normalizeFloat = (value: string) => Number((parseFloat(value).toPrecision(12)));


export const convert = (value: number, unit: IUnit, units: IUnit[], normalize: boolean = true): IConvertResult[] => {
  // Переводим число в СИ с помощью коэффициента из Unit.

  const valueConverted = value * unit.coef



  // Итерируемся по всем юнитам и делим полученное число на первом шаге на коэффициент каждого юнита

  const result: IConvertResult[] = units.map((currentUnit) => ({ unit: currentUnit, result: normalizeFloat((valueConverted / currentUnit.coef).toString()) }))
  return result
}

