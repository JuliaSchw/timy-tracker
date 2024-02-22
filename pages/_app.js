import GlobalStyle from "../styles";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import Section from "@/styles/section";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Section>
        <Component {...pageProps} />
      </Section>{" "}
      <SideNav />
    </>
  );
}
