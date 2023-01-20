import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { projects } from '../../helpers/ProjectsList';
import Projects from '../projects/Projects';
import './style.css';

function PaginatedProjects({ projectsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + projectsPerPage;
    const currentProjects = projects.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(projects.length / projectsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * projectsPerPage) % projects.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">projects</h2>
                    <ul className="projects" id="projects">
                        <NavLink
                            to="/project"
                            className="projects"
                        >
                            <Projects currentProjects={currentProjects} />
                        </NavLink>
                    </ul>
                </div>
            </main>
            <ReactPaginate
                className="pagination"
                nextLabel=">>>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<<<"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default PaginatedProjects;
