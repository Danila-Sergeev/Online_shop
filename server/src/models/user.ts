import UnauthorizedError from "../errors/unauthorized";
import mongoose, { Document, Model } from "mongoose";
import { IUser } from "utils/types";
import { emailValidationOptions } from "../utils/validate";
import bcrypt from "bcrypt";

interface IUserModel extends Model<IUser> {
  // eslint-disable-next-line no-unused-vars
  findUserByCredentials: (
    email: string,
    password: string
  ) => Promise<Document<unknown, any, IUser>>;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      default: "name",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: emailValidationOptions,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { versionKey: false }
);

UserSchema.static(
  "findUserByCredentials",
  function findUserByCredentials(email: string, password: string) {
    return this.findOne({ email })
      .select("+password")
      .then((user: IUser) => {
        if (!user) {
          return Promise.reject(
            new UnauthorizedError("Вы ввели неправильные почту или пароль")
          );
        }
        return bcrypt.compare(password, user.password).then((matched) => {
          if (!matched) {
            return Promise.reject(
              new UnauthorizedError("Вы ввели неправильные почту или пароль")
            );
          }
          return user;
        });
      });
  }
);
export default mongoose.model<IUser, IUserModel>("user", UserSchema);
