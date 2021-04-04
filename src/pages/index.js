import Head from "next/head";
import { Container } from "react-bootstrap";
import HomePage from "./home";
export default function Home() {
  return (
    <Container >
      <Head>
        <title>Codelok</title>
        <link rel="icon" href="/assets/svg/favicon32.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomePage />
    </Container>
  );
}
