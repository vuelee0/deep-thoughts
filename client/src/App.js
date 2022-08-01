import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

function App() {
    return (
        // wrapping our JSX with the <ApolloProvider> element will enable our app to interact with our Apollo Client instance
        <ApolloProvider client={client}>
            <div className='flex-column justify-flex-start min-100-vh'>
                <Header />
                <div className='container'>
                    <Home />
                </div>
                <Footer />
            </div>
        </ApolloProvider>
    );
}

export default App;
