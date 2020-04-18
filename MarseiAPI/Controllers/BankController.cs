using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MarseiAPI.Controllers
{
   
    [ApiController]
    public class BankController : ControllerBase
    {
 
        [Route("api/bank/getbalance")]
        [Authorize()]
        public ActionResult<List<AccountBalance>> GetBalance()
        {
            if (this.VerifyUserHasAnyAcceptedScope(this.HttpContext, "Balance.QueryAll"))
            {
                return new List<AccountBalance>
                    { new AccountBalance{ AccoutnID=5, Balance=5000M, OwnerName="Bob" },
                      new AccountBalance{ AccoutnID=6, Balance=3000M, OwnerName="Tom" }
                };
            }
            else if (this.VerifyUserHasAnyAcceptedScope(this.HttpContext, "Balance.QueryOwn"))
            {
                return new List<AccountBalance>
            { new AccountBalance{ AccoutnID=10, Balance=3000M, OwnerName=this.User.Identity.Name } };
            }
            else {
                return new List<AccountBalance>
                 { new AccountBalance{ AccoutnID=1, Balance=1000M, OwnerName="Dummy User" } };
            }
        }
        [Route("api/bank/test")]
        public ActionResult<List<AccountBalance>> TestGetBalance()
        {
            return new List<AccountBalance>
            { new AccountBalance{ AccoutnID=1, Balance=1000M, OwnerName="Dummy" } };
        }

        private bool VerifyUserHasAnyAcceptedScope(HttpContext context,
                                                     params string[] acceptedScopes)
        {
            if (acceptedScopes == null)
            {
                throw new ArgumentNullException(nameof(acceptedScopes));
            }
            Claim scopeClaim = context?.User?.FindFirst("http://schemas.microsoft.com/identity/claims/scope");
            if (scopeClaim == null || !scopeClaim.Value.Split(' ').Intersect(acceptedScopes).Any())
            {
                context.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                string message = $"The 'scope' claim does not contain scopes '{string.Join(",", acceptedScopes)}' or was not found";
                return false;
                //throw new HttpRequestException(message);
            }
            else
                return true;
        }

    }
}