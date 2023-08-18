import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    const savedUser = await createdUser.save();
    console.log('User created:', {
      username: savedUser.username,
      email: savedUser.email,
      phoneNumber: savedUser.phoneNumber,
      name: savedUser.name,
      dateOfBirth: savedUser.dateOfBirth,
    });
    return createdUser.save();
    
  }

  async getUserByUsername(username: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username }).exec();
    console.log('Update User Status Code:', user ? 200 : 404);
    console.log('User found:', user); // Add this line to log the user
    return user;
  }
  
  async updateUser(username: string, user: User): Promise<User | null> {
    const updatedUser = await this.userModel.findOneAndUpdate({ username }, user, { new: true }).exec();
    console.log('Updated User:', updatedUser);
    return updatedUser;
  }
  
}
