import { useState } from "react";
import CursorTrail from "./components/CursorTrail/CursorTrail";
import "./App.scss";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <CursorTrail />
      <main className="card">
        <p className="badge">MADE FOR FUN</p>
        <h1>
          <a
            href="https://miku.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            aria-label="Miku"
          >
            MIKU
          </a>
        </h1>
        <div className="avatar-wrap" aria-hidden="true">
          {!isLoaded && <div className="avatar-skeleton" />}
          <img
            src="/virtual-miku.webp"
            className={`avatar ${isLoaded ? "is-loaded" : ""}`}
            alt=""
            loading="eager"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        <p className="contact">
          <b>
            <a
              title="Email: kanade@miku.my.id"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:kanade@miku.my.id"
            >
              Contact Me!
            </a>
            {"\u00A0"}
          </b>
        </p>
        <div className="disclaimer">
          Not affiliated with, endorsed by, or representing any official
          creators, companies, characters, or brands
        </div>
        <p className="footer">
          <span className="sparkle-left">✦ </span>
          Personal profile
          <span className="sparkle-right"> ✦</span>
        </p>
      </main>
    </>
  );
}
