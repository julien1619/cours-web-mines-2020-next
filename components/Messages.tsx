import Message from "./Message";

type MessageData = {
  author: string;
  content: string;
  timestamp: number;
};

type Props = {
  messages: MessageData[];
};

export default function Messages({ messages }: Props) {
  return (
    <div className="wrapper">
      <div className="messages-container">
        {messages.map((message) => (
          <Message message={message} />
        ))}
      </div>
    </div>
  );
}
