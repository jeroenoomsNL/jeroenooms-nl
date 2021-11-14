import { ExternalLink } from "../ExternalLink/ExternalLink";
import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <img
      src="/backgrounds/waves.svg"
      alt="Waves separator generated with haikei.app"
      width="960"
      height="150"
      className={styles.divider}
    />
    <div className="wrapper">
      Created by <strong>Jeroen Ooms</strong> with{" "}
      <ExternalLink
        href="https://nextjs.org"
        label="Next.js"
        title="Next.js"
        className="light"
      />{" "}
      and{" "}
      <ExternalLink
        href="https://fontawesome.com/license"
        label="Font Awesome"
        title="Font Awesome license"
        className="light"
      />
    </div>
  </footer>
);
