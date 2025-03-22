import Add from "@/icons/add";
import React from "react";

const Table = ({ data }) => {
  return (
    <>
      <thead>
        <tr className="bg-green-100">
          <th className="p-3">التاريخ</th>
          <th className="p-3">نوع الحركة</th>
          <th className="p-3">المبلغ</th>
          <th className="p-3">السبب</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i} className={i % 2 !== 0 ? "bg-[#E8F9F2]" : "bg-white"}>
            <td className="p-3">{item.date}</td>
            <td className="p-3 flex justify-center gap-2">
              <div className="text-green-500">
                <Add fill="#45D099" />
              </div>
              "مكافاة"
            </td>
            <td className="p-3">{item.amount}</td>
            <td className="p-3">{item.reason}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default Table;
