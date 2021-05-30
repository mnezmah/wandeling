import { Route } from "react-router-dom";
import SignIn from "./components/SingIn/SingIn";
import Home from "./components/Home/Home";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import "./App.css";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/wandeling" component={Home} />
        </ApolloProvider>
    );
}

export default App;
