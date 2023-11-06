

export const validarNombre = async (req, res, next) => {
  const {nombre} = req.body

  if (!nombre) {
    res.status(401).json({
      msg: "debes ingresar un nombre",
    });
  } else {
    next();
  }
};
export const validarEdad = async (req, res, next) => {
  const edad  = req.params.edad; 
  console.log(edad)

  if (typeof edad !== 'number' && edad < 18) {
    res.status(401).json({
      msg: "Debes ser mayor de 18 años para continuar",
    });
  } else {
    next();
  }
};




