System.register(['angular2/core', '../../services/partner-service/partner-model', '../../services/send-message-service/send-message-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, partner_model_1, send_message_service_1;
    var SendMessageModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (partner_model_1_1) {
                partner_model_1 = partner_model_1_1;
            },
            function (send_message_service_1_1) {
                send_message_service_1 = send_message_service_1_1;
            }],
        execute: function() {
            SendMessageModal = (function () {
                function SendMessageModal(_sendMessageService) {
                    this._sendMessageService = _sendMessageService;
                }
                SendMessageModal.prototype.sendMessage = function (message) {
                    this._sendMessageService.sendMessage(message.value, this.partner);
                };
                __decorate([
                    core_1.Input('selected-partner'), 
                    __metadata('design:type', partner_model_1.PartnerModel)
                ], SendMessageModal.prototype, "partner", void 0);
                SendMessageModal = __decorate([
                    core_1.Component({
                        selector: 'send-message-modal',
                        templateUrl: 'js/app/components/send-message-modal/send-message-modal.html',
                        styleUrls: ['js/app/components/send-message-modal/send-message-modal.css'],
                        providers: [send_message_service_1.SendMessageService],
                        directives: [],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [send_message_service_1.SendMessageService])
                ], SendMessageModal);
                return SendMessageModal;
            })();
            exports_1("SendMessageModal", SendMessageModal);
        }
    }
});
