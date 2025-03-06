import { Car, EllipsisVertical } from "lucide-react";
import React from "react";
import { getDaysLeft } from "../lib/DeadLineDate";
import { formatDate } from "../lib/fomartDate";

export default function CardComponent({projects}) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {projects.map((item) => (
        
        <div
          key={item.id}
          className=" p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-5"
        >
          
          <div className="flex justify-between mb-5">
            <p className={`${item.progress == 25 ? "text-custom-pink" : item.progress == 50 ? "text-custom-yellow-500" : item.progress == 75 ? "text-custom-carrot" : "text-custom-sky-blue"}  text-xs font-medium`}>
              {formatDate(item.dueDate)}
            </p>
            <EllipsisVertical size={20} color="#374957" />
          </div>

          {/* Title */}
          <h5 className="capitalize mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.projectName}
          </h5>

          {/* Description */}
          <p className="line-clamp-2 mb-3 font-normal text-xs text-justify text-gray-400 dark:text-gray-400">
            {item.description}
          </p>

          {/* Progress Bar */}
          <div className="w-full flex justify-between font-medium mb-1">
            <p>Progress</p>
            <p>{item.progress}%</p>
            
          </div>
          <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className={`h-2.5 rounded-full ${item.progress == 25 ? "bg-custom-pink" : item.progress == 50 ? "bg-custom-yellow-500" : item.progress == 75 ? "bg-custom-carrot" : "bg-custom-sky-blue"}`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>

          {/* Deadline */}
          <div className="flex justify-end">
            <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center text-sm">
              {getDaysLeft(item.dueDate)}
            </p>
          </div>
        </div>
        
      ))}
    </div>
  );
}
