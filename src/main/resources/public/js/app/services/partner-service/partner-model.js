System.register([], function(exports_1) {
    var PartnerModel;
    return {
        setters:[],
        execute: function() {
            PartnerModel = (function () {
                function PartnerModel(username, requestedLanguages, offeredLanguages, lat, lng) {
                    if (username === void 0) { username = " "; }
                    if (requestedLanguages === void 0) { requestedLanguages = []; }
                    if (offeredLanguages === void 0) { offeredLanguages = []; }
                    if (lat === void 0) { lat = 0; }
                    if (lng === void 0) { lng = 0; }
                    this.username = username;
                    this.requestedLanguages = requestedLanguages;
                    this.offeredLanguages = offeredLanguages;
                    this.lat = lat;
                    this.lng = lng;
                }
                return PartnerModel;
            })();
            exports_1("PartnerModel", PartnerModel);
        }
    }
});
