import * as bcrypt from "bcrypt";

class BcryptService {
  public async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  public async checkPassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}

export default new BcryptService();
