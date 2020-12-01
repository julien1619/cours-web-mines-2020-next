import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import ky from "ky/umd";

type MessageCreation = {
  username: string;
  message: string;
};

function useMessageCreation(): [
  MessageCreation,
  (username: string) => void,
  (message: string) => void
] {
  // useState returns a tuple of a state and a setter
  const [state, setState] = useState({
    username: "",
    message: "",
  });

  const setUsername = (username: string) =>
    setState({ username, message: state.message });
  const setMessage = (message: string) =>
    setState({ username: state.username, message });

  return [state, setUsername, setMessage];
}

export default function MessageForm() {
  // Create persistent state with empty inital values
  const [state, setUsername, setMessage] = useMessageCreation();

  // Store changes in state
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) =>
    setMessage(event.target.value);

  // Send data
  const sendMessage = (event: SyntheticEvent) => {
    event.preventDefault();

    // Validate data
    if (state.username.length === 0 || state.message.length === 0) {
      return;
    }

    // POST https://ensmn.herokuapp.com/messages (username, message)
    ky.post("https://ensmn.herokuapp.com/messages", {
      json: state,
    }).then(() => setMessage(""));
  };

  return (
    <div className="card fixed-bottom text-white bg-dark">
      <div className="card-body">
        <div className="container">
          <Form id="message-form" onSubmit={sendMessage}>
            <Form.Group controlId="username">
              <Form.Label>Auteur</Form.Label>
              <Form.Control
                size="sm"
                placeholder="Auteur"
                name="username"
                value={state.username}
                onChange={handleUsernameChange}
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="message"
                value={state.message}
                onChange={handleMessageChange}
              />
            </Form.Group>
            <Button variant="primary" size="sm" type="submit" block>
              Envoyer
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
