import {
  AspectRatio,
  BackgroundImage,
  Box,
  Center,
  Grid,
  Group,
  Image,
  Modal,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";
import React, { useEffect } from "react";
import videoThumbnail from "./../../assets/images/video-thumbnail.webp";
import { useDisclosure, useViewportSize } from "@mantine/hooks";

interface Congres {
  title: string;
  subTitle: string;
  ville: string;
  date: string;
  videos: Video[];
  ePosters: any[];
  banner: string;
}

interface Video {
  title: string;
  speaker: string;
  image: string;
  video: string;
}

export const Congresdata: Congres[] = [
  {
    title: "4éme Speaker tour",
    subTitle: "Autour de la sclérose en plaques",
    ville: "Ifrane",
    date: "13 et 14 Janvier 2023",
    banner: "https://www.welovebuzz.com/wp-content/uploads/2018/01/img51.jpg",
    videos: [
      {
        title: "Mot du Président",
        speaker: "Pr. Ilham SLASSI",
        image: videoThumbnail,
        video: "6iABHtsLBPM",
      },
      {
        title: "Atelier lecture pratique ",
        speaker: "Pr. Latifa ADARMOUCH",
        image: videoThumbnail,
        video: "dn-viPPEw74",
      },
      {
        title: "NMOSD et SEP : De la physiopathologie au traitement",
        speaker: "Pr. Ayman TOURBAH",
        image: videoThumbnail,
        video: "5AQTJTRYPcc",
      },
      {
        title: "Discussion",
        speaker: "",
        image: videoThumbnail,
        video: "1fPnx015dlk",
      },

      {
        title: "Télémédecine en Neurologie",
        speaker: "Dr. Marouane HAKAM",
        image: videoThumbnail,
        video: "22tYHYbuPEw",
      },
      {
        title: "Cas cliniques",
        speaker: "",
        image: videoThumbnail,
        video: "4GVIQD2duRQ",
      },

      {
        title: "LA SEP Quels diagnostics différentiels",
        speaker: "Pr. Ayman TOURBAH",
        image: videoThumbnail,
        video: "rYN7qcgHF1Q",
      },
      {
        title:
          "Les aspects administratifs et juridiques dans la prise en charge de la SEP",
        speaker: "",
        image: videoThumbnail,
        video: "M4SciK2Bg4M",
      },
      {
        title: "Progression et impact d’Ocrevus en traitement précoce",
        speaker: "Symposium Roche",
        image: videoThumbnail,
        video: "uuv1j5q7zkU",
      },
    ],
    ePosters: [],
  },

  {
    title: "5éme Speaker tour",
    subTitle: "tes",
    ville: "casablanca",
    date: "25 octobre 2023",
    videos: [
      {
        title: "Progression et impact d’Ocrevus en traitement précoce",
        speaker: "Symposium Roche",
        image:
          "https://e0.pxfuel.com/wallpapers/1005/683/desktop-wallpaper-morocco-page-7-casablanca-morocco.jpg",
        video: "uuv1j5q7zkU",
      },
    ],
    ePosters: [],
    banner:
      "https://t3.ftcdn.net/jpg/02/67/20/10/360_F_267201056_wcEH6uQ6xu5oNHtY9Hq3YOhDwe1zk1XX.jpg",
  },
];

const PrivateContent = ({ selected }: any) => {
  function renderTabList() {
    return Congresdata.map((congres) => {
      return (
        <Tabs.Tab value={congres.title} key={congres.title}>
          {congres.title}
        </Tabs.Tab>
      );
    });
  }
  const { width } = useViewportSize();
  function renderPanels() {
    return Congresdata.map((congres) => {
      return (
        <Tabs.Panel value={congres.title} key={congres.title}>
          <AspectRatio ratio={width < 700 ? 2 : 6} w={"100%"} mb={"xl"}>
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
                      fz={width < 800 ? "1.5em" : "3em"}
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
                      fz={width < 800 ? "1em" : "2em"}
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

          <Grid gutter={0}>{renderVideos(congres.videos)}</Grid>
        </Tabs.Panel>
      );
    });
  }
  const [selectedVideo, setSelectedVideo] = React.useState("");

  const [opened, { open, close }] = useDisclosure(false);
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  function handleOpenVideo(video: string) {
    setSelectedVideo(video);
    console.log("video", video);
    open();
  }

  function renderVideos(videos: Video[]) {
    return videos.map((video, index) => {
      return (
        <Grid.Col
          span={{ base: 12, sm: 6, lg: 3 }}
          onClick={() => handleOpenVideo(video.video)}
          key={video.title}
        >
          <Group w={"100%"} justify="center">
            <Box style={{ cursor: "pointer" }}>
              <AspectRatio ratio={16 / 9} w={"316px"}>
                <BackgroundImage src={video.image} radius="sm" p={"xl"}>
                  <Group w={"100%"} justify="center" h="100%">
                    <Text
                      c={"white"}
                      size="md"
                      ta={"center"}
                      fw={600}
                      style={{
                        textShadow: "0px 0px 4px #000000, 0px 0px 4px #000000",
                      }}
                    ></Text>
                  </Group>
                </BackgroundImage>
              </AspectRatio>
              <Text mt={"sm"} fw="600" size="md" w={300}>
                {video.title}
              </Text>
              <Text mb={"xl"} fw="600" c={"dimmed"} size="sm">
                {video.speaker || "..."}
              </Text>
            </Box>
          </Group>
        </Grid.Col>
      );
    });
  }

  return (
    <Box maw={"85rem"} m="auto" mt={"xl"}>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="auto"
        centered
      >
        <Modal.Body p="none">
          <AspectRatio ratio={16 / 9} w={"1024px"}>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share"
            ></iframe>
          </AspectRatio>
        </Modal.Body>
      </Modal>
      <Tabs defaultValue={selected} maw={"85rem"}>
        <Tabs.List>{renderTabList()}</Tabs.List>
        {renderPanels()}
      </Tabs>
    </Box>
  );
};

export default PrivateContent;
