import Topbar from "../../components/HOC/Topbar";
import Layout from "../../components/Layout";
import { homePageTitle } from "../../utils/constants";

const Home = () => {
  return (
    <Layout pageTitle={homePageTitle}>
      <div>this is HomePage</div>
    </Layout>
  );
};

export default Home;
