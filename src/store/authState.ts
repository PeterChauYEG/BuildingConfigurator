export interface AuthState {
  // address: IAddressDto;
  // email: string | undefined;
  token: string | undefined;
  // onboarded: boolean;
  // userProfile: IUserProfileDto;
  isAuthError?: boolean;
}

export const initialAuthState: AuthState = {
  isAuthError: false,
  // email: undefined,
  token: undefined,
  // onboarded: false,
  // userProfile: {
  //   biologicalSex: undefined,
  //   eid: undefined,
  //   bio: undefined,
  //   location: undefined,
  //   birthday: undefined,
  //   height: undefined,
  //   weight: undefined,
  //   meatFrequency: undefined,
  //   veggieFrequency: undefined,
  //   nutsFrequency: undefined,
  //   fruitFrequency: undefined,
  //   dairyFrequency: undefined,
  //   fishFrequency: undefined,
  //   legumesFrequency: undefined,
  //   grainsFrequency: undefined,
  //   sweetsFrequency: undefined,
  //   alcoholFrequency: undefined,
  //   caffeineFrequency: undefined,
  // },
  // address: {
  //   firstname: undefined,
  //   lastname: undefined,
  //   address1: undefined,
  //   address2: undefined,
  //   city: undefined,
  //   state: undefined,
  //   zipcode: undefined,
  // },
};
