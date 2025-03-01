type CompanyTheme = {
    primaryColor?: string;
    secondaryColor?: string;
    tertiaryColor?: string;
    bg?: string;
    fontClass?: string;
    italicFontClass?: string;
};

type Companies = {
    [key: string]: CompanyTheme;
};

export const companies : Companies ={
    amazon:{
        primaryColor : '#000000',
        secondaryColor : '#232f3e',
        tertiaryColor : '#ff9900',
        bg: '#f2f2f2',
        fontClass: 'amazon',
        italicFontClass:'amazonItalic'
    },
    color:{
        primaryColor: '#0d1b2a',
        secondaryColor: '#1b263b',
        tertiaryColor:'#778da9',
    },
    google{
        pr
    }

}