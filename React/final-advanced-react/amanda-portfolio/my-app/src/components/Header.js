import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:hello@example.com",
    label: "Email",
  },
  {
    icon: faGithub,
    url: "https://github.com",
    label: "GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    label: "Medium",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    label: "Stack Overflow",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const headerRef = useRef(null);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      headerRef.current.style.transform = "translateY(-200px)";
    } else {
      headerRef.current.style.transform = "translateY(0)";
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Box
    ref={headerRef}
    position="fixed"
    top={0}
    left={0}
    right={0}
    bg="#18181b"
    zIndex={1000}
    transition="transform 0.3s ease-in-out"
    >
      <Box color="white" maxW="1280px" mx="auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={item.icon} size="lg" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects-section" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="/#contactme-section" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
