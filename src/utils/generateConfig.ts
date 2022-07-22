import { TBuildingConfig } from '../types/TBuildingConfig';
import { TFloor } from '../types/TFloor';
import { TRow } from '../types/TRow';

const generateConfig = (config: string[][][]): TBuildingConfig => {
  const newConfig: TBuildingConfig = config.map(
    (floor: string[][], i: number): TFloor => {
      const newFloor: TFloor = {
        Name: i.toString(10),
        Rows: floor.map((row: string[], i: number): TRow => {
          const newRow: TRow = {
            Elements: row.map((element: string, j: number): string => element),
          };

          return newRow;
        }),
      };

      return newFloor;
    },
  );

  return newConfig;
};

export default generateConfig;
