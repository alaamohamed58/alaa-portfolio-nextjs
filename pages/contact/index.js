import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Contact form" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};
export default ContactPage;
