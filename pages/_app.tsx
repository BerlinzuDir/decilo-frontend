import "../styles/customTheme.scss";
import {ComponentClass, FunctionComponent} from "react";

interface AppProps {
  Component: ComponentClass
  pageProps: any
}

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default MyApp;
