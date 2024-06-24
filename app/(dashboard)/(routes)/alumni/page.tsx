import { GraduationCap } from "lucide-react"; // Replace with an actual icon from lucide-react
import { AlumniCard } from "./_components/alumni-card";

const AlumniPage = () => {
  return (
    <div className="p-4" >
      <h1 className=" px-2 text-2xl font-bold mb-4">Our Alumni</h1>
      <AlumniCard
        variant="success"
        icon={GraduationCap}
        numberOfAlumni={50}
        label="Graduated Students"
        generation="2024"
      />
    </div>
  );
};

export default AlumniPage;
