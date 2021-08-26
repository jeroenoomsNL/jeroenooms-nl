import Head from "next/head";
import image from "next/image";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

interface ImageCardProps {
  image: number;
}

interface ImageLoaderProps {
  src: string;
}

const imageLoader = ({ src }: ImageLoaderProps) => {
  return `${src}?q=75`;
};

const ImageCard = ({ image }: ImageCardProps): ReactElement => (
  <div className={styles.card}>
    <Image
      loader={imageLoader}
      src={`/images/${image}.jpeg`}
      width="300"
      height="300"
      alt="Image"
      layout="responsive"
      loading="eager"
      sizes="20vw"
    />
  </div>
);

const InfoCard = () => (
  <div className={styles.cardInfo}>
    <div className={styles.info}>
      <div className={styles.infoContent}>
        <div className={styles.avatarContainer}>
          <Image
            src="/images/avatar.jpeg"
            className={styles.avatar}
            alt="Jeroen Ooms - frontend developer"
            layout="responsive"
            width="100"
            height="100"
            priority={true}
            sizes="150px"
          />
        </div>
        <h1>Hi, my name is Jeroen Ooms</h1>
        <h2>
          I&apos;m a Dutch front-end developer.
          <br />
          Besides{" "}
          <a
            href="https://github.com/jeroenoomsNL"
            target="_blank"
            rel="noreferrer"
            title="Jeroen Ooms @ Github"
          >
            code
          </a>{" "}
          I like tech, running, comics and craft beer.
        </h2>
        <div className={styles.links}>
          <a
            href="https://twitter.com/jeroenooms"
            target="_blank"
            rel="noreferrer"
            title="Jeroen Ooms @ Twitter"
          >
            <span className={styles.tooltip}>Follow me on Twitter</span>{" "}
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://nl.linkedin.com/in/jeroenooms"
            target="_blank"
            rel="noreferrer"
            title="Jeroen Ooms @ Linkedin"
          >
            <span className={styles.tooltip}>Visit my Linkedin profile</span>{" "}
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/jeroenoomsNL"
            target="_blank"
            rel="noreferrer"
            title="Jeroen Ooms @ Github"
          >
            <span className={styles.tooltip}>Visit my Github profile</span>{" "}
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const images: number[] = Array.from(Array(20).keys());
  const [imageSet, setImages] = useState(images);

  useEffect(() => {
    setImages(images.sort(() => 0.5 - Math.random()));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Jeroen Ooms - Dutch web dev</title>
        <meta name="description" content="Jeroen Ooms, web dev" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />
      </Head>

      <main className={styles.cards}>
        {imageSet.map((image) => (
          <ImageCard image={image} key={`image-${image}`} />
        ))}
        <InfoCard />
      </main>
    </div>
  );
}
