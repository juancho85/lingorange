System.register(['angular2/testing', './send-message-service'], function(exports_1) {
    var testing_1, send_message_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (send_message_service_1_1) {
                send_message_service_1 = send_message_service_1_1;
            }],
        execute: function() {
            testing_1.describe('SendMessageService Service', function () {
                testing_1.beforeEachProviders(function () { return [send_message_service_1.SendMessageService]; });
                testing_1.it('should ...', testing_1.inject([send_message_service_1.SendMessageService], function (service) {
                }));
            });
        }
    }
});
