import { MessageData } from "../types/messages";

type Props = {
  message: MessageData;
};

export default function Message({ message }: Props) {
  return (
    <div className="card my-3">
      <div className="card-body">
        <p className="card-text">{message.content}</p>
      </div>
      <div className="card-footer text-muted text-right">
        Par <span className="author">{message.author}</span>,{" "}
        {message.timestamp}
      </div>
    </div>
  );
}
