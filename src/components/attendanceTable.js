import React from "react";

const AttendanceTable = ({ attendanceData }) => {
  console.log(attendanceData);
  return (
    <>
      <thead>
        <tr className="bg-green-100">
          <th className=" p-2">التاريخ</th>
          <th className=" p-2">تسجيل دخول</th>
          <th className=" p-2">تسجيل خروج</th>
          <th className=" p-2">الراحة</th>
          <th className=" p-2">إذن</th>
          <th className=" p-2">عدد الساعات</th>
          <th className=" p-2">موقع الدوام</th>
        </tr>
      </thead>
      <tbody>
        {attendanceData?.map((item, index) =>
          item.type ? (
            <tr key={index} className="bg-[#E8F9F2] font-bold text-center">
              <td colSpan="7" className="p-2">
                {item.type}
              </td>
            </tr>
          ) : (
            <tr
              key={index}
              className={index % 2 !== 0 ? "bg-[#E8F9F2]" : "bg-white"}
            >
              <td className=" p-2">{item.date}</td>
              <td className=" p-2">{item.checkIn}</td>
              <td className=" p-2">{item.checkOut}</td>
              <td className=" p-2">{item.break}</td>
              <td className=" p-2">{item.permission}</td>
              <td className=" p-2">{item.hours}</td>
              <td className=" p-2">{item.location}</td>
            </tr>
          )
        )}
      </tbody>
    </>
  );
};

export default AttendanceTable;
