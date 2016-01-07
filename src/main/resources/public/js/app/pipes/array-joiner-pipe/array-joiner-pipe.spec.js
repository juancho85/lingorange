System.register(['angular2/testing', './array-joiner-pipe'], function(exports_1) {
    var testing_1, array_joiner_pipe_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (array_joiner_pipe_1_1) {
                array_joiner_pipe_1 = array_joiner_pipe_1_1;
            }],
        execute: function() {
            testing_1.describe('ArrayJoinerPipe Pipe', function () {
                testing_1.beforeEachProviders(function () { return [array_joiner_pipe_1.ArrayJoinerPipe]; });
                testing_1.it('should transform the input', testing_1.inject([array_joiner_pipe_1.ArrayJoinerPipe], function (pipe) {
                    testing_1.expect(pipe.transform(["un", "dos"])).toBe("un, dos");
                }));
            });
        }
    }
});
