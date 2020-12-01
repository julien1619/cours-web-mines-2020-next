import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function MessageForm() {
  return (
    <div className="card fixed-bottom text-white bg-dark">
      <div className="card-body">
        <div className="container">
          <Form id="message-form">
            <Form.Group controlId="username">
              <Form.Label>Auteur</Form.Label>
              <Form.Control size="sm" placeholder="Auteur" />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={2} />
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
