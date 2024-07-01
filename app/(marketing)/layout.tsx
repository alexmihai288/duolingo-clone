import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default MarketingLayout;
