import VisualizedBuildingFloor from './VisualizedBuildingFloor';
import { useAppSelector } from '../hooks/reduxHooks';
import { selectVisualizedBuildingConfig } from '../reducers/configReducer';

const VisualizedBuildingConfig = () => {
  const visualizedBuildingConfig = useAppSelector(
    selectVisualizedBuildingConfig,
  );

  return (
    <div>
      {visualizedBuildingConfig
        ?.map((floor: string[][], k: number) => {
          return <VisualizedBuildingFloor key={k} floor={floor} floorI={k} />;
        })
        .reverse()}
    </div>
  );
};

export default VisualizedBuildingConfig;
