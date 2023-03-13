const Cliente = require('../models/cliente');

exports.obtenerUsuarios = async (req, res) => {
  try {
    const user = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}

exports.agregarCliente = async (req, res) => {
  const { nombre, email, telefono, direccion } = req.body;

  try {
    let usuario = await User.findOne({ email });

    if (usuario) {
      return res.status(400).json({ msg: 'El cliente ya existe' });
    }

    user = new User({
      email,
      password
    });

    await user.save();

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}
