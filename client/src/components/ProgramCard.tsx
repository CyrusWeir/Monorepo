import type { program } from "../types/ProgramTypes";
export function ProgramCard({ program }: { program: program }) {
  return (
    <div className="card">
      <img src={program.poster} alt={program.title} />
      <div className="card-body">
        <h5 className="card-title">{program.title}</h5>
        <p className="card-text">{program.synopsis}</p>
        <p className="card-text">
          <small className="text-muted">
            {program.year} - {program.country}
          </small>
        </p>
      </div>
    </div>
  );
}
