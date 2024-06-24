const todo = require("../Model/todoModel");

exports.deletTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const allTodo = await todo.findOneAndDelete({ _id: id });

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
