import type, { Preview } from "@storybook/react";

// styles
import "../styles/css/homepage.css";
import "../styles/css/utillities.css";
import "../styles/css/detail.css";
import "../styles/css/checkout.css";
import "../styles/css/complete-checkout.css";
import "../styles/css/sign-in.css";
import "../styles/css/sign-up.css";
import "../styles/css/sign-up-photo.css";
import "../styles/css/sign-up-success.css";
import "../styles/css/404-not-found.css";
import "../styles/css/sidebar.css";
import "../styles/css/overview.css";
import "../styles/css/transactions.css";
import "../styles/css/transactions-detail.css";
import "../styles/css/edit-profile.css";


// import * as nextImage from "next/image";
// import {DumpComponent} from '../mock/storyconfig'
// // import path from "path";



// Object.defineProperty(nextImage, 'default', {
//   configurable: true,
//   value: (props: any) => DumpComponent(props)
// })


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      }, 
    },
  },
};

export default preview;
