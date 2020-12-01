import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <div className="wrapper">
            <div className="messages-container"></div>
          </div>
        </div>

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
                <button
                  type="submit"
                  className="btn btn-sm btn-block btn-primary"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
