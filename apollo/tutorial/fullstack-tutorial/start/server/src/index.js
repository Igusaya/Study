require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');
const resolvers = require('./resolvers') 

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const store = createStore();

const isEmail = require('isemail');

const dataSources =  () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store })
});

// リクエストを受けるたびに呼び出される 
const context = async ({ req }) => {
    const auth = req.headers && req.headers.authorization || '';
    const email = Buffer.from(auth, 'base64').toString('ascii');
    if (!isEmail.validate(email)) return {user: null};
    const users = await store.users.findOrCreate({ where: { email } });
    const user = users && users[0] || null;
    
    return { user: { ...user.dataValues } };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});
