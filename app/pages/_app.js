// Add Bootstrap, custom Bootstrap, and global css.
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.scss";

import { Provider } from "next-auth/client";

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
