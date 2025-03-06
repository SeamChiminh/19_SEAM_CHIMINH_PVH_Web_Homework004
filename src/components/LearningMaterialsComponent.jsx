import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials as initialData } from "../data/learningMaterials";
import { formatDate } from "../lib/fomartDate";

export default function LearningMaterialsComponent() {

  const [learningMaterials, setLearningMaterials] = useState(initialData);

  const toggleFavorite = (id) => {
    const updatedMaterials = learningMaterials.map((item) =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setLearningMaterials(updatedMaterials);
    console.log(updatedMaterials);
  };

  const handleSortChange = (sortOption) => {
    let sortedMaterials = [...learningMaterials];

    if (sortOption === "A-Z") {
      sortedMaterials.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "Z-A") {
      sortedMaterials.sort((a, b) => b.title.localeCompare(a.title));
    }

    setLearningMaterials(sortedMaterials);
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent onSortChange={handleSortChange}/>

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-md font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* learning materials */}
      <div className="space-y-3">
        {learningMaterials.map((item) => (
          <div
            className="bg-light-gray px-4 py-2 flex gap-5 items-center"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.title}
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{item.title}</p>
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="focus:outline-none"
                >
                  <Star
                    size={20}
                    fill={item.isFavorite ? "yellow" : "none"}
                    stroke={item.isFavorite ? "yellow" : "gray"}
                  />
                </button>
              </div>
              <p className="text-gray-400 text-sm">
                {/* Posted at: {item.postedAt} */}
                Posted at: {formatDate(item.postedAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
