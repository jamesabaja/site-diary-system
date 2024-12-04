import { css, Interpolation, RuleSet } from 'styled-components'

type Colours = {
  base: string
  _900: string
  _800: string
  _700: string
  _600: string
  _500: string
  _400: string
  _300: string
  _200: string
  _100: string
  _50: string
}

type NeutralColours = {
  darkText: string
  mediumText: string
  lightText: string
  border: string
  surface: string
  background: string
  white: string
}

type SemanticColours = {
  success: string
  successDark: string
  successLight: string
  warning: string
  warningDark: string
  warningLight: string
  error: string
  errorDark: string
  errorLight: string
}

type OtherColours = {
  gold: string
  hazel: string
  brown: string
  orange: string
  yellow: string
  lime: string
  pine: string
  cyan: string
  purple: string
  pink: string
  red: string
  darkRed: string
}

type ThemeColours = {
  primaryColour: string
  buttonTextColour: string
  primaryTextColour: string
}

type AIColours = {
  light: string
  dark: string
  animationColourA: string
  animationColourB: string
}

export type BuildPassTheme = {
  breakpoints: {
    xxl: number
    xl: number
    lg: number
    md: number
    sm: number
  }

  borderRadius: {
    small: string
    medium: string
    large: string
    max: string
  }

  media: {
    xxl: (args_0: TemplateStringsArray) => RuleSet<object>
    xl: (args_0: TemplateStringsArray) => RuleSet<object>
    lg: (args_0: TemplateStringsArray) => RuleSet<object>
    md: (args_0: TemplateStringsArray) => RuleSet<object>
    sm: (args_0: TemplateStringsArray) => RuleSet<object>
  }

  modal: {
    xsmall: number
    small: number
    medium: number
    large: number
  }

  colour: {
    primary: Colours
    secondary: Colours
    semantic: SemanticColours
    neutral: NeutralColours
    other: OtherColours
    link: {
      base: string
    }
    theme: ThemeColours
    ai: AIColours
  }

  sideNav: {
    fullWidth: number
    collapsedWidth: number
  }

  font: {
    display01: Interpolation<BuildPassTheme>
    display02: Interpolation<BuildPassTheme>
    heading01: Interpolation<BuildPassTheme>
    heading02: Interpolation<BuildPassTheme>
    heading03: Interpolation<BuildPassTheme>
    heading04: Interpolation<BuildPassTheme>
    label01: Interpolation<BuildPassTheme>
    label02: Interpolation<BuildPassTheme>
    subheading01: Interpolation<BuildPassTheme>
    subheading02: Interpolation<BuildPassTheme>
    body01: Interpolation<BuildPassTheme>
    body02: Interpolation<BuildPassTheme>
    body03: Interpolation<BuildPassTheme>
    caption01: Interpolation<BuildPassTheme>
    caption02: Interpolation<BuildPassTheme>
    footer: Interpolation<BuildPassTheme>
  }
}

