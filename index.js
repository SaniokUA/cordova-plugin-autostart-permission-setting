/*global cordova, module*/

module.exports = {
    openAutostartPermissionPopup: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AutostartPermission", "openAutostartPermissionPopup");
    }
};
