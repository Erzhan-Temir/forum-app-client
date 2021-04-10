import User from "../../models/User";

export const UserProfileSetType = "USER_PROFILE_SET";

export interface UserProfileAction {
  type: string;
  payload: User | null;
}

export const UserProfileReducer = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: any = null,
  action: UserProfileAction
): User | null => {
  switch (action.type) {
    case UserProfileSetType:
      return action.payload;
    default:
      return state;
  }
};