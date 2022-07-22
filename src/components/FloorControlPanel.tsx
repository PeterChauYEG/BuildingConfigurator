import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faForward,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

type Props = {
  onPrevFloorClicked: (e: any) => void;
  floorI: number;
  humanReadableBuildingConfig: string[];
  onNextFloorClick: (e: any) => void;
  onRemoveFloorClick: (e: any) => void;
  onAddFloorClick: (e: any) => void;
};

const FloorControlPanel = ({
  onPrevFloorClicked,
  onNextFloorClick,
  onRemoveFloorClick,
  onAddFloorClick,
  floorI,
  humanReadableBuildingConfig,
}: Props) => {
  return (
    <>
      <div className={'mt-4'}>
        <div className={'mt-4 flex flex-row justify-between items-center'}>
          <button onClick={onPrevFloorClicked}>
            <p className="text-slate-500 text-xl font-bold">
              <FontAwesomeIcon icon={faBackward} />
            </p>
          </button>

          <p className="text-slate-500 text-sm">{`${floorI + 1} / ${
            humanReadableBuildingConfig.length
          }`}</p>

          <button onClick={onNextFloorClick}>
            <p className="text-slate-500 text-xl font-bold">
              <FontAwesomeIcon icon={faForward} />
            </p>
          </button>
        </div>
      </div>

      <div className={'mt-4'}>
        <div className={'mt-4 flex flex-row justify-between'}>
          <button onClick={onRemoveFloorClick}>
            <p className="text-slate-500 text-2xl font-bold">
              <FontAwesomeIcon icon={faMinus} />
            </p>
          </button>

          <button onClick={onAddFloorClick}>
            <p className="text-slate-500 text-2xl font-bold">
              <FontAwesomeIcon icon={faPlus} />
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default FloorControlPanel;
