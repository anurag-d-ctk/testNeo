import type { Preview } from "@storybook/react";
import neoTheme from "../src/chakraTheme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    chakra: { theme: neoTheme },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
