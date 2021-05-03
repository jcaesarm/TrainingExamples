import express from 'express';
import { getRepository } from 'typeorm'; 

import Posts from '../models/posts.entity';

let postsRouterv1 = express.Router();

let data = {
    posts:[
        {id: 1,userId:1, title: 'sunt aut facere', body:'quia et suscipit...'},
        {id: 2,userId:1, title: 'qui est esse', body:'qui et esse...'},
        {id: 3,userId:1, title: 'ea molestias facere', body:'quia et suscipit...'}
    ]
};

postsRouterv1.post('/', async (req, res) => {

    let data = req.body;
    console.log(data);

    const newPost = getRepository(Posts).create( data );
    let [post, error] = await handleAsync(getRepository(Posts).save(newPost));

    if (error) return res.send(error);

    res.send(post);
});

postsRouterv1.get('/', async (req, res) => {

    let [posts, error] = await handleAsync(getRepository(Posts).find());

    if (error) return res.send(error);

    res.send(posts);
});
postsRouterv1.get('/:id', (req, res) => {
    let post = data.posts.filter( item => item.id.toString() == req.params.id);
    res.json(post[0]);
});
postsRouterv1.patch('/', (req, res) => {
    res.json('patching...');
});
postsRouterv1.delete('/', (req, res) => {
    res.json('deleting...');
});

const handleAsync = (promise: Promise<any>) => {
    return promise
        .then( (data: any) => ([data, null]) )
        .catch( (error: any) => ([null, error]) )
}

export default postsRouterv1;
