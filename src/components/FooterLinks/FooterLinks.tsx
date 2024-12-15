import { Text, Container, ActionIcon, Group, rem, Image } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
import logo from "./../../assets/images/logo.png";
import classes from "./FooterLinks.module.css";
import { Link } from "react-router-dom";

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
      {
        label: "Instagram",
        link: "https://www.instagram.com/s.m.a.s.e.p?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
      {
        label: "Facebook",
        link: "https://www.facebook.com/profile.php?id=100093578005028",
      },
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
        target="_blank"
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
            <Link
              to={"https://www.facebook.com/profile.php?id=100093578005028"}
              target="_blank"
            >
              <IconBrandFacebook
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Link
              to={
                "https://www.instagram.com/s.m.a.s.e.p?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
              target="_blank"
            >
              <IconBrandInstagram
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </Link>
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
