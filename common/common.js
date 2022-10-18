// Function use for send response in proper formate
module.exports.response = (successFlag, res, status, message, data) => {
  if (successFlag)
    return res.status(status).json({ message: message, data: data })
  return res.status(status).json({ error: message })
}

// Middleware use for validate API payload
module.exports.validate = (schema) => {
  try {
    return (req, res, next) => {
      const { error } = schema.validate(
        { ...req.body, ...req.query, ...req.params, ...req.files },
        {
          abortEarly: false,
          stripUnknown: false,
        },
      )
      if (error) {
        return res.status(422).json({ success: false, errors: error.details })
      }
      next()
    }
  } catch (err) {
    return response(false, res, 500, err.message)
  }
}
