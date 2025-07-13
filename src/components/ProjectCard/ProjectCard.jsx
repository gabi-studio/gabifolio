import './ProjectCard.css';
import isColorDark from '../../utils/isColorDark';

export default function ProjectCard({ project }) {
  const bgColor = project.mainColour || '#f7f7f7';
  const textColor = isColorDark(bgColor) ? '#fff' : '#111';

  return (
    <div
      className="project-card"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="project-content">
        <div className="project-info">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="tech-tags">
            {project.techItems.map(tech => (
              <span
                key={tech._id}
                className="tech-tag"
                style={{ backgroundColor: textColor === '#fff' ? '#ffffff33' : '#00000010' }}
              >
                {tech.name}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.githubLink && (
                <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: textColor, borderColor: textColor }}
                >
                GitHub
                </a>
            )}

            {project.codeLink && (
            <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: textColor, borderColor: textColor }}
            >
                Project Demo
            </a>
            )}
        </div>
        </div>
        <div className="project-image">
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            <img src={project.imagePath} alt={project.name} className="project-img" />
          </a>
        </div>
      </div>
    </div>
  );
}
