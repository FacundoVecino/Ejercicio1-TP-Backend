import TaskModel from '../models/taskSchema.js';

export const getTasks = async (_, res) => {
  try {
    const data = await TaskModel.find({});
    const filterData = data.filter((task) => task._doc.isActive === true);
    res.json({ data: filterData, message: 'Tareas encontradas' });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: 'Ocurrió un error',
      error: e.message,
    });
  }
};

export const postTask = async (req, res) => {
  const { body } = req;
  const newTask = new TaskModel({
    title: body.title,
    details: body.details,
    dateAndTime: body.dateAndTime,
    isActive: true,
  });

  try {
    await newTask.save();
    res.status(201).json({
      data: null,
      message: 'Tarea creada exitosamente',
    });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: 'Ocurrió un error guardando la tarea',
      error: e.message,
    });
  }
};

export const putTask = async (req, res) => {
  const { body, params: { id } } = req;
  try {
    const action = await TaskModel.updateOne({ _id: id }, body);

    if (action.matchedCount === 0) {
      res.status(400).json({
        data: null,
        message: 'No se encontró la tarea con ese id',
      });
      return;
    }
    res.json({
      data: null,
      message: 'La tarea ha sido actualizada exitosamente',
    });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: 'Ocurrió un error actualizando la tarea',
      error: e.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  const { params: { id } } = req;
  try {
    const action = await TaskModel.updateOne({ _id: id }, { isActive: false });

    if (action.matchedCount === 0) {
      res.status(400).json({
        data: null,
        message: 'No se encontró la tarea con ese id',
      });
      return;
    }
    res.json({
      data: null,
      message: 'La tarea ha sido eliminada exitosamente',
    });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: 'Ocurrió un error eliminando la tarea',
      error: e.message,
    });
  }
};
