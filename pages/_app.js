import GlobalStyle from "../styles";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Section from "@/styles/section";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <GlobalStyle />
      <SessionProvider session={session}>
        <Header />
        <Section>
          {/*  is the session positioned at the right point?  */}
          <Component {...pageProps} />
        </Section>
        <SideNav />{" "}
      </SessionProvider>
    </>
  );
}
