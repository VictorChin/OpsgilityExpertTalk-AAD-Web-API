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
using Microsoft.Identity.Client;
using Microsoft.Identity.Web;

namespace MSAL_WebApp.Pages
{
 
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly IConfiguration config;
        readonly ITokenAcquisition tokenAcquisition;
        private readonly HttpClient _httpClient;

        public IndexModel(ILogger<IndexModel> logger, IConfiguration config, ITokenAcquisition tokenAcquisition,
            IHttpClientFactory clientFactory
            )
        {
            _logger = logger;
            this.config = config;
            this.tokenAcquisition = tokenAcquisition;
            this._httpClient = clientFactory.CreateClient();
        }

        public void OnGet()
        {
           


        }
    }
}
