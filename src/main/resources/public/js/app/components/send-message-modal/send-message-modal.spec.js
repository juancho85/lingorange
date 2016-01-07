System.register(['angular2/testing', './send-message-modal'], function(exports_1) {
    var testing_1, send_message_modal_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (send_message_modal_1_1) {
                send_message_modal_1 = send_message_modal_1_1;
            }],
        execute: function() {
            testing_1.describe('SendMessageModal Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(send_message_modal_1.SendMessageModal).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
