const Todo = require("../models/todoModels");

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);

    } catch (err) {
        res.status(500).json({message : err.message})
    }
}

exports.createTodo = async (req, res) => {
    try {
        const {description} = req.body;

        if (!description) return res.status(400).json({message: "pls provide description"});

        const newTodo = new Todo({
            description,
            completed: false,
        })

        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const {description, completed} = req.body;

        const updates = {}
        if (description !== undefinded) updates.description = description;
        if (completed !== undefined) updates.completed = completed;
        
        const updateTodo = await Todo.findByIdAndUpdate(id, updates , {
            new: true,
            runValidators: true,
        })

        if (!updateTodo) return res.status(404).json({message: "Todo not found"});

        res.status(200).json(updateTodo);
    } catch (err) {
        res.status(500).json({message : err.message});
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;

        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) return res.status(404).json({message: "Todo not found"});

        res.status(200).json({message: "Todo deleted successfully"});
    } catch (err) {
        res.status(500).json({message : err.message});
    }
}