import cx from "clsx";
import { useState } from "react";
import { Box, Text, Group, rem } from "@mantine/core";
import { IconListSearch } from "@tabler/icons-react";
import classes from "./TableOfContentsFloating.module.css";

const links = [
  { label: "Qu’est ce que la SEP ?", link: "#WSEP", order: 1 },
  { label: "La SEP en 5 rubriques", link: "#SEP5", order: 1 },
  { label: "Les causes", link: "#CAUSE", order: 2 },
  { label: "Les symptômes", link: "#SYMPT", order: 2 },
  { label: "Diagnostic", link: "#DIAG", order: 2 },
  { label: "Les traitements", link: "#TREAT", order: 2 },
  {
    label: "Histoire naturelle de la maladie et...",
    link: "#HIST",
    order: 2,
  },
  { label: "Quel est le pronostic de la SEP ? ", link: "#PRONOSTIC", order: 1 },
];

export function TableOfContentsFloating() {
  const [active, setActive] = useState(0);

  const items = links.map((item, index) => (
    <Box<"a">
      component="a"
      href={item.link}
      onClick={() => {
        setActive(index);
      }}
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: active === index })}
      style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
    >
      {item.label}
    </Box>
  ));

  return (
    <div className={classes.root}>
      <Group mb="md">
        <IconListSearch
          style={{ width: rem(18), height: rem(18) }}
          stroke={1.5}
        />
        <Text>Table of contents</Text>
      </Group>
      <div className={classes.links}>
        <div
          className={classes.indicator}
          style={{
            transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
          }}
        />
        {items}
      </div>
    </div>
  );
}
