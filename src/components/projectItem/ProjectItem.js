import { NavLink } from 'react-router-dom';

import './style.css';

const ProjectItem = ({ title, subtitle, img, id }) => {
    return (
        <NavLink to={`/portfolio-tokarskaya/project/${id - 1}`}>
            <li className="projects-item">
                <img
                    src={img}
                    alt={title}
                    className="projects-item__img"
                />
                <h3 className="projects-item__title">
                    {title}
                    <br />
                    {subtitle}
                </h3>
            </li>
        </NavLink>
    );
};

export default ProjectItem;
