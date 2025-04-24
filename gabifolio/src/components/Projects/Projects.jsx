import { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedTech, setSelectedTech] = useState(null);
  const [techList, setTechList] = useState([]);
  const [loading, setLoading] = useState(true);

  useScrollAnimation('fade-in-up');

  // Fetch all projects on load
  useEffect(() => {
    fetch('https://gabifolio-api.onrender.com/api/projects')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch projects');
        return res.json();
      })
      .then(data => {
        console.log('Fetched projects:', data); 
        setProjects(data);
        setFilteredProjects(data);

        // Extract unique techs from techItems (defensive)
        const allTechs = data.flatMap(p => Array.isArray(p.techItems) ? p.techItems : []);
        const uniqueTechs = allTechs.filter(
          (v, i, a) => a.findIndex(t => t._id === v._id) === i
        );
        setTechList(uniqueTechs);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filter logic
  useEffect(() => {
    if (!selectedTech) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        Array.isArray(project.techItems) &&
        project.techItems.some(tech => tech.name === selectedTech)
      );
      setFilteredProjects(filtered);
    }
  }, [selectedTech, projects]);

  if (loading) return <p>Loading projects...</p>;

  return (
    <section className="projects-section" id="projects">
      <h2>Selected Projects</h2>

      <div className="tech-filter">
        <button
          className={!selectedTech ? 'active' : ''}
          onClick={() => setSelectedTech(null)}
        >
          All
        </button>
        {techList.map(tech => (
          <button
            key={tech._id}
            className={selectedTech === tech.name ? 'active' : ''}
            onClick={() => setSelectedTech(tech.name)}
          >
            {tech.name}
          </button>
        ))}
      </div>

      {filteredProjects.map(project => (
        <div key={project._id} className="fade-in-up">
          <ProjectCard project={project} />
        </div>
      ))}
    </section>
  );
}
