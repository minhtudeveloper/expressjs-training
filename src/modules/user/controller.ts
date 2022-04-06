import { Response, Request } from "express";
import { validationResult } from "express-validator";
import { requestSuccess, requestError } from "../../util/response";
import UserServices from "./service";

const getUsers = (req: Request, res: Response): void => {
  res.send("ahihi");
};

const createUser = (req: Request, res: Response): any => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("000000000000000000000000000000000");

    requestError(res)(errors.array());
  } else {
    UserServices.createUser(req.body)
      .then(requestSuccess(res))
      .catch(requestError(res));
  }
};

export default {
  getUsers,
  createUser,
};
