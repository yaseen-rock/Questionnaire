// user.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user/user.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface'; 

describe('UserService', () => {
  let userService: UserService;

  const mockUserModel = {
    findOne: jest.fn(),
    findOneAndUpdate: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken('User'),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('getUserByUsername', () => {
    it('should return a user when given a valid username', async () => {
      const mockUser: User = {
        username: 'testUser',
        phoneNumber: '1234567890',
        email: 'user@example.com',
        name: 'John Doe',
        dateOfBirth: new Date('1990-01-01'),
      };

      mockUserModel.findOne.mockReturnValue(mockUser);

      const result = await userService.getUserByUsername('testUser');
      expect(result).toEqual(mockUser);
    });

    it('should return null when given an invalid username', async () => {
      mockUserModel.findOne.mockReturnValue(null);

      const result = await userService.getUserByUsername('invalidUser');
      expect(result).toBeNull();
    });
  });

  // More tests for other service methods...
});
