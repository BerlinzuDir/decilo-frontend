import "../styles/customTheme.scss";
import { ComponentClass, FunctionComponent } from "react";
import { SessionProvider } from "next-auth/react";

interface AppProps {
  Component: ComponentClass;
  pageProps: any;
}

const MyApp: FunctionComponent<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
