import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IntlProvider } from "react-intl";
import messages from "./translate";
import Theme from "./assert/Theme";
import Layout from "./Layout";

import Scrollbar from "assert/Scrollbar";
import BaseDialog from "assert/BaseDialog";
import BasePopover from "assert/BasePopover";
import BaseMenu from "assert/BaseMenu";

import { localeChange } from "store/locale";
import PageLoading from "components/loading/PageLoading";

const Root = (props) => {
  const history = useHistory();
  const match = useRouteMatch({ path: "/:language/:city" });
  const dispatch = useDispatch();
  const [loadingpage, setloadingpage] = useState(true);
  const languages = useSelector((state) => state.locale.languages);
  const cities = useSelector((state) => state.city);
  let localeObject = languages.find((item) => item.default === true);
  let { locale } = localeObject;
  useEffect(() => {
    setTimeout(() => {
      setloadingpage(false);
    }, 1800);
  }, []);
  if (match && match.params.language !== locale) {
    const findLanguage = languages.find(
      (item) => item.locale === match.params.language
    );
    if (!findLanguage) return history.push(`/${locale}/${match.params.city}`);
    else {
      dispatch(localeChange(findLanguage));
      localeObject = findLanguage;
      locale = findLanguage.locale;
    }
  }
  return (
    <React.Suspense fallback={<PageLoading />}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Theme direction={localeObject.direction}>
          <Scrollbar>
            {loadingpage ? (
              <PageLoading />
            ) : (
              <Switch>
                <Route path={"/:language/:city?"}>
                  <Layout />
                </Route>
                <Redirect to={`/${locale}/${cities.current.title}/shop`} />
              </Switch>
            )}
          </Scrollbar>
          <BaseDialog />
          <BasePopover />
          <BaseMenu />
        </Theme>
      </IntlProvider>
    </React.Suspense>
  );
};

export default Root;
