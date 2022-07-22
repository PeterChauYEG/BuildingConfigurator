import FloorControlPanel from './FloorControlPanel';

type Props = {
  currentInput: string;
  onCurrentInputChange: (e: any) => void;
  onPrevFloorClicked: (e: any) => void;
  floorI: number;
  humanReadableBuildingConfig: string[];
  onNextFloorClick: (e: any) => void;
  onRemoveFloorClick: (e: any) => void;
  onAddFloorClick: (e: any) => void;
};

const ConfigEditor = ({
  currentInput,
  floorI,
  humanReadableBuildingConfig,
  onAddFloorClick,
  onNextFloorClick,
  onRemoveFloorClick,
  onPrevFloorClicked,
  onCurrentInputChange,
}: Props) => {
  return (
    <div
      className={
        'border border-slate-400 border-2 mr-2 w-full flex flex-col p-4'
      }>
      <p className={'text-slate-500 text-2xl mb-4 text-center'}>Editor</p>

      <div className={'mb-4 flex justify-center'}>
        <p className="text-slate-500 text-xs">Front</p>
      </div>

      <div className={'flex flex-row mb-4'}>
        <div className={'mr-4 flex justify-center flex-col'}>
          <p className="text-slate-500 text-xs">Left</p>
        </div>

        <textarea
          className={
            'w-full border border-slate-400 bg-slate-300 p-2 h-[20vh] text-slate-500 text-lg'
          }
          placeholder={'r - t\n|. . .|\nL - J'}
          value={currentInput}
          onChange={onCurrentInputChange}
        />

        <div className={'ml-4 flex justify-center flex-col vertical'}>
          <p className="text-slate-500 text-xs">Right</p>
        </div>
      </div>

      <div className={'flex justify-center'}>
        <p className="text-slate-500 text-xs">Back</p>
      </div>

      <FloorControlPanel
        onPrevFloorClicked={onPrevFloorClicked}
        floorI={floorI}
        humanReadableBuildingConfig={humanReadableBuildingConfig}
        onNextFloorClick={onNextFloorClick}
        onRemoveFloorClick={onRemoveFloorClick}
        onAddFloorClick={onAddFloorClick}
      />
    </div>
  );
};

export default ConfigEditor;
