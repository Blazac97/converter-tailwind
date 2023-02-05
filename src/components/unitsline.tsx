import React from "react";
import { IConvertResult } from "utilities/converter";
interface IUnitsLineProps {
    data?: IConvertResult[]
}
export const UnitsLine: React.FC<IUnitsLineProps> = ({
    data
}) => {
    return (
        <table className="  w-1/2 text-center mt-16  font-light text-xl  bg-slate-400/5 " >
            <thead>
                <tr>
                    <th className="border" >Units</th>
                    <th className="border" >Result</th>
                </tr>
            </thead>
            <tbody>

                {Array.isArray(data) && data.map((item) => (
                    <tr key={item.unit.fullLabel}>
                        <td className="border ">{item.unit.fullLabel}</td>
                        <td className="border ">{item.result +' ' + item.unit.label}</td>
                    </tr>
                ))}


            </tbody>
        </table>
    )
}