export default function Home() {
  return (
    <>
  <a className="skip" href="#main">
    Przejdź do treści
  </a>
  <svg className="icon-library" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="instagram-icon" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.6" r="1.1" fill="currentColor" />
    </symbol>
    <symbol id="facebook-icon" viewBox="0 0 24 24">
      <path d="M14 22v-9h3l.5-3H14V8c0-1 .3-1.5 1.5-1.5H18V3.2C17.3 3.1 16.4 3 15 3c-3 0-4.5 1.8-4.5 5v2H8v3h2.5v9z" fill="currentColor" />
    </symbol>
  </svg>
  <header className="header">
    <a className="brand" href="#wizja" aria-label="KN Psychoterapii — strona główna">
      <img src="/assets/logo.png" alt="Logo Koła Naukowego Psychoterapii" />
      <span>
        <strong>
          KN Psychoterapii
        </strong>
        <small>
          Uniwersytet SWPS we Wrocławiu
        </small>
      </span>
    </a>
    <nav aria-label="Główna nawigacja">
      <a href="#wizja" data-page="wizja">
        Wizja koła
      </a>
      <a href="#kalendarz" data-page="kalendarz">
        Kalendarz
      </a>
      <a href="#regulamin" data-page="regulamin">
        Regulamin
      </a>
    </nav>
    <div className="header-social">
      <a className="icon-link" href="https://www.instagram.com/kolo_naukowe_psychoterapii/" target="_blank" rel="noopener" aria-label="Instagram koła">
        <svg>
          <use href="#instagram-icon" />
        </svg>
      </a>
      <a className="icon-link" href="https://www.facebook.com/410657765472409" target="_blank" rel="noopener" aria-label="Facebook koła">
        <svg>
          <use href="#facebook-icon" />
        </svg>
      </a>
    </div>
  </header>
  <main id="main">
    <section id="wizja" className="page">
      <div className="masthead">
        <img className="masthead-logo" src="/assets/logo.png" alt="Koło Naukowe Psychoterapii, Uniwersytet SWPS Wrocław" />
        <p className="identity">
          KN Psychoterapii
          <span>
            na Uniwersytecie SWPS we Wrocławiu
          </span>
        </p>
        <h1>
          <a href="#nasza-wizja">
            Poznaj naszą wizję
            <span className="down-arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        </h1>
      </div>
      <div className="vision-fields" id="nasza-wizja" aria-label="Wizja koła">
        <div className="vision-field field-main">
          <h2>
            Wizja koła
          </h2>
          <p>
            Działalność naszego koła skupia się wokół szeroko rozumianej psychoterapii. Chcemy poznawać jej różne nurty i perspektywy, a także doświadczenia osób pracujących z drugim człowiekiem.
          </p>
        </div>
        <div className="vision-field field-meet">
          <p>
            Organizujemy spotkania z psychologami-praktykami oraz terapeutami różnych nurtów, którzy dzielą się z nami swoją wiedzą i doświadczeniem.
          </p>
          <a href="#kalendarz" className="field-link">
            Kalendarz spotkań
            <span aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
        <div className="vision-field field-talk">
          <p>
            Chcemy również organizować debaty i dyskusje klubowe wokół szeroko pojętej psychoterapii. Zachęcamy do zgłaszania tematów i własnych prezentacji.
          </p>
          <div className="discussion-contact">Prześlij pomysł: <a href="mailto:kn.psychoterapii.swps@gmail.com">e-mailem ↗</a>, <a href="https://www.instagram.com/kolo_naukowe_psychoterapii/" target="_blank" rel="noopener">na Instagramie ↗</a> lub <a href="https://www.facebook.com/410657765472409" target="_blank" rel="noopener">na Facebooku ↗</a>.</div>
          <span className="field-flower" aria-hidden="true">
            ✦
          </span>
        </div>
      </div>
      <div className="join">
        <div className="join-copy">
          <h2>
            Chcesz do nas dołączyć?
          </h2>
          <p>
            Możesz dołączyć w dowolnym momencie roku akademickiego.
          </p>
          <p>
            Wypełnij formularz zgłoszeniowy — kliknij link lub zeskanuj kod QR.
          </p>
          <a className="form-link" href="https://forms.gle/S7cx1x6idhCC33ZB8" target="_blank" rel="noopener">
            Przejdź do zapisów
            <span aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
        <a className="qr-link" href="https://forms.gle/S7cx1x6idhCC33ZB8" target="_blank" rel="noopener" aria-label="Otwórz formularz zapisów">
          <span className="qr-frame">
            <img src="/assets/zapisy-qr.png" alt="Kod QR do formularza zapisów do KN Psychoterapii" />
          </span>
          <span>
            Zeskanuj i dołącz do koła
          </span>
        </a>
      </div>
    </section>
    <section id="kalendarz" className="page" hidden>
      <div className="page-heading">
        <h1>
          Kalendarz
        </h1>
        <p>
          Spotkania KN Psychoterapii na Uniwersytecie SWPS we Wrocławiu
        </p>
      </div>
      <div className="calendar-toolbar">
        <h2 id="month-label" aria-live="polite">
        </h2>
        <div className="month-controls">
          <button id="today" className="outline">
            Dzisiaj
          </button>
          <button id="prev" className="arrow" aria-label="Poprzedni miesiąc">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M19 12H5m6-6-6 6 6 6" /></svg>
          </button>
          <button id="next" className="arrow" aria-label="Następny miesiąc">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </button>
        </div>
      </div>
      <div className="calendar-layout">
      <div className="calendar-main">
      <div className="calendar" aria-label="Kalendarz spotkań">
        <div className="weekdays">
          <span>
            Pon
            <span>
              iedziałek
            </span>
          </span>
          <span>
            Wt
            <span>
              orek
            </span>
          </span>
          <span>
            Śr
            <span>
              oda
            </span>
          </span>
          <span>
            Czw
            <span>
              artek
            </span>
          </span>
          <span>
            Pią
            <span>
              tek
            </span>
          </span>
          <span>
            Sob
            <span>
              ota
            </span>
          </span>
          <span>
            Nie
            <span>
              dziela
            </span>
          </span>
        </div>
        <div id="calendar-grid" className="calendar-grid">
        </div>
      </div>
      <div className="calendar-bottom">
        <p>
          <span className="legend-dot">
          </span>
          Dzisiaj
          <span className="calendar-zone">
            Czas lokalny: Warszawa
          </span>
        </p>
        <button className="text-link" id="google-open">
          Kalendarz Google
          <span>
            ↗
          </span>
        </button>
      </div>
      <div className="agenda" hidden aria-live="polite">
        <div id="agenda-text"></div>
      </div>
      </div>
      <aside className="month-summary" aria-label="Podsumowanie wydarzeń miesiąca">
        <h2>W tym miesiącu</h2>
        <div id="month-events" aria-live="polite"></div>
      </aside>
      </div>
      <div id="event-tooltip" className="event-tooltip" role="tooltip" hidden></div>
      <div id="google-container" hidden>
        <iframe title="Kalendarz Google koła" loading="lazy">
        </iframe>
      </div>
    </section>
    <section id="regulamin" className="page" hidden>
      <div className="page-heading rules-heading">
        <h1>
          Regulamin
        </h1>
        <p className="rules-subtitle">
          Możesz dołączyć w dowolnym momencie roku akademickiego.
        </p>
        <a className="qr-link" href="https://forms.gle/S7cx1x6idhCC33ZB8" target="_blank" rel="noopener" aria-label="Otwórz formularz zapisów">
          <span className="qr-frame">
            <img src="/assets/zapisy-qr.png" alt="Zeskanuj kod QR, aby zapisać się do KN Psychoterapii" />
          </span>
          <span>
            Zeskanuj kod QR lub{" "}
            <u>
              otwórz formularz zapisów
            </u>
          </span>
        </a>
      </div>
      <div className="rules">
        <article id="rule-meetings">
          <h2>
            Spotkania
          </h2>
          <p>
            Spotykamy się stacjonarnie na kampusie Uniwersytetu SWPS we Wrocławiu, w godzinach popołudniowych i wieczornych. Terminy są nieregularne; staramy się organizować co najmniej jedno spotkanie w miesiącu.
          </p>
          <p>
            Spotkania trwają zwykle około 1,5 godziny.
          </p>
        </article>
        <article id="rule-membership">
          <h2>
            Zapisy i członkostwo
          </h2>
          <p>
            Zapisy trwają przez cały rok akademicki. Do koła można dołączyć w dowolnym momencie.
          </p>
          <p>
            Zapisy odbywają się poprzez formularz zgłoszeniowy dostępny w naszych mediach społecznościowych.
          </p>
          <a className="form-link" href="https://forms.gle/S7cx1x6idhCC33ZB8" target="_blank" rel="noopener">
            Formularz zgłoszeniowy ↗
          </a>
        </article>
        <article id="rule-certificate">
          <h2>
            Zaświadczenie o uczestnictwie w kole
          </h2>
          <p>
            Zaświadczenie o byciu aktywnym członkiem koła może otrzymać osoba, która była obecna na co najmniej{" "}
            <strong>
              60% spotkań
            </strong>{" "}
            w danym roku akademickim.
          </p>
        </article>
        <p className="source">
          Na podstawie regulaminu opublikowanego 4 grudnia 2025 r.
          <br />
          <a href="https://www.instagram.com/p/DR1yTjSjBH4/" target="_blank" rel="noopener">
            Zobacz regulamin na Instagramie ↗
          </a>
        </p>
      </div>
    </section>
  </main>
  <footer>
    <div className="footer-main">
      <div className="footer-brand">
        <img src="/assets/logo.png" alt="Logo KN Psychoterapii" />
        <div>
          <h3>
            KN Psychoterapii
          </h3>
          <p>
            na Uniwersytecie SWPS we Wrocławiu
          </p>
        </div>
      </div>
      <div>
        <h3>
          Social media
        </h3>
        <div className="footer-socials">
          <a className="social-text" href="https://www.instagram.com/kolo_naukowe_psychoterapii/" target="_blank" rel="noopener">
            <svg>
              <use href="#instagram-icon" />
            </svg>
            Instagram
          </a>
          <a className="social-text" href="https://www.facebook.com/410657765472409" target="_blank" rel="noopener">
            <svg>
              <use href="#facebook-icon" />
            </svg>
            Facebook
          </a>
        </div>
      </div>
      <div>
        <h3>
          Kontakt
        </h3>
        <a id="contact-link" href="mailto:kn.psychoterapii.swps@gmail.com">
          kn.psychoterapii.swps@gmail.com
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      ©{" "}
      <span id="year">
      </span>{" "}
      KN Psychoterapii · Uniwersytet SWPS we Wrocławiu
    </div>
  </footer>
  <dialog id="google-dialog">
    <button className="dialog-close" aria-label="Zamknij">
      ×
    </button>
    <h2>
      Kalendarz Google
    </h2>
    <p>
      Sprawdź informacje o spotkaniach na Instagramie koła.
    </p>
    <a className="form-link" href="https://www.instagram.com/kolo_naukowe_psychoterapii/" target="_blank" rel="noopener">
      Instagram ↗
    </a>
  </dialog>
    </>
  );
}
