import ProjectItem from '../projectItem/ProjectItem';
import './style.css';

const Projects = ({ currentProjects }) => {
    return (
        <>
            {currentProjects &&
                currentProjects.map((project) => (
                    <ProjectItem
                        key={project.id}
                        title={project.title}
                        subtitle={project.subtitle}
                        img={project.img}
                        id={project.id}
                    />
                ))}
        </>
    );
};

export default Projects;
