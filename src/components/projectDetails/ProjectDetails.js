import { useParams } from 'react-router-dom';

import { projects } from '../../helpers/ProjectsList';

import BtnOutline from '../btnOutline/BtnOutline';
import GoBack from '../btnGoBack/GoBack';

import './style.css';

const ProjectDetails = () => {
    const { id } = useParams();

    const project = projects[id];

    return (
        <>
            <main className="section none">
                <div className="container">
                    <GoBack />
                    <div className="project__ditails">
                        <h1 className="title-1">{project.title}</h1>
                        <a
                            className="project__video"
                            href={project.video}
                            data-fancybox
                            style={{ backgroundImage: `url(${project.img})` }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="video-btn"
                                src={project.iconPlay}
                                alt={project.title}
                            />
                        </a>
                        <div className="project__desc">
                            Skills: {project.skills}
                        </div>

                        {project.link && <BtnOutline link={project.link} />}
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProjectDetails;
