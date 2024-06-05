
import LinkModel from "../Models/LinkModel.js";
const LinksController = {
  getList: async (req, res) => {
    try {
      const links = await LinkModel.find();
      res.json(links);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
        await LinkModel.find({_id:req.params.id})
      const link = await LinkModel.findById(req.params.id);
      res.json(link);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const { originalUrl } = req.body; 
    try {
      const newLink = await LinkModel.create({ originalUrl });
      res.json(newLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedLink = await LinkModel.findByIdAndUpdate(id, req.body, {new:true});
      res.json(updatedLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await LinkModel.findByIdAndDelete(id);
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  redirect: async (req, res) => {
    const { id } = req.params;
    try {
      const link = await LinkModel.findById(id);
      if (!link) {
        return res.status(404).json({ message: "Link not found" });
      }

      const ipAddress = req.ip;
      const click = new ClickModel({ ipAddress });
      link.clicks.push(click);
      await link.save();

      res.redirect(link.originalUrl);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
};

export default LinksController;
  