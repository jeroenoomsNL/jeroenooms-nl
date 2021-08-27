import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { ExternalLink } from "../ExternalLink/ExternalLink";
import { Github, Linkedin, Twitter } from "../Icons/Icons";
import styles from "./Hero.module.scss";

interface ImageProps {
  key: string;
  image: string;
  title: string;
}

interface ImageCardProps {
  image: ImageProps;
}

const images: ImageProps[] = [
  {
    key: "camino-1",
    image: "/images/camino-1.jpg",
    title: "In 2020 I walked my first camino (pilgrimage) in Portugal.",
  },
  {
    key: "invader",
    image: "/images/invader.jpg",
    title:
      "Invader is a great artist who has placed Space Invader mosaic tiles in many cities all over the world. I always try to spot them when I'm on a city trip.",
  },
  {
    key: "noordt",
    image: "/images/noordt.jpg",
    title: "You should try the beers from Brouwerij Noordt Rotterdam.",
  },
  {
    key: "running-medals",
    image: "/images/running-medals.jpg",
    title:
      "In the last couple of years I ran multiple races like Dam tot Damloop and the City Pier City. Mainly distances between 10km and a half marathon. I'm not a pro, it's just for fun.",
  },
  {
    key: "copenhagen",
    image: "/images/copenhagen.jpg",
    title: "Copenhagen is one of my favorite cities.",
  },
  {
    key: "dam-tot-dam",
    image: "/images/dam-tot-dam.jpg",
    title: "I ran the Dam tot Damloop (16km) 3 times.",
  },
  {
    key: "groenzoom",
    image: "/images/groenzoom.jpg",
    title:
      "When I go out for a walk, I always take time for some nice pictures.",
  },
  {
    key: "marsupilami-hamburg",
    image: "/images/marsupilami-hamburg.jpg",
    title:
      "I've spotted this amazing Marsupilami grafiti mural in Hamburg. It's a character from the Spirou comics by André Franquin which I really like!",
  },
  {
    key: "camino-2",
    image: "/images/camino-2.jpg",
    title:
      "In 2020 I went to Portugal for my first camino towards Santiago de Compostella. It was a wunderful experience and the next one will follow very soon!",
  },
  {
    key: "comics",
    image: "/images/comics.jpg",
    title:
      "My favorite comic book series from Europe are TinTin, Asterix, Lucky Luke and of course the Belgian Spike and Suzy and their spin-offs. ",
  },
  {
    key: "running-sunset",
    image: "/images/running-sunset.jpg",
    title: "I like running in the mornings of evenings.",
  },
  {
    key: "speaker-on-conferences",
    image: "/images/speaker-on-conferences.jpg",
    title: "Sometimes I tell about my work on conferences and events.",
  },
  {
    key: "groenzoom-koeien",
    image: "/images/groenzoom-koeien.jpg",
    title:
      "Shot this picture from a canoe at one of the first dates with my girlfriend.",
  },
  {
    key: "kaapse-brouwers",
    image: "/images/kaapse-brouwers.jpg",
    title: "One of my favorites from Rotterdam, Kaapse Brouwsers.",
  },
  {
    key: "nl-is-flat",
    image: "/images/nl-is-flat.jpg",
    title: "The country of the Netherlands is flat, beatiful, but flat.",
  },
  {
    key: "american-comics",
    image: "/images/american-comics.jpg",
    title:
      "While I mainly read European comic books, I also like American comics. My favorite series are Batman, Teenage Mutant Ninja Turtles and Spider-Man.",
  },
  {
    key: "comic-magazines",
    image: "/images/comic-magazines.jpg",
    title: "I'm a comic collector, these magazines are very old.",
  },
  {
    key: "italy",
    image: "/images/italy.jpg",
    title:
      "My favorite countries for holidays are Spain and Italy. I'm learning Spanish by the way, como estas?!",
  },
  {
    key: "lucky-luke",
    image: "/images/lucky-luke.jpg",
    title:
      "Lucky Luke is ony of my favorite comic series from Belgium, these are really old, my father gave them to me.",
  },
  {
    key: "windmill",
    image: "/images/windmill.jpg",
    title:
      "I live in a part of The Netherlands where classic windmills can be discovered during a walk.",
  },
];

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
            sizes="250px"
            quality="100"
          />
        </div>
        <h1>
          Hi, I&apos;m <strong>Jeroen Ooms</strong>!
        </h1>
        <h2>
          I&apos;m a Dutch front-end developer.
          <br />
          Besides{" "}
          <a
            href="https://github.com/jeroenoomsNL"
            target="_blank"
            rel="noreferrer"
            title="Jeroen Ooms on Github"
          >
            code
          </a>{" "}
          I like tech, running, comics and craft beer.
        </h2>

        <ul className={styles.icons}>
          <li>
            <ExternalLink
              href="https://twitter.com/jeroenooms"
              label={<Twitter />}
              title="Twitter"
            />
          </li>
          <li>
            <ExternalLink
              href="https://nl.linkedin.com/in/jeroenooms"
              label={<Linkedin />}
              title="Linkedin"
            />
          </li>
          <li>
            <ExternalLink
              href="https://github.com/jeroenoomsNL"
              label={<Github />}
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
