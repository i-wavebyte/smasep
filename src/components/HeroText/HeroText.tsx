import {
  Title,
  Text,
  Button,
  Container,
  Modal,
  Grid,
  Center,
  AspectRatio,
} from "@mantine/core";
import { Dots } from "./Dots";
import classes from "./HeroText.module.css";
import { useDisclosure } from "@mantine/hooks";
import AboutUs from "./AboutUs/AboutUs";

export function HeroText() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ backgroundColor: "#DFDFDF", padding: 32 }} id="SEP">
      <Modal
        opened={opened}
        onClose={close}
        title="Qui somme nous?"
        centered
        size={"55rem"}
      >
        <AboutUs />
      </Modal>

      <Container className={classes.wrapper} size={"100%"} mx={"100px"}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 20, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Center>
            <Grid w={"66%"}>
              <Grid.Col span={6}>
                <Title className={classes.title}>
                  QUI SOMME{" "}
                  <Text component="span" className={classes.highlight} inherit>
                    NOUS
                  </Text>{" "}
                  ?
                </Title>

                <Container p={0} size={600}>
                  <Text size="lg" c="dimmed" className={classes.description}>
                    La Société Marocaine de La Sclérose En Plaques SMASEP a été
                    fondée le 09/03/ 2018, conformément au Dahir réglementant le
                    droit des associations. C’est une société savante à but non
                    lucratif et à vocation scientifique. Elle est composée de
                    personnes physiques impliquées directement ou indirectement
                    dans la prise en charge de la sclérose en plaques.
                  </Text>
                </Container>

                <div className={classes.controls}>
                  <Button
                    className={classes.control}
                    size="xl"
                    fz="24"
                    onClick={open}
                  >
                    En savoir plus
                  </Button>
                </div>
              </Grid.Col>
              <Grid.Col span={6}>
                <AspectRatio ratio={16 / 9} w={"100%"}>
                  <iframe
                    src={`https://www.youtube.com/embed/NpEaa2P7qZI`}
                    title="YouTube video player"
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share"
                  ></iframe>
                </AspectRatio>
              </Grid.Col>
            </Grid>
          </Center>
        </div>
      </Container>
    </div>
  );
}
