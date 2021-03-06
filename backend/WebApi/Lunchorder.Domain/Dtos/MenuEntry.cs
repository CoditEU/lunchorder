using System;

namespace Lunchorder.Domain.Dtos
{
    /// <summary>
    /// A menu entry
    /// </summary>
    public class MenuEntry
    {
        private string _picture;

        /// <summary>
        /// An identifier for the menu entry
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// The name of the menu entry
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// The description of the menu entry
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// The associated category for the menu entry
        /// </summary>
        public string CategoryId { get; set; }

        /// <summary>
        /// An URL that contains a picture for the menu entry
        /// </summary>
        public string Picture
        {
            get { return string.IsNullOrEmpty(_picture) ? "" : _picture; }
            set { _picture = value; }
        }

        /// <summary>
        /// The price for the menu entry
        /// </summary>
        public decimal Price { get; set; }

        /// <summary>
        /// Represents if the entry is in an enabled state
        /// </summary>
        public bool Enabled { get; set; }

        /// <summary>
        /// Is the order a healthy item
        /// </summary>
        public bool Healthy { get; set; }

        /// <summary>
        /// Is the order a pasta item
        /// </summary>
        public bool Pasta { get; set; }
    }
}