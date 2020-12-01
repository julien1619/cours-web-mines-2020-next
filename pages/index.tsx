import Head from "next/head";
import useSWR from "swr";
import ky from "ky/umd";
import "bootstrap/dist/css/bootstrap.min.css";
import { MessageData } from "../types/messages";
import Messages from "../components/Messages";
import MessageForm from "../components/MessageForm";

async function fetchMessages() {
  let pageIndex = 0;
  let hasMessages = true;
  let messages: MessageData[] = [];

  while (hasMessages) {
    // GET https://ensmn.herokuapp.com/messages
    // eslint-disable-next-line
    const pageMessages: MessageData[] = await ky
      .get(`https://ensmn.herokuapp.com/messages?page=${pageIndex}`)
      .json();

    hasMessages = pageMessages.length > 0;
    pageIndex += 1;
    messages = messages.concat(pageMessages);
  }

  return { messages: messages.reverse() };
}

export default function Home() {
  const { data, error } = useSWR("/messages", fetchMessages, {
    refreshInterval: 1000,
  });

  if (error != null) {
    return <div>{error}</div>;
  }

  if (data == null) {
    return <div>Chargement en cours...</div>;
  }

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
          <Messages messages={data.messages} />
        </div>

        <MessageForm />
      </div>
    </>
  );
}
