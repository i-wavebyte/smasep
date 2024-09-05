import React from "react";
import { HeaderSimple } from "../../components/HeaderSimple/HeaderSimple";
import {
  AspectRatio,
  BackgroundImage,
  Box,
  Grid,
  Group,
  Modal,
  rem,
  Stack,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconCalendar,
} from "@tabler/icons-react";
import videoThumbnail from "./../../assets/images/video-thumbnail.webp";
import { useDisclosure } from "@mantine/hooks";
const videos = [
  {
    title: "التصلب اللويحي ومزاولة الحياة الطبيعية",
    speaker: "Phd. السلاسي سنو إلهام",
    image: videoThumbnail,
    video: "LidSdRlyMD0",
  },
  {
    title: "التصلب اللويحي والتغدية",
    speaker: "Phd. موطيع وفاء",
    image: videoThumbnail,
    video: "VndkW4TRXdc",
  },
  {
    title: "التصلب اللويحي والنشاط المعرفي",
    speaker: "Phd. المتوكل بشرى",
    image: videoThumbnail,
    video: "xr8qleyXVAQ",
  },
  {
    title: "التصلب اللويحي والنشاط البدني",
    speaker: "Phd. موطيع وفاء",
    image: videoThumbnail,
    video: "i7LzVL8flPY",
  },
  {
    title: "Questions et réponses",
    speaker: "",
    image:
      "https://hbr.org/resources/images/article_assets/2023/06/Jun23_23_1398880959.jpg",
    video: "wTOYYK7hQFA",
  },
];
const Congres = () => {
  const [selectedVideo, setSelectedVideo] = React.useState("");

  const [opened, { open, close }] = useDisclosure(false);

  function handleOpenVideo(video: string) {
    setSelectedVideo(video);
    console.log("video", video);

    open();
  }
  function renderVideos() {
    return videos.map((video, index) => {
      return (
        <Grid.Col span={3} onClick={() => handleOpenVideo(video.video)}>
          <Box style={{ cursor: "pointer" }}>
            <AspectRatio ratio={16 / 9} w={"316px"}>
              <BackgroundImage src={video.image} radius="sm" p={"xl"}>
                <Group w={"100%"} justify="center" h="100%">
                  <Text
                    c={"white"}
                    size="xl"
                    ta={"center"}
                    fw={600}
                    style={{
                      textShadow: "0px 0px 4px #000000, 0px 0px 4px #000000",
                    }}
                  >
                    {video.title}
                  </Text>
                </Group>
              </BackgroundImage>
            </AspectRatio>
            <Text mt={"sm"} mb={"xl"} fw="600">
              {video.speaker}
            </Text>
          </Box>
        </Grid.Col>
      );
    });
  }
  const iconStyle = { width: rem(12), height: rem(12) };
  return (
    <>
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
      <HeaderSimple></HeaderSimple>
      <Stack align="center" py={"xl"} bg={"primaryBlue"}>
        <Title c={"white"} order={1}>
          Congrès digital patients et familles
        </Title>
        <Title c={"white"} order={2} mb={"lg"}>
          La sclérose en plaques et style de vie
        </Title>
      </Stack>
      <Stack w={"100%"} align="center" mt={"lg"} px={"xl"}>
        <Tabs defaultValue="gallery" w={"85rem"}>
          <Tabs.List>
            <Tabs.Tab
              value="gallery"
              leftSection={<IconCalendar style={iconStyle} />}
            >
              Octobre 2020
            </Tabs.Tab>
            {/* <Tabs.Tab
              value="messages"
              leftSection={<IconCalendar style={iconStyle} />}
            >
              Octobre 2024 (test)
            </Tabs.Tab> */}
          </Tabs.List>

          <Tabs.Panel value="gallery">
            <Text mt={"xl"} size="xl" fw={600} mb={0} pb={0}>
              coordination : Dr.ميضافي نائلة et Dr.منير الزوبي{" "}
            </Text>

            <Grid mt={"xl"}>{renderVideos()}</Grid>
          </Tabs.Panel>

          <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
        </Tabs>
      </Stack>
    </>
  );
};

export default Congres;
