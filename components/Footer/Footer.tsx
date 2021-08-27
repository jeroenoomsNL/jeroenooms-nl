import { ExternalLink } from "../ExternalLink/ExternalLink";
import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className="wrapper">
      Created by Jeroen Ooms with{" "}
      <ExternalLink href="https://nextjs.org" label="Next.js" title="Next.js" />{" "}
      and{" "}
      <ExternalLink
        href="https://fontawesome.com/license"
        label="Font Awesome"
        title="Font Awesome license"
      />
    </div>
  </footer>
);
