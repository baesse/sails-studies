/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    const params = req.objectParams;
    try {
      const user = await User.create(params).fetch();
      return res.status(200).json(user);
    } catch (error) {}
  },
  find: async (req, res) => {
    const params = req.objectParams;
    try {
      const user = await User.find(params.id).fetch();
      return res.status(200).json(user);
    } catch (error) {}
  },
  patch: async (req, res) => {
    const params = req.objectParams;
    try {
      const user = await User.find(params.id).fetch();
      await user.update(params)
      return res.status(200).json(user);
    } catch (error) {}
  },
  delete: async (req, res) => {
    const params = req.objectParams;
    try {
      const user = await User.findById(params.id).fetch();
      await user.delete()
      return res.status(200).json(user);
    } catch (error) {}
  }
};
