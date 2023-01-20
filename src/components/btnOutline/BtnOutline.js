import { useParams } from 'react-router-dom';

import { projects } from '../../helpers/ProjectsList';

import './style.css';

const BtnOutline = () => {
    const { id } = useParams();

    const project = projects[id];

    return (
        <>
            <a
                className="btn__outline"
                href={project.link}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src={project.btnIcon}
                    alt={project.btnName}
                />
                {project.btnName}
            </a>
        </>
    );
};

export default BtnOutline;
