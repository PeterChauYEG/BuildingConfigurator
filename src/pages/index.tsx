import type { NextPage } from 'next';
import { useCallback, useState } from 'react';

import { NavigationScreenNameEnum } from '../enums/NavigationScreenNames';
import Page from '../containers/page';
import generateVisualizedBuildingConfig from '../utils/generateVisualizedBuildingConfig';
import generateConfig from '../utils/generateConfig';
import ExportPanel from '../components/ExportPanel';
import ConfigViewer from '../components/ConfigViewer';
import ConfigEditor from '../components/ConfigEditor';

type SplashProps = {
  data: Record<string, unknown>;
};

const Index: NextPage<SplashProps> = () => {
  const [currentInput, setCurrentInput] = useState('');

  const [floorI, setFloorI] = useState<number>(0);
  const [humanReadableBuildingConfig, setHumanReadableBuildingConfig] =
    useState<string[]>([]);

  const [visualizedBuildingConfig, setVisualizedBuildingConfig] = useState<
    string[][][]
  >([[]]);

  const handleCurrentInputChange = useCallback(
    (e: any) => {
      setCurrentInput(e.target.value);

      if (e.target.value !== '') {
        const newHumanReadableBuildingConfig = humanReadableBuildingConfig;
        newHumanReadableBuildingConfig[floorI] = e.target.value;
        const newVisualizedBuildingConfig = generateVisualizedBuildingConfig(
          newHumanReadableBuildingConfig,
        );

        setVisualizedBuildingConfig(newVisualizedBuildingConfig);
        setHumanReadableBuildingConfig(newHumanReadableBuildingConfig);
      }
    },
    [floorI, humanReadableBuildingConfig],
  );

  const handleExportClicked = useCallback(
    (e: any) => {
      const newConfig = generateConfig(visualizedBuildingConfig);
      const json = JSON.stringify(newConfig);

      const url = window.URL.createObjectURL(
        new Blob([json], { type: 'application/json' }),
      );

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `config.json`);
      document.body.appendChild(link);
      link.click();
      link?.parentNode?.removeChild(link);
    },
    [visualizedBuildingConfig],
  );

  const handleNextFloorClicked = useCallback(
    (e: any) => {
      if (floorI >= humanReadableBuildingConfig.length - 1) {
        return;
      }

      const newHumanReadableBuildingConfig = humanReadableBuildingConfig;
      newHumanReadableBuildingConfig[floorI] = currentInput;
      const newVisualizedBuildingConfig = generateVisualizedBuildingConfig(
        newHumanReadableBuildingConfig,
      );

      setVisualizedBuildingConfig(newVisualizedBuildingConfig);
      setHumanReadableBuildingConfig(newHumanReadableBuildingConfig);
      setFloorI(floorI + 1);
      setCurrentInput(humanReadableBuildingConfig[floorI + 1]);
    },
    [currentInput, floorI, humanReadableBuildingConfig],
  );

  const handlePrevFloorClicked = useCallback(
    (e: any) => {
      if (floorI === 0) {
        return;
      }

      const newHumanReadableBuildingConfig = humanReadableBuildingConfig;
      newHumanReadableBuildingConfig[floorI] = currentInput;
      const newVisualizedBuildingConfig = generateVisualizedBuildingConfig(
        newHumanReadableBuildingConfig,
      );

      setVisualizedBuildingConfig(newVisualizedBuildingConfig);
      setHumanReadableBuildingConfig(newHumanReadableBuildingConfig);
      setFloorI(floorI - 1);
      setCurrentInput(humanReadableBuildingConfig[floorI - 1]);
    },
    [currentInput, floorI, humanReadableBuildingConfig],
  );

  const handleAddFloorClicked = useCallback(
    (e: any) => {
      let newHumanReadableBuildingConfig = humanReadableBuildingConfig;
      newHumanReadableBuildingConfig[floorI] = currentInput;

      if (humanReadableBuildingConfig.length - 1 > floorI) {
        newHumanReadableBuildingConfig = [
          ...newHumanReadableBuildingConfig.slice(0, floorI + 1),
          currentInput,
          ...newHumanReadableBuildingConfig.splice(floorI + 1),
        ];
      } else {
        newHumanReadableBuildingConfig[floorI + 1] = currentInput;
      }

      const newVisualizedBuildingConfig = generateVisualizedBuildingConfig(
        newHumanReadableBuildingConfig,
      );

      setVisualizedBuildingConfig(newVisualizedBuildingConfig);
      setHumanReadableBuildingConfig(newHumanReadableBuildingConfig);
      setFloorI(floorI + 1);
      setCurrentInput(humanReadableBuildingConfig[floorI + 1] || '');
    },
    [currentInput, floorI, humanReadableBuildingConfig],
  );

  const handleRemoveFloorClicked = useCallback(
    (e: any) => {
      const newHumanReadableBuildingConfig = [
        ...humanReadableBuildingConfig.slice(0, floorI),
        ...humanReadableBuildingConfig.slice(floorI + 1),
      ];

      const newVisualizedBuildingConfig = generateVisualizedBuildingConfig(
        newHumanReadableBuildingConfig,
      );

      setVisualizedBuildingConfig(newVisualizedBuildingConfig);
      setHumanReadableBuildingConfig(newHumanReadableBuildingConfig);
      setFloorI(floorI - 1);
      setCurrentInput(newHumanReadableBuildingConfig[floorI - 1]);
    },
    [floorI, humanReadableBuildingConfig],
  );

  return (
    <Page pageName={NavigationScreenNameEnum.SPLASH}>
      <div className={'flex justify-center mb-8'}>
        <h1 className={'text-slate-500 text-4xl'}>Building Config Generator</h1>
      </div>

      <div className={'flex flex-row justify-between h-full mb-8'}>
        <ConfigEditor
          currentInput={currentInput}
          onCurrentInputChange={handleCurrentInputChange}
          onPrevFloorClicked={handlePrevFloorClicked}
          floorI={floorI}
          humanReadableBuildingConfig={humanReadableBuildingConfig}
          onNextFloorClick={handleNextFloorClicked}
          onRemoveFloorClick={handleRemoveFloorClicked}
          onAddFloorClick={handleAddFloorClicked}
        />

        <ConfigViewer
          currentFloorI={floorI}
          visualizedBuildingConfig={visualizedBuildingConfig}
        />
      </div>

      <ExportPanel onExportClick={handleExportClicked} />
    </Page>
  );
};

export default Index;
