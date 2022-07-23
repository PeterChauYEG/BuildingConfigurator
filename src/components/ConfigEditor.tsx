import FloorControlPanel from './FloorControlPanel';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import {
  selectCurrentFloor,
  selectCurrentInput,
  selectHumanReadableBuildingConfig,
  setCurrentInput,
  setHumanReadableBuildingConfig,
  setVisualizedBuildingConfig,
} from '../reducers/configReducer';
import { useCallback } from 'react';
import generateVisualizedBuildingConfig from '../utils/generateVisualizedBuildingConfig';

const ConfigEditor = () => {
  const currentInput = useAppSelector(selectCurrentInput);
  const dispatch = useAppDispatch();
  const currentFloorI = useAppSelector(selectCurrentFloor);
  const humanReadableBuildingConfig = useAppSelector(
    selectHumanReadableBuildingConfig,
  );

  const handleCurrentInputChange = useCallback(
    async (e: any) => {
      await dispatch(setCurrentInput({ input: e.target.value }));

      if (e.target.value !== '') {
        const newHumanReadableBuildingConfig = [...humanReadableBuildingConfig];
        newHumanReadableBuildingConfig[currentFloorI] = e.target.value;
        const newVisualizedBuildingConfig = generateVisualizedBuildingConfig(
          newHumanReadableBuildingConfig,
        );

        await dispatch(
          setVisualizedBuildingConfig({ config: newVisualizedBuildingConfig }),
        );
        await dispatch(
          setHumanReadableBuildingConfig({
            config: newHumanReadableBuildingConfig,
          }),
        );
      }
    },
    [currentFloorI, dispatch, humanReadableBuildingConfig],
  );

  return (
    <div
      className={
        'border border-slate-400 border-2 mr-2 flex flex-col p-4 rounded-lg flex-0 min-w-[33vw]'
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
            'w-full border border-slate-400 bg-slate-300 p-2 h-[20vh] text-slate-500 text-lg rounded-lg'
          }
          placeholder={
            'r - -D -W t\n|. . . . .|\n|. . . . .|\n|. . . . .|\nL _ x _ J'
          }
          value={currentInput}
          onChange={handleCurrentInputChange}
        />

        <div className={'ml-4 flex justify-center flex-col vertical'}>
          <p className="text-slate-500 text-xs">Right</p>
        </div>
      </div>

      <div className={'flex justify-center'}>
        <p className="text-slate-500 text-xs">Back</p>
      </div>

      <FloorControlPanel />
    </div>
  );
};

export default ConfigEditor;
