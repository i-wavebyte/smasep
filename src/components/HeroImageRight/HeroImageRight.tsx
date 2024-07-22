import { Container, Title, Text, Button, Group } from "@mantine/core";
import classes from "./HeroImageRight.module.css";

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              La société marocaine de la{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ to: "#1CADE5", from: "#F9B24D" }}
              >
                sclérose en plaques
              </Text>{" "}
            </Title>

            <Text className={classes.description} mt={30}>
              Une société savante à but non lucratif et à vocation scientifique.
              Elle est composée de personnes physiques impliquées directement ou
              indirectement dans la prise en charge de la sclérose en plaques.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
}
