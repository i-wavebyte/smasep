import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./AuthenticationTitle.module.css";
import { IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

export function AuthenticationTitle() {
  const password = "smasep20";
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  function checkPassword() {
    if (value === password) {
      console.log("password correct");
      notifications.show({
        title: "Le mot de passe entré est correct",
        message: "Bienvenue sur le site",
        color: "green",
      });
      window.localStorage.setItem("password", password);
      navigate("/private");
    } else {
      notifications.show({
        title: "Le mot de passe entré est incorrect",
        message: "Veuillez réessayer",
        color: "red",
      });
      console.log("password incorrect");
    }
  }
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Bienvenue
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        <IconLock size={"14"}></IconLock> Contenu privé
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <PasswordInput
          label="Mot de passe"
          placeholder="saisissez votre mot de passe ici"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          required
        />
        <Group justify="space-between" mt="lg"></Group>
        <Button fullWidth mt="xs" onClick={checkPassword}>
          Connexion
        </Button>
      </Paper>
    </Container>
  );
}
