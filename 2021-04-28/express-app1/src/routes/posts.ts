import express from 'express';

let postsRouterv1 = express.Router();

let data = {
    posts:[
        {id: 1,userId:1, title: 'sunt aut facere', body:'quia et suscipit...'},
        {id: 2,userId:1, title: 'qui est esse', body:'qui et esse...'},
        {id: 3,userId:1, title: 'ea molestias facere', body:'quia et suscipit...'}
    ]
};

postsRouterv1.get('/', (req, res) => {
    res.json(data.posts);
});
postsRouterv1.get('/:id', (req, res) => {
    let post = data.posts.filter( item => item.id.toString() == req.params.id);
    res.json(post[0]);
});
postsRouterv1.post('/', (req, res) => {
    res.json('creating in v1...');
});
postsRouterv1.patch('/', (req, res) => {
    res.json('patching...');
});
postsRouterv1.delete('/', (req, res) => {
    res.json('deleting...');
});

export default postsRouterv1;
