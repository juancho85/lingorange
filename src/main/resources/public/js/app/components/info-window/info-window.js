System.register(['angular2/core', 'angular2/common', '../send-message-modal/send-message-modal', "../../pipes/language-joiner-pipe/language-joiner-pipe"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, send_message_modal_1, language_joiner_pipe_1;
    var InfoWindow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (send_message_modal_1_1) {
                send_message_modal_1 = send_message_modal_1_1;
            },
            function (language_joiner_pipe_1_1) {
                language_joiner_pipe_1 = language_joiner_pipe_1_1;
            }],
        execute: function() {
            InfoWindow = (function () {
                function InfoWindow() {
                    this.closePartnerDetailsEv = new core_1.EventEmitter();
                }
                InfoWindow.prototype.closePartnerDetails = function () {
                    this.closePartnerDetailsEv.emit(null);
                };
                __decorate([
                    core_1.Input('selected-partner'), 
                    __metadata('design:type', Object)
                ], InfoWindow.prototype, "partner", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], InfoWindow.prototype, "closePartnerDetailsEv", void 0);
                InfoWindow = __decorate([
                    core_1.Component({
                        selector: 'info-window',
                        templateUrl: 'js/app/components/info-window/info-window.html',
                        styleUrls: ['js/app/components/info-window/info-window.css'],
                        providers: [],
                        directives: [common_1.NgIf, send_message_modal_1.SendMessageModal],
                        pipes: [language_joiner_pipe_1.LanguageJoinerPipe],
                        events: ['closePartnerDetailsEv']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InfoWindow);
                return InfoWindow;
            })();
            exports_1("InfoWindow", InfoWindow);
        }
    }
});
