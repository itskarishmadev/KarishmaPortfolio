import ContactForm from "@/src/componens/contacts/contactForm";

interface Query {
    section: string;
}

interface Props {
    query: Query;
}

const ContactPage = (props: Props) => {
    return < ContactForm />;
};
ContactPage.getInitialProps = ({ query }: Props) => {
    return { query };
};
export default ContactPage;
