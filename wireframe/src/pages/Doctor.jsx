import React from "react";
import Breadcrumb from "../component/Breadcrumb";

import Appoinments from "./appoinment/Appoinments";
import DoctorProfile from "./doctorprofile/DoctorProfile";

const Doctor = () => {
  return (
    <div>
      <Breadcrumb />
        <div className="max-w-[1320px] m-auto mb-14 mt-14 pl-4 pr-4 max-[767px]:mt-7 max-[767px]:mb-7">
          <div className="dashboard_section grid grid-cols-[300px_1fr] gap-6 max-[767px]:gap-4">
            <DoctorProfile />
            <Appoinments />
          </div>
        </div>
    </div>
  );
};

export default Doctor;
