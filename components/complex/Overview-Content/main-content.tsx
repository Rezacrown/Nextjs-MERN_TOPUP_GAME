import React, { useState, useEffect } from "react";
import Category_content from "./category-content";

interface countProps {
  _id: string;
  value: number;
  name: string;
}

export default function main_content(props: any) {
  const categoryIcon = ["mobile", "destop", "other-categories"];

  let temp: any = [];

  Object.values(props).forEach((key: any) => {
    if (categoryIcon.includes(key.name.toLowerCase())) {
      key.name = key.name.toLowerCase();
    }
    temp.push(key);
  });

  return (
    <div className="main-content">
      <div className="row">
        {temp.map((item: countProps, index: number) => {
          return (
            <Category_content
              text1="Game"
              text2={item?.name}
              icon={"destop"}
              totalSpend={item?.value}
            />
          );
        })}
      </div>
    </div>
  );
}
