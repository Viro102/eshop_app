import Content from "../components/Content.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import ThemeSwitch from "../components/ThemeSwitch.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <Content />
      <ThemeSwitch />
      <Footer />
    </>
  );
}
