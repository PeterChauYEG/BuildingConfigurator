import type { NextPage } from 'next';
import { NavigationScreenNameEnum } from '../enums/NavigationScreenNames';
import Page from '../containers/page';
import { useEffect } from 'react';
import { handleError } from '../utils/error';

const Page404: NextPage = () => {
  useEffect(() => {
    handleError('500 error', new Error('500 error'));
  }, []);

  return (
    <Page
      pageName={NavigationScreenNameEnum.PAGE_404}
      overlayClassName={'onboarding-background'}>
      <h1 className={'text-2xl text-dark-indigo'}>404</h1>
    </Page>
  );
};

export default Page404;
