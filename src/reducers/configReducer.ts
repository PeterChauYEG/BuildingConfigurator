import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { ConfigState, initialConfigState } from '../store/configState';
import { RootState } from '../store/store';

export const configSlice = createSlice({
  name: 'auth',
  initialState: initialConfigState,
  reducers: {
    setCurrentFloor: (
      state: Draft<ConfigState>,
      action: PayloadAction<{ floorI: number }>,
    ): void => {
      if (action.payload) {
        state.currentFloorI = action.payload.floorI;
      }
    },
    setCurrentInput: (
      state: Draft<ConfigState>,
      action: PayloadAction<{ input: string }>,
    ): void => {
      if (action.payload) {
        state.currentInput = action.payload.input;
      }
    },
    setHumanReadableBuildingConfig: (
      state: Draft<ConfigState>,
      action: PayloadAction<{ config: string[] }>,
    ): void => {
      if (action.payload) {
        state.humanReadableBuildingConfig = action.payload.config;
      }
    },
    setVisualizedBuildingConfig: (
      state: Draft<ConfigState>,
      action: PayloadAction<{ config: string[][][] }>,
    ): void => {
      if (action.payload) {
        state.visualizedBuildingConfig = action.payload.config;
      }
    },
  },
});

export const {
  setCurrentFloor,
  setCurrentInput,
  setHumanReadableBuildingConfig,
  setVisualizedBuildingConfig,
} = configSlice.actions;

export const selectCurrentFloor = (state: RootState): number =>
  state.config.currentFloorI;
export const selectCurrentInput = (state: RootState): string =>
  state.config.currentInput;
export const selectHumanReadableBuildingConfig = (state: RootState): string[] =>
  state.config.humanReadableBuildingConfig;
export const selectVisualizedBuildingConfig = (
  state: RootState,
): string[][][] => state.config.visualizedBuildingConfig;

export default configSlice.reducer;
