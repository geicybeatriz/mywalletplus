import { registerUser, selectUsers } from "../repositories/authRepository.js";

export async function signUp (req, res) {
    try {
      const { name, email, password } = req.body;
  
      const existingUsers = await selectUsers(email);  
      if (existingUsers.rowCount > 0) {
        return res.sendStatus(409);
      }

      const hashedPassword = bcrypt.hashSync(password, 12);
      await registerUser(name, email, hashedPassword);
      res.sendStatus(201);

    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

export async function signIn(req, res) {
    try {
      const { email, password } = req.body;
  
      const { rows } = await selectUsers(email);
      const [user] = rows;
  
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.sendStatus(401);
      }
  
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET
      );
  
      res.send({
        token,
      });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };