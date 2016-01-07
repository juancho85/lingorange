System.register([], function(exports_1) {
    var PartnerFilterCriteria;
    return {
        setters:[],
        execute: function() {
            PartnerFilterCriteria = (function () {
                function PartnerFilterCriteria(partnerOfferedLanguage, partnerRequestedLanguage) {
                    if (partnerOfferedLanguage === void 0) { partnerOfferedLanguage = ""; }
                    if (partnerRequestedLanguage === void 0) { partnerRequestedLanguage = ""; }
                    this.partnerOfferedLanguage = partnerOfferedLanguage;
                    this.partnerRequestedLanguage = partnerRequestedLanguage;
                }
                return PartnerFilterCriteria;
            })();
            exports_1("PartnerFilterCriteria", PartnerFilterCriteria);
        }
    }
});
