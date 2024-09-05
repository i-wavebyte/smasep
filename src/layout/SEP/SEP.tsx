import { HeaderSimple } from "../../components/HeaderSimple/HeaderSimple";
import { CardsCarousel } from "../../components/CardsCarousel/CardsCarousel";
import { FooterLinks } from "../../components/FooterLinks/FooterLinks";
import { Box, Grid, Group, List, Paper, Text, Title } from "@mantine/core";
import { TableOfContentsFloating } from "./TableOfContentsFloating/TableOfContentsFloating";
import "./SEP.css";
import { useViewportSize } from "@mantine/hooks";
const SEP = () => {
  const { height, width } = useViewportSize();
  return (
    <div>
      <HeaderSimple></HeaderSimple>
      <Group w={"100%"} justify="center" px={"xl"} align="flex-start">
        <Grid justify="center" py={"xl"} align="flex-start">
          {width > 1000 && (
            <Grid.Col span={3} className="sticky-nav">
              <Paper withBorder p={"xl"} className="sticky-nav">
                <TableOfContentsFloating></TableOfContentsFloating>
              </Paper>
            </Grid.Col>
          )}

          <Grid.Col span={width > 1000 ? 9 : 12}>
            <Paper withBorder w={"100%"} p={"xl"}>
              <Title order={1} mb={"md"} c={"primaryBlue"} id="WSEP">
                Qu’est ce que la SEP ?
              </Title>
              <Text mb={"xs"}>
                La SEP est une maladie inflammatoire auto immune chronique
                caractérisée par une altération de la gaine de myéline (couche
                protectrice des fibres nerveuses) associée, à des degrés
                variables, à une dégénérescence axonale et neuronale.
              </Text>
              <Text mb={"xs"}>
                C’est la plus fréquente des affections inflammatoires du système
                nerveux central, et la première cause de handicap non
                traumatique chez l’adulte jeune. Son incidence est de 20 à
                180/100000 habitants/an. Il faut souligner la notion d’un
                gradient nord/sud, de sorte que la SEP est d’autant plus
                fréquente que l’on s’éloigne de l’équateur. Elle est aussi plus
                souvent retrouvée dans la population caucasienne.
              </Text>
              <Text mb={"xl"}>
                L’âge de début est classiquement entre 20 et 40 ans, et la
                prédominance féminine est de règle.
              </Text>
              <Title order={1} mb={"md"} c={"primaryBlue"} id="SEP5">
                La SEP en 5 rubriques
              </Title>
              <Title order={2} mb={"sm"} c={"primaryBlue.8"} id="CAUSE">
                Les causes
              </Title>
              <Text mb={"xs"}>
                Facteurs de risques environnementaux et style de vie: Certains
                facteurs sont incriminés sans preuve de lien direct :
              </Text>
              <Title mb={"xs"} order={6} c={"primaryBlue.9"}>
                ➡️ Certaines infections.
              </Title>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ Microbiote intestinal :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Il s’agit d’un écosystème microbien complexe impliqué dans la
                maturation et la fonction du cerveau, et incriminé dans la
                genèse de plusieurs maladies auto immunes, notamment du système
                nerveux central. La composition du microbiote intestinal est, en
                partie, impactée par le régime alimentaire sur le long cours.
              </Text>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ Obésité
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Il existe une association entre un indice de masse corporelle
                (IMC) élevé pendant l’enfance et l’adolescence et un risque
                élevé de SEP.
              </Text>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ Ensoleillement et vitamine D :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Un déficit en vitamine D, et donc un faible niveau
                d’ensoleillement, serait associé à un sur risque de SEP ainsi
                que de survenue de poussées.
              </Text>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ Tabac :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Le tabagisme, qu’il soit passif ou actif, est un facteur de
                risque certain. Les tabagiques ont un risque plus élevé de
                développer une SEP, ou des formes agressives de la maladie.
              </Text>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ La pollution atmosphérique :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Facteur indépendant, son rôle est démontré à travers différentes
                études.
              </Text>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ Régime alimentaire :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Le sel, les graisses d’origine animale auraient un rôle
                aggravant. À contrario, un régime pauvre en sel atténue
                l’activité de la maladie. En outre, les régimes pauvres en
                Gluten et en lactose n’ont démontré leur efficacité qu’en cas
                d’intol érance avérée.
              </Text>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ Autres :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Le taux de mélatonine, le mois de naissance, le statut
                socio-économique, l’urbanisation.
              </Text>
              <Title order={2} mb={"sm"} c={"primaryBlue.8"} id="SYMPT">
                Les symptôme
              </Title>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ Les manifestations visuelles :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                <List>
                  <List.Item>
                    La névrite optique rétrobulbaire (NORB): inflammation du
                    nerf de la vision, Vision floue, amputation du champ visuel.
                    Elle est très évocatrice quand elle s’accompagne d’une
                    douleur rétro-orbitaire à la mobilisation du globe oculaire.
                    La cécité étant exceptionnelle.
                  </List.Item>
                  <List.Item>
                    La diplopie (vision double), résultante d’une atteinte des
                    voies de l’oculomotricité.{" "}
                  </List.Item>
                </List>
              </Text>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ Les troubles moteurs :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                <List>
                  <List.Item>
                    Faiblesse de sévérité variable, d’un membre ou des 2 membres
                    inférieurs, d’un hémicorps ou des 4 membres.
                  </List.Item>
                  <List.Item>Troubles de l’équilibre et de la marche</List.Item>
                  <List.Item>Tremblement à l’action</List.Item>
                  <List.Item>Spasticité : raideur musculaire</List.Item>
                  <List.Item>Limitation du périmètre de marche</List.Item>
                </List>
              </Text>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ Les troubles sensitifs :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Sensations d’engourdissement, de fourmillements, de douleurs ou
                de décharges électriques de localisation variée : Le signe de
                Lhermitte represente une décharge electrique le long de la
                colonne vertébrale, à la flèxion de la tête.
              </Text>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ L’atteinte des nerfs crâniens :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Vertige, paralysie faciale, névralgie du trijumeau, troubles de
                l’élocution...
              </Text>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ Troubles génito-sphinctériens :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Troubles vésicaux (fuite ou rétention urinaire), et ano_rectaux
                (constipation ou incontinence anale). Troubles sexuels
                (impuissance, troubles de l’érection et de l’éjaculation,
                sècheresse vaginale, perte de la libido)
              </Text>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ Fatigue physique et psychique :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Il sagit d'une perte subjective d’énergie physique et /ou
                mentale. C’est un symptôme très fréquent dans la SEP (touche 90%
                des patients). Elle peut être aigue ou chronique et gêner les
                activités quotidie nnes.
              </Text>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ Troubles cognitifs :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Trouble de l’attention et la concentration, difficultés à
                mémoriser une information. Leur apparition p eut être précoce.
                La démence étant rare survient dans les formes évoluées.
              </Text>
              <Title order={6} c={"primaryBlue.9"}>
                ➡️ Troubles psychiatriques :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Humeur dépressive, labilité émotionnelle…
              </Text>
              <Title order={2} mb={"sm"} c={"primaryBlue.8"} id="DIAG">
                Diagnostic
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Le diagnostic est basé sur un nombre de critères. Ceux-ci sont
                organisés en critères consensuels dont les plus récents sont
                ceux de Mc Donald 2017 (lien) Par ailleurs, des diagnostics
                différentiels (pathologies pouvant mimer la sclérose en plaques)
                doivent être éliminés notamment les autres maladies
                démyélinisantes du système nerveux central : la neuromyélite
                optique (inflammation du nerf optique et de la moelle épinière),
                l’encéphalomyélite aigue disséminée (cerveau/moelle
                épinière/nerf optique) et les maladies de système (lupus
                érythémateux disséminé…).
              </Text>
              <Title order={1} mb={"md"} c={"primaryBlue"} id="TREAT">
                Les traitements
              </Title>
              <Text mb={"xs"}>
                Il faut savoir distinguer trois types de traitements : le
                traitement des poussées, le traitement de fond et les
                traitements des symptômes.
              </Text>
              <Title order={2} mb={"sm"} c={"primaryBlue.8"}>
                Le traitement des poussées
              </Title>
              <Text mb={"xs"}>
                Il ne prévient pas la poussée mais son but est de la raccourcir.
                Il est basé principalement sur la corticothérapie en bolus. Les
                échanges plasmatiques et les immunoglobulines sont réservés à
                des situations particulières. Ce traitement doit être précédé
                d’un bilan infectieux et associé à des traitements adjuvants.
              </Text>
              <Title order={2} mb={"sm"} c={"primaryBlue.8"}>
                Le traitement de fond
              </Title>
              <Text mb={"xs"}>
                Il n’existe pas encore de traitement curatif pour cette
                affection. Le but des traitements de fond est de modifier
                l’évolution de la maladie "disease modifying therapies", (DMT),
                avec l’objectif de diminuer la fréquence et la gravité des
                poussées, limiter le nombre de lésions à l’IRM et ralentir la
                progression de la maladie. Ce sont des médicaments de la classe
                des immunomodulateurs ou des Immunosuppresseurs. Ces médicaments
                sont classés, en fonction de leur efficacité mais aussi de leurs
                effets secondaires, en traitements de 1ère, 2ème, 3ème et 4ème
                ligne. Le choix est fait en fonction de la forme clinique, de la
                sévérité de la maladie, de la couverture médicale et du mode de
                vie du patient.
              </Text>
              <Text mb={"xs"}>
                Leur efficacité est jugée sur la base de scores et d’échelles
                cliniques et IRM.
              </Text>
              <Text mb={"xs"}>
                La grossesse constitue un point essentiel à prendre en compte
                dans la réflexion de la mise en place des traitements de fond.
                (Cf grossesse et SEP)
              </Text>
              <Title mb={"xs"} order={6} c={"primaryBlue.9"}>
                ➡️ Médicaments administrés par voie sous-cutanée ou
                intramusculaire
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                <List>
                  <List.Item>Avonex* (interféron bêta-1a)</List.Item>
                  <List.Item>Rebif* (interféron bêta-1a)</List.Item>
                  <List.Item>Betaferon (interféron bêta-1b)</List.Item>
                  <List.Item>
                    Copaxone* (acétate de glatiramère), non disponible au Maroc
                  </List.Item>
                  <List.Item>
                    Extavia* (interféron bêta-1b), non disponible au Maroc
                  </List.Item>
                  <List.Item>
                    Glatect* (acétate de glatiramère), non disponible au Maroc
                  </List.Item>
                  <List.Item>
                    Plegridy* (peginterféron bêta-1a), non disponible au Maroc
                  </List.Item>
                </List>
              </Text>
              <Title mb={"xs"} order={6} c={"primaryBlue.9"}>
                ➡️ Médicaments administrés par voie orale
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                <List>
                  <List.Item>Aubagio (Tériflunomide)</List.Item>
                  <List.Item>Gilenya (Fingolimod)</List.Item>
                  <List.Item>Mavenclad* (Cladribine)</List.Item>
                  <List.Item>
                    Mayzent* (Siponimod), non disponible au Maroc
                  </List.Item>
                  <List.Item>
                    Tecfidera* (Diméthylfumarate), non disponible au Maroc
                  </List.Item>
                  <List.Item>Imurel* (Azathioprine)</List.Item>
                </List>
              </Text>
              <Title mb={"xs"} order={6} c={"primaryBlue.9"}>
                ➡️ Médicaments administrés par voie intraveineuse
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                <List>
                  <List.Item>Ocrevus* (Ocrélizumab)</List.Item>
                  <List.Item>Tysabri* (Natalizumab)</List.Item>
                  <List.Item>Lemtrada* (Alemtuzumab), délivré en ATU</List.Item>
                  <List.Item>Endoxan* (Cyclophosphamide)</List.Item>
                  <List.Item>Mabthera*, Zelva* (Rituximab)</List.Item>
                </List>
              </Text>
              <Text mb={"xs"} pl={"lg"}>
                (ATU : autorisation temporaire d’utilisation)
              </Text>
              <Title order={2} mb={"sm"} c={"primaryBlue.8"}>
                Le traitement des symptômes
              </Title>
              <Text mb={"xs"}>
                La prise en charge des symptômes est multidisciplinaire :
                neurologue, kinésithérapeute, orthophoniste, psychologue,
                ergothérapeute, infirmiers…
              </Text>
              <Text mb={"xs"}>
                La spasticité : kinésithérapie et médicaments anti spastiques.
              </Text>
              <Text mb={"xs"}>
                La fatigue : elle nécessite le repos quand elle est concomitante
                à la poussée. En dehors de la poussée, il faut dépister et
                traiter les causes (douleur, troubles de l’humeur…), faire une
                activité physique régulière et fractionnée, des mini siestes, et
                certains médicaments peuvent avoir une efficacité variable.
              </Text>
              <Text mb={"xs"}>
                Les troubles urinaires : ils nécessitent un bilan (échographie
                vésicale et bilan urodynamique) afin d’adapter le traitement
                (anticholinergiques ou bétabloquants, auto/hétéro-sondage
                intermittent). Les infections urinaires doivent être prévenues,
                dépistées et traitées le cas échéant.
              </Text>
              <Text mb={"xs"}>
                Les troubles sexuels : consultation chez un sexologue peut
                s'avérer utile.
              </Text>
              <Text mb={"xs"}>
                Les troubles cognitifs : Le maintien de tâches cognitives
                quotidiennes en parallèle à une remédiation neurocognitive
                constituent une solution adéquate.
              </Text>
              <Text mb={"xs"}>
                La douleur : Le traitement est à adapter en fonction du type de
                douleur : antalgiques, antidépresseurs, antiépileptiques…
              </Text>
              <Text mb={"xs"}>
                Les troubles du transit : Privilégier les boissons abondantes et
                une alimentation riche en fibres ; les laxatifs sont prescrits
                au besoin.
              </Text>
              <Text mb={"xs"}>
                La dépression : Nécessite un suivi psychologique, un traitement
                antidépresseur au besoin.
              </Text>
              <Text mb={"xs"}>
                Le tremblement : Béta bloquants, toxine botulique, poignets
                lestés, bracelet pesants…
              </Text>
              <Title order={2} mb={"sm"} c={"primaryBlue.8"} id="HIST">
                Histoire naturelle de la maladie et évolution
              </Title>
              <Text mb={"xs"}>Il existe 4 formes cliniques évolutives :</Text>
              <Title order={6} mb={"xs"} c={"primaryBlue.9"}>
                ➡️ Syndrome clinique isolé (CIS) :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Syndrome clinique isolé (épisode unique de symptômes
                neurologiques évoquant la sclérose en plaques avec lésions de
                SEP à l’IRM)
              </Text>
              <Title order={6} mb={"xs"} c={"primaryBlue.9"}>
                ➡️ La forme Récurrente-Rémittente (RR) :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Elle évolue par poussées avec des remissions avec ou sans
                séquelles.
              </Text>
              <Title order={6} mb={"xs"} c={"primaryBlue.9"}>
                ➡️ La forme secondairement progressive (SP) :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                La forme RR peut évoluer vers une forme secondairement
                progressive après une période allant de 15 à 20 ans.
                L’aggravation est progressive avec réduction du nombre de
                poussées.
              </Text>
              <Title order={6} mb={"xs"} c={"primaryBlue.9"}>
                ➡️ La forme primaire progressive (PP) :
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Les symptômes s’installent sans poussées clairement définies et
                s’aggravent progressivement entrainant un handicap.
              </Text>
              <Title order={1} mb={"md"} c={"primaryBlue"} id="PRONOSTIC">
                Quel est le pronostic de la SEP ?
              </Title>
              <Text mb={"xs"} pl={"lg"}>
                Le pronostic de la SEP a été grandement amélioré au cours de la
                dernière décennie y compris au Maroc et ce grâce à une meilleure
                connaissance de la maladie, un diagnostic plus précoce, des
                moyens thérapeutiques plus nombreuses et plus efficaces, une
                meilleure couverture sanitaire de la population.
              </Text>
              <Text mb={"xs"} pl={"lg"}>
                Une prise en charge multidisciplinaire, une bonne hygiène de
                vie, un traitement précoce et adapté et une participation avisée
                de la part du patient sont les garants d’une bonne évolution. Le
                handicap peut être ainsi évité et la maladie peut alors être
                compatible avec une vie normale.
              </Text>
            </Paper>
          </Grid.Col>
        </Grid>
      </Group>
      <FooterLinks></FooterLinks>
    </div>
  );
};

export default SEP;
