/**
 * Created by CGS_01 on 25-11-2019.
 */

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('Api Works!');
});

module.exports = router;