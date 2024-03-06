import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

export default  mongoose.model('Todo', TodoSchema);