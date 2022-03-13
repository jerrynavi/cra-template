import { IntlProvider, FormattedMessage } from 'react-intl';
import { loadLocaleData } from 'utils/language-service';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from 'store';

const { locale, messages } = loadLocaleData();

function App() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center font-secondary">
      <p className="font-primary">
        <FormattedMessage id="app.primary" />
      </p>
      <p className="font-secondary">
        <FormattedMessage id="app.secondary" />
      </p>
    </div>
  );
}

function AppIntlWrapper() {
  const pageTitle = useAppSelector(({ app }) => app.pageTitle);

  return (
    <IntlProvider messages={messages} locale={locale}>
      <HelmetProvider>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
      </HelmetProvider>

      <App />
    </IntlProvider>
  );
}

export default AppIntlWrapper;
