import * as dotEnv from "dotenv";
import * as jwt from "jsonwebtoken";

dotEnv.config();

const accessTokenSecret = String(process.env.ACCESS_TOKEN_SECRET);

class JwtService {
  public sign(userId: string): string {
    return jwt.sign({ userId }, accessTokenSecret);
  }

  public decode(token: string) {
    return jwt.verify(token, accessTokenSecret);
  }
}

export default new JwtService();
