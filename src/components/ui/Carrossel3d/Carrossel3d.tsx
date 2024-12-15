import React, { useEffect, useState } from "react";
import "./Carrossel3d.css";
import { AspectRatio, Image, Modal, Stack } from "@mantine/core";
import roche from "./../../../assets/images/roche.png";
import biologix from "./../../../assets/images/biologix.png";
import merck from "./../../../assets/images/merck.png";
import sanofi from "./../../../assets/images/sanofi.png";
import novartis from "./../../../assets/images/novartis.png";
import { useDisclosure, useViewportSize } from "@mantine/hooks";

const partners = [
  { name: "roche", logo: roche, video: "NpEaa2P7qZI" },
  { name: "biologix", logo: biologix, video: "NpEaa2P7qZI" },
  { name: "merck", logo: merck, video: "NpEaa2P7qZI" },
  { name: "novartis", logo: novartis, video: "NpEaa2P7qZI" },
  { name: "sanofi", logo: sanofi, video: "NpEaa2P7qZI" },
];

const Carrossel3d = () => {
  useEffect(() => {
    const container = document.querySelector(".container") as HTMLElement;
    if (container) {
      const containercarrossel = container.querySelector(
        ".container-carrossel"
      ) as HTMLElement;
      const carrossel = container.querySelector(".carrossel") as HTMLElement;
      if (!carrossel || !containercarrossel) return;
      const carrosselItems = carrossel.querySelectorAll(
        ".carrossel-item"
      ) as NodeListOf<HTMLElement>;

      // Iniciamos variables que cambiaran su estado.
      let isMouseDown = false;
      let currentMousePos = 0;
      let lastMousePos = 0;
      let lastMoveTo = 0;
      let moveTo = 0;

      const createcarrossel = () => {
        const carrosselProps = onResize();
        const length = carrosselItems.length; // Longitud del array
        const degress = 360 / length; // Grados por cada item
        const gap = 100; // Espacio entre cada item
        const tz = distanceZ(carrosselProps.w, length, gap);

        const height = calculateHeight(tz);

        container.style.width = tz * 2 + gap * length + "px";
        container.style.height = height + "px";

        carrosselItems.forEach((item, i) => {
          const degressByItem = degress * i + "deg";
          item.style.setProperty("--rotatey", degressByItem);
          item.style.setProperty("--tz", tz + "px");
        });
      };

      // Funcion que da suavidad a la animacion
      const lerp = (a: any, b: any, n: any) => {
        return n * (a - b) + b;
      };

      // https://3dtransforms.desandro.com/carousel
      const distanceZ = (widthElement: any, length: any, gap: any) => {
        return widthElement / 2 / Math.tan(Math.PI / length) + gap; // Distancia Z de los items
      };

      // Calcula el alto del contenedor usando el campo de vision y la distancia de la perspectiva
      const calculateHeight = (z: any) => {
        const t = Math.atan((90 * Math.PI) / 180 / 2);
        const height = t * 2 * z;

        return height;
      };

      // Obtiene la posicion X y evalua si la posicion es derecha o izquierda
      const getPosX = (x: any) => {
        currentMousePos = x;

        moveTo = currentMousePos < lastMousePos ? moveTo - 2.5 : moveTo + 2.5;

        lastMousePos = currentMousePos;
      };

      const update = () => {
        lastMoveTo = lerp(moveTo, lastMoveTo, 0.05);
        carrossel.style.setProperty("--rotatey", lastMoveTo + "deg");

        requestAnimationFrame(update);
      };

      const onResize = () => {
        // Obtiene la propiedades del tamaño de carrossel
        const boundingcarrossel = containercarrossel.getBoundingClientRect();

        const carrosselProps = {
          w: boundingcarrossel.width,
          h: boundingcarrossel.height,
        };

        return carrosselProps;
      };

      const initEvents = () => {
        // Eventos del mouse
        carrossel.addEventListener("mousedown", () => {
          isMouseDown = true;
          carrossel.style.cursor = "grabbing";
        });
        carrossel.addEventListener("mouseup", () => {
          isMouseDown = false;
          carrossel.style.cursor = "grab";
        });
        container.addEventListener("mouseleave", () => (isMouseDown = false));

        carrossel.addEventListener(
          "mousemove",
          (e) => isMouseDown && getPosX(e.clientX)
        );

        // Eventos del touch
        carrossel.addEventListener("touchstart", () => {
          isMouseDown = true;
          carrossel.style.cursor = "grabbing";
        });
        carrossel.addEventListener("touchend", () => {
          isMouseDown = false;
          carrossel.style.cursor = "grab";
        });
        container.addEventListener(
          "touchmove",
          (e) => isMouseDown && getPosX(e.touches[0].clientX)
        );

        window.addEventListener("resize", createcarrossel);

        update();
        createcarrossel();
      };

      //get all partner-images
      const partnerImages = document.querySelectorAll(
        ".partner-image, .partner-image img"
      ) as NodeListOf<HTMLElement>;
      //disable drag and drop for partner images
      partnerImages.forEach((image) => {
        image.ondragstart = () => false;
      });
      const autoRotateInterval = setInterval(() => {
        moveTo += 1; // Adjust this value to control the rotation speed
      }, 200);
      initEvents();
    }
  }, []);
  const [opened, { open, close }] = useDisclosure(false);

  const [selectedPartner, SetSelectedPartner] = useState({
    name: "",
    logo: "",
    video: "NpEaa2P7qZI",
  });

  function openModal(partner: string) {
    SetSelectedPartner(
      getPartner(partner) || { name: "", logo: "", video: "NpEaa2P7qZI" }
    );
    open();
    console.log(partner);
  }

  function getPartner(name: string) {
    return partners.find((partner) => partner.name === name);
  }
  const { width } = useViewportSize();
  return (
    <div className="conteudo__geral">
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        size={"lg"}
      >
        <Stack w={"100%"} align="center">
          <Image
            src={selectedPartner.logo}
            alt="roche"
            component="img"
            className="partner-image"
            w={"128"}
          />
          <AspectRatio ratio={16 / 9} w={"100%"}>
            <iframe
              src={`https://www.youtube.com/embed/${selectedPartner.video}`}
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
        </Stack>
      </Modal>
      <div className="container">
        <div className="container-carrossel">
          <div className="carrossel">
            <div className="carrossel-item" onClick={() => openModal("roche")}>
              <div>
                <Image
                  src={roche}
                  alt="roche"
                  component="img"
                  className="partner-image"
                />
              </div>
            </div>
            <div className="carrossel-item" onClick={() => openModal("merck")}>
              <div>
                <Image
                  src={merck}
                  alt="merck"
                  component="img"
                  className="partner-image"
                />
              </div>
            </div>
            <div
              className="carrossel-item"
              onClick={() => openModal("biologix")}
            >
              <div>
                <Image
                  src={biologix}
                  alt="biologix"
                  component="img"
                  className="partner-image"
                />
              </div>
            </div>
            <div className="carrossel-item" onClick={() => openModal("sanofi")}>
              <div>
                <Image
                  src={sanofi}
                  alt="sanofi"
                  component="img"
                  className="partner-image"
                />
              </div>
            </div>
            <div
              className="carrossel-item"
              onClick={() => openModal("novartis")}
            >
              <div>
                <Image
                  src={novartis}
                  alt="novartis"
                  component="img"
                  className="partner-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrossel3d;
