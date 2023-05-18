const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const getByIdEmail = async (id, email) => {
  const user = await User.findOne({ where: { id, email } });
  return user;
};

const createUser = async (fullName, email) => {
  const newUser = await User.create({ fullName, email });
  return newUser;
};

const updateUser = async (id, fullName, email) => {
  const [updateUser] = await User.update(
    { fullName, email },
    { where: { id } },
  );

  console.log(updateUser);
  return updateUser;
};

const deleteUser = async (id) => {
  const user = await User.destroy({ where: { id } });

  console.log(user);
  return user;
};

module.exports = {
  getAll,
  getById,
  getByIdEmail,
  createUser,
  updateUser,
  deleteUser,
};