define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "neo/BaseViewController",
    "qbo/challenge/ChallengeModel",
    "dojo/text!./templates/Challenge.html",
    "qbo/base/app",
    "neo/util/xhr",
    "dojo/dom",
    "neo/widgets/Select"
], function(declare, lang, BaseViewController, ChallengeModel, template, app, xhr, dom) {

    /**
     * Basic View Controller. Inherits from BaseViewController.
     *
     * @see http://dojotoolkit.org/reference-guide/1.9/dojo/_base/declare.html
     */
    return declare([BaseViewController], {

        /**
         * The HTML template to use to render the view.
         * @type {String}
         */
        templateString: template,
        model: null,

        /**
         * Constructor.
         *
         * @param {Object} args A map of arguments to initialize this instance with.
         */
        constructor: function(args) {
            // Arguments are mixed in to this instance.
            // See http://dojotoolkit.org/reference-guide/1.9/dojo/_base/lang.html#mixin
            lang.mixin(this, args);
            this.model = new ChallengeModel();
        },

        /**
         * Start up this instance. Overrides startup() in _WidgetBase.js
         *
         * @see http://dojotoolkit.org/documentation/tutorials/1.9/understanding_widgetbase
         */
        startup: function () {
            // When overriding methods you must call this.inherited and pass the arguments so the superclass method gets called.
            // This is how Dojo handles inheritance.
            // See http://dojotoolkit.org/reference-guide/1.9/dojo/_base/declare.html#calling-superclass-methods
            this.inherited(arguments);

            // Call this to let the rest of the app know we are ready. This will remove the loading spinner from the page.
            this.pageReady();
        },

        paymentSignup: function () {
            this.emit("page-enter-wait");
            var data, applicationResponse;
            data= this.model.toJSON();
            applicationResponse = xhr.post({
                url: "https://pay-qa.intuit.com/signup/api/applications",
                skipCsrf: true,
                postData: data,
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                },
                handleAs: "json"
            });

            applicationResponse.then(
                function(){
                    dom.byId("page_content").style.display = "block";
                    dom.byId("owner_slide").style.display = "none";
                    dom.byId("business_slide").style.display = "none";
                    dom.byId("footer").style.display = "none";
                    this.emit("page-exit-wait");
                }.bind(this),
                function(){
                    this.emit("page-exit-wait");
                    alert("Failure");
                }.bind(this)
            );


        },

        paymentSignupPlugin: function () {

            app.route("plugins/paymentsignup");
        }

    });
});