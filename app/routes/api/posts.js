const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// References /api/post
router.get('/', async (req, res) => {
    const posts = await loadMerchopsCollection();
    res.send(await posts.find({}).toArray());
});

router.post('/', async (req, res) => {
    const posts = await loadMerchopsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.send(201).send();
});

router.delete('/:id', async (req, res) => {
    const posts = await loadMerchopsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
})

async function dbCon() {
    let client = await mongodb.MongoClient.connect('mongodb://mavericks:VISAcash12@ds052978.mlab.com:52978/scheduler', {
        useNewUrlParser: true
    });

    return client;
}

async function loadMerchopsCollection() {
    const client = await dbCon();

    return client.db('scheduler').collection('merchops');
}

module.exports = router;