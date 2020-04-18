using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Identity.Web;
using Microsoft.Identity.Web.Resource;
using Microsoft.Identity.Web.UI;
using Microsoft.Identity.Web.TokenCacheProviders.InMemory;
using Microsoft.AspNetCore.Authentication.AzureAD.UI;
using Microsoft.Identity.Web.TokenCacheProviders.Distributed;

namespace MSAL_WebApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSignIn(Configuration);//.AddAuthentication(OpenIdConnectDefaults.AuthenticationScheme)

            services.AddWebAppCallsProtectedWebApi(Configuration, new string[] { "user.read","mail.read", "api://account.marsei.net/Balance.QueryOwn", })
            .AddDistributedTokenCaches();
            services.AddDistributedMemoryCache();

            services.AddHttpClient();

            services.AddControllersWithViews().AddMicrosoftIdentityUI();
            services.AddRazorPages()
                .AddRazorPagesOptions(options =>
            {
                options.Conventions.AuthorizePage("/Mail").AuthorizePage("/Home").AuthorizePage("/Profile"); }
            );
                //.AddMvcOptions
                //        (options =>
                //        {
                //            options.Filters.Add(new AuthorizeForScopesAttribute() { Scopes = new string[] { "user.read", "mail.read" } });
                //        }
                //);
        }
        //options =>
        //    {
        //        var policy = new AuthorizationPolicyBuilder()
        //            .RequireAuthenticatedUser()
        //            .Build();
        //options.Filters.Add(new AuthorizeFilter(policy));
        //    }
    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
#pragma warning disable CS0618 // Type or member is obsolete
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
#pragma warning restore CS0618 // Type or member is obsolete
        {
            if (env.IsDevelopment())
            {
                //app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });
        }
    }
}
