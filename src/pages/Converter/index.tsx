import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { UnitsLine } from "components/unitsline";
import { ConverterBar } from "./ConverterBar";
import { useCurrentCategory } from "hooks/useCurrentCategory";
import { IUnit } from "constants/units";
import { convert } from "utilities/converter";

export const ConverterPage: React.FC = () => {
  const navigate = useNavigate();
  const currentCategory = useCurrentCategory()
  const [value, setValue] = useState("")
  const [unitsValue, setUnitsValue] = useState(currentCategory?.units[0])
  const [convertedResult, setConvertedResult] = useState<ReturnType<typeof convert>>()
  const onReturnClick = () => navigate("/")
  const onCalculateClick = () => {
    const results = convert(Number(value), unitsValue as IUnit, currentCategory?.units as IUnit[])
    console.log("results: ", results)
    setConvertedResult(results)
  }
  return (
    <>
      <ConverterBar
        onReturnClick={onReturnClick}
        onChange={setValue}
        value={value}
        onUnitsChange={setUnitsValue}
        unitsValue={unitsValue as IUnit}
        units={currentCategory?.units as IUnit[]}
        onCalculateClick={onCalculateClick}
      />
      <div className="flex w-full justify-center  text-black">
        <UnitsLine data={convertedResult} />
      </div>

    </>
  );
};
