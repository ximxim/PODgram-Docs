import React from "react";
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from "@theme-original/MDXComponents";
import Button from "@site/src/components/Button";
import FAQStructuredData from "./MDXComponents/FAQStructuredData";
import ImageCardComponent, {
  ImageCard,
  ImageCardGrid,
} from "./MDXComponents/ImageCard";

export default {
  // Reusing the default mapping
  ...MDXComponents,
  Button,
  FAQStructuredData,
  ImageCard,
  ImageCardGrid,
};
