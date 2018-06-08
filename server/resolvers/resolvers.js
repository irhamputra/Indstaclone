const userList = {
    a: {
        id: 'a',
        username: 'irhamputra',
        avatar: 'https://scontent-frt3-1.cdninstagram.com/vp/627949e7665e70c73a9c51c47fdd6bf7/5BB9418D/t51.2885-19/s150x150/34124457_220895758506864_6725624653290668032_n.jpg'
    },
    b: {
        id: 'b',
        username: 'echiartanti',
        avatar: 'https://scontent-frx5-1.cdninstagram.com/vp/80b16cead7f4a18cec67c61ee6542719/5BB75F5C/t51.2885-19/s150x150/30087411_985427631607585_4556251055926542336_n.jpg'
    },
};

const postsList = {
    a : {
        a: {
            id: 'a',
            user: userList['a'],
            caption: 'Did you see the light?',
            image: 'https://images.unsplash.com/photo-1494257473705-09a5a19d04af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8630a45d2003aa0fe3d2f5ff376d9ec&auto=format&fit=crop&w=1500&q=80'
        },
        b: {
            id: 'b',
            user: userList['a'],
            caption: 'Do you meet my sunset?',
            image: 'https://images.unsplash.com/photo-1505388763672-ee96ba65bac8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa2b17198c95694b3f90d9e8681d66bc&auto=format&fit=crop&w=1500&q=80'
        },
        c: {
            id: 'c',
            user: userList['a'],
            caption: 'Just let it be...',
            image: 'https://images.unsplash.com/photo-1496749843252-699a989877a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe5da9650707e5a93c8c3cf164c2e74b&auto=format&fit=crop&w=1375&q=80'
        }
    },
    b: {
        b: {
            id: 'b',
            user: userList['b'],
            caption: 'Find a place without a map',
            image: 'https://images.unsplash.com/photo-1512189805855-2fab30ba7c51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31857ada25ac94bd5ce5d054cc3008d4&auto=format&fit=crop&w=1295&q=80'
        }
    }
};

const rootValue = {
    user: ({ id }) => {
        return userList[id]
    },
    post: ({ user_id, post_id}) => {
        return postsList[user_id][post_id]
    },
    posts: ({ user_id }) => {
        return Object.values(postsList[user_id])
    }
};

module.exports = rootValue;