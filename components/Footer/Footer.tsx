import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.wrap}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div>
          <p>Developer: Andriy</p>
          <p>
            Contact us:{" "}
            <a href="mailto:andrijmilevskij@gmail.com">
              andrijmilevskij@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
