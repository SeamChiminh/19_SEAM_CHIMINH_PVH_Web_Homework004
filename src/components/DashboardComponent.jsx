import React from "react";
import { dashboard } from "../data/dashboard";

export default function DashboardComponent() {
  // return (
  //   <div>
  //     <h2 className="text-md font-semibold mb-5">Dashboard</h2>

  //     {/* display summary on each card */}
  //     <div className="flex gap-5">
  //       <div className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto">
  //         <div className="p-3 rounded-xl bg-custom-pink">
  //           <img src="/fi-sr-file.svg" alt="file icon" />
  //         </div>
  //         <div>
  //           <p className="text-xl font-semibold">24</p>
  //           <p className="text-gray-400">Total Assignments</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div >
      <h2 className="text-md font-semibold mb-2">Dashboard</h2>

      {/* Display summary on each card */}
      <div className="flex gap-5 ">
        {dashboard.map((item) => (
          <div
            key={item.id}
            className="flex bg-white gap-5 py-2 px-3 rounded-xl w-auto "
          >
            <div className={`p-3 rounded-xl ${item.color}`}>
              <img src={item.icon} alt="file icon" />
            </div>
            <div>
              <p className="text-md font-semibold">{item.totalTasks}</p>
              <p className="text-gray-400 text-xs">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
