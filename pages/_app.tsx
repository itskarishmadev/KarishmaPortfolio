import Layout from "@/src/componens/layout";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: any) {
  return (
    // <Layout>
    <Component {...pageProps} />
    // </Layout>
  );
}

export default MyApp;
