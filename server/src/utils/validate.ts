import mongoose from "mongoose";
import validator from "validator";

export const emailValidationOptions = {
  validator: (v: string) => validator.isEmail(v),
  message: (props: mongoose.ValidatorProps) =>
    `${props.value} email is not valid!`,
};
