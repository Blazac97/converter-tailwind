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
        fullLabel: "Millimeters"
      },
      {
        label: Unit.cm,
        coef: 0.01,
        fullLabel: "Centimeters"
      },
      {
        label: Unit.in,
        coef: 0.0254,
        fullLabel: "Inches"
      },
      {
        label: Unit.dm,
        coef: 0.1,
        fullLabel: "Decimeters"
      },
      {
        label: Unit.ft,
        coef: 0.3048,
        fullLabel: "Foots"
      },
      {
        label: Unit.yd,
        coef: 0.9144,
        fullLabel: "Yards"
      },
      {
        label: Unit.m,
        coef: 1,
        fullLabel: "Meters"
      },
      {
        label: Unit.km,
        coef: 1000,
        fullLabel: "Kilometers"
      }
    ]
  },
  {
    label: Category.time,
    units: [
      {
        label: Unit.millisecond,
        coef: 0.001,
        fullLabel: "Milliseconds"
      },
      {
        label: Unit.second,
        coef: 1,
        fullLabel: "Seconds"
      },
      {
        label: Unit.minute,
        coef: 60,
        fullLabel: "Minutes"
      },
      {
        label: Unit.hour,
        coef: 3600,
        fullLabel: "Hours"
      },
      {
        label: Unit.day,
        coef: 86400,
        fullLabel: "Days"
      },
      {
        label: Unit.week,
        coef: 604800,
        fullLabel: "Weeks"
      },
      {
        label: Unit.month,
        coef: 2419200,
        fullLabel: "Months"
      },
      {
        label: Unit.year,
        coef: 29030400,
        fullLabel: "Years"
      },
      {
        label: Unit.century,
        coef: 2903040000,
        fullLabel: "Centuries"
      }
    ]
  },
  {
    label: Category.mass,
    units: [
      {
        label: Unit.milligram,
        coef: 0.000001,
        fullLabel: "Milligrams"
      },
      {
        label: Unit.gram,
        coef: 0.001,
        fullLabel: "Grams"
      },
      {
        label: Unit.ounce,
        coef: 0.02835,
        fullLabel: "Ounces"
      },
      {
        label: Unit.pound,
        coef: 0.45359,
        fullLabel: "Pounds"
      },
      {
        label: Unit.kilogram,
        coef: 1,
        fullLabel: "Kilograms"
      },
      {
        label: Unit.tonne,
        coef: 1000,
        fullLabel: "Tonnes"
      },
      {
        label: Unit.megatone,
        coef: 1000000,
        fullLabel: "Megatones"
      }
    ]
  },
  {
    label: Category.volume,
    units: [
      {
        label: Unit.ml,
        coef: 0.000001,
        fullLabel: "Milliliters"
      },
      {
        label: Unit.mmvolume,
        coef: 0.000000001,
        fullLabel: "Millimeters"
      },
      {
        label: Unit.centimetersvolume,
        coef: 0.000001,
        fullLabel: "Centimeters"
      },
      {
        label: Unit.m,
        coef: 1,
        fullLabel: "Meters"
      },
      {
        label: Unit.liters,
        coef: 0.001,
        fullLabel: "Liters"
      },
      {
        label: Unit.aGalone,
        coef: 0.0037854118,
        fullLabel: "aGallones"
      },
      {
        label: Unit.bGalone,
        coef: 0.00454609,
        fullLabel: "bGallones"
      },
      {
        label: Unit.aPint,
        coef: 0.0004731765,
        fullLabel: "aPints"
      },
      {
        label: Unit.bPint,
        coef: 0.0005682613,
        fullLabel: "bPints"
      },  {
        label: Unit.barrel,
        coef: 0.1192404712,
        fullLabel: "Barrels"
      },  {
        label: Unit.floz,
        coef: 0.0000295735,
        fullLabel: "Fluid ounces"
      }
    ]
  }
]

