import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from '../components/Services';
import Footer from '../components/Footer';
import Customers from "../components/Customers";

const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Hero />
      <Services />
      <Customers/>
      <Footer />
    </Layout>
  )
}

export default Index;
