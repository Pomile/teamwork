import express from 'express';
import Gifs from '../controllers/gif';
import GifInputValidation from '../middleware/gif';
import UserAuth from '../middleware/auth';

const { createAGif, deleteSelfGif } = Gifs;
const { validateGifsDetails, validateSpecifyGif } = GifInputValidation;
const { verifyUserToken, isOwner } = UserAuth;

const gifRouter = express.Router();

gifRouter.post('/gifs', verifyUserToken, validateGifsDetails, createAGif);
gifRouter.delete('/gifs/:gifId', verifyUserToken, isOwner, validateSpecifyGif, deleteSelfGif);


export default gifRouter;
