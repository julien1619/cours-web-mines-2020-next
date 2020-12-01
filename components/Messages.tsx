import useSWR from "swr";
import ky from "ky/umd";
import { MessageData } from "../types/messages";
import Message from "./Message";

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

export default function Messages() {
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
    <div className="wrapper">
      <div className="messages-container">
        {data.messages.map((message) => (
          <Message key={message.timestamp} message={message} />
        ))}
      </div>
    </div>
  );
}
