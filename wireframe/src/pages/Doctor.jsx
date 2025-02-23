import React from "react";
import Breadcrumb from "../component/Breadcrumb";

import Appoinments from "./appoinment/Appoinments";
import DoctorProfile from "./doctorprofile/DoctorProfile";

const Doctor = () => {
  return (
    <div>
      <Breadcrumb />
        <div className="max-w-[1320px] m-auto mb-14 mt-14 pl-4 pr-4">
          <div className="dashboard_section grid grid-cols-[300px_1fr] gap-6">
            <DoctorProfile />
            <Appoinments />
          </div>
        </div>
    </div>
  );
};

export default Doctor;
