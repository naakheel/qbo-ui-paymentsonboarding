define([
    "dojo/_base/declare",
    "neo/BaseModel"//,
   // "https://mpsnare.iesnare.com/snare.js"
], function (declare, BaseModel) {

    /**
     * Basic Model. Inherits from BaseModel.js
     *
     * @see http://dojotoolkit.org/reference-guide/1.9/dojo/_base/declare.html
     */
    return declare([BaseModel], {

        /**
         * Register any data fields for data binding.
         * @type {Array}
         */
        dataFields: [
            // This corresponds to our input box and its starting value
            { name: "realmId", value: qbo.serverGroupCompanyId},
            { name: "locale", value: "en_US"},
            { name: "channel", value: "QBO_SPA"},
            { name: "offerId", value: "qboh_1995spp_n-56218-79914"},
           // { name: "deviceId", value: window.ioGetBlackbox ? ioGetBlackbox().blackbox : ""},
            { name: "applyForSwiper", value: false},
            { name: "acceptedTermsAndConditions", value: true},
            { name: "businessType", value: "BUSINESS"},
            { name: "ownershipType"},
            { name: "businessCode"},
            { name: "businessPhone", value: "9784622301"},
            { name: "businessAddress.line1", value: "103 Main St"},
            { name: "businessAddress.line2", value: ""},
            { name: "businessAddress.city", value: "Salisbury"},
            { name: "businessAddress.state", value: "MA"},
            { name: "businessAddress.postalCode", value: "01952"},
            { name: "bankAccount.routingNumber", value: "074000010"},
            { name: "bankAccount.accountNumber", value: "9334235425"},
            { name: "brandId", value: "IPD_QBO_Harmony"},
            { name: "applyForAMEX", value: true},
            { name: "businessName", value: qbo.companyName ? qbo.companyName : ""},
            { name: "businessOwnerPhone", value: "9784622301"},
            { name: "businessOwnerAddress.line1", value: "103 Main St"},
            { name: "businessOwnerAddress.line2", value: ""},
            { name: "businessOwnerAddress.city", value: "Salisbury"},
            { name: "businessOwnerAddress.state", value: "MA"},
            { name: "businessOwnerAddress.postalCode", value: "01952"},
            { name: "businessOwner.dob", value: "1946-07-18"},
            { name: "businessOwner.ssn", value: "0624"},
            { name: "businessOwner.firstName", value: "Shavonne" },
            { name: "businessOwner.lastName", value: "Farrell" }
        ]

    });
});