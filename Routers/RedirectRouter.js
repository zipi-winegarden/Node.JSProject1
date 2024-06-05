import express from 'express';
import LinkModel from '../Models/LinkModel.js';

const RedirectRouter = express.Router();

RedirectRouter.get('/:id', async (req, res) => {
  try {
 
    const link = await LinkModel.findById(req.params.id);
    if (!link) {
      console.log('enter redirect error!!!👎👎');
      return res.status(404).send('Link not found');
    }

    const targetParamValue = req.query[link.targetParamName] || '';

    link.clicks.push({
      ipAddress: req.ip,
      targetParamValue: targetParamValue
    });
    await link.save();

    res.redirect(link.originalUrl);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

export default RedirectRouter;
