import { useState } from "react";
import {
  Container,
  Group,
  Burger,
  Image,
  rem,
  Menu,
  Button,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";
import logo from "./../../assets/images/logo.png";
import {
  IconSettings,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconArrowsLeftRight,
  IconTrash,
  IconChevronDown,
  IconLockAccess,
  IconKey,
  IconUsersGroup,
  IconCalendarEvent,
  IconTicket,
  IconSpeakerphone,
} from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
const links = [
  { link: "/", label: "Accueil" },
  { link: "/SEP", label: "La SEP" },
  { link: "/congres", label: "Congrès Patients et familles" },
  { link: "/#SEP", label: "Qui sommes-nous" },
];

export function HeaderSimple({ navigate: nev }: any) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(window.location.pathname);
  const navigate = useNavigate();
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        //if link.link doesnt contain #, then navigate
        if (!link.link.includes("#")) {
          navigate(link.link);
          event.preventDefault();
          setActive(link.link);
        }
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Image src={logo} alt="Logo" w={250} />
        <Group gap={5} visibleFrom="xs">
          {items}

          <Menu shadow="md" width={200}>
            <Menu.Target>
              <a className={classes.link}>
                <Group gap={"xs"}>
                  <Text fz={"md"} fw={600}>
                    Espace professionnel
                  </Text>{" "}
                  <IconChevronDown size={16} />
                </Group>
              </a>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item
                onClick={() => navigate("/login")}
                leftSection={
                  <IconKey style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Connexion
              </Menu.Item>
              <Menu.Item
                onClick={() => navigate("/register")}
                leftSection={
                  <IconLockAccess style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Inscription
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
