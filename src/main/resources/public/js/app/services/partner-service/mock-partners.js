System.register(['./partner-model'], function(exports_1) {
    var partner_model_1;
    var MOCK_PARTNERS_OFFER_ENGLISH, MOCK_PARTNERS_OFFER_FRENCH, MOCK_PARTNERS_OFFER_GERMAN, MOCK_PARTNERS_OFFER_ITALIAN;
    return {
        setters:[
            function (partner_model_1_1) {
                partner_model_1 = partner_model_1_1;
            }],
        execute: function() {
            exports_1("MOCK_PARTNERS_OFFER_ENGLISH", MOCK_PARTNERS_OFFER_ENGLISH = [
                new partner_model_1.PartnerModel("Frenchie", ["Spanish"], ["French", "English"], 40.439121, -3.712535),
                new partner_model_1.PartnerModel("Germanie", ["Spanish"], ["German", "English"], 40.416906, -3.677388)
            ]);
            exports_1("MOCK_PARTNERS_OFFER_FRENCH", MOCK_PARTNERS_OFFER_FRENCH = [
                new partner_model_1.PartnerModel("Frenchie", ["Spanish"], ["French"], 40.439121, -3.712535)
            ]);
            exports_1("MOCK_PARTNERS_OFFER_GERMAN", MOCK_PARTNERS_OFFER_GERMAN = [
                new partner_model_1.PartnerModel("Germanie", ["Spanish"], ["German"], 40.416906, -3.677388)
            ]);
            exports_1("MOCK_PARTNERS_OFFER_ITALIAN", MOCK_PARTNERS_OFFER_ITALIAN = []);
        }
    }
});
