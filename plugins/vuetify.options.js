// import '@/assets/css/global.scss'

export const options = {
    // rtl: true,
    theme: {
      dark: false,
      default: "light",
      disable: false,
      options: {
        cspNonce: undefined,
        customProperties: true,
        minifyTheme: undefined,
        themeCache: undefined,
      },
      themes: {
        light: { 
          primary: '#cbbfc6',
          secondary: '#f79c42',
          accent: '#5f372a', 
          error: "#f3f1ec",
          info: '#645f5c',
          success: '#342221',
          warning: '#2e3939',
        },
      },
    },
    // theme: {
    //   light: false, // From 2.0 You have to select the theme dark or light here
    //   themes: {
    //     light: {
    //       primary: '#ff7100' // a color that is not in the material colors palette - class="primary--text"
    //     }
    //   }
    // },
  
    options: {
      minifyTheme: function (css) {
        return process.env.NODE_ENV === "production"
          ? css.replace(/[\s|\r\n|\r|\n]/g, "")
          : css;
      },
    },
  };
  
  export default function getVuetifyOptions(context) {
    return options;
  }
  