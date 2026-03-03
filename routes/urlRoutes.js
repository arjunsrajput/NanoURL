const express=require('express');
const router=express.Router();

const {handleGenerateNewShortURL,handleAnalytics}=require('../controllers/urlController');

router.post('/',handleGenerateNewShortURL);
router.get('/analytics/:shortid',handleAnalytics);

module.exports=router;