import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
  Button,
  Grid,
  ThemeIcon,
} from "@mantine/core";
import {
  IconGauge,
  IconUser,
  IconCookie,
  IconSpeakerphone,
  IconCalendarEvent,
  IconUsersGroup,
} from "@tabler/icons-react";
import classes from "./FeaturesCards.module.css";

const mockdata = [
  {
    title: "Agenda",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
    icon: IconCalendarEvent,
  },
  {
    title: "Annonces",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: IconSpeakerphone,
  },
  {
    title: "Qui sommes-nous?",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: IconUsersGroup,
  },
];

export function FeaturesCards() {
  const items = mockdata.map((feature) => (
    <div key={feature.title}>
      <Group align="center" justify="center">
        <ThemeIcon
          size={44}
          radius="md"
          variant="gradient"
          gradient={{ deg: 133, from: "blue", to: "cyan" }}
        >
          <feature.icon
            style={{ width: rem(26), height: rem(26) }}
            stroke={1.5}
          />
        </ThemeIcon>
        <Text fz="lg" mt="sm" fw={600} component="span">
          {feature.title}
        </Text>
      </Group>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80} p={"xl"}>
        <Grid.Col span={{ base: 12, md: 12 }}>
          <SimpleGrid cols={{ base: 1, md: 3 }}>{items}</SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
