import { Car, EllipsisVertical } from "lucide-react";
import React from "react";
import { CardData } from "../data/CardData";

export default function CardComponent() {
  return (
    <div>
      {CardData.map((item) => (
        <div
          key={item.id}
          className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-5"
        >
          <div className="flex justify-between mb-5">
            <p className={`${item.textColor} text-xs font-medium`}>
              {item.dueDate}
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
            <p>{item.process}%</p>
          </div>
          <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className={`${item.colorBg} h-2.5 rounded-full`}
              style={{ width: `${item.process}%` }}
            ></div>

            {/* <div
              className="border-l-4 rounded-full border-l-custom-pink h-5 absolute -top-1 left-1/4"
              title="25%"
            ></div>

            <div
              className="border-l-4 rounded-full border-l-custom-yellow-500 h-5 absolute -top-1 left-2/4"
              title="50%"
            ></div>

            <div
              className="border-l-4 rounded-full border-l-custom-carrot h-5 absolute -top-1 left-3/4"
              title="75%"
            ></div> */}
          </div>

          {/* Deadline */}
          <div className="flex justify-end">
            <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center text-sm">
              {item.deadline}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}