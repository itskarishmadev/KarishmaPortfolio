
import ProjectsSection from "@/src/componens/projects";

interface Query {
    section: string;
}

interface Props {
    query: Query;
}

const ProjectsPage = () => {
    return <  ProjectsSection />;
};
ProjectsPage.getInitialProps = ({ query }: Props) => {
    return { query };
};
export default ProjectsPage;
