import { useCallback } from 'react';
import generateConfig from '../utils/generateConfig';
import { useAppSelector } from '../hooks/reduxHooks';
import { selectVisualizedBuildingConfig } from '../reducers/configReducer';

const ExportPanel = () => {
  const visualizedBuildingConfig = useAppSelector(
    selectVisualizedBuildingConfig,
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

  return (
    <div className={'flex justify-center'}>
      <button
        onClick={handleExportClicked}
        className={'bg-slate-400 rounded-xl p-2 min-w-[200px]'}>
        <p className="text-slate-200 text-2xl">Export</p>
      </button>
    </div>
  );
};

export default ExportPanel;
