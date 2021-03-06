import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';
import jwt_decode from 'jwt-decode';
import AuthService from '../../services/auth-service.js';


class UsersController {
    async getMe(req, res) {
        try {
            
   
            const users = await models.users.findById(req.body.user);

            res.status(202).json({
                status: 'success',
                data: {
                    users,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }
    async getUser(req, res) {
        try {
            
   
            const users = await models.users.findOne(req.params.id);

            res.status(202).json({
                status: 'success',
                data: {
                    users,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }
    async getUsers(req, res) {
        try {
            const users = await models.users.find();
            res.status(202).json({
                status: 'success',
                data: {
                    users,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createUser(req, res) {
        try {
            const newUser = await models.users.create(req.body);
            res.status(202).json({
                status: 'success',
                data: {
                    user: newUser,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updateUser(req, res) {
        try {
            const users = await models.users.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    users,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

  // async updateprofile(req, res) {
  //   try {

  //     let session = req.session

  //     let(session._id){

  //       const users = await models.users.findByIdAndUpdate(condition,
  //         req.body,
  //         {
  //           new: true,
  //           runValidators: true,
  //         }
  //       );
  //     }
  //     res.status(202).json({
  //       status: 'success',
  //       data: {
  //         users,
  //       },
  //     });
  //   } catch (err) {
  //     throw new AppException(err, 400);
  //   }


  // }

  async deleteUser(req, res) {
    try {
      const users = await models.users.findByIdAndDelete(req.params.id);

            res.status(202).json({
                status: 'success',
                data: {
                    users,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }
}

export default new UsersController();