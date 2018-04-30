# Cordova "Open autostart permission" Plugin



## Using only for Android

Install the plugin

    $ cordova plugin add https://github.com/SaniokUA/cordova-plugin-autostart-permission-setting.git

Improt  plugin

    import autoStartPermissionPlugin from "cordova-plugin-autostart-permission-setting";


Use

    const phones = [
        "xiaomi",
        "oppo",
        "vivo",
        "letv",
        "honor",
        "oneplus",
        "asus",
        "samsung"
    ];
    try {
        if (device.platform == "Android") {
            phones.map(
                phone =>
                    phone == device.manufacturer.toLowerCase() ? AutoStartPermissionPlugin.openAutostartPermissionPopup() : console.log("not detected");
                    );
                }
    } catch (e) {
        console.log("this is web device, autostart popup");
    }
    
Open autostart permission window

    autoStartPermissionPlugin.openAutostartPermissionPopup();

Works with:

 -  Xiaomi
 -  Oppo
 -  Vivo
 -  Letv
 -  Honor
 -  OnePlus
 -  Huawei
 -  Asus
 -  Samsung
