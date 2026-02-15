using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.NeverHaveIEver
{
    /// <summary>
    /// Query options for the Never Have I Ever API
    /// </summary>
    public class NeverHaveIEverQueryOptions
    {
        /// <summary>
        /// Include adult/relationship-focused statements
        /// </summary>
        [JsonProperty("adult")]
        public string Adult { get; set; }
    }
}
