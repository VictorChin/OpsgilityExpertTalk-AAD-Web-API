using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Graph;
using Microsoft.Identity.Client;
using Microsoft.Identity.Web;
using MSAL_WebApp.Services;

namespace MSAL_WebApp.Pages
{
    public class ProfileModel : PageModel
    {

        private readonly ILogger<ProfileModel> _logger;
        private readonly IConfiguration config;
        readonly ITokenAcquisition tokenAcquisition;
        public User Me;
        public ProfileModel(ILogger<ProfileModel> logger, IConfiguration config, ITokenAcquisition tokenAcquisition)
        {
            _logger = logger;
            this.config = config;
            this.tokenAcquisition = tokenAcquisition;
        }
        
        public void OnGet()
        {
            string[] scopes = new[] { "user.read" };

            GraphServiceClient graphClient = GraphServiceClientFactory.GetAuthenticatedGraphClient(async () =>
            {
                string result = await tokenAcquisition.GetAccessTokenForUserAsync(scopes);
                return result;
            }, "https://graph.microsoft.com/beta/");
            Me = graphClient.Me.Request().GetAsync().Result;
            
        }
    }
}