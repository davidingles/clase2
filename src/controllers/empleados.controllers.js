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
