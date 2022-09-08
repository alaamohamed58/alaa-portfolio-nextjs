import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { NotificationProvider } from "../context/notification-context";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width = device-width, initial-scale = 1"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
