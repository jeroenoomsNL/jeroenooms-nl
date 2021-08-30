import { ExternalLinkButton } from "../ExternalLink/ExternalLink";
import { ContentfulLogo, NetlifyLogo, NextjsLogo } from "../Icons/Icons";
import styles from "./TechStack.module.scss";

export const TechStack = () => (
  <div className="wrapper">
    <h2>My favorite tech stack</h2>

    <div className={styles.blocks}>
      <div className={styles.techBlock}>
        <h3>
          <NextjsLogo />
        </h3>
        <p>
          Next.js gives the best developer experience with all the features you
          need for production: hybrid static &amp; server rendering, TypeScript
          support, smart bundling, route pre-fetching, and more.
        </p>
        <div className={styles.buttonContainer}>
          <ExternalLinkButton
            href="https://nextjs.org"
            label="More about Next.js"
            title="Next.js"
          />
        </div>
      </div>
      <div className={styles.techBlock}>
        <h3>
          {" "}
          <object style={{ height: "30px", width: "auto" }}>
            <ContentfulLogo />
          </object>
        </h3>
        <p>
          A very powerfull headless content management system with graphql
          support. It&apos;s a dream for both developers and content managers!
        </p>
        <div className={styles.buttonContainer}>
          <ExternalLinkButton
            href="https://www.contentful.com/"
            label="More about Contentful"
            title="Contentful"
          />
        </div>
      </div>
      <div className={styles.techBlock}>
        <h3>
          <object style={{ height: "30px", width: "auto" }}>
            <NetlifyLogo />
          </object>
        </h3>
        <p>
          An intuitive Git-based workflow and powerful serverless platform to
          build, deploy, and collaborate on web apps.
        </p>
        <div className={styles.buttonContainer}>
          <ExternalLinkButton
            href="https://www.netlify.com/"
            label="More about Netlify"
            title="Netlify"
          />
        </div>
      </div>
    </div>
  </div>
);
