({    appDir: "../public",    baseUrl: "js",    mainConfigFile: "../public/js/common.js",    dir: "../public-built",    modules: [        {             name: "common"        },        {            name:"routes/home",            exclude:["common"]        },        {            name:"routes/about",            exclude:["common"]        },        {            name:"routes/list",            exclude:["common"]        },        {            name:"routes/add",            exclude:["common"]        },        {            name:"routes/view",            exclude:["common"]        }    ]})