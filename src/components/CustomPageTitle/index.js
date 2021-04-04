import Head from "next/head";

const CustomPageTitle = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
};

export default CustomPageTitle;
