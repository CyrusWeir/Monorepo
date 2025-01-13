import { useEffect, useState } from "react";
import { ProgramCard } from "../components/ProgramCard";
import "./ProgramsPage.css";

export function ProgramsPage() {
  const [programs, setPrograms] = useState([
    { id: 0, title: "", poster: "", synopsis: "", year: 0, country: "" },
  ]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <div className="container">
      <h1>Programs</h1>
      <div className="row">
        {programs.map((program) => (
          <div key={program.id} className="col-4">
            <ProgramCard program={program} />
          </div>
        ))}
      </div>
    </div>
  );
}
