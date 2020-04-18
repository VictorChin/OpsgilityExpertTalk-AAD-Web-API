// Config object to be passed to Msal on creation
const msalConfig = {
    auth: {
        clientId: "4745ee8f-129c-4434-928f-d2eb2049a6ee",
        authority: "https://login.microsoftonline.com/marsei.net",
        redirectUri: "https://msal-spa.azurewebsites.net/"
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
    scopes: ["User.Read","profile","openid"],
    forceRefresh: true // Set this to "true" to skip a cached token and go to the server to get a new token
};
// Add here scopes for access token to be used at MS Graph API endpoints.
const tokenRequest = {
    scopes: ["Mail.Read"],
    forceRefresh: true // Set this to "true" to skip a cached token and go to the server to get a new token
};

const bankTokenRequest = {
    scopes: ["api://account.marsei.net/Balance.QueryOwn","api://account.marsei.net/Balance.VerifyCheck"],
    forceRefresh: true // Set this to "true" to skip a cached token and go to the server to get a new token
};

// Add here the endpoints for MS Graph API services you would like to use.
const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/beta/me",
    graphMailEndpoint: "https://graph.microsoft.com/beta/me/messages"
};
const marseiApiConfig = {
    //BankBalanceEndpoint: "https://localhost:5001/api/bank/getbalance",
    BankBalanceEndpoint: "https://marseiapi.azurewebsites.net/api/bank/getbalance",
};

