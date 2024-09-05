import { Text } from "@mantine/core";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <Text mb={"sm"}>
        La{" "}
        <Text component="span" fw={600} c="blue">
          SMASEP
        </Text>{" "}
        a pour objectifs de :
      </Text>
      <Text mb={"sm"}>
        ➡️ Favoriser les échanges entre les professionnels médicaux et
        paramédicaux impliqués dans la prise en charge de la SEP et des maladies
        apparentées.
      </Text>
      <Text mb={"sm"}>
        ➡️ Favoriser les échanges entre les équipes de recherche impliquées dans
        le domaine de la SEP et des maladies apparentées.
      </Text>
      <Text mb={"sm"}>
        ➡️ Faciliter l’élaboration et la réalisation de projets scientifiques
        communs.
      </Text>
      <Text mb={"sm"}>
        ➡️ Développer un partenariat avec les organismes nationaux et
        internationaux pour promouvoir la recherche dans le domaine de la SEP et
        des maladies apparentées.
      </Text>
      <Text mb={"sm"}>
        ➡️ Promouvoir la formation des professionnels de santé sur la SEP et les
        maladies apparentées.
      </Text>
      <Text mb={"sm"}>➡️ Organiser des réunions scientifiques.</Text>
      <Text mb={"sm"}>
        ➡️ Proposer des recommandations sur la prise en charge diagnostique et
        thérapeutique.
      </Text>
      <Text mb={"sm"}>
        ➡️ Servir d’interlocuteur en tant que représentant de la communauté des
        spécialistes de la SEP au niveau national et international, notamment
        auprès des structures administratives, des sociétés savantes, des
        organisations professionnelles, des organisations syndicales, des
        compagnies pharmaceutiques, des associations de malades, des personnes
        morales et physiques ou de tout autre organisme.
      </Text>
    </div>
  );
};

export default AboutUs;
