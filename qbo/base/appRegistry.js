define([
    "dojo/has",
    "neo/util/common"
],  function(has, common) {
    return {
        /**
         * @property routes
         * @type {Array}
         *
         * Array of route objects where the path is the routing path and the handler is
         * the handler function that will be called.
         *
         * Title is an object with nls information that is used to determine the default page title for that route.
         * See neo/AppController.
         *
         * The method will be called when a path is matched. Named parameters, query strings are extracted from the path
         * and provided as the first argument. See neo/Router.
         */
        routes: [

            {
                path: "advancedmatch",
                handler: function(options) {
                    this.showView("advancedmatch", options);
                }
            },

            {
                path: "olbrules",
                handler: function(options) {
                    this.showView("olbrules", options);
                }
            },

            {
                path: "olbrule",
                handler: function(options) {
                    this.showView("olbrule", options);
                }
            },

            {
                path: "sdkapplist",
                handler: function(options) {
                    this.showLegacyView("lists/sdkapp/list", options);
                }
            },

            {
                path: "permissiondenied",
                handler: function(options) {
                    options.params.type = options.acl;
                    this.showView("permissiondenied", options);
                }
            },

            {
                path: "sales",
                title: {
                    nls: "qbo/nls/TxnList",
                    key: "sales_txns_title"
                },
                handler: function(options) {
                    this.showView("sales", options);
                }
            },

            {
                path: "clients",
                /*** V1 Fix: to take the user back to client-homepage rather than blank page when,
                 user clicks on browser back button when navigated from an accounting firm ***/
                handler: function() {
                    if (qbo.backToVO) {
                        common.route(qbo.isQBOLite ? "/app/collabhomepage" : "/app/homepage");
                    }
                    /*couple of other possible ways to navigate directly to VO firm, but there is flickering experience in this case, need to explore html5 history api*/
                    //this.showView(qbo.isQBOLite ? "collabhomepage" : "homepage", options);
                    //window.location.href=common.getUrl("login/iamapplyswitch?companyid=" + qbo.backToVO);
                }
            },

            {
                path: "clientdetail",
                /*** V1 Fix: to take the user back to client-homepage rather than blank page when,
                 user clicks on browser back button when navigated from an accounting firm ***/
                handler: function() {
                    if (qbo.backToVO) {
                        common.route(qbo.isQBOLite ? "/app/collabhomepage" : "/app/homepage");
                    }
                    /*couple of other possible ways to navigate directly to VO firm, but there is flickering experience in this case, need to explore html5 history api*/
                    //this.showView(qbo.isQBOLite ? "collabhomepage" : "homepage", options);
                    //window.location.href=common.getUrl("login/iamapplyswitch?companyid=" + qbo.backToVO);
                }
            },

            {
                path: "managestaff",
                handler: function() {
                    //Placeholder so it can be overridden by ecosystem
                }
            },

            {
                path: "taxreturns",
                handler: function() {
                    //Placeholder so it can be overridden by ecosystem
                }
            },

            {
                path: "templates",
                handler: function(options) {
                    this.showView("templates", options);
                }
            },

            {
                path: "customsummary",
                handler: function(options) {
                    this.showView("customsummary", options);
                }
            },

            {
                path: "custominsight",
                handler: function(options) {
                    this.showView("custominsight", options);
                }
            },
            {
                path: "insightview",
                handler: function(options) {
                    this.showView("insightview", options);
                }
            },
            {
                path: "expenses",
                title: {
                    nls: "qbo/nls/TxnList",
                    key: "expense_txns_title"
                },
                handler: function(options) {
                    this.showView("expenses", options);
                }
            },

            {
                path: "customers",
                title: {
                    nls: "qbo/nls/Centers",
                    key: "customer_title"
                },
                handler: function(options) {
                    options.params.nameType = "customer";
                    this.showView("namecenter", options);
                },
                accessKey: 67
            },

            {
                path: "vendors",
                title: {
                    nls: "qbo/nls/Centers",
                    key: "vendor_title"
                },
                handler: function(options) {
                    options.params.nameType = "vendor";
                    this.showView("namecenter", options);
                },
                accessKey: 86
            },

            {
                path: "customerdetail",
                title: {
                    nls: "qbo/nls/Centers",
                    key: "customer_title"
                },
                handler: function(options) {
                    options.params.nameType = "customer";
                    this.showView("namedetail", options);
                }
            },

            {
                path: "vendordetail",
                title: {
                    nls: "qbo/nls/Centers",
                    key: "vendor_title"
                },
                handler: function(options) {
                    options.params.nameType = "vendor";
                    this.showView("namedetail", options);
                }
            },

            {
                path: "attachments",
                title: {
                    nls: "qbo/nls/Attachments",
                    key: "title"
                },
                handler: function (options) {
                    this.showView("attachments", options);
                }
            },

            {
                path: "lists",
                title: {
                    nls: "qbo/nls/ListsView",
                    key: "lists_title"
                },
                handler: function (options) {
                    this.showView("listshome", options);
                },
                accessKey: 76
            },

            {
                path: "items",
                handler: function(options) {
                    options.params.entityType = "item";
                    this.showView("lists", options);
                }
            },

            {
                path: "assignAccounts",
                handler: function(options) {
                    this.showLegacyView("lists/assignaccountnumber/show", options);
                }
            },

            {
                path: "class",
                handler: function(options) {
                    if (qbo.menus[35] === "u") {
                        //send to generic upgrade landing page since we do not have class specific upgrade landing page
                        this.showLegacyView("billing/upgrade_overview", options);
                    } else {
                        options.params.entityType = "klass";
                        this.showView("lists", options);
                    }
                }
            },

            {
                path: "locations",
                handler: function(options) {
                    if (qbo.menus[36] === "u") {
                        //send to generic upgrade landing page since we do not have locations specific upgrade landing page
                        this.showLegacyView("billing/upgrade_overview", options);
                    } else {
                        options.params.entityType = "location";
                        this.showView("lists", options);
                    }
                }
            },

            {
                path: "terms",
                handler: function(options) {
                    options.params.entityType = "term";
                    this.showView("lists", options);
                }
            },

            {
                path: "paymentmethods",
                handler: function(options) {
                    options.params.entityType = "paymentmethod";
                    this.showView("lists", options);
                }
            },

            {
                path: "chartofaccounts",
                handler: function(options) {
                    options.params.entityType = "account";
                    this.showView("lists", options);
                },
                accessKey: 65
            },

            {
                path: "recurring",
                handler: function(options) {
                    // legacy iframed content served from cmt
                    if (qbo.menus[25] === "u") {
                        this.showLegacyView("billing/upgrade_overview_rt" + ((options.sku_feature_id) ? "?sku_feature_id=" + options.sku_feature_id : ""), options);
                    } else {
                        this.showView("recurring", options);
                    }
                }
            },

            {
                path: "masfailures",
                handler: function(options) {
                    this.showLegacyView("lists/masfailures/list", options);
                }
            },

            {
                path: "accountant",
                handler: function(options) {
                    this.showView("accountant", options);
                }
            },

            {
                path: "accountant_center",
                handler: function(options) {
                    this.showLegacyView("homepage", options);
                }
            },

            {
                path: "budgets",
                handler: function(options) {
                    // legacy iframed content served from cmt
                    if (qbo.menus[20] === "u") {
                        this.showLegacyView("billing/upgrade_overview_budgets?sku_feature_id=5", options);
                    } else {
                        this.showLegacyView("budget/form", options);
                    }
                }
            },
            {
                path: "reconcileAccount",
                handler: function(options) {
                    var acctId;
                    if (options.params) {
                        acctId = options.params.accountId || options.params.accountid;
                    }
                    if (acctId) {
                        this.showLegacyView("request/reconcile/reconcileAccount?accountId=" + acctId, options);
                    } else {
                        this.showLegacyView("rrequest/reconcile/reconcileAccount" ,options);
                    }
                }
            },

            {
                path: "reconcile",
                handler: function(options) {
                    var acctId;
                    if (options.params) {
                        acctId = options.params.accountId || options.params.accountid;
                    }
                    if (acctId) {
                        this.showLegacyView("request/reconcileSessions/showReconcileSessions?accountId=" + acctId, options);
                    } else {
                        this.showLegacyView("request/reconcileSessions/showReconcileSessions" ,options);
                    }
                }
            },

            {
                path: "reconcileReport",
                handler: function(options) {
                    this.showLegacyView("reconcile_account/metareport", options);
                }
            },

            {
                path: "registers",
                title: {
                    nls: "qbo/nls/ListsView",
                    key: "registers_title"
                },
                handler: function(options) {
                    options.params.entityType = "account";
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("lists", options);
                    }
                }
            },

            {
                path: "register",
                title: {
                    nls: "qbo/nls/ListsView",
                    key: "registers_title"
                },
                handler: function(options) {
                    if (options.params && options.params.accountId) {
                        this.showLegacyView("checkregister/view?accountid=" + options.params.accountId, options);
                    } else if (options.params && options.params.accountid) {
                        var n, url = "checkregister/view?";
                        for (n in options.params) {
                            if (options.params.hasOwnProperty(n)) {
                                url += n + "%3D" + options.params[n] + "%26";
                            }
                        }
                        this.showLegacyView(url, options);
                    } else {
                        this.showView("registers", options);
                    }

                }
            },

            {
                path: "nobalanceregister",
                handler: function(options) {
                    var uri = "ACCTL_QUICKREPORT",
                        path = "report";

                    uri += "&account=" + options.params.accountId;
                    uri += "&account_incl_subs=true";
                    uri += "&groupby=Account%2FAccountTypeID,Account%2FOrderName";
                    this.showReportView(uri, path, options);
                }
            },

            {
                path: "writeoffinvoices",
                handler: function(options) {
                    this.showLegacyView("request/writeOff/showWriteOff", options);
                }
            },

            {
                path: "reports",
                title: {
                    nls: "qbo/nls/Reports",
                    key: "report_pagetitle"
                },
                handler: function(options) {
                    this.showView("reports", options);
                }
            },

            {
                path: "legacy",
                handler: function(options) {
                    this.showView("legacy", options);
                }
            },

            {
                path: "accounts",
                handler: function(options) {
                    this.showView("accounts", options);
                }
            },

            {
                path: "timeactivity",
                handler: function(options) {
                // legacy iframed content served from cmt
                    if (qbo.menus[27] === "u") {
                        this.showLegacyView("billing/upgrade_overview", options);
                    } else {
                        this.showView("timeactivity", options);
                    }
                }
            },
            {
                path: "timetracking",
                handler: function(options) {
                    // legacy iframed content served from cmt
                    if (qbo.menus[27] === "u") {
                        this.showLegacyView("billing/upgrade_overview", options);
                    } else {
                        this.showView("timetracking", options);
                    }
                }
            },

            {
                path: "collabrequest",
                handler: function(options) {
                    this.showView("collabrequest", options);
                }
            },

			{
				path: "docviewer",
				handler: function(options) {
					this.showView("docviewer", options);
				}
			},

            {
                path: "setup",
                handler: function(options) {
                    this.showView("setup", options);
                }
            },

            {
                path: "clientadd",
                handler: function() {
                    //Placeholder so it can be overridden by ecosystem
                }
            },

            {
                path: "clientedit",
                /*** V1 Fix: to take the user back to client-homepage rather than blank page when,
                 user clicks on browser back button when navigated from an accounting firm ***/
                handler: function() {
                    if (qbo.backToVO) {
                        common.route(qbo.isQBOLite ? "/app/collabhomepage" : "/app/homepage");
                    }
                    /*couple of other possible ways to navigate directly to VO firm, but there is flickering experience in this case, need to explore html5 history api*/
                    //this.showView(qbo.isQBOLite ? "collabhomepage" : "homepage", options);
                    //window.location.href=common.getUrl("login/iamapplyswitch?companyid=" + qbo.backToVO);
                }
            },

            {
                path: "migratein",
                handler: function() {
                    //Placeholder so it can be overridden by ecosystem
                }
            },

            {
                path: "consolidatevoclients",
                handler: function() {
                    //Placeholder so it can be overriden by ecosystem for vo
                }
            },

            {
                path: "consolidateclientsreview",
                handler: function() {
                    //Placeholder so it can be overriden by ecosystem for vo
                }
            },

            {
                path: "homepage",
                handler: function(options) {
                    this.showView(qbo.isQBOLite ? "collabhomepage" : "homepage", options);
                }
            },

            {
                path: "1099MiscForm",
                handler: function(options) {
                    this.showLegacyView("form1099/selectprint", options);
                }
            },

            {
                path: "importdata",
                handler: function(options) {
                    var entity = (options.params && options.params.entity) ? options.params.entity : "",
                        discoveryPoint = entity ? "customercenter" : "companymenu";
                    options.pathForceReload = true;

                    this.showLegacyView("request/importEntity/show?discoveryPoint=" + discoveryPoint + "&entity=" + entity, options);
                }
            },

            {
                path: "importquickbooksdesktop",
                handler: function(options) {
                    this.showLegacyView("request/qbimport/show", options);
                }
            },

            {
                path: "exportquickbooksdesktop",
                handler: function(options) {
                    this.showLegacyView("navigator/8", options);
                }
            },

            {
                path: "exporttxnsready",
                handler: function(options) {
                    this.showLegacyView("export?type=transactions", options);
                }
            },

            {
                path: "exportlistsready",
                handler: function(options) {
                    this.showLegacyView("export?type=balances", options);
                }
            },


            {
                path: "vendorsummary",
                handler: function(options) {
                    var nameid = options.params ? options.params.nameId : "";
                    this.showLegacyView("lists/vendor/summary?nameid=" + nameid, options);
                }
            },
            {
                path: "payday",
                title: {
                    nls: "qbo/nls/ListsView",
                    key: "payroll_run_title"
                },
                handler: function(options) {
                    if (qbo.menus[44] === "u") {
                        require(["qbo/ipd/config"], function (ipdConfig) {
                            this.showLegacyView("billing/payrolloptions?pc_upsell_ipd_ap=" + ipdConfig.sourcecode.paycheck, options);
                        }.bind(this));
                    } else {
                        options.params.usesInternalIFrame = true;
                        this.showAddOnView("request/payroll/menu/payday", false, options);
                    }
                }
            },
            {
                path: "employees",
                title: {
                    nls: "qbo/nls/ListsView",
                    key: "employees_label"
                },
                handler: function(options) {
                    if (qbo.sku.isPayrollSku) {
                        this.showAddOnView("request/payroll/menu/employees", false, options);
                    } else {
                        options.params.entityType = "employee";
                        this.showView("employeeList", options);
                    }
                }
            },

            {
                path: "addpayroll",
                handler: function(options) {
                    if (qbo.isSampleCompany) {
                        this.showAddOnView("request/payroll/sample", false, options);
                        qbo.sku.isPayrollSku = true;
                    } else {
                        if (qbo.companyL10nAttribs.region === "CA") {
                            this.showLegacyView("request/billingupgrade/OptInPayrollPilot", options);
                        } else if(qbo.isInternalPartner || qbo.sku.isGlobalCompany) {
                            options.params.type = "hide";
                            this.showView("permissiondenied", options);
                        } else {
                            this.showLegacyView("billing/payrolloptions" + ((options.params && options.params.pc_upsell_ipd_ap) ? "?pc_upsell_ipd_ap=" + options.params.pc_upsell_ipd_ap : ""), options);
                        }
                    }
                }
            },

            {
                path: "cancelpayroll",
                handler: function(options) {
                    this.showLegacyView("billing/pc_cancel_paycycle", options);
                }
            },

            {
                path: "payrollSummary",
                handler: function(options) {
                    options.params.cmd = "history";
                    options.params.h = "billing";
                    this.showAddOnView("request/payroll", false, options);
                }
            },

            {
                path: "payrolltax",
                title: {
                    nls: "qbo/nls/ListsView",
                    key: "payroll_tax_title"
                },
                handler: function(options) {
                    options.pathForceReload = true;
                    this.showAddOnView("request/payroll/menu/taxform", false, options);
                }
            },
            {   //TODO:: This route should be removed. Use "payroll_check" or "paycheck" route.
                path: "viewpaycheck",
                title: {
                    nls: "qbo/nls/ListsView",
                    key: "payroll_paycheck_title"
                },
                handler: function(options) {
                    this.showAddOnView("request/payroll/viewpaycheck", false, options);
                }
            },
            {   //TODO:: This route should be removed. Use "tax_payment" route.
                path: "viewtaxpayment",
                title: {
                    nls: "qbo/nls/ListsView",
                    key: "payroll_tax_payment_title"
                },
                handler: function(options) {
                    this.showAddOnView("request/payroll/viewtaxpayment", false, options);
                }
            },
            {   //TODO:: This route should be removed. Use "payroll_adj_v2" or route.
                path: "viewtaxadjustment",
                title: {
                    nls: "qbo/nls/ListsView",
                    key: "payroll_tax_adjustment_title"
                },
                handler: function(options) {
                    this.showAddOnView("request/payroll/viewtaxadjustment", false, options);
                }
            },
            {   //TODO:: This route should be removed. Use "payroll_refund" route.
                path: "viewpayrollrefund",
                title: {
                    nls: "qbo/nls/ListsView",
                    key: "payroll_refund_title"
                },
                handler: function(options) {
                    this.showAddOnView("request/payroll/viewpayrollrefund", false, options);
                }
            },
            {
                path: "payrollsettings",
                title: {
                    nls: "qbo/nls/ListsView",
                    key: "payroll_settings_title"
                },
                handler: function(options) {
                    this.showAddOnView("request/payroll/pthr/company/harmony/preferences", false, options);
                }
            },

            {
                path: "payrollactivity",
                handler: function(options) {
                    var path = options.params.path;
                    delete options.params.path;
                    this.showAddOnView("request/payroll/" + path, false, options);
                }
            },
            {
                path: "payrollreport",
                handler: function(options) {
                    this.showAddOnView("request/payroll", false, options);
                }
            },

            {
                path: "addon/:action",
                handler: function(options) {
                    var action = options.params.action;
                    this.showAddOnView("request/" + action, false, options);
                }
            },

            {
                path: "addonintrowser",
                handler: function(options) {
                    this.showAddOnView(options.params.page, true, options);
                }
            },

            {
                path: "closeaddonintrowser",
                handler: function(options) {
                    this.hideAddOnView(options.params.page, true, options);
                }
            },

            {
                path: "printchecks",
                handler: function(options) {
                    this.showView("printchecks", options);
                }
            },

            {
                path: "printsetupchecks",
                handler: function(options){
                    options.params.txnTypeId = 3;
                    this.showView("printsetup", options);

                }
            },

            {
                path: "printsetupdepositslips",
                handler: function(options){
                    options.params.txnTypeId = 27;
                    this.showView("printsetup", options);

                }
            },

            {
                path: "usermgt",
                handler: function(options) {
                    this.showLegacyView("lists/user", options);
                }
            },

            {
                path: "userdetail",
                handler: function () {
                    //Placeholder so it can be overridden by ecosystem
                }
            },

            {
                path: "edituser",
                handler: function() {
                    //Placeholder so it can be overridden by ecosystem
                }
            },

            {
                path: "createuser",
                handler: function() {
                    //Placeholder so it can be overridden by ecosystem
                }
            },

            {
                path: "preferences",
                handler: function(options) {
                    if (options && options.which) {
                        options.forceFrameReload = true; //force refresh always, to re-scroll to correct position
                        this.showLegacyView("preferences/general?frame=" + options.which, options);
                    } else {
                        this.showLegacyView("preferences/general", options);
                    }

                }
            },

            {
                path: "invoice",
                handler: function(options) {
                    this.showUniversalView("invoice", options);
                },
                accessKey: 73
            },

            {
                path: "salesreceipt",
                handler: function(options) {
                    this.showUniversalView("salesreceipt", options);
                }
            },

            {
                path: "refundreceipt",
                handler: function(options) {
                    this.showUniversalView("refundreceipt", options);
                }
            },

            {
                path: "creditmemo",
                handler: function(options) {
                    this.showUniversalView("creditmemo", options);
                }
            },

            {
                path: "estimate",
                handler: function(options) {
                    this.showUniversalView("estimate", options);
                },
                accessKey: 69
            },

            {
                path: "nonpostingcharge",
                handler: function(options) {
                      // legacy iframed content served from cmt
                    if (qbo.menus[8] === "u") {
                        this.showLegacyView("billing/upgrade_overview_delayedcharge" + ((options.sku_feature_id) ? "?sku_feature_id=" + options.sku_feature_id : ""), options);
                    } else {
                        this.showUniversalView("nonpostingcharge", options);
                    }
                }
            },

            {
                path: "nonpostingcredit",
                handler: function(options) {
                      // legacy iframed content served from cmt
                    if (qbo.menus[7] === "u") {
                        this.showLegacyView("billing/upgrade_overview_delayedcredit" + ((options.sku_feature_id) ? "?sku_feature_id=" + options.sku_feature_id : ""), options);
                    } else {
                        this.showUniversalView("nonpostingcredit", options);
                    }
                }
            },

            {
                path: "purchaseorder",
                handler: function(options) {
                    // legacy iframed content served from cmt
                    if (qbo.menus[12] === "u") {
                        this.showLegacyView("billing/upgrade_overview_po?sku_feature_id=42", options);
                    } else {
                        this.showUniversalView("purchaseorder", options);
                    }
                }
            },

            {
                path: "recvpayment",
                handler: function(options) {
                    this.showUniversalView("recvpayment", options);
                },
                accessKey: 82
            },

            {
                path: "bill",
                handler: function(options) {
                    // legacy iframed content served from cmt
                    if (qbo.menus[9] === "u") {
                        this.showLegacyView("billing/upgrade_overview_bills?sku_feature_id=10", options);
                    } else {
                        this.showUniversalView("bill", options);
                    }
                }
            },

            {
                path: "vendorcredit",
                handler: function(options) {
                    // legacy iframed content served from cmt
                    if (qbo.menus[13] === "u") {
                        this.showLegacyView("billing/upgrade_overview_bills?sku_feature_id=10", options);
                    } else {
                        this.showUniversalView("vendorcredit", options);
                    }
                }
            },

            {
                path: "expense",
                handler: function(options) {
                    this.showUniversalView("expense", options);
                },
                accessKey: 88
            },

            {
                path: "creditcardexpense",
                handler: function(options) {
                    this.showUniversalView("creditcardexpense", options);
                }
            },

            {
                path: "creditcardcredit",
                handler: function(options) {
                    this.showUniversalView("creditcardcredit", options);
                }
            },
            {
                path: "paybills",
                handler: function(options) {
                    if (qbo.menus[37] === "u") {
                        this.showLegacyView("billing/upgrade_overview_bills?sku_feature_id=10", options);
                    } else {
                        this.showLegacyView("paybills/new", options);
                    }
                }
            },
            {
                path: "paybillsresult",
                handler: function(options) {
                    if (qbo.menus[37] === "u") {
                        this.showLegacyView("billing/upgrade_overview_bills?sku_feature_id=10", options);
                    } else {
                        this.showLegacyView("paybillsresult", options);
                    }
                }
            },

            {
                path: "billpayment",
                handler: function(options) {
                    this.showUniversalView("billpayment", options);
                }
            },

            {
                path: "billpaymentcc",
                handler: function(options) {
                    this.showUniversalView("billpaymentcc", options);
                }
            },

            {
                path: "cashexpense",
                handler: function(options) {
                    this.showUniversalView("cashexpense", options);
                }
            },

            {
                path: "makepayment",
                handler: function(options) {
                    this.showUniversalView("makepayment", options);
                }
            },

            {
                path: "check",
                handler: function(options) {
                    this.showUniversalView("check", options);
                },
                accessKey: 87
            },

            {
                path: "journal",
                handler: function(options) {
                    this.showUniversalView("journal", options);
                }
            },

            {
                path: "deposit",
                handler: function(options) {
                    this.showUniversalView("deposit", options);
                }
            },

            {
                path: "transfer",
                handler: function(options) {
                    this.showUniversalView("transfer", options);
                }
            },

            {
                path: "billableexpense",
                handler: function(options) {
                    this.showView("billableexpense", options);
                }
            },

            {
                path: "managebillableexpense",
                handler: function(options) {
                    this.showView("managebillableexpense", options);
                }
            },

            {
                path: "search",
                handler: function(options) {
                    this.showView("search", options);
                }
            },

            {
                path: "reportlist",
                handler: function(options) {
                    this.showLegacyView("navigator/4", options);
                }
            },

            {
                path: "report",
                handler: function(options) {
                    var xx, uri,
                        params = options.params;

                    if (!params.rptId) {
                        return;
                    }

                    // report operators are passed as part of the queryString, place rptid first, then append the rest
                    ////KA: look at this!
                    uri = params.rptId;
                    for (xx in params) {
                        if (xx !== "rptId" && params.hasOwnProperty(xx)) {
                            uri += "&" + xx + "=" + encodeURIComponent(params[xx]);
                        }
                    }

                    // Need to pass the original path so that "back" will work.
                    options.params.rptDef = uri;
                    this.showView("report", options);
                }
            },

            {
                path: "scorecard",
                handler: function(options) {
                    this.showLegacyView("trends/scorecard", options);
                }
            },

            {
                path: "customreport",
                handler: function(options) {
                    var xx, uri,
                    params = options.params;

                    if (!params.memrptId) {
                        return;
                    }

                    // report operators are passed as part of the queryString, place rptid first, then append the rest
                    uri = params.memrptId;
                    for (xx in params) {
                        if (xx !== "memrptId" && params.hasOwnProperty(xx)) {
                            uri += "&" + xx + "=" + params[xx];
                        }
                    }

                    // Need to pass the original path so that "back" will work.
                    options.params.rptDef = "memrptid=" + uri;
                    this.showView("report", options);
                }
            },

            {
                path: "customreportedit",
                handler: function(options) {
                    var memrptId,
                        params = options.params;

                    if (!params.memrptId) {
                        return;
                    }
                    memrptId = params.memrptId;
                    options.params = {
                        page: "lists/memorizedreport/edit?listid=" + memrptId,
                        path: "customreportedit?memrptId=" + memrptId
                    };
                    this.showView("legacy", options);
                }
            },

            {
                path: "banking",
                title: {
                    nls: "qbo/nls/Olb",
                    key: "pageTitle"
                },
                handler: function (options) {
                    this.showView("dtx", options);
                }
            },

            {
                path: "multipletransactions",
                handler : function(options) {
                    this.showView("dtxtxndetails", options);
                }
            },

            {
                path: "bankingtxndetail",
                handler: function(options) {
                    var params = options.params;
                    this.showLegacyView("olb/show_bank_data_detail?olbtxnid=" + params.olbTxnId, options);
                }
            },

            {
                path: "billing",
                handler: function(options) {


                    if (has("qbo-partner") === "MAC") {
                        this.showView("embeddedsubscription", options);
                    } else if(qbo.isParentCompany) {
                        this.showView("youraccount", options);
                    } else if(qbo.isClientCompany) {
                        this.showView("404", options);
                    } else if(qbo.useObill) {
                        this.showView("obillyouraccount", options);
                    } else {
                        this.showLegacyView("billing/subscriptions", options);
                    }
                }
            },

            {
                path: "changePassword",
                handler: function(options) {
                    //options.params.excurl = options.excurl;
                    this.showLegacyView("authmgmt/changepassword?excurl=true" + window.escape("&harmonyCallBack=" + options.harmonyCallBack), options);
                }

            },

            {
                path: "updateCompanyInfo",
                handler: function(options) {
                    this.showLegacyView("authmgmt/changecompanyprofile?excurl=true" + window.escape("&harmonyCallBack=" + options.harmonyCallBack), options);
                }

            },

            {
                path: "updatePersonalInfo",
                handler: function(options) {
                    this.showLegacyView("authmgmt/changeuserprofile?excurl=true" + window.escape("&harmonyCallBack=" + options.harmonyCallBack), options);
                }

            },

            {
                path: "removePayroll",
                handler: function(options) {
                    this.showLegacyView("billing/pc_cancel_paycycle?childCompanyId=" + options.childCompanyId, options);
                }
            },

            {
                //This is same is billing route, but with additional param to launch cc dialog.  Though passing additional
                //param can be achieved with existing route billing, but this is useful when anchor need to point to subscribe
                path: "subscribe",
                handler: function(options) {
                    if (has("qbo-partner") === "MAC") {
                        this.showView("embeddedsubscription", options);
                    } else if (qbo.isParentCompany || qbo.useObill) {
                        // Redirect to the new subscribe trowser. Applicable only for US now.
                        this.showView("subscribeWizard", options);
                    } else if (qbo.isClientCompany) {
                        this.showView("404", options);
                    } else if (options.launchPoint && options.billingcode) {
                        this.showLegacyView("billing/subscriptions?ccdialog=true" + window.escape("&launchPoint=" + options.launchPoint + "&billingcode=" + options.billingcode), options);
                    } else {
                        this.showLegacyView("billing/subscriptions?ccdialog=true", options);
                    }
                }
            },

            {
                path: "billingprofile",
                handler: function(options) {
                    options.params.launchpoint = "qboa";
                    this.showView("subscribeWizard", options);
                }
            },

            {
                path: "payrollsubscribe",
                handler: function(options) {
                    options.params.launchpoint = "payroll";
                    this.showView("subscribeWizard", options);
                }
            },

            {
                path: "statements",
                handler: function(options) {
                    this.showLegacyView("shim/setupclassicenv", options);
                }
            },

            {
                path: "viewStatement",
                handler: function(options) {
                    this.showLegacyView("statements/view?" + options.params.url, options);
                }
            },


            {
                path: "memorizedReports",
                handler: function(options) {
                    this.showLegacyView("navigator/4&mode=3", options);
                }
            },

            {
                path: "olbBank",
                handler: function (options) {
                    this.showLegacyView("olb/edit_fi?" +  options.params.url, options);
                }
            },

            {
                path: "olbUpdateHistory",
                handler: function (options) {
                    this.showLegacyView("olb/update_history?" +  options.params.url, options);
                }
            },

            {
                path: "salestax",
                handler: function(options) {
                    if (qbo.sku.isGlobalCompany) {
                        this.showLegacyView("request/page/salestaxcenter", options);
                    } else {
                        this.showLegacyView("request/salestaxcenter/home", options);
                    }
                }
            },

            {   //TODO:: This route should be removed. Use "global_tax_pmt" route.
                path: "salestaxpayment",
                handler: function(options) {
                    options.params.transactiontype = 51;
                    options.params.transactionid = options.params.txnId;
                    this.showLegacyView("viewtxn", options);
                }
            },

            {   //TODO:: This route should be removed. Use "global_tax_adj" route.
                path: "salestaxadjustment",
                handler: function(options) {
                    options.params.transactiontype = 52;
                    options.params.transactionid = options.params.txnId;
                    this.showLegacyView("viewtxn", options);
                }
            },

            {
                path: "currencycenter",
                handler: function(options) {
                    this.showLegacyView("request/currencycenter/show", options);
                }
            },

            {   /* TODO: remove this route in V71 */
                path: "activitylog",
                handler: function(options) {
                    options.params.moved = true;
                    options.params.newUrl = "auditlog";
                    this.showView("404", options);
                }
            },

            {
                path: "reclassifyTransactions",
                handler: function(options) {
                    this.showLegacyView("request/reclassifyTxn/showReclassifyTxn", options);
                }
            },

            {
                path: "tbimport",
                handler: function(options) {
                    this.showLegacyView("request/importEntity/show?entity=TrialBalance&discoveryPoint=companymenu", options);
                }
            },

            {
                path: "reminders",
                handler: function(options) {
                    this.showLegacyView("lists/potentialinstance/list", options);
                }
            },

            {
                path: "appcenter",
                title: {
                    nls: "qbo/nls/Shell",
                    key: "app_center"
                },
                handler: function(options) {
                    this.showAddOnView("request/ipp/center", false, options);
                }
            },

            {
                path: "appCard",
                handler: function(options) {
                    this.showAddOnView("request/ipp/showcard", true, options);
                }
            },

            {
                path: "ftupersonalization",
                handler: function(options){
                    this.showView("ftupersonalization",options);
                }
            },

            {
                path: "404",
                handler: function(options) {
                    this.showView("404", options);
                }
            },

            {
                path: "paymentsactivation",
                handler: function (options) {

                    // New approach: go through a controller to launch the activation code
                    options.params.title = "QuickBooks Payments";
                    this.showAddOnView("request/payments/activate", true, options);
                }
            },

            {
                path: "oneapp",
                handler: function (options) {
                    options.params.title = "Book-to-Tax";
                    options.params.urlService = "accountant/getOneAppUrl";
                    this.showAddOnView("oneapp", false, options);
                }
            },

            {
                path: "findaproadvisor",
                handler: function (options) {
                    options.params.title = "Find an Advisor";
                    this.showAddOnView("request/pap/findadvisor", true, options);
                }
            },

            {
                path: "mobileapps",
                handler: function (options) {
                    options.params.title = "Mobile Apps";
                    this.showAddOnView("request/mobileapps/show", true, options);
                }
            },

            {
                path: "gopayment",
                handler: function (options) {
                    options.params.title = "GoPayment Center";
                    options.params.urlService = "masuiservice/getGopaymentUrl";
                    options.params.strictLoad = false; // GoPayment integration app doesn't establish an XDM channel so we shouldn't wait for that to be established
                    options.params.pluginId = "go_payment_static"; // strictly speaking this is not a plug-in - it's just a generic web app - defining something here just in case
                    options.params.useTrowser = false;
                    this.showView("xdmaddon", options);

                }
            },

            {
                path: "orderchecks",
                handler: function (options) {
                    options.params.title = "Check Order";
                    this.showAddOnView("request/supplies/ordersupplies", true, options);
                }
            },

            {
                path: "ordertaxforms",
                handler: function (options) {
                    options.params.title = "Tax Forms Order";
                    this.showAddOnView("request/supplies/ordersupplies", true, options);
                }
            },

            {
                path: "paymentsoptions",
                handler: function (options) {
                    require(["qbo/services/PluginRegistryService"], function(PluginRegistryService){
                        console.log("paymentsoptions options" + options);
                        options.params.title = "QuickBooks Payments Options";
                        options.params.urlService = "ipd/getSquareAppUrl?p_prioritycode=" + options.params.p_prioritycode + "&src=" + options.params.src + "&accessPoint=" + options.params.accessPoint + "&locale=" + qbo.companyL10nAttribs.locale;
                        console.log("urlService" + options.params.urlService);
                        options.params.strictLoad = false;
                        options.params.allowedOrigins = ["*"];
                        options.params.useTrowser = true;
                        options.params.pluginId = PluginRegistryService.findByCanonicalName("square").pluginId;
                        this.showView("xdmaddonintrowser", options);
                    }.bind(this));
                }
            },

            {
                path: "upgradebills",
                handler: function (options) {
                    if (!qbo.sku.isPlusSku) {
                        this.showLegacyView("billing/upgrade_overview_bills" + ((options.sku_feature_id) ? "?sku_feature_id=" + options.sku_feature_id : ""), options);
                    } else {
                        options.history.replace = true;
                        options.path = "homepage";
                        this.showView("homepage", options);
                    }
                }
            },

            {
                path: "upgradepurchaseorders",
                handler: function (options) {
                    if (!qbo.sku.isPlusSku) {
                        this.showLegacyView("billing/upgrade_overview_po" + ((options.sku_feature_id) ? "?sku_feature_id=" + options.sku_feature_id : ""), options);
                    } else {
                        options.history.replace = true;
                        options.path = "homepage";
                        this.showView("homepage", options);
                    }
                }
            },

            {
                path: "upgrade",
                handler: function (options) {
                    if (!qbo.sku.isPlusSku) {
                        this.showLegacyView("billing/upgrade_overview", options);

                    } else {
                        options.history.replace = true;
                        options.path = "homepage";
                        this.showView("homepage", options);
                    }
                }
            },

            {
                path: "securityquestion",
                handler: function (options) {
                    this.showLegacyView("glyph/mas/showmfa", options);
                }
            },

            {
                path: "purgecompany",
                handler: function (options) {
                    this.showLegacyView("qbimport/showpurgeco", options);
                }
            },

            /** QBO-23881, QBO-24397, QBO-23847
             * These were missing txnTypes that were handled in navigateApp.js to go to a different view.
             * Adding these here to be consistent with routing of txns. These txns need not be routed through navigateApp anymore.
             * There are still some txns that don't have a route - check txnTypes.js. They need to be added here rather than navigateApp.js
             */
            {
                path: "paycheck",
                handler: function (options) {
                    options.params.title = "Paycheck";
                    this.showAddOnView("request/payroll/viewpaycheck", false, options);
                }
            },
            {
                path: "payroll_check",
                handler: function (options) {
                    options.params.title = "Paycheck";
                    this.showAddOnView("request/payroll/viewpaycheck", false, options);
                }
            },
            {
                path: "payroll_adj_v2",
                handler: function (options) {
                    options.params.title = "Tax Adjustment";
                    this.showAddOnView("request/payroll/viewtaxadjustment", false, options);
                }
            },

            {
                path: "payroll_refund",
                handler: function (options) {
                    options.params.title = "Payroll Refund";
                    this.showAddOnView("request/payroll/viewpayrollrefund", false, options);
                }
            },
            {
                path: "inventory_quantity_adj",
                handler: function (options) {
                    options.params.transactiontype = 45;
                    options.params.transactionid = options.params.txnId;
                    this.showLegacyView("viewtxn", options);
                }
            },
            {
                path: "tax_payment",
                handler: function (options) {
                    options.params.title = "Tax Payment";
                    this.showAddOnView("request/payroll/viewtaxpayment", false, options);
                }
            },
            {
                path: "global_tax_pmt",
                handler: function (options) {
                    options.params.transactiontype = 51;
                    options.params.transactionid = options.params.txnId;
                    this.showLegacyView("viewtxn", options);
                }
            },
            {
                path: "global_tax_adj",
                handler: function (options) {
                    options.params.transactiontype = 52;
                    options.params.transactionid = options.params.txnId;
                    this.showLegacyView("viewtxn", options);
                }
            },
            {
                path: "bookstotax",
                handler: function(options) {
                    this.showView("bookstotax", options);
                }
            },

            /*******************************
             * Private non-production links
             *******************************/

            {
                path: "home",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("home", options);
                    }
                }
            },

            {
                path: "debug-ipd",
                handler: function (options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("debug-ipd", options);
                    }
                }
            },

            {
                path: "debug-ipd-cmt",
                handler: function (options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("debug-ipd-cmt", options);
                    }
                }
            },

            {
                path: "debug-plugins",
                handler: function (options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("debug-plugins", options);
                    }
                }
            },

            {
                path: "debug-ipd-fingerprint",
                handler: function (options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("debug-ipd-fingerprint", options);
                    }
                }
            },

            {
                path: "debug-xdm",
                handler: function (options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("xdmaddonintrowser", options);
                    }

                }
            },

            {
                path: "mathTests",
                handler: function (options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("mathTests", options);
                    }
                }
            },

            {
                path: "harmony",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("harmony", options);
                    }
                }
            },

            {
                path: "shadow",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("shadow", options);
                    }
                }
            },

            {
                path: "debug",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("debug", options);
                    }
                }
            },

            {
                path: "debugMenu",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showLegacyView("debug/widget", options);
                    }
                }
            },

            {
                path: "runner",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("runner", options);
                    }
                }
            },

            {
                path: "chat",
                handler: function (options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("chat", options);
                    }
                }
            },

            {
                path: "ecosystem",
                handler: function (options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("ecosystem", options);
                    }
                }
            },

            {
                path: "plugins/:pluginId",
                handler: function (options) {
                    this.showPlugin(options);
                }
            },

            {
                path: "smokeIt",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("smokeIt", options);
                    }
                }
            },

            {
                path: "smokeTxn",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("smokeTxn", options);
                    }
                }
            },

            //retaining the old reports landing page till we completely migrate the reports into harmony.
            {
                path: "reportsClassic",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("reportsClassic", options);
                    }
                }
            },

            {
                path: "empty",
                handler: function(options) {
                    this.showView("empty", options);
                }
            },


            {
                path: "esearch",
                handler: function(options) {
                    this.showView("esearch", options);
                }
            },

            {
                path: "customizeForms",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("customizeForms", options);
                    }
                }
            },

            {
                path: "newinvoice",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showNewInvoiceView("invoice", options);
                    }
                }
            },

            {
                path: "chooseTemplate",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else if(options.params.type === "upload") {
                        this.showView("uploadTemlate", options);
                    } else {
                        this.showView("chooseTemplate", options);
                    }
                }
            },

            {
                path: "users",
                handler: function(options){
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("users", options);
                    }
                }
            },

            {
                path: "adduser",
                handler: function(options){
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("adduser", options);
                    }
                }
            },

            {
                path: "dtx",
                title: {
                    nls: "qbo/nls/Olb",
                    key: "pageTitle"
                },
                handler: function (options) {
                    this.showView("dtx", options);
                }
            },

            {
                path: "dumpPersonalization",
                handler: function(options) {
                    this.showView("dumppersonalization", options);
                }
            },

            {
                path: "auditlog",
                handler: function (options) {
                    this.showView("auditlog", options);
                }
            },

            {
                path: "audithistory",
                handler: function (options) {
                    this.showView("audithistory", options);
                }
            },

            {
                path: "audithistorytimelapse",
                handler: function (options) {
                    this.showView("audithistorytimelapse", options);
                }
            },

            {
                path: "bankconnect",
                handler: function (options) {
                    this.showView("bankconnect", options);
                }
            },

            {
                path: "bankfileupload",
                handler: function (options) {
                    this.showView("bankfileupload", options);
                }
            },

            {
                path: "tiles",
                handler: function (options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("tiles", options);
                    }
                }
            },

            {
                path: "settings",
                handler: function (options) {
                    if (qbo.environment === "prod" && !qbo.useNewSettings) {
                        this.showView("404", options);
                    } else {
                        this.showView("settings", options);
                    }
                }
            },

            {
                path: "creditutilize",
                handler: function(options) {
                    this.showView("creditutilize", options);
                }
            },

            {
                path: "partialcutransfer",
                handler: function(options) {
                    this.showUniversalView("partialcutransfer", options);
                }
            },
            {
                path: "defercutransfer",
                handler: function(options) {
                    this.showUniversalView("defercutransfer", options);
                }
            },
            {
                path: "reversecutransfer",
                handler: function(options) {
                    this.showUniversalView("reversecutransfer", options);
                }
            },
            {
                path: "refundcutransfer",
                handler: function(options) {
                    this.showUniversalView("refundcutransfer", options);
                }
            },
            {
                path: "grossadjustment",
                handler: function(options) {
                    this.showUniversalView("grossadjustment", options);
                }
            },
            {
                path: "reversecharge",
                handler: function(options) {
                    this.showUniversalView("reversecharge", options);
                }
            },

            {
                path: "businessterms",
                handler: function(options) {
                    this.showView("businessterms", options);
                }
            },

            {
                path: "financialfolio",
                handler: function(options) {
                    if(qbo.sku.isAccountantSku && has("trident") === undefined && has("ie") === undefined) {
                        this.showView("financialfolio", options);
                    } else {
                        this.showView("404", options);
                    }
                }
            },

            {
                path: "foliobeta",
                handler: function(options) {
                    if(qbo.sku.isAccountantSku && has("trident") === undefined && has("ie") === undefined && qbo.environment !== "prod") {
                        this.showView("foliobeta", options);
                    } else {
                        this.showView("404", options);
                    }
                }
            },

            {
                path: "harmonyreports",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("harmonyreports", options);
                    }
                }
            },

            {
                path: "mdsreports",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("mdsreports", options);
                    }
                }
            },

            {
                path: "professionalreports",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("professionalreports", options);
                    }
                }
            },

            {
                path: "survey",
                handler: function(options) {
                    this.showView("survey", options);
                }
            },

            {
                path: "templategallery",
                handler: function(options){
                    this.showView("templategallery", options);
                }
            },

            {
                path: "templatepreview",
                handler: function(options){
                    this.showView("templatepreview", options);

                }
            },

            {
                path: "cleanbooks",
                handler : function(options) {
                    this.showView("cleanbooks", options);
                }
            },
            {
                path: "customersplitview",
                forceReset : true,
                title: {
                    nls: "qbo/nls/Centers",
                    key: "customer_title"
                },
                handler : function(options) {
                    options.params.nameType = "customer";
                    this.showView("namesplitView", options);
                }
			},

            {
                path: "udreport",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("udreport", options);
                    }
                }
            },

            {
                path: "localize",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("localize", options);
                    }
                }
            },

            {
                path: "quickfill",
                handler: function(options) {
                    if (qbo.environment === "prod") {
                        this.showView("404", options);
                    } else {
                        this.showView("quickfill", options);
                    }

                }
            },

            {
                path: "myaccountant",
                handler: function(options) {
                    this.showView("collabhomepage", options);
                }
            },

            {
                path: "folio",
                handler: function (options) {
                    this.showView("folio", options);
                }
            },

            {
                path: "formStyles",
                handler: function(options) {
                    this.showView("formStyles", options);
                }
            },

            {
                path: "challenge",
                handler: function(options) {
                    this.showView("challenge", options);
                }
            }


        ],

        /**
         * @property views Defines the metadata needed to instantiate a page view
         * viewController  {String} The templated dojo widget that will be instantiated
         * layers          {Array}  Array of modules that will be required. Needed by viewController
         * useTrowser      {Boolean}  Trowser view or not, this is optional
         */
        views: {

            "advancedmatch": {
                viewController: "qbo/dtx/modules/advancedmatch/AdvancedMatchViewController",
                layers: [],
                useTrowser: true
            },

            "olbrules": {
                viewController: "qbo/lists/olbrule/OlbRulesHomeViewController",
                layers: []
            },

            "olbrule": {
                viewController: "qbo/lists/olbrule/OlbRuleViewController",
                layers: [],
                useTrowser: true
            },

            "404": {
                viewController: "qbo/404/404ViewController",
                layers: []
            },

            "sales": {
                viewController: "qbo/txns/lists/sales/SalesTxnsViewController",
                layers: ["qbo/centers"]
            },

            "creditutilize": {
                viewController: "qbo/txns/lists/expense/utilize/CreditUtilizeTxnsViewController",
                layers: []
            },

            "expenses": {
                viewController: "qbo/txns/lists/expense/ExpenseTxnsViewController",
                layers: ["qbo/centers"]
            },

            "attachments": {
                viewController: "qbo/attachments/AttachmentsViewController",
                layers: ["qbo/attachments"]
            },

            "dtx": {
                viewController: "qbo/dtx/DTXViewController",
                layers: ["qbo/banking"]
            },

            "dtxtxndetails": {
                viewController: "qbo/dtx/DTXTxnDetailsViewController",
                layers: ["qbo/dtxtxndetails"]
            },

            "bankconnect": {
                viewController: "qbo/bankconnect/BankConnectViewController",
                layers: ["qbo/bankconnect"],
                useTrowser: true
            },

            "bankfileupload": {
                viewController: "qbo/bankconnect/bankfileupload/BankTransactionsImportViewController",
                layers: ["qbo/bankfileupload"],
                useTrowser: true
            },

            "lists": {
                viewController: "qbo/lists/ListsViewController",
                layers: ["qbo/lists"]
            },

            "listshome": {
                viewController: "qbo/lists/ListsHomeViewController",
                layers: ["qbo/lists"]
            },

            "registers": {
                viewController: "qbo/lists/ListsViewController",
                layers: ["qbo/lists"]
            },

            "recurring": {
                viewController: "qbo/memorizedtemplates/MemorizedTemplatesViewController",
                layers: []
            },

            "timeactivity": {
                viewController: "qbo/time/TimeViewController",
                layers: ["qbo/time"],
                useTrowser: true
            },

            "collabrequest": {
                viewController: "vo/collab/views/collabRequest/CollabRequestViewController",
                layers: [],
                useTrowser: true
            },

			"docviewer": {
				viewController: "vo/collab/widgets/documents/docviewer/DocsViewerViewController",
				layers: [],
				useTrowser: true
			},

            "setup": {
                viewController: "qbo/setup/SetupWizardViewController",
                layers: ["qbo/setup"],
                useTrowser: true
            },

            "timetracking": {
                viewController: "qbo/timetracking/TimeTrackingViewController",
                layers: ["qbo/timetracking"],
                useTrowser: true
            },

            "universe": {
                viewController: "qbo/txns/universal/controllers/UniversalViewController",
                layers: ["qbo/txns/universal"],
                useTrowser: true
            },

            "collabhomepage": {
                viewController: "vo/collab/views/home/CollabHomeViewController",
                layers: []
            },

            "homepage": {
                viewController: "qbo/dashboard/DashboardViewController",
                layers: ["qbo/dashboard", "libs/charts", "qbo/reports"]
            },

            "legacy": {
                viewController: "qbo/legacy/LegacyViewController",
                layers: []
            },

            "addonintrowser": {
                viewController: "qbo/addon/AddOnViewController",
                useTrowser: true
            },

            "addon": {
                viewController: "qbo/addon/AddOnViewController"
            },

            "namecenter": {
                viewController: "qbo/centers/NameViewController",
                layers: ["qbo/centers"]
            },

            "namedetail": {
                viewController: "qbo/centers/NameDetailViewController",
                layers: ["qbo/centers"]
            },

            "accountant": {
                viewController: "qbo/accountant/AccountantViewController",
                layers: ["qbo/accountant", "qbo/reports"]
            },

            "cpa": {
                viewController: "qbo/accountant/CPAViewController",
                layers: []
            },

            "templates": {
                viewController: "qbo/accountant/CompanyTemplateViewController",
                layers: []
            },

            "reports": {
                viewController: "qbo/reports/ReportListViewController",
                layers: ["qbo/reports", "libs/charts"]
            },

            "customsummary": {
                viewController: "qbo/reports/CustomSummaryViewController",
                layers: ["qbo/reports", "libs/charts"],
                useTrowser: true
            },

            "custominsight": {
                viewController: "qbo/reports/InsightController",
                layers: ["qbo/reports", "libs/charts"]
            },

            "insightview": {
                viewController: "qbo/private/reports/InsightController",
                layers: ["qbo/reports", "libs/charts"]
            },

            "permissiondenied": {
                viewController: "qbo/widgets/acl/AclViewController",
                layers: []
            },

            "search": {
                viewController: "qbo/search/SearchViewController",
                layers: ["qbo/search"]
            },

            "report": {
                viewController: "qbo/legacy/ReportsViewController",
                layers: []
            },

            "ftupersonalization" : {
                viewController : "qbo/setup/personalized/PersonalizedViewController",
                layers : [],
                useTrowser: true
            },

            "billableexpense": {
                viewController: "qbo/txns/billableexpense/BillableExpenseViewController",
                layers: [],
                useTrowser: true
            },

            "managebillableexpense": {
                viewController: "qbo/txns/billableexpense/ManageBillableExpenseViewController",
                layers: [],
                useTrowser: true
            },

            "ecosystem": {
                viewController: "qbo/private/ecosystem/EcosystemViewController",
                layers: []
            },

            "paymentsactivation": {
                viewController: "qbo/payments/controllers/ActivationViewController",
                layers: ["qbo/payments"],
                useTrowser: true
            },

            "xdmaddonintrowser": {
                viewController: "qbo/addon/XDMAddonViewController",
                useTrowser: true
            },

            "xdmaddon": {
                viewController: "qbo/addon/XDMAddonViewController"
            },

            "nativepluginviewcontrolllerintrowser": {
                viewController: "qbo/widgets/plugins/NativePluginViewController",
                useTrowser: true
            },

            "nativepluginviewcontrolller": {
                viewController: "qbo/widgets/plugins/NativePluginViewController"
            },

            "gopayment": {
                viewController: "qbo/payments/controllers/GopaymentViewController",
                layers: [],
                useTrowser: true
            },

            "employeeList": {
                viewController: "qbo/lists/EmployeeListViewController",
                layers: ["qbo/lists"]
            },

            "youraccount": {
                viewController: "qbo/youraccount/YourAccountViewController",
                layers: []
            },

            "obillyouraccount": {
                viewController: "qbo/obill/YourAccountViewController",
                layers: []
            },

            "settings": {
                viewController: "qbo/settings/SettingsViewController",
                layers: ["qbo/settings"],
                useTrowser: true
            },

            "subscribe": {
                viewController: "qbo/widgets/subscribecompany/SubscribeCompanyViewController",
                layers: [],
                useTrowser: true
            },

            "setupCompany": {
                viewController: "qbo/widgets/subscribecompany/CompanyAddressSetupViewController",
                layers: [],
                useTrowser: true
            },

            "auditlog": {
                viewController: "qbo/audit/AuditLogViewController",
                layers: ["qbo/audit"]
            },

            "audithistory": {
                viewController: "qbo/audit/AuditHistoryViewController",
                layers: ["qbo/audit"]
            },

            "audithistorytimelapse": {
                viewController: "qbo/audit/AuditHistoryTimelapseViewController",
                layers: ["qbo/audit"]
            },

            "foliobeta": {
                viewController: "qbo/private/financialfolio/FinancialFolioViewController",
                layers: []
            },

            "financialfolio": {
                viewController: "qbo/financialfolio/FolioEndofBetaViewController",
                layers: ["qbo/financialfolio"]
            },

            "embeddedsubscription": {
                viewController: "qbo/embedded/subscriptions/EmbeddedSubscriptionViewController",
                layers: []
            },

            "survey": {
                viewController: "qbo/surveys/SurveyViewController",
                useTrowser: true
            },

            "printchecks": {
                viewController:"qbo/printchecks/PrintChecksViewController",
                layers: ["qbo/printchecks"],
                useTrowser: true
            },

            "printsetup": {
                viewController:"qbo/printsetup/PrintSetupStepWizardViewController",
                layers: ["qbo/printsetup"],
                useTrowser: true
            },

            "bookstotax": {
                viewController:"vo/b2t/views/BooksToTaxViewController",
                layers: [],
                useTrowser: true
            },

            /*******************************
             * Private non-production views
             *******************************/

            "users": {
                viewController: "qbo/private/usermgmt/UserMgmtViewController",
                layers: []
            },

            "adduser": {
                viewController: "qbo/private/usermgmt/AddUserViewController",
                layers: [],
                useTrowser: true
            },

            "esearch": {
                viewController: "qbo/widgets/acl/AclViewController",
                //AclViewController shows a permission denied page.  This is intentional for esearch page as currently it is handled by
                //plugin.  Plugin loads esearch for the eligibile users, all non eligible users will not have access to esearch page.
                layers: []
            },

            "debug-ipd": {
                viewController: "qbo/private/debug/ipd/IPDDebugViewController",
                layers: []
            },

            "debug-ipd-cmt": {
                viewController: "qbo/private/debug/ipd/CMTDebugViewController",
                layers: []
            },

            "debug-ipd-fingerprint": {
                viewController: "qbo/private/debug/ipd/FPDebugViewController",
                layers: []
            },

            "debug-plugins": {
                viewController: "qbo/private/debug/plugins/controllers/PluginsDebugViewController",
                layers: []
            },

            "chat": {
                viewController: "qbo/private/chat/ChatViewController",
                layers: []
            },

            "harmony": {
                viewController: "qbo/private/harmony/HarmonyViewController"
            },

            "shadow": {
                viewController: "qbo/private/shadow/ShadowViewController"
            },

            "debug": {
                viewController: "qbo/private/debug/DebugViewController",
                layers: []
            },

            "tiles": {
                viewController: "qbo/private/games/TilesViewController",
                layers: []
            },

            "smokeIt": {
                viewController: "doh-test/UI/SmokeTest",
                layers: []
            },

            "smokeTxn": {
                viewController: "doh-test/UI/SmokeTxnTest",
                layers: []
            },

            "runner": {
                viewController: "doh-test/RunnerViewController"
            },

            "mathTests": {
                viewController: "qbo/private/amount/MathTests",
                layers: []
            },

            "reportsClassic": {
                viewController: "qbo/private/reports/ReportListClassicViewController",
                layers: []
            },

            "empty": {
                viewController: "qbo/private/debug/EmptyViewController"
            },

            "customizeForms": {
                viewController: "qbo/private/customizeprintforms/NewCustomizeFormsViewController",
                layers: []
            },

            "chooseTemplate": {
                viewController: "qbo/private/customizeprintforms/choosetemplate/ChooseTemplateViewController",
                useTrowser: true,
                layers: []
            },

            "uploadTemlate": {
                viewController: "qbo/private/customizeprintforms/uploadtemplate/UploadTemplateViewController",
                useTrowser: true,
                layers: []
            },

            "dumppersonalization": {
                viewController: "qbo/private/personalize/PersonalizationDumpViewController",
                useTrowser: true,
                layers: []
            },

            "home": {
                viewController: "qbo/private/home/HomeViewController",
                layers: ["libs/charts", "qbo/reports"]
            },

            "businessterms": {
                viewController: "qbo/private/businessterms/BusinessTermsViewController",
                layers: []
            },

            "harmonyreports": {
                viewController:"qbo/private/reports/HarmonyReportsViewController",
                useTrowser: true,
                layers: []
            },

            "mdsreports": {
                viewController: "qbo/private/mdsreport/MDSReportViewController",
                layers: []
            },

            "professionalreports": {
                viewController:"qbo/private/reports/professional/ProfessionalReportsViewController",
                layers: []
            },

            "templategallery": {
                viewController: "qbo/productgallery/ProductGalleryViewController",
                layers: []
            },

            "templatepreview": {
                viewController:"qbo/productgallery/modules/productpreview/ProductPreviewViewController",
                layers: [],
                useTrowser: true
            },

            "cleanbooks": {
                viewController:"qbo/private/cleanbooks/CleanBooksWizardViewController",
                layers:[],
                useTrowser: true
            },

            "subscribeWizard": {
                viewController:"qbo/widgets/subscribecompany/SubscribeWizardViewController",
                layers: [],
                useTrowser: true
            },

            "namesplitView": {
                viewController: "qbo/centers/nameSplitView/NameSplitViewController",
                layers: [],
                useTrowser: false
			},

            "udreport" : {
                viewController:"qbo/private/reports/UDReportViewController",
                layers: []
            },

            "localize" : {
                viewController:"qbo/private/localize/ConfigurationViewController",
                layers: []
            },

            "quickfill" : {
                viewController:"qbo/private/quickfill/QFViewController",
                layers: []
            },

            "myaccountant": {
                viewController: "qbo/vo/collab/home/views/CollabHomeViewController",
                layers: []
            },

            "folio": {
                viewController: "qbo/managementreports/FolioViewController",
                layers: ["qbo/managementreports"],
                useTrowser: true
            },

            "formStyles": {
                viewController: "qbo/formstyles/FormStylesViewController",
                layers: ["qbo/formStyles"]
            },

            "newInvoice": {
                viewController: "qbo/private/newtxns/universal/controllers/UniversalViewController",
                layers: ["qbo/txns/universal"],
                useTrowser: true
            },

            "challenge": {
                viewController: "qbo/challenge/ChallengeViewController",
                layers: [],
                useTrowser: true
            }
        },

        //This is a registry of all pages to do ACL checks on.
        //Server will send to client all the page ids that user does not have access to. This registry is used to translate
        //page ids back to url paths
        //Corresponding registry on server is here: com.intuit.qbo.neo.app.PageACL.java
        aclControlledPaths: {
            "customers":        1,
            "sales":            2,
            "vendors":          3,
            "expenses":         4,
            "banking":          5,
            "printchecks":      6,
            "usermgt":          7,
            "userdetail":       7,
            "activitylog":      8,
            "salestax":         9,
            "budgets":          10,
            "reconcile":        11,
            "statements":       12,
            "invoice":          13,
            "recvpayment":      14,
            "estimate":         15,
            "creditmemo":       16,
            "salesreceipt":     17,
            "refundreceipt":    18,
            "nonpostingcredit": 19,
            "nonpostingcharge": 20,
            "expense":          21,
            "check":            22,
            "bill":             23,
            "paybills":         24,
            "purchaseorder":    25,
            "vendorcredit":     26,
            "creditcardcredit": 27,
            "deposit":          28,
            "transfer":         29,
            "journal":          30,
            "chartofaccounts":  31,
            "registers":        32,
            "timeactivity":     33,
            "timetracking":     34,
            "attachments":      35,
            "users":            36,
            "recurring":        37,
            "class":            38,
            "locations":        39,
            "createuser":       40,
            "edituser":         41,
            "customersplitview":42,
            "clientadd":        43,
            "clientedit":       44
        }
    };
});
