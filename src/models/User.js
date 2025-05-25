const mongoose = require("mongoose");
const validate = require("validate");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    lastName: {
      type: String,
      lowercase: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      minlength: 2,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      minlength: 2,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email id not valid", value);
        }
      },
    },
    password: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minlength: 10,
      maxlength: 50,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Enter a Strong password", value);
        }
      },
    },
    photo: {
      type: String,
      lowercase: true,
      trim: true,
      default:
        "https://imgs.search.brave.com/AlbD1PakFJCd1uiCZOL2E0g_yv009u1CVuiRssRwXLI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vMGc1SzdR/cjVwdGdfdTRDc1pG/QVNrRG9HTTE2NS1j/eVlTeHhfdW5QUjlw/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldjdS9abkpsWlhC/cGF5NWpiMjB2L2NI/SmxiV2wxYlMxMlpX/TjAvYjNJdmMybHNk/bVZ5TFcxbC9iV0ps/Y25Ob2FYQXRhV052/L2JpMWtaV1poZFd4/MExXRjIvWVhSaGNp/MXdjbTltYVd4bC9M/V2xqYjI0dGJXVnRZ/bVZ5L2MyaHBjQzFw/WTI5dUxYTnYvWTJs/aGJDMXRaV1JwWVMx/MS9jMlZ5TFdsdFlX/ZGxMWFpsL1kzUnZj/aTFwYkd4MWMzUnkv/WVhScGIyNWZOVFl4/TVRVNC9MVFF4T1RV/dWFuQm5QM05sL2JY/UTlZV2x6WDJoNVlu/SnAvWkNaM1BUYzBN/QQ.jpeg",
    },
    about: {
      type: String,
      lowercase: true,
      trim: true,
      default: "This is default description of about user",
    },
    age: {
      type: Number,
      trim: true,
      min: 15,
    },
    gender: { type: String, lowercase: true, trim: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
