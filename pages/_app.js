import UserContextProvider from "../context/UserStore";
export default function App({ Component, pageProps }) {
  return <>
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  </>
}
