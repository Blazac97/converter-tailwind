import { IUnit, Unit } from "./units"
export enum Category {
  length = "length",
  volume = "volume",
  mass = "mass",
  time = "time"
}


export interface ICategory {
  label: Category
  units: IUnit[]

}

export const categories: ICategory[] = [
  {
    label: Category.length,
    units: [
      {
        label: Unit.mm,
        coef: 0.001,
        fullLabel: "Миллиметры"
      },
      {
        label: Unit.cm,
        coef: 0.01,
        fullLabel: "Сантиметры"
      },
      {
        label: Unit.dm,
        coef: 0.1,
        fullLabel: "Дециметры"
      },
      {
        label: Unit.m,
        coef: 1,
        fullLabel: "Метры"
      },
      {
        label: Unit.km,
        coef: 1000,
        fullLabel: "Километры"
      }
    ]
  }
]

