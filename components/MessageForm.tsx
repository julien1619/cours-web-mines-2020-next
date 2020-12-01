export default function MessageForm() {
  return (
    <div className="card fixed-bottom text-white bg-dark">
      <div className="card-body">
        <div className="container">
          <form id="message-form">
            <div className="form-group">
              <label>Auteur</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="author"
                name="username"
                placeholder="Auteur"
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                className="form-control form-control-sm"
                id="message"
                name="message"
                rows={2}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-sm btn-block btn-primary">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
