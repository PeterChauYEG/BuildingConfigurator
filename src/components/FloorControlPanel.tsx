import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faForward,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import {
  selectCurrentFloor,
  selectCurrentInput,
  selectHumanReadableBuildingConfig,
  selectVisualizedBuildingConfig,
  setCurrentFloor,
  setCurrentInput,
  setHumanReadableBuildingConfig,
  setVisualizedBuildingConfig,
} from '../reducers/configReducer';
import { useCallback } from 'react';
import generateVisualizedBuildingConfig from '../utils/generateVisualizedBuildingConfig';
import ExportPanel from './ExportPanel';
import { useHotkeys } from 'react-hotkeys-hook';

const FloorControlPanel = () => {
  const dispatch = useAppDispatch();

  const currentFloorI = useAppSelector(selectCurrentFloor);
  const visualizedBuildingConfig = useAppSelector(
    selectVisualizedBuildingConfig,
  );
  const currentInput = useAppSelector(selectCurrentInput);
  const humanReadableBuildingConfig = useAppSelector(
    selectHumanReadableBuildingConfig,
  );

  const handleNextFloorClicked = useCallback(
    async (e: any) => {
      if (currentFloorI >= humanReadableBuildingConfig.length - 1) {
        return;
      }

      const newHumanReadableBuildingConfig = [...humanReadableBuildingConfig];
      newHumanReadableBuildingConfig[currentFloorI] = currentInput;
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
      await dispatch(setCurrentFloor({ floorI: currentFloorI + 1 }));
      await dispatch(
        setCurrentInput({
          input: newHumanReadableBuildingConfig[currentFloorI + 1],
        }),
      );
    },
    [currentFloorI, currentInput, dispatch, humanReadableBuildingConfig],
  );

  const handlePrevFloorClicked = useCallback(
    async (e: any) => {
      if (currentFloorI === 0) {
        return;
      }

      const newHumanReadableBuildingConfig = [...humanReadableBuildingConfig];
      newHumanReadableBuildingConfig[currentFloorI] = currentInput;
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
      await dispatch(setCurrentFloor({ floorI: currentFloorI - 1 }));
      await dispatch(
        setCurrentInput({
          input: newHumanReadableBuildingConfig[currentFloorI - 1],
        }),
      );
    },
    [currentFloorI, humanReadableBuildingConfig, currentInput, dispatch],
  );

  const handleAddFloorClicked = useCallback(
    async (e: any) => {
      let newHumanReadableBuildingConfig = [...humanReadableBuildingConfig];

      newHumanReadableBuildingConfig[currentFloorI] = currentInput;

      if (humanReadableBuildingConfig.length - 1 > currentFloorI) {
        newHumanReadableBuildingConfig = [
          ...newHumanReadableBuildingConfig.slice(0, currentFloorI + 1),
          currentInput,
          ...newHumanReadableBuildingConfig.splice(currentFloorI + 1),
        ];
      } else {
        newHumanReadableBuildingConfig[currentFloorI + 1] = currentInput;
      }

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
      await dispatch(setCurrentFloor({ floorI: currentFloorI + 1 }));

      await dispatch(
        setCurrentInput({
          input: newHumanReadableBuildingConfig[currentFloorI + 1] || '',
        }),
      );
    },
    [humanReadableBuildingConfig, currentFloorI, currentInput, dispatch],
  );

  const handleRemoveFloorClicked = useCallback(
    async (e: any) => {
      let newHumanReadableBuildingConfig = [
        ...humanReadableBuildingConfig.slice(0, currentFloorI),
        ...humanReadableBuildingConfig.slice(currentFloorI + 1),
      ];

      if (
        currentFloorI === 0 &&
        currentFloorI === humanReadableBuildingConfig.length - 1
      ) {
        newHumanReadableBuildingConfig = [
          ...humanReadableBuildingConfig.slice(0, currentFloorI),
          '',
          ...humanReadableBuildingConfig.slice(currentFloorI + 1),
        ];
      }

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

      if (currentFloorI === 0) {
        await dispatch(
          setCurrentInput({
            input: newHumanReadableBuildingConfig[currentFloorI],
          }),
        );
        return;
      }

      await dispatch(setCurrentFloor({ floorI: currentFloorI - 1 }));
      await dispatch(
        setCurrentInput({
          input: newHumanReadableBuildingConfig[currentFloorI - 1],
        }),
      );
    },
    [currentFloorI, dispatch, humanReadableBuildingConfig],
  );

  useHotkeys(
    'ctrl+d, ctrl+w',
    () => {
      handleNextFloorClicked(null);
    },
    [currentFloorI, humanReadableBuildingConfig, currentInput, dispatch],
  );

  useHotkeys(
    'ctrl+a, ctrl+s',
    () => {
      handlePrevFloorClicked(null);
    },
    [currentFloorI, humanReadableBuildingConfig, currentInput, dispatch],
  );

  useHotkeys(
    'ctrl+enter',
    () => {
      handleAddFloorClicked(null);
    },
    [humanReadableBuildingConfig, currentFloorI, currentInput, dispatch],
  );

  useHotkeys(
    'ctrl+delete',
    () => {
      handleRemoveFloorClicked(null);
    },
    [currentFloorI, dispatch, humanReadableBuildingConfig],
  );

  return (
    <>
      <div className={'mt-4'}>
        <div className={'mt-4 flex flex-row justify-between items-center'}>
          <button onClick={handlePrevFloorClicked}>
            <p className="text-slate-500 text-xl font-bold">
              <FontAwesomeIcon icon={faBackward} />
            </p>
          </button>

          <p className="text-slate-500 text-sm">{`${currentFloorI + 1} / ${
            visualizedBuildingConfig.length
          }`}</p>

          <button onClick={handleNextFloorClicked}>
            <p className="text-slate-500 text-xl font-bold">
              <FontAwesomeIcon icon={faForward} />
            </p>
          </button>
        </div>
      </div>

      <div className={'mt-4 mb-20'}>
        <div className={'mt-4 flex flex-row justify-between'}>
          <button onClick={handleRemoveFloorClicked}>
            <p className="text-slate-500 text-2xl font-bold">
              <FontAwesomeIcon icon={faMinus} />
            </p>
          </button>

          <button onClick={handleAddFloorClicked}>
            <p className="text-slate-500 text-2xl font-bold">
              <FontAwesomeIcon icon={faPlus} />
            </p>
          </button>
        </div>
      </div>

      <ExportPanel />
    </>
  );
};

export default FloorControlPanel;
