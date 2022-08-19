

import React from "react";
import { IUnit } from "constants/units";
export interface IConverterBarProps {
	onReturnClick: () => any
	onChange: (value: string) => any
	value?: string
	onUnitsChange: (value: IUnit) => any // TODO: Pass IUnit
	unitsValue: IUnit
	units: IUnit[]
	onCalculateClick: () => any
}

export const ConverterBar: React.FC<IConverterBarProps> = ({
	onReturnClick,
	value,
	onChange,
	onUnitsChange,
	onCalculateClick,
	units,
	unitsValue
}) => {
	return (
		<div className=" flex mx-auto mt-4 justify-center h-10">
			<div className="flex">
				<button
					className=" w-24 flex justify-center items-center rounded-l-lg  text-white  bg-indigo-600/90 hover:animate-pulse"
					onClick={onReturnClick}
				>
					{"<RETURN"}
				</button>
			</div>
			<div className="justify-center w-3/4 mx-6">
				<input
					onChange={(e) => onChange(e.target.value)}
					value={value}
					type="number"
					placeholder="Input your number"
					className="form-input  px-4  rounded-lg  text-black text-center hover:border-2 w-full"
				></input>
			</div>
			<div className="flex  text-black mx-4">
				<select
					onChange={(e) => {
						const foundUnit = units.find((unit) => unit.label === e.target.value) as IUnit
						onUnitsChange(foundUnit)
					}}
					value={unitsValue?.label}
					className=" flex items-center  rounded-lg  hover:border-2"

				>
					{units.map((unit) => (
						<option key={unit.label} value={unit.label}>{unit.label}</option>
					))}
				</select>
			</div>
			<div className="flex">
				<button
					onClick={onCalculateClick}
					className=" w-24 flex justify-center items-center rounded-r-lg p-1  text-white  bg-green-500 hover:animate-pulse">
					{"Calculate"}
				</button>
			</div>
		</div>
	)
}