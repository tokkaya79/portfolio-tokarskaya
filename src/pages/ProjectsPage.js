import Header from '../components/header/Header';
import PaginatedProjects from '../components/pagination/Pagination';

export default function ProjectsPage() {
    return (
        <>
            <Header />
            <PaginatedProjects projectsPerPage={6} />
        </>
    );
}
