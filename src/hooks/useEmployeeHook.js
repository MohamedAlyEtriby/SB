import AttendanceTable from "@/components/attendanceTable";
import Table from "@/components/tableData";
import { attendance, salaries } from "@/helpers/employeesData";
import React, { useState } from "react";

const useEmployeeHook = () => {
  const allData = [
    {
      component: <Table data={salaries} />,
    },
    {
      component: <AttendanceTable attendanceData={attendance} />,
    },
    {
      component: <Table data={salaries} />,
    },
  ];
  const [indexData, setIndexData] = useState(0);
  const onDataClick = (index) => {
    setIndexData(index);
  };
  return { allData, indexData, setIndexData, onDataClick };
};

export default useEmployeeHook;
