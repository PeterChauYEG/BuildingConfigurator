import type { NextPage } from 'next';

import { NavigationScreenNameEnum } from '../enums/NavigationScreenNames';
import Page from '../containers/page';
import ExportPanel from '../components/ExportPanel';
import ConfigViewer from '../components/ConfigViewer';
import ConfigEditor from '../components/ConfigEditor';

type SplashProps = {
  data: Record<string, unknown>;
};

const Index: NextPage<SplashProps> = () => {
  return (
    <Page pageName={NavigationScreenNameEnum.SPLASH}>
      <div className={'flex justify-center mb-8'}>
        <h1 className={'text-slate-500 text-4xl'}>Building Config Generator</h1>
      </div>

      <div className={'flex flex-row justify-between h-full mb-8'}>
        <ConfigEditor />

        <ConfigViewer />
      </div>

      <ExportPanel />
    </Page>
  );
};

export default Index;
