System.register([], function(exports_1) {
    var PartnerFilterCriteria;
    return {
        setters:[],
        execute: function() {
            PartnerFilterCriteria = (function () {
                function PartnerFilterCriteria(partnerOfferedLanguageIso, partnerRequestedLanguageIso) {
                    if (partnerOfferedLanguageIso === void 0) { partnerOfferedLanguageIso = ""; }
                    if (partnerRequestedLanguageIso === void 0) { partnerRequestedLanguageIso = ""; }
                    this.partnerOfferedLanguageIso = partnerOfferedLanguageIso;
                    this.partnerRequestedLanguageIso = partnerRequestedLanguageIso;
                }
                return PartnerFilterCriteria;
            })();
            exports_1("PartnerFilterCriteria", PartnerFilterCriteria);
        }
    }
});
