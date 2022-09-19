
        type AppFields = "appName" | "desc" | "appType" | "category" | "url" | "button";

        type AppDataMap<T> = { [value in AppFields]: T };

        const appRecord1: AppDataMap<string> = {
            "appName": "app1",
            "desc": "",
            "appType": "android",
            "category": "5",
            "url": "www.smaato.com",
            "button": "save",
        };

        const appRecord2: AppDataMap<string> = {
            "appName": "app1",
            "desc": "",
            "appType": "android",
            "category": "5",
            "url": "www.smaato.com",
            "button": "save",
        };