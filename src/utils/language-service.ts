import enUS from 'lang/en-US.json';
import fr from 'lang/fr.json';

type LocalesSupported = Record<string, Record<string, string>>;

export const loadLocaleData = (locale?: string) => {
  // handle setting the user's locale
  let userLocale: string;
  if (!locale) {
    userLocale = navigator.language;
  } else {
    userLocale = locale;
  }

  // next, create an object with the locale files currently available/supported
  const localesSupported: LocalesSupported = {
    'en-US': enUS,
    fr,
  };

  // finally, check if user's locale is supported. if not, use 'en-US' as the default
  if (
    Object.prototype.hasOwnProperty.call(localesSupported, userLocale) === false
  ) {
    userLocale = 'en-US';
  }

  return {
    messages: localesSupported[userLocale],
    locale: userLocale,
  };
};
