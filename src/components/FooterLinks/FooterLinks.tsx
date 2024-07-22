import { Text, Container, ActionIcon, Group, rem, Image } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import logo from "./../../assets/images/logo.png";
import classes from "./FooterLinks.module.css";

const data = [
  //   {
  //     title: "About",
  //     links: [
  //       { label: "Features", link: "#" },
  //       { label: "Pricing", link: "#" },
  //       { label: "Support", link: "#" },
  //       { label: "Forums", link: "#" },
  //     ],
  //   },
  //   {
  //     title: "Project",
  //     links: [
  //       { label: "Contribute", link: "#" },
  //       { label: "Media assets", link: "#" },
  //       { label: "Changelog", link: "#" },
  //       { label: "Releases", link: "#" },
  //     ],
  //   },
  {
    title: "Communauté",
    links: [
      { label: "Twitter", link: "#" },
      { label: "Facebook", link: "#" },
      { label: "Youtube", link: "#" },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src={logo} fit="contain" />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 SMASEP.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
