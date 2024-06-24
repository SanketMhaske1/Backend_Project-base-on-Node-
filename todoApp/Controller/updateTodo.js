const todo = require("../Model/todoModel");

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, currentState } = req.body;
    const allTodo = await todo.findByIdAndUpdate(
      { _id: id },
      { title, description, currentState, updatedAt: Date.now() }
    );

    res.status(200).json({
      success: true,
      data: allTodo,
      message: `Update Todo Successfully`,
    });
  } catch (error) {
    console.log(`Not Able to Update  Todo because ${error}`);
    res.status(500).json({
      success: false,
      data: null,
      message: `Not Able to Update Todo`,
    });
  }
};
