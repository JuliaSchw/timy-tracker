import GlobalStyle from "../styles";
import Header from "@/components/Header";
import Section from "@/styles/section";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Section>
        <Component {...pageProps} />
      </Section>
    </>
  );
}
