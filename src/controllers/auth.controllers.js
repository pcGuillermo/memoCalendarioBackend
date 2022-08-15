import User from '../models/User';
import Role from '../models/Role';
import jwt from 'jsonwebtoken';
import config from '../config';

export const signUp = async (req, res) => {
    const { username, email, password, roles } = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password),
    })
    if (roles){
        const foundRoles = await Role.find({names: {$in: roles}});
        newUser.roles = foundRoles.map( (role) => role._id);
    }else {
        const role = await Role.findOne({ name: 'user' })
        newUser.roles = [role._id]
    }
    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, { expiresIn: 50000 });
    const user ={
        username: savedUser.username,
        email: savedUser.email,
        id: savedUser._id,
    }
    res.status(200).json({ token, user });
}

export const signIn = async (req, res) => {
    const { email, password } =req.body;
    const userFound = await User.findOne({ email }).populate('roles');
    if(!userFound) return res.status(400).json({message: "User no found"});

    const machPassword = await User.comparePassword(password, userFound.password);
    if(!machPassword) return res.status(401).json({message: "Invalid password"});

    const token = jwt.sign({ id: userFound._id }, config.SECRET, { expiresIn: 50000 });

    const user ={
        username: userFound.username,
        email:userFound.email,
        id:userFound._id,
    }
    res.status(200).json({token,user});
}
