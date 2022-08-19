import React from "react";
import { IConvertResult } from "utilities/converter";
interface IUnitsLineProps {
    data?: IConvertResult[]
}
export const UnitsLine: React.FC<IUnitsLineProps> = ({
    data
}) => {
    return (
        <table className="border-collapse border  border-slate-400 w-1/2 text-center mt-16  font-light text-xl  bg-blue-500/5 " >
            <thead>
                <tr>
                    <th className="border border-slate-400" >Units</th>
                    <th className="border border-slate-400" >Result</th>
                </tr>
            </thead>
            <tbody>

                {Array.isArray(data) && data.map((item) => (
                    <tr key={item.unit.fullLabel}>
                        <td className="border border-slate-400">{item.unit.fullLabel}</td>
                        <td className="border border-slate-400">{item.result + item.unit.label}</td>
                    </tr>
                ))}


            </tbody>
        </table>
    )
}