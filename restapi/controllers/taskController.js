const Task = require('../models/task');

exports.getTasks = (req,res,next) => {
  Task.findAll()
    .then(result=>{
      res.status(200).json({
        message: 'success',
        content: result
      })
    })
    .catch(error=> {
      res.status(500).json({
        message: 'error',
        content: error
      })
    })
};
