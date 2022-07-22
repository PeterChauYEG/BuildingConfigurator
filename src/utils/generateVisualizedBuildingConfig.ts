const generateVisualizedBuildingConfig = (config: string[]): string[][][] => {
  const newConfig: string[][][] = config?.map(
    (floor: string, i: number): string[][] => {
      const newLineSplit = floor?.split('\n');

      return newLineSplit?.map((row: string) => {
        return row?.split(' ');
      });
    },
  );

  return newConfig;
};

export default generateVisualizedBuildingConfig;
