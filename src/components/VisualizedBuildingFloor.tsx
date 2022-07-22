import VisualizedBuildingRow from './VisualizedBuildingRow';

type Props = {
  floor: string[][];
  currentFloorI: number;
  floorI: number;
};

const VisualizedBuildingFloor = ({ floor, floorI, currentFloorI }: Props) => {
  let floorStyle =
    'border border-4 p-4 justify-center flex flex-col items-center flip relative top-0 left-0';

  if (currentFloorI === floorI) {
    floorStyle += ' border-slate-500';
  } else {
    floorStyle += ' border-slate-200';
  }

  return (
    <div className={'flex flex-row items-end justify-center'}>
      <div className={''}></div>

      <div className={floorStyle}>
        {floor.map((row: string[], i: number) => {
          return <VisualizedBuildingRow key={i} row={row} />;
        })}
      </div>
    </div>
  );
};

export default VisualizedBuildingFloor;
