using System;
using System.Collections.Generic;
using System.Linq;
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

 
    public class MailModel : PageModel
    {

        private readonly ILogger<ProfileModel> _logger;
        private readonly IConfiguration config;
        readonly ITokenAcquisition tokenAcquisition;
        public IUserMessagesCollectionPage Messages;
        public MailModel(ILogger<ProfileModel> logger, IConfiguration config, ITokenAcquisition tokenAcquisition)
        {  
            _logger = logger;
            this.config = config;
            this.tokenAcquisition = tokenAcquisition;
        }
   
        public void OnGet()
        {
        
            string[] scopes = new[] { "mail.read" };
            GraphServiceClient graphClient = GraphServiceClientFactory.GetAuthenticatedGraphClient(async () =>
            {
                string result = await tokenAcquisition.GetAccessTokenForUserAsync(scopes);
                return result;
            }, "https://graph.microsoft.com/beta/");
            Messages = graphClient.Me.Messages.Request().Top(10).GetAsync().Result;


        }
    }
}