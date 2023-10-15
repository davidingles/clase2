import pool from '../connection.js'

export const getEmpleadosId = async (req, res) => {
  try {
    const { id } = req.params
    const [dil] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id])
    if (dil.length <= 0) return res.status(404).json({ message: 'No se encontró el empleado' })
    res.status(200).json(dil)
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const getEmpleados = async (req, res) => {
  const [dil] = await pool.query('SELECT * FROM empleados')
  res.status(200).json(dil)
}

export const postEmpleados = async (req, res) => {
  try {
    const { nombre, email, telefono, salario } = req.body
    const nuevoEmpleado = {
      nombre,
      email,
      telefono,
      salario
    }
    await pool.query('INSERT INTO empleados SET ?', [nuevoEmpleado])
    res.status(201).json({ message: 'Empleado creado' })
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const putEmpleados = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, email, telefono, salario } = req.body
    const nuevoEmpleado = {
      nombre,
      email,
      telefono,
      salario
    }
    await pool.query('UPDATE empleados SET nombre = IFNULL(?, nombre), email = IFNULL(?, email), telefono = IFNULL(?, telefono), salario = IFNULL(?, salario) WHERE id = ?', [nuevoEmpleado, id])
    res.status(200).json({ message: 'Empleado actualizado' })
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const deleteEmpleadosById = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM empleados WHERE id = ?', [id])
    res.status(200).json({ message: 'Empleado eliminado' })
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' })
  }
}
