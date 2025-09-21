import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@shared/components/organisms/header/header.component";
import Footer from "@shared/components/organisms/footer/footer.component";

export const HomeLayout: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4 py-8">
          <Header />
          {/* <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
          <main className="grid place-items-center ">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};
