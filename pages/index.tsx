import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Messages from "../components/Messages";
import MessageForm from "../components/MessageForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Forum de discussion - Mines Nancy 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <span className="navbar-brand mb-0 h1">Forum de discussion</span>
      </nav>
      <div className="container-fluid">
        <div className="container">
          <Messages />
        </div>

        <MessageForm />
      </div>
    </>
  );
}
