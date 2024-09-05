import { Carousel, Embla } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Box,
  Overlay,
  Badge,
} from "@mantine/core";
import classes from "./Announcements.module.css";
import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image: "https://d3lq8p6p6r1qxf.cloudfront.net/1601579611482.jpeg",
    title: "Save the date : Semaine du 14 février 2025",
    category: "Évènement",
  },
];

export function Annoucements() {
  const theme = useMantineTheme();
  const [embla, setEmbla] = useState<Embla | null>(null);
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Box px={124} py={64}>
      <Box mb={32} w={"100%"} ta={"center"}>
        <Title>Annonces</Title>
      </Box>
      <Carousel
        loop
        dragFree
        slideSize={{ base: "100%", sm: "25%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="start"
        slidesToScroll={mobile ? 1 : 1}
        getEmblaApi={setEmbla}
        plugins={[autoplay.current]}
      >
        {slides}
      </Carousel>
    </Box>
  );
}
