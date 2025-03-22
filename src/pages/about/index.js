"use client";
import useEmployeeHook from "@/hooks/useEmployeeHook";
import Add from "@/icons/add";
import Print from "@/icons/print";

export default function EmployeePage() {
  const { allData, indexData, onDataClick } = useEmployeeHook();
  return (
    <div>
      <h1 className="mb-[22px]">بيانات موظف</h1>
      <div className="flex justify-between items-center mb-4 h-16">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">الموظف</label>
            <div className="relative w-[302px]">
              <select className="border border-gray-300 bg-white rounded-lg p-2 pr-10 w-full appearance-none">
                <option>أحمد محمد</option>
              </select>
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">الشهر</label>
            <div className="relative w-[302px]">
              <select className="border border-gray-300 bg-white rounded-lg p-2 pr-10 w-full  appearance-none">
                <option>أغسطس 2025</option>
              </select>
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>
          </div>
        </div>

        <div className="h-full flex items-end">
          <button className="bg-[#16C47F] flex  gap-2 justify-center w-[148px] text-white px-4 py-2 rounded-lg">
            <div>
              <Add />
            </div>
            موظف جديد
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <button className="bg-[#16C47F] flex gap-2 justify-center  text-white w-[148px] px-4 py-2 rounded-lg">
            طباعة
            <div>
              <Print />
            </div>
          </button>
        </div>
        <div>
          <button
            type="button"
            className={`${
              indexData === 0 && "bg-white"
            } w-[122px] border-l-0 border-2 h-full border-[#D9D9D9]`}
            onClick={() => onDataClick(0)}
          >
            سجلات حضور
          </button>
          <button
            type="button"
            className={`${
              indexData === 1 && "bg-white"
            } w-[122px]  border-2 h-full border-[#D9D9D9]`}
            onClick={() => onDataClick(1)}
          >
            تفاصيل المرتب
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full border-collapse text-center">
          {allData[indexData].component}
        </table>
      </div>
    </div>
  );
}
