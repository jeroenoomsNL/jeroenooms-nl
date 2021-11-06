import { ExternalLink, ExternalLinkButton } from "../ExternalLink/ExternalLink";
import {
  ContentfulLogo,
  GraphQLLogo,
  NetlifyLogo,
  NextjsLogo,
  StorybookLogo,
  TypescriptLogo,
  VSCodeLogo,
} from "../Icons/Icons";
import styles from "./TechStack.module.scss";

export const TechStack = () => (
  <section className="wrapper">
    <h2>My favorite tech stack</h2>

    <article className="intro">
      <p>
        Every developer must have it&apos;s preferred tech stack. Mine is the{" "}
        <ExternalLink href="https://jamstack.org" label="JAM stack" />, which
        literally means JavaScript, API &amp; Markup. With a JAM stack
        architecture, developers are able to build fast, secure and scalable web
        applications.
      </p>
    </article>

    <div className={styles.blocks}>
      <div className={styles.techBlock}>
        <h3>
          <TypescriptLogo style={{ width: "auto", height: "40px" }} />
        </h3>
        <p>
          TypeScript is a strongly typed programming language which builds on
          JavaScript giving you better tooling at any scale.
        </p>
        <div className={styles.buttonContainer}>
          <ExternalLinkButton
            href="https://www.typescriptlang.org"
            label="More about TypeScript"
            title="Learn more about TypeScript"
          />
        </div>
      </div>
      <div className={styles.techBlock}>
        <h3>
          <NextjsLogo style={{ width: "auto", height: "40px" }} />
        </h3>
        <p>
          Next.js (based on React) gives the best developer experience with all
          the features you need for production: hybrid static &amp; server
          rendering, TypeScript support, smart bundling, route pre-fetching, and
          more.
        </p>
        <div className={styles.buttonContainer}>
          <ExternalLinkButton
            href="https://nextjs.org"
            label="More about Next.js"
            title="Learn more about Next.js"
          />
        </div>
      </div>
      <div className={styles.techBlock}>
        <h3>
          <ContentfulLogo style={{ width: "auto", height: "40px" }} />
        </h3>
        <p>
          A very powerfull headless content management system with graphql
          support. It&apos;s a dream for both developers and content managers!
        </p>
        <div className={styles.buttonContainer}>
          <ExternalLinkButton
            href="https://www.contentful.com"
            label="More about Contentful"
            title="Learn more about Contentful"
          />
        </div>
      </div>
      <div className={styles.techBlock}>
        <h3>
          <NetlifyLogo style={{ width: "auto", height: "40px" }} />
        </h3>
        <p>
          An intuitive Git-based workflow and powerful serverless platform to
          build, deploy, and collaborate on web apps.
        </p>
        <div className={styles.buttonContainer}>
          <ExternalLinkButton
            href="https://www.netlify.com"
            label="More about Netlify"
            title="Learn more about Netlify"
          />
        </div>
      </div>

      <div className={styles.techBlock}>
        <h3>
          <GraphQLLogo style={{ width: "auto", height: "40px" }} />
        </h3>
        <p>
          GraphQL is a query language for APIs and a runtime for fulfilling
          those queries with your existing data. GraphQL provides a complete and
          understandable description of the data in your API, gives clients the
          power to ask for exactly what they need and nothing more.
        </p>
        <div className={styles.buttonContainer}>
          <ExternalLinkButton
            href="https://graphql.org"
            label="More about GraphQL"
            title="Learn more about GraphQL"
          />
        </div>
      </div>
      <div className={styles.techBlock}>
        <h3>
          <StorybookLogo style={{ width: "auto", height: "40px" }} />
        </h3>
        <p>
          Storybook is an open source tool for building UI components and pages
          in isolation. It streamlines UI development, testing, and
          documentation.
        </p>
        <div className={styles.buttonContainer}>
          <ExternalLinkButton
            href="https://storybook.js.org"
            label="More about Storybook"
            title="Learn more about Storybook"
          />
        </div>
      </div>
    </div>
  </section>
);
