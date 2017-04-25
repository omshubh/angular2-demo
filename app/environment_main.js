System.register(["angular2/platform/browser", "./version_parent.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, version_parent_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (version_parent_component_1_1) {
                version_parent_component_1 = version_parent_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(version_parent_component_1.VersionParentComponent);
        }
    }
});
//# sourceMappingURL=environment_main.js.map