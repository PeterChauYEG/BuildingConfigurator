import VisualizedBuildingFloor from './VisualizedBuildingFloor';

type Props = {
  visualizedBuildingConfig: string[][][];
  currentFloorI: number;
};

const VisualizedBuildingConfig = ({
  visualizedBuildingConfig,
  currentFloorI,
}: Props) => {
  return (
    <div>
      {visualizedBuildingConfig
        .map((floor: string[][], k: number) => {
          return (
            <VisualizedBuildingFloor
              key={k}
              floor={floor}
              floorI={k}
              currentFloorI={currentFloorI}
            />
          );
        })
        .reverse()}
    </div>
  );
};

export default VisualizedBuildingConfig;
