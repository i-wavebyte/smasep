import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Text,
  rem,
} from "@mantine/core";
import React from "react";

const Events = () => {
  return (
    <Box p={rem(100)} px={rem(300)}>
      <Grid gutter={30}>
        <Grid.Col span={4}>
          <Card padding="lg" radius="md" withBorder>
            <Card.Section>
              <AspectRatio ratio={16 / 5}>
                <Image
                  src="https://img.freepik.com/free-photo/abstract-blurred-people-seminar-event-background_1439-7.jpg"
                  height={100}
                  alt="Norway"
                />
              </AspectRatio>
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={600} fz={"xl"}>
                Évènements
              </Text>
            </Group>

            <Text size="sm" c="dimmed">
              les derniers événements planifié
            </Text>

            <Button color="primaryBlue" fullWidth mt="md" radius="md">
              Consulter
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card padding="lg" radius="md" withBorder>
            <Card.Section>
              <AspectRatio ratio={16 / 5}>
                <Image
                  src="https://pbs.twimg.com/media/GJCABV2WkAAaCkn.jpg"
                  height={100}
                  alt="Norway"
                />
              </AspectRatio>
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={600} fz={"xl"}>
                Annonces
              </Text>
            </Group>
            <Text size="sm" c="dimmed">
              Quoi de neuf ?
            </Text>
            <Button color="primaryBlue" fullWidth mt="md" radius="md">
              Decouvrir
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card padding="lg" radius="md" withBorder>
            <Card.Section>
              <AspectRatio ratio={16 / 5}>
                <Image
                  src="https://timewellscheduled.com/wp-content/uploads/2019/05/Schedule.jpg"
                  height={100}
                  alt="Norway"
                />
              </AspectRatio>
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={600} fz={"xl"}>
                Agenda
              </Text>
            </Group>
            <Text size="sm" c="dimmed">
              Nos plans
            </Text>
            <Button color="primaryBlue" fullWidth mt="md" radius="md">
              voir
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default Events;
