import "@/styles/globals.css";
import Layout from "@/layout/layout";
import { MyProvider } from "@/context";
export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </MyProvider>
  )
}
