export interface ConfigState {
  humanReadableBuildingConfig: string[];
  visualizedBuildingConfig: string[][][];
  currentFloorI: number;
  currentInput: string;
}

export const initialConfigState: ConfigState = {
  humanReadableBuildingConfig: [],
  visualizedBuildingConfig: [[]],
  currentFloorI: 0,
  currentInput: '',
};
