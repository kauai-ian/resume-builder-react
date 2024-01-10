
import { EducationForm } from "./EducationForm";

interface EducationInfo {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  id: string;
  onSave: (data: EducationData) => void;
}

export const EducationInfo = () => {
  
  return (
    <div>
      {/* Other components */}
      <EducationForm
        onSave={onSave}
        school={""}
        degree={""}
        startDate={""}
        endDate={""}
        location={""}
        id={""}
      />
    </div>
  );
};
