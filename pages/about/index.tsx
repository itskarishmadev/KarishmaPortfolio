import About from "@/src/componens/about";

interface Query {
    section: string;
}

interface Props {
    query: Query;
}

const AboutPage = () => {
    return < About />;
};
AboutPage.getInitialProps = ({ query }: Props) => {
    return { query };
};
export default AboutPage;
