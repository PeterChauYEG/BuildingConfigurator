import type { NextPage } from 'next';

import { NavigationScreenNameEnum } from '../enums/NavigationScreenNames';
import Page from '../containers/page';
import ConfigViewer from '../components/ConfigViewer';
import ConfigEditor from '../components/ConfigEditor';
import EscapeMenu from '../components/EscapeMenu';

type SplashProps = {
  data: Record<string, unknown>;
};

const Index: NextPage<SplashProps> = () => {
  return (
    <Page pageName={NavigationScreenNameEnum.SPLASH}>
      <div className={'flex justify-center mb-8'}>
        <h1 className={'text-slate-500 text-4xl'}>Building Config Generator</h1>
      </div>

      <EscapeMenu />
      <div className={'flex flex-row justify-between h-full'}>
        <ConfigEditor />

        <ConfigViewer />
      </div>
    </Page>
  );
};

export default Index;
