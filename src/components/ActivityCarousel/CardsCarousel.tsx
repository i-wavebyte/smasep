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
import classes from "./CardsCarousel.module.css";
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
    image: "https://www.indexmaroc.com/wp-content/uploads/2015/10/Ifrane.jpg",
    title: "Residents MS training (1ère édition), 19-21 Février 2018",
    category: "Évènement",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/M%27diq_from_above.jpg/1200px-M%27diq_from_above.jpg",
    title: "1er congrès de la SMASEP autour de la SEP, 21-22 Juin 2019",
    category: "Évènement",
  },
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/333149923.jpg?k=912f14e6febe33b97d44ca222c2f7b04f4618a2ec58f025c60b771d66a7ab7d7&o=&hp=1",
    title: "Journée patients : «Hygiène de vie et SEP »,  22 juin 2019",
    category: "Évènement",
  },
  {
    image:
      "https://financesonline.com/uploads/2022/03/online-meeting-platform.jpg",
    title: "2ème congrès de la SMASEP (virtuel), du 03 au 31octobre 2020",
    category: "Évènement",
  },
  {
    image: "https://www.dirent.ma/wp-content/uploads/2021/10/Ifrane-Neige.jpg",
    title: "Residents MS training (2ème édition), 10-12 Janvier 2020",
    category: "Évènement",
  },
  {
    image:
      "https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider/public/thumbnails/image/city-panorama.-casablanca-morocco.-africa-marianna-ianovska.jpg?itok=h4FjZSIp",
    title:
      "Formation infirmiers, présentation du Tysabri et son utilisation, 19 novembre 2019",
    category: "Évènement",
  },
  {
    image:
      "https://cdn.prod.website-files.com/634e7aa49f5b025e1fd9e87b/652039f6d6eec22bc94097d5_Man_Having_Group_Videoconference_On_Laptop.jpeg",
    title:
      "Session conjointe SMN/SMASEP/ANLM, Webinars de Printemps de Neurologie,19 juin 2020",
    category: "Évènement",
  },
  {
    image:
      "https://www.exordo.com/blog/wp-content/uploads/2023/12/Resized-image.jpeg",
    title: "2ème congrès de la SMASEP (virtuel), du 03 au 31octobre 2020",
    category: "Évènement",
  },
  {
    image:
      "https://www.alc.manchester.ac.uk/study/open-days-and-tours/salc-study-ug-open-days500x298.jpg",
    title: "Journée patients : « Hygiène de vie et SEP », 31 octobre 2020",
    category: "Évènement",
  },
  {
    image: "https://leseco.ma/wp-content/uploads/2022/01/Fes-1.jpg",
    title: "SMASEP/ association",
    category: "Évènement",
  },
  {
    image:
      "https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_top5/public/thumbnails/image/koutoubia-mosque-minaret-located-at-medina-quarter-of-marrakesh-morocco-balate-dorin.jpg?itok=08hAHERp",
    title: "Congrès ENMG : 2 – 4 juin 2021, Marrakech",
    category: "Évènement",
  },
  {
    image:
      "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1641972977/cdqnve0zcpxtjcpx9ui8.jpg",
    title: "Congrès de la SMN 5 juin 2021, Marrakech",
    category: "Évènement",
  },
  {
    image:
      "https://www.exordo.com/blog/wp-content/uploads/2023/12/Resized-image.jpeg",
    title: "JNLF : 26- 28 Mai 2021, congrès digital",
    category: "Évènement",
  },
  {
    image:
      "https://content.r9cdn.net/rimg/dimg/69/1b/cca1e76b-city-13852-1633ad11236.jpg?width=1366&height=768&xhint=1966&yhint=1018&crop=true",
    title:
      "American Academy of Neurology AAN ,17-22 Avril 2021, San Francisco.",
    category: "Évènement",
  },
  {
    image:
      "https://www.geo.fr/imgre/fit/~1~geo~2021~04~05~2f590126-ce36-4eba-ade6-c51325730665.jpeg/1200x630/cr/wqkgIC8gR0VP/vienne-10-lieux-a-ne-pas-manquer-si-vous-visitez-la-capitale-autrichienne.jpg",
    title: "EAN : 19-22 Juin 2021, Vienne",
    category: "Évènement",
  },
  {
    image: "https://cdn.britannica.com/46/154246-050-7C72E12F/view-Rome.jpg",
    title: "Congrès Mondial de Neurologie, Rome 03- 07 octobre 2021.",
    category: "Évènement",
  },
  {
    image:
      "https://www.nosailleurs.com/wp-content/uploads/2023/05/visiter-vienne-3-jours.jpg",
    title: "ECTRIMS : 13 au 15 octobre 2021, Vienne ",
    category: "Évènement",
  },
];

export function CardsCarousel() {
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
        <Title>Évènements</Title>
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
