import ContextWrapper from "../context/ContextWrapper";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ContextWrapper>
        <Component {...pageProps} />
      </ContextWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
