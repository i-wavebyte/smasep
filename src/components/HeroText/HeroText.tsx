import { Title, Text, Button, Container } from "@mantine/core";
import { Dots } from "./Dots";
import classes from "./HeroText.module.css";

export function HeroText() {
  return (
    <div style={{ backgroundColor: "#DFDFDF", padding: 32 }} id="SEP">
      <Container className={classes.wrapper} size={"100%"} mx={"100px"}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            QUI SOMME{" "}
            <Text component="span" className={classes.highlight} inherit>
              NOUS
            </Text>{" "}
            ?
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" c="dimmed" className={classes.description}>
              La Société Marocaine de La Sclérose En Plaques SMASEP a été fondée
              le 09/03/ 2018, conformément au Dahir réglementant le droit des
              associations. C’est une société savante à but non lucratif et à
              vocation scientifique. Elle est composée de personnes physiques
              impliquées directement ou indirectement dans la prise en charge de
              la sclérose en plaques.
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button className={classes.control} size="lg">
              En savoir plus
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
