﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using System.Collections.Generic;

namespace Microsoft.Identity.Web.Test.Common
{
    public static class TestConstants
    {
        public const string ProductionPrefNetworkEnvironment = "login.microsoftonline.com";
        public const string ProductionPrefNetworkUSEnvironment = "login.microsoftonline.us";
        public const string ProductionNotPrefEnvironmentAlias = "sts.windows.net";

        public const string HttpLocalHost = "https://localhost";

        public const string ApiAudience = "api://" + ApiClientId;
        public const string ApiClientId = "1EE5A092-0DFD-42B6-88E5-C517C0141321";

        public const string ClientId = "87f0ee88-8251-48b3-8825-e0c9563f5234";
        public const string TenantId = "some-tenant-id";
        public const string TenantIdAsGuid = "da41245a5-11b3-996c-00a8-4d99re19f292";
        public const string Domain = "contoso.onmicrosoft.com";

        public const string AadInstance = "https://login.microsoftonline.com";
        public const string AuthorityCommonTenant = AadInstance + "/common/";
        public const string AuthorityOrganizationsTenant = AadInstance + "/organizations/";
        public const string AuthorityOrganizationsUSTenant = "https://" + ProductionPrefNetworkUSEnvironment + "/organizations";

        public const string AuthorityWithTenantSpecified = AadInstance + "/" + TenantIdAsGuid;
        public const string AuthorityCommonTenantWithV2 = AadInstance + "/common/v2.0";
        public const string AuthorityOrganizationsWithV2 = AadInstance + "/organizations/v2.0";
        public const string AuthorityOrganizationsUSWithV2 = AuthorityOrganizationsUSTenant + "/v2.0";
        public const string AuthorityWithTenantSpecifiedWithV2 = AadInstance + "/" + TenantIdAsGuid + "/v2.0";
        public const string AadIssuer = AadInstance + "/" + TenantIdAsGuid + "/v2.0";

        // B2C
        public const string B2CSignUpSignInUserFlow = "b2c_1_susi";
        public const string B2CEditProfileUserFlow = "b2c_1_edit_profile";
        public const string B2CResetPasswordUserFlow = "b2c_1_reset";
        public const string B2CTenant = "fabrikamb2c.onmicrosoft.com";
        public const string B2CTenantAsGuid = "775527ff-9a37-4307-8b3d-cc311f58d925";
        public const string B2CHost = "fabrikamb2c.b2clogin.com";
        public const string B2CInstance = "https://fabrikamb2c.b2clogin.com";
        public const string B2CInstance2 = "https://catb2c.b2clogin.com";
        public const string B2CCustomDomainInstance = "https://catsAreAmazing.com";

        public const string B2CAuthority = B2CInstance + "/" + B2CTenant + "/" + B2CSignUpSignInUserFlow;
        public const string B2CAuthorityWithV2 = B2CAuthority + "/v2.0";
        public const string B2CCustomDomainAuthority = B2CCustomDomainInstance + "/" + B2CTenant + "/" + B2CSignUpSignInUserFlow;
        public const string B2CCustomDomainAuthorityWithV2 = B2CCustomDomainAuthority + "/v2.0";

        public const string B2CIssuer = B2CInstance + "/" + B2CTenantAsGuid + "/v2.0";
        public const string B2CIssuer2 = B2CInstance2 + "/" + B2CTenantAsGuid + "/v2.0";
        public const string B2CCustomDomainIssuer = B2CCustomDomainInstance + "/" + B2CTenantAsGuid + "/v2.0";

        // Claims
        public const string ClaimNameTid = "tid";
        public const string ClaimNameIss = "iss";
        public const string ClaimNameTfp = "tfp"; //Trust Framework Policy for B2C (aka userflow/policy)

        public static readonly IEnumerable<string> s_aliases = new[]
        {
            ProductionPrefNetworkEnvironment,
            ProductionNotPrefEnvironmentAlias
        };

        public static readonly IEnumerable<string> s_scopesForApp = new[]
        {
            "https://graph.microsoft.com/.default"
        };

        public static readonly IEnumerable<string> s_scopesForUser = new[]
        {
            "user.read"
        };

        public const string InvalidScopeError = "The scope user.read is not valid.";
        public const string InvalidScopeErrorcode = "AADSTS70011";
        public const string InvalidScope = "invalid_scope";

        // Constants for the lab
        public const string ConfidentialClientKeyVaultUri = "https://buildautomation.vault.azure.net/secrets/AzureADIdentityDivisionTestAgentSecret/";
        public const string ConfidentialClientId = "16dab2ba-145d-4b1b-8569-bf4b9aed4dc8";
        public const string ConfidentialClientLabTenant = "72f988bf-86f1-41af-91ab-2d7cd011db47";

        //This value is only for testing purposes. It is for a certificate that is not used for anything other than running tests
        public const string CertificateX5c = @"MIIDHzCCAgegAwIBAgIQM6NFYNBJ9rdOiK+C91ZzFDANBgkqhkiG9w0BAQsFADAgMR4wHAYDVQQDExVBQ1MyQ2xpZW50Q2VydGlmaWNhdGUwHhcNMTIwNTIyMj
            IxMTIyWhcNMzAwNTIyMDcwMDAwWjAgMR4wHAYDVQQDExVBQ1MyQ2xpZW50Q2VydGlmaWNhdGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCh7HjK
            YyVMDZDT64OgtcGKWxHmK2wqzi2LJb65KxGdNfObWGxh5HQtjzrgHDkACPsgyYseqxhGxHh8I/TR6wBKx/AAKuPHE8jB4hJ1W6FczPfb7FaMV9xP0qNQrbNGZU
            YbCdy7U5zIw4XrGq22l6yTqpCAh59DLufd4d7x8fCgUDV3l1ZwrncF0QrBRzns/O9Ex9pXsi2DzMa1S1PKR81D9q5QSW7LZkCgSSqI6W0b5iodx/a3RBvW3l7d
            noW2fPqkZ4iMcntGNqgsSGtbXPvUR3fFdjmg+xq9FfqWyNxShlZg4U+wE1v4+kzTJxd9sgD1V0PKgW57zyzdOmTyFPJFAgMBAAGjVTBTMFEGA1UdAQRKMEiAEM
            9qihCt+12P5FrjVMAEYjShIjAgMR4wHAYDVQQDExVBQ1MyQ2xpZW50Q2VydGlmaWNhdGWCEDOjRWDQSfa3ToivgvdWcxQwDQYJKoZIhvcNAQELBQADggEBAIm6
            gBOkSdYjXgOvcJGgE4FJkKAMQzAhkdYq5+stfUotG6vZNL3nVOOA6aELMq/ENhrJLC3rTwLOIgj4Cy+B7BxUS9GxTPphneuZCBzjvqhzP5DmLBs8l8qu10XAsh
            y1NFZmB24rMoq8C+HPOpuVLzkwBr+qcCq7ry2326auogvVMGaxhHlwSLR4Q1OhRjKs8JctCk2+5Qs1NHfawa7jWHxdAK6cLm7Rv/c0ig2Jow7wRaI5ciAcEjX7
            m1t9gRT1mNeeluL4cZa6WyVXqXc6U2wfR5DY6GOMUubN5Nr1n8Czew8TPfab4OG37BuEMNmBpqoRrRgFnDzVtItOnhuFTa0=";
    }
}