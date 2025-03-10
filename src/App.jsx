import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import DashboardComponent from "./components/DashboardComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import CardComponent from "./components/CardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  const handleProjectSubmit = (newProject) => {
    setProjects([...projects, newProject]);
    // console.log("New Project Added:", newProject);
    
  };

  return ( 
    <>
      <div className="w-full min-h-screen bg-[#f6f7f9] flex flex-col lg:flex-row">
        <div className="w-full lg:w-[20%] h-auto lg:h-screen">
          <SidebarComponent />
        </div>

        <div className="w-full lg:w-[80%] p-5 flex flex-col">
          <div className="w-full h-auto lg:h-[10%]">
            <TopNavbarComponent />
          </div>

          <div className="w-full flex-1 mt-5 flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-[72.5%] h-full flex flex-col">
              <div className="w-full h-auto lg:h-[20%] mb-5">
                <DashboardComponent />
              </div>

              <div className="w-full flex-1 flex flex-col">
                <div className="w-full h-auto lg:h-[10%] flex flex-col lg:flex-row justify-between mb-5 gap-5 lg:gap-0">
                  <AssignmentsComponent />
                  <AddNewProjectComponent onProjectSubmit={handleProjectSubmit}/>
                </div>

                <div className="w-full h-[320px] overflow-y-auto">
                  <CardComponent projects={projects} />
                </div>
              </div>
            </div>

            {/* Right Section (Learning Materials) */}
            <div className="w-full lg:w-[25%] h-full rounded-[20px]">
              <LearningMaterialsComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
