import { MessageData } from "../types/messages";
import Message from "./Message";

type Props = {
  messages: MessageData[];
};

export default function Messages({ messages }: Props) {
  return (
    <div className="wrapper">
      <div className="messages-container">
        {messages.map((message) => (
          <Message key={message.timestamp} message={message} />
        ))}
      </div>
    </div>
  );
}
