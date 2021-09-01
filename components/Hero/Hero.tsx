import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { ExternalLink } from "../ExternalLink/ExternalLink";
import { Github, Linkedin, Twitter } from "../Icons/Icons";
import styles from "./Hero.module.scss";
import { images } from "./HeroImages";

export interface ImageType {
  key: string;
  image: string;
  title: string;
}

interface ImageCardProps {
  image: ImageType;
}

const ImageCard = ({
  image: { image, title },
}: ImageCardProps): ReactElement => (
  <div className={styles.card}>
    <Image
      src={image}
      width="100"
      height="100"
      alt={title}
      title={title}
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
            src="/images/avatar.jpg"
            className={styles.avatar}
            alt="Jeroen Ooms, frontend developer. The thumb is a myth."
            title="Jeroen Ooms, frontend developer. The thumb is a myth."
            layout="responsive"
            width="100"
            height="100"
            priority={true}
            sizes="(max-width: 1349px) 100px, (max-width: 1999px) 150px, 200px"
            quality="100"
          />
        </div>
        <h1>
          Hi, my name is <strong>Jeroen Ooms</strong>!
        </h1>
        <p>
          I&apos;m a Dutch front-end developer at{" "}
          <ExternalLink
            href="https://xebia.com"
            label="Xebia"
            className="light"
          />
          .
          <br />
          Besides{" "}
          <ExternalLink
            href="https://github.com/jeroenoomsNL"
            label="code"
            title="Jeroen Ooms on Github"
            className="light"
          />{" "}
          I like tech, running, comics and craft beers.
        </p>

        <ul className={styles.icons}>
          <li>
            <ExternalLink
              href="https://twitter.com/jeroenooms"
              label={<Twitter className={styles.icon} />}
              title="Twitter"
            />
          </li>
          <li>
            <ExternalLink
              href="https://nl.linkedin.com/in/jeroenooms"
              label={<Linkedin className={styles.icon} />}
              title="Linkedin"
            />
          </li>
          <li>
            <ExternalLink
              href="https://github.com/jeroenoomsNL"
              label={<Github className={styles.icon} />}
              title="Github"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export const Hero = () => {
  const [imageSet, setImages] = useState([...images].slice(0, 20));

  useEffect(() => {
    const sortImages = () =>
      setImages([...images].sort(() => 0.5 - Math.random()).slice(0, 20));

    setTimeout(sortImages, 20000);
  }, []);

  return (
    <div className={styles.cards}>
      <InfoCard />
      {imageSet.map((image) => (
        <ImageCard image={image} key={image.key} />
      ))}
    </div>
  );
};
