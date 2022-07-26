import VisualizedBuildingRow from './VisualizedBuildingRow';
import { useAppSelector } from '../hooks/reduxHooks';
import { selectCurrentFloor } from '../reducers/configReducer';

type Props = {
  floor: string[][];
  floorI: number;
};

const VisualizedBuildingFloor = ({ floor, floorI }: Props) => {
  const currentFloorI = useAppSelector(selectCurrentFloor);

  let floorStyle =
    'border border-4 p-4 justify-center flex flex-col items-center flip relative top-0 left-0 drop-shadow-[20px_-20px_3px_rgba(0,0,0,0.2)] mb-[-56px]';

  if (currentFloorI === floorI) {
    floorStyle += ' border-slate-500';
  } else {
    floorStyle += ' border-slate-200';
  }

  return (
    <div className={'flex flex-row items-end justify-center'}>
      <div className={''}></div>

      <div className={floorStyle}>
        {floor?.map((row: string[], i: number) => {
          return <VisualizedBuildingRow key={i} row={row} />;
        })}
      </div>
    </div>
  );
};

export default VisualizedBuildingFloor;
