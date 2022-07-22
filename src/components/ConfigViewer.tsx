import VisualizedBuildingConfig from './VisualizedBuildingConfig';

type Props = {
  currentFloorI: number;
  visualizedBuildingConfig: string[][][];
};

const ConfigViewer = ({ currentFloorI, visualizedBuildingConfig }: Props) => {
  return (
    <div className={'border-slate-400 border-2 ml-2 w-full flex flex-col p-4'}>
      <p className={'text-slate-500 text-2xl mb-4 text-center'}>Viewer</p>

      <div className={''}>
        <div className={'mb-4 flex justify-center'}>
          <p className="text-slate-500 text-xs">Back</p>
        </div>

        <div className={'flex flex-row mb-4 justify-between'}>
          <div className={'mr-4 flex justify-center flex-col'}>
            <p className="text-slate-500 text-xs">Left</p>
          </div>

          <div className={'flex flex-col'}>
            <VisualizedBuildingConfig
              currentFloorI={currentFloorI}
              visualizedBuildingConfig={visualizedBuildingConfig}
            />
          </div>

          <div className={'ml-4 flex justify-center flex-col vertical'}>
            <p className="text-slate-500 text-xs">Right</p>
          </div>
        </div>

        <div className={'flex justify-center'}>
          <p className="text-slate-500 text-xs">Front</p>
        </div>
      </div>
    </div>
  );
};

export default ConfigViewer;
