import React from 'react';

const RelatedItems = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="font-semibold text-3xl text-gray-800 mb-8 text-center">Related Items</h1>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-between gap-8 mt-4 w-full">
        
        {/* Column 1 */}
        <div className="relative bg-white shadow-lg p-8 rounded-lg flex-grow sm:max-w-[45%] lg:max-w-[22%] hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://indiesports.ph/wp-content/uploads/2016/12/Discraft-Ultrastar-White.jpg"
            alt="White Discraft Ultrastar 175g Ultimate Disc"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="font-medium text-lg text-gray-800">White Discraft Ultrastar 175g Ultimate Disc</h2>
          <h2 className="font-medium text-sm text-gray-800">₱418.00</h2>
        </div>

        {/* Column 2 */}
        <div className="relative bg-white shadow-lg p-8 rounded-lg flex-grow sm:max-w-[45%] lg:max-w-[22%] hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://shopufa.com/cdn/shop/files/UFA3Pack_Red_grande.jpg?v=1712342784"
            alt="UFA Frisbee"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="font-medium text-lg text-gray-800">UFA Frisbee</h2>
          <h2 className="font-medium text-sm text-gray-800">₱300.00</h2>
        </div>

        {/* Column 3 */}
        <div className="relative bg-white shadow-lg p-8 rounded-lg flex-grow sm:max-w-[45%] lg:max-w-[22%] hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://www.sunflex-sport.com/userdir/product/large/81101_a_Frisbee_Freestyle_orange_main.jpg"
            alt="Frisbee Disc Freestyle 160g"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="font-medium text-lg text-gray-800">Frisbee Disc Freestyle 160g</h2>
          <h2 className="font-medium text-sm text-gray-800">₱250.00</h2>
        </div>

        {/* Column 4 */}
        <div className="relative bg-white shadow-lg p-8 rounded-lg flex-grow sm:max-w-[45%] lg:max-w-[22%] hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://www.trixshot.com/cdn/shop/files/TrixshotFrisbee_1500x.png?v=1682556389"
            alt="Trixshot Ultimate Frisbee Sport Disc"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="font-medium text-lg text-gray-800">Trixshot Ultimate Frisbee Sport Disc</h2>
          <h2 className="font-medium text-sm text-gray-800">₱580.00</h2>
        </div>

      </div>
    </div>
  );
};

export default RelatedItems;
