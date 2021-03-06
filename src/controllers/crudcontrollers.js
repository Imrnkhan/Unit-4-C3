const post = (model) => async (req, res) => {
    try {
      const item = await model.create(req.body);
      return res.send(item);
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  };
  
  const getAll = (model) => async (req, res) => {
    try {
      const item = await model.find().lean().exec();
      return res.send(item);
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  };
  
  const getOne = (model) => async (req, res) => {
    try {
      const item = await model.findById(req.params.id).lean().exec();
      return res.send(item);
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  };
  
  const patch = (model) => async (req, res) => {
    try {
      const item = await model
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .lean()
        .exec();
      return res.send(item);
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  };
  
  const Delete = (model) => async (req, res) => {
    try {
      const item = await model.findByIdAndDelete(req.params.id).lean().exec();
      return res.send(item);
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  };
  
  