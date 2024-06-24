const todo = require("../Model/todoModel");

exports.getAllTodo = async (req, res) => {
  try {
    const allTodo = await todo.find({});
    res.status(200).json({
      success: true,
      data: allTodo,
      message: `You Todo Created Successfully`,
    });
  } catch (error) {
    console.log(`Not Able to Create you Todo because ${error}`);
    res.status(500).json({
      success: false,
      data: null,
      message: `Not Able to Create you Todo Successfully`,
    });
  }
};

exports.getTodoByID = async (req, res) => {
  const id = req.params.id;

  try {
    const allTodo = await todo.find({ _id: id });

    if (!allTodo) {
      res.status(404).json({
        success: false,
        data: null,
        message: `Not Found`,
      });
    }

    res.status(200).json({
      success: true,
      data: allTodo,
      message: `Todo Find Successfully`,
    });
  } catch (error) {
    console.log(`Not Able to Create you Todo because ${error}`);
    res.status(500).json({
      success: false,
      data: null,
      message: `Not Able to Create you Todo Successfully`,
    });
  }
};
