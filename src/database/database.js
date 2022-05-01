import { Schema,model} from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = new Schema ({

    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  {
    timestamps: true
  },

)

userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const User = model('users', userSchema)

export default User
