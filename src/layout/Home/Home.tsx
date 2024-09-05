import { Group, Title } from "@mantine/core";
import React from "react";
import Events from "../../components/Events/Events";
import { FooterLinks } from "../../components/FooterLinks/FooterLinks";
import { HeroImageRight } from "../../components/HeroImageRight/HeroImageRight";
import { HeroText } from "../../components/HeroText/HeroText";
import Carrossel3d from "../../components/ui/Carrossel3d/Carrossel3d";
import { HeaderSimple } from "../../components/HeaderSimple/HeaderSimple";
import { CardsCarousel } from "../../components/ActivityCarousel/CardsCarousel";
import { Annoucements } from "../../components/Announcements/Announcements";

const Home = () => {
  return (
    <div>
      <HeaderSimple></HeaderSimple>
      <HeroImageRight></HeroImageRight>
      {/* <FeaturesCards></FeaturesCards> */}
      <Annoucements></Annoucements>
      <HeroText></HeroText>
      <CardsCarousel></CardsCarousel>
      <Group w={"100%"} justify="center" py={"xl"} mb={0}>
        <Title order={1} c={"primaryBlue.6"}>
          NOS PARTENAIRES
        </Title>
      </Group>
      <Carrossel3d></Carrossel3d>

      <FooterLinks></FooterLinks>
    </div>
  );
};

export default Home;
