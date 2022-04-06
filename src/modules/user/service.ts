import { User, UserDocument } from "./model";

const createUser = (body: any): any => {
  return new Promise(async (rs, rj) => {
    try {
      const user = await User.create(body);
      if (user) {
        rs("Successfully");
      }
    } catch (error) {
      rj(error);
    }
  });
};

export default {
  createUser,
};
