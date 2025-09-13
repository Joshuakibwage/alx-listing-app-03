import FilterItems from "@/components/common/FilterItems";
import Pill from "@/components/common/Pill";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/types";
import React from "react";
import Card from "@/components/common/Card";



const Home:React.FC = () => {
  return (
    <main className="container mx-auto px-5 lg:px-10">
      <FilterItems />
      <Pill />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {
          PROPERTYLISTINGSAMPLE.map((property, index) => (
            <Card 
              key={index} 
              property={property} 
            />
          ))
        }
      </div>     
    </main>
  )
}


export default Home;