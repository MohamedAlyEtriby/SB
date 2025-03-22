import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-4  rounded-lg mb-6">
        <div className="flex items-center gap-4">
          <span className="text-[24px]">مرحبا بك في شركة SB</span>
          <span className="text-blue-500">🔵</span>
        </div>
        <div className="flex items-center bg-[#007DFC1A] p-2 rounded-lg w-72">
          <span className="text-gray-500">🔍</span>
          <input
            type="text"
            placeholder="ابحث هنا"
            className="bg-transparent outline-none flex-grow px-2 text-left"
          />
        </div>

        <div className="flex items-center gap-4">
          <img
            src="/assets/dr.ibrahim.png"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold text-lg">د/ أحمد إبراهيم</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
