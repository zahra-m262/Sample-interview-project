"use client";

import "@/src/styles/content.modules.css";

const Content = () => {
  const onfeedback = () => {
    alert("Wellcome ; I`m Feedback 😄");
  };
  return (
    <>
      <div className="container">
        {/*about first line of content*/}
        <div className="first-part-container">
          <p>New</p>
          <p>
            HTB Business CTF is back: A hacking competition for companies | $50k
            worth of prizes! &gt;{/*its '>' characer*/}
          </p>
        </div>
        {/*about main of content*/}
        <div className="main-container">
          <h1>The #1 cybersecurity upskilling platform</h1>
          <div className="second-part-container">
            <p>
              Hack The Box gives individuals, businesses and universities the
              tools they need to continuoulsy improve their cybersecurity
              capabiliti{" "}
              <span>
                <sup>__</sup> all in one place.
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* feedback BTN */}
      <div style={{overflow:'hidden'}}> 
        <button className="feedback-btn" onClick={onfeedback}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chat-right-fill icon"
            viewBox="0 0 16 16"
          >
            <path d="M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
          </svg>{" "}
          Feedback
        </button>
      </div>
    </>
  );
};

export default Content;
