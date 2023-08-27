import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center">
      <Avatar size="xl" src="https://i.pravatar.cc/150?img=7" />
      <Heading size="lg" color="white">
        {greeting}
      </Heading>
      <Heading size="md" color="white">
        {bio1}
      </Heading>
      <Heading size="md" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
