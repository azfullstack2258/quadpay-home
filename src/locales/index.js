import en from './en';

const locales = {
  en,
};

// TODO: Connect it with redux store so it can change language
const currentLang = 'en';

export default locales[currentLang];
