using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Graph;
using Microsoft.Identity.Web;
using MSAL_WebApp.Services;

namespace MSAL_WebApp.Pages
{
    public class BankAccountModel : PageModel
    {
        private readonly ILogger<ProfileModel> _logger;
        private readonly IConfiguration config;
        readonly ITokenAcquisition tokenAcquisition;
        private readonly IHttpClientFactory clientFactory;
        public IUserMessagesCollectionPage Messages;
        public string AccountString;
        
        public BankAccountModel(ILogger<ProfileModel> logger, IConfiguration config, ITokenAcquisition tokenAcquisition, IHttpClientFactory clientFactory)
        {
            _logger = logger;
            this.config = config;
            this.tokenAcquisition = tokenAcquisition;
            this.clientFactory = clientFactory;
        }

        public async Task OnGet()
        {

            string[] scopes = new[] { "api://account.marsei.net/Balance.QueryOwn" };
            string accessToken = await tokenAcquisition.GetAccessTokenForUserAsync(scopes);


            var request = new HttpRequestMessage(HttpMethod.Get,
             "https://marseiapi.azurewebsites.net/api/bank/getbalance");

            var client = clientFactory.CreateClient();
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            await client.SendAsync(request)
                  .ContinueWith( msg => msg.Result.Content.ReadAsStringAsync().Result)
                  .ContinueWith( s => this.AccountString = s.Result); ;
         
        


        }
    }
}