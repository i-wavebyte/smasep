import React from "react";
import { Congresdata } from "./PrivateContent";
import {
  AspectRatio,
  BackgroundImage,
  Box,
  Center,
  Grid,
  GridCol,
  Overlay,
  Stack,
  Text,
} from "@mantine/core";
import { HeaderSimple } from "../../components/HeaderSimple/HeaderSimple";

const data = Congresdata;

const PrivatePreface = ({ setSelected }: any) => {
  function renderCongresList() {
    return Congresdata.map((congres) => {
      return (
        <GridCol
          span={{ base: 12, sm: 6, lg: 4 }}
          onClick={() => setSelected(congres.title)}
          key={congres.title}
        >
          <AspectRatio ratio={1} w={"100%"} mb={"xl"}>
            <Box h={"100%"} w={"100%"}>
              <BackgroundImage
                src={congres.banner}
                radius="sm"
                p={"xl"}
                h={"100%"}
                w={"100%"}
              >
                <Center h={"100%"}>
                  <Stack gap={0}>
                    <Text
                      c={"white"}
                      ta={"center"}
                      fz={"1.5em"}
                      style={{
                        textShadow:
                          "0px 0px 24px #000000, 0px 0px 24px #000000",
                      }}
                    >
                      {congres.subTitle}
                    </Text>
                    <Text
                      c={"white"}
                      ta={"center"}
                      fz={"1em"}
                      style={{
                        textShadow:
                          "0px 0px 12px #000000, 0px 0px 12px #000000",
                      }}
                    >
                      {congres.date} - {congres.ville}
                    </Text>
                  </Stack>
                </Center>
              </BackgroundImage>
            </Box>
          </AspectRatio>
        </GridCol>
      );
    });
  }

  return (
    <div>
      <Center h={"100%"} p={"lg"}>
        <Grid w={"1024px"} gutter={"xs"}>
          {renderCongresList()}
        </Grid>
      </Center>
    </div>
  );
};

export default PrivatePreface;
