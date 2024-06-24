const Todo = require("../Model/todoModel");

exports.createTodo = async (req, res) => {
  try {
    const { title, description, currentState } = req.body;
    const response = await Todo.create({
      title,
      description,
      currentState,
    });

    res.status(200).json({
      success: true,
      data: response,
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
