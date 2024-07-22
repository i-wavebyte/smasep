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
  Select,
} from "@mantine/core";
import emailjs from "@emailjs/browser";
import classes from "./RegisterTitle.module.css";
import { IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
export function RegisterTitle() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [ville, setVille] = useState("");
  const [pays, setPays] = useState("");
  const [fonction, setFonction] = useState("");
  const [org, setOrg] = useState("");
  const size = 245;

  function createAndFillForm() {
    // Create a new FormData object
    const formData = new FormData();
    // Fill the form data with the values
    formData.append("nom", nom);
    formData.append("prenom", prenom);
    formData.append("email", email);
    formData.append("ville", ville);
    formData.append("pays", pays);
    formData.append("fonction", fonction);
    formData.append("org", org);
    // Return the form data
    return formData;
  }

  function appendInputToForm(form: any, name: any, value: any) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }
  function handleRegister() {
    //print all the values
    console.log(nom);
    console.log(prenom);
    console.log(email);
    console.log(ville);
    console.log(pays);
    console.log(fonction);
    console.log(org);
    notifications.show({
      title: "Inscription réussie",
      message: "Votre demande est en attente de validation",
      color: "green",
    });

    // Create a new FormData object
    const form = document.createElement("form");
    form.style.display = "none"; // Hide the form

    // Append inputs to the form
    appendInputToForm(form, "nom", nom);
    appendInputToForm(form, "prenom", prenom);
    appendInputToForm(form, "email", email);
    appendInputToForm(form, "ville", ville);
    appendInputToForm(form, "pays", pays);
    appendInputToForm(form, "fonction", fonction);
    appendInputToForm(form, "org", org);

    // Append the form to the document body
    document.body.appendChild(form);

    emailjs
      .sendForm("service_7woalug", "template_afpxyo7", form, {
        publicKey: "user_181q27WhNCjCBxBtLCp6j",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }

  return (
    <Container size={600} my={40}>
      <Title ta="center" className={classes.title}>
        S'enregistrer
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        <IconLock size={"14"}></IconLock> pour accéder au contenu privé
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Group justify="stretch">
          <TextInput
            label="Nom"
            placeholder="Nom"
            value={nom}
            onChange={(event) => setNom(event.currentTarget.value)}
            required
            w={size}
          />
          <TextInput
            label="Prénom"
            placeholder="Prénom"
            value={prenom}
            onChange={(event) => setPrenom(event.currentTarget.value)}
            required
            w={size}
          />
        </Group>
        <TextInput
          label="Email"
          placeholder="email@adresse.com"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          required
          w={"100%"}
        />
        <Group justify="stretch">
          <TextInput
            label="Ville"
            placeholder="Casablanca"
            value={ville}
            onChange={(event) => setVille(event.currentTarget.value)}
            required
            w={size}
          />
          <TextInput
            label="Pays"
            placeholder="Maroc"
            value={pays}
            onChange={(event) => setPays(event.currentTarget.value)}
            required
            w={size}
          />
        </Group>
        <Select
          label="Fonction"
          data={["Médecin", "Professionel de santé", "Etudiant(e) en Médecine"]}
          placeholder="Choisir une fonction"
          value={fonction}
          onChange={(value) => setFonction(value || "")}
          required
        />
        <Select
          label="Organisme"
          data={["Hôpital publique", "CHU", "Libéral", "Autre"]}
          placeholder="Choisir un organisme"
          value={org}
          onChange={(value) => setOrg(value || "")}
          required
        />
        <Group justify="space-between" mt="lg"></Group>
        <Button fullWidth mt="xs" onClick={handleRegister}>
          Connexion
        </Button>
      </Paper>
    </Container>
  );
}
