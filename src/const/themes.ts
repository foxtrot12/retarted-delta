type ThemeT = {
    primaryColor?: string;
    secondaryColor?: string;
    tertiaryColor?: string;
    bg?: string;
    fontClass?: string;
    italicFontClass?: string;
};

type ThemesT = {
    [key: string]: ThemeT;
};

export const Themes: ThemesT = {
    amazon: {
        primaryColor: '#000000',
        secondaryColor: '#232f3e',
        tertiaryColor: '#ff9900',
        bg: '#f2f2f2',
        fontClass: 'amazon',
        italicFontClass: 'amazonItalic'
    },
    color: {
        primaryColor: '#0d1b2a',
        secondaryColor: '#1b263b',
        tertiaryColor: '#778da9',
    },
    color2: {
        primaryColor: '#0d1b2a',
        secondaryColor: '#114568',
        tertiaryColor: '#f4440c',
    },
    color3: {
        primaryColor: '#0d1b2a',
        secondaryColor: '#4d5396',
        tertiaryColor: '#fc4738',
    }

}