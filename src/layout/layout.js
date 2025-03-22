import Header from "./header";

export default function DashboardLayout({ children }) {
  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans" dir="rtl">
      <Header />
      {children}
    </div>
  );
}
