import React from "react";
import HomeBanner from "./HomeBanner";
import BlogSection from "./BlogSection";
import PromoSection from './PromoSection';
import ProductList from './ProductList';

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <PromoSection />
      <ProductList  />
      <BlogSection />
      {/* home page section */}
    
    </div>
  );
};

export default HomePage;
