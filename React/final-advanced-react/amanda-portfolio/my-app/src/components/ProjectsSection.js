import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack, HStack, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Define the Card component
const Card = ({ title, description, imageSrc }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={imageSrc} alt={title} />
    <Box p="6">
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
      <HStack mt={2} color="blue.500">
        <Text>Learn more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </Box>
  </Box>
);

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <SimpleGrid columns={2} spacing={8} mt={6}>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;