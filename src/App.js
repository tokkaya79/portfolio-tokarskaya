import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactsPage from './pages/ContactsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ScrollToTop from './utils/scrollToTop';

import './styles/reset.css';
import './styles/main.css';

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route
                        path="/portfolio-tokarskaya"
                        element={<ProjectsPage />}
                    />
                    <Route
                        path="/portfolio-tokarskaya/skills"
                        element={<SkillsPage />}
                    />
                    <Route
                        path="/portfolio-tokarskaya/contacts"
                        element={<ContactsPage />}
                    />
                    <Route
                        path="/portfolio-tokarskaya/project/:id"
                        element={<ProjectDetailsPage />}
                    />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;