const mediaWrapper =
  (size: number) =>
  (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${size / 16}rem) {
      ${css(...args)}
    }
  `

export const buildPassTheme: BuildPassTheme = {
  sideNav: {
    fullWidth: 256,
    collapsedWidth: 80,
  },
  borderRadius: {
    small: '4px', // Round - default - typically use for buttons, inputs, spans, icons, small cards
    medium: '6px', // Rounder - used for most cards, wrappers, some larger/primary buttons
    large: '8px', // Rounderer - used to accent larger cards, wrappers, modals
    max: '999px', // Roundest - used for round edges
  },
  breakpoints: {
    xxl: 1600,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 576,
  },
  media: {
    xxl: mediaWrapper(1600),
    xl: mediaWrapper(1280),
    lg: mediaWrapper(1024),
    md: mediaWrapper(768),
    sm: mediaWrapper(576),
  },
  modal: {
    xsmall: 300, // Use for single button confirm modals without titles + very limited text, or alerts
    small: 600, // Use for basic cancel/confirm modals with multiple buttons + few sentences of text
    medium: 800, // Use for forms
    large: 1000, // Use for large displays such as tables or complex forms
  },
  colour: {
    ai: {
      light: '#d2caff',
      dark: '#7b68ee',
      animationColourA: '#15F5BA',
      animationColourB: '#9288F8',
    },
    theme: {
      primaryColour: null, // filled in by themeContext.tsx
      buttonTextColour: null, // filled in by themeContext.tsx
      primaryTextColour: null, // filled in by themeContext.tsx
    },
    primary: {
      base: '#68d07f',
      _900: '#006714',
      _800: '#008628',
      _700: '#009832',
      _600: '#00aa3e',
      _500: '#00b947',
      _400: '#3dc562',
      _300: '#68d07f',
      _200: '#8de196',
      _100: '#c1eac8',
      _50: '#e5f7e9',
    },
    secondary: {
      base: '#292b3c',
      _900: '#292b3c',
      _800: '#3d3f53',
      _700: '#4e5169',
      _600: '#5f6480',
      _500: '#637291',
      _400: '#8386a2',
      _300: '#989bb5',
      _200: '#b5b7cd',
      _100: '#d1d4e5',
      _50: '#eeecfa',
    },
    link: {
      base: '#3e82f7',
    },
    semantic: {
      success: '#4DAAFF',
      successDark: '#096ECB',
      successLight: '#F3F9FF',
      warning: '#FFCA42',
      warningDark: '#8E5A00',
      warningLight: '#FFF4D9',
      error: '#FF6467',
      errorDark: '#BD0F11',
      errorLight: '#FBDDDF',
    },
    neutral: {
      darkText: '#292b3c',
      mediumText: '#4e5169',
      lightText: '#8386a2',
      border: '#d1d4e5',
      surface: '#f8f8fb',
      background: '#fdfdfd',
      white: '#ffffff',
    },
    other: {
      gold: '#f7b92a',
      hazel: '#a68362',
      brown: '#705035',
      orange: '#f9813d',
      yellow: '#f8da64',
      lime: '#b9d938',
      pine: '#357266',
      cyan: '#53d5ef',
      purple: '#7b68ee',
      pink: '#ff5bbe',
      red: '#d13139',
      darkRed: '#d06d68',
    },
  },
  font: {
    display01: css`
      font-family: 'Mulish';
      font-weight: 600;
      font-size: 2.986rem;
      line-height: 120%;
      letter-spacing: 0.002em;
    `,
    display02: css`
      font-family: 'Mulish';
      font-weight: 600;
      font-size: 2.488rem;
      line-height: 140%;
      letter-spacing: 0.002em;
    `,
    heading01: css`
      font-family: 'Mulish';
      font-weight: 700;
      font-size: 33.18px;
      line-height: 120%;
      letter-spacing: 0.002em;
    `,
    heading02: css`
      font-family: 'Mulish';
      font-weight: 700;
      font-size: 1.728rem;
      line-height: 120%;
      letter-spacing: 0.004em;
    `,
    heading03: css`
      font-family: 'Mulish';
      font-weight: 700;
      font-size: 1.44rem;
      line-height: 130%;
      letter-spacing: 0.004em;
    `,
    heading04: css`
      font-family: 'Mulish';
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 140%;
      letter-spacing: 0.004em;
    `,
    label01: css`
      font-family: 'Mulish';
      font-weight: 500;
      font-size: 1rem;
      line-height: 140%;
    `,
    label02: css`
      font-family: 'Mulish';
      font-weight: 500;
      font-size: 0.833rem;
      line-height: 140%;
      letter-spacing: 0.004em;
    `,
    subheading01: css`
      font-family: 'Inter';
      font-weight: 500;
      font-size: 1rem;
      line-height: 150%;
    `,
    subheading02: css`
      font-family: 'Inter';
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 150%;
    `,
    body01: css`
      font-family: 'Inter';
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 130%;
    `,
    body02: css`
      font-family: 'Inter';
      font-weight: 400;
      font-size: 1rem;
      line-height: 140%;
    `,
    body03: css`
      font-family: 'Inter';
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 150%;
    `,
    caption01: css`
      font-family: 'Mulish';
      font-weight: 600;
      font-size: 0.694rem;
      line-height: 150%;
      letter-spacing: 0.04em;
    `,
    caption02: css`
      font-family: 'Mulish';
      font-weight: 600;
      font-size: 0.694rem;
      line-height: 150%;
      text-transform: uppercase;
      letter-spacing: 0.16em;
    `,
    footer: css`
      font-family: 'Inter';
      font-weight: 600;
      font-size: 9.26px;
      line-height: 150%;
      letter-spacing: 0.3px;
    `,
  },
}
