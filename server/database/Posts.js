const userList = require('./User');

const postsList = {
    a : {
        a: {
            id: 'a',
            user: userList['a'],
            caption: 'Did you see the light?',
            image: 'https://images.unsplash.com/photo-1511851770202-fe0f706003ca?ixlib=rb-0.3.5&s=81273ad45dffeffd8af09ea75e187736&auto=format&fit=crop&w=1284&q=80'
        },
        b: {
            id: 'b',
            user: userList['a'],
            caption: 'Did you see the light?',
            image: 'https://images.unsplash.com/photo-1512189805855-2fab30ba7c51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31857ada25ac94bd5ce5d054cc3008d4&auto=format&fit=crop&w=1295&q=80'
        },
    }
};

module.exports = postsList;