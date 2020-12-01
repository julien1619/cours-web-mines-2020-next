import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Messages from "../components/Messages";
import MessageForm from "../components/MessageForm";

const messages = [
  {
    author: "Julien",
    content: "Test",
    timestamp: 1606810676109,
  },
  {
    author: "Julien",
    content: "Test 2",
    timestamp: 1606810681302,
  },
  {
    author: "Julien",
    content: "Test 3",
    timestamp: 1606811023118,
  },
  {
    author: "Julien",
    content: "Test 4",
    timestamp: 1606816235882,
  },
  {
    author: "",
    content: "",
    timestamp: 1606816306875,
  },
  {
    author: "teo",
    content: "Message test",
    timestamp: 1606816322840,
  },
  {
    author: "Yohan",
    content: "Ca marche ?",
    timestamp: 1606816367947,
  },
  {
    author: "Zac",
    content: "bonjour",
    timestamp: 1606816406547,
  },
  {
    author: "Zac",
    content: "ah en effet ça marche :)",
    timestamp: 1606816435302,
  },
  {
    author: "Yohan",
    content: "Slt",
    timestamp: 1606816445335,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <span className="navbar-brand mb-0 h1">Forum de discussion</span>
      </nav>
      <div className="container-fluid">
        <div className="container">
          <Messages messages={messages} />
        </div>

        <MessageForm />
      </div>
    </>
  );
}
