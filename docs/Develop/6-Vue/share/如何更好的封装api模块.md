# 如何更好的封装api模块

> api模块是我们与后台进行通信的一种方式，其方式有多种，比如引入  vue-resource/vue-axios模块，或者是直接使用jqueryAjax，或者是使用我们内部封装的[Api.js]

对于如此众多的通信方式，如何选择或者是更好维护项目是个问题，对此，我们进行api的二次封装：
```
..src/
├── api                         
│   ├── config.js                     
│   ├── index.js                    
│   └── starting.js    
├── App.vue
└── main.js
```

config.js 

将有关domain的配置统一管理，通过window.ENV（通过webpack进行配置得到的环境变量）进行环境判断，方便后续维护
```
const API_CONFIG = {
  dev: {
    API_URL: '//localhost',
    API_LOG: '//localhost',
  },

}

let {
  API_URL,
  API_LOG
} = API_CONFIG[window.EVN];

export {
  API_URL,
  API_LOG
}
```

starting.js  

这里主要是将后台接口统一在文件中，按模块区分，可以多个文件，页面按需引入模块的接口就行了
```
export default {
    ////////后台接口/////////
    init: "init?ct=gxj_starting&ac=init",    //首发页面初始化
    draw: "draw?ct=gxj_starting&ac=draw",    //抽奖接口
    //....
}
```

index.js

无论是使用Api.js或者是jqueryAjax等进行通信，都将其进行二次封装
```
//引入api配置
import { API_URL } from '/api/config'; 
//引入通信工具
import Api from '/lib/Api';

//通用配置
Api.config({
  dataType: 'jsonp',
  domain: API_URL,
  urlModel: 1
});

//二次封装api，这里可以实现拦截，重定向的功能
const jsonp = (url, p) => {
    return new Promise((resolve, reject) => {
        //...Api.require
        //...$.ajax
    });
}

export default {
  jsonp
}
```

main.js
```
import Vue from "vue";

//添加-通信接口
import http from '/api';
Vue.prototype.$http = http;
```

App.vue
```
import $api from "api/starting";

export default {
    created() {
        this.$http.jsonp($api.init, params).then(res => {
          //...
        });
    }
}
```

之所以要将api接口封装，主要原因还是为了对api接口进行外观统一，无论内部是使用何种通信方式，对使用者来说，其接口的调用方式都是一致，不需要理会内部的修改。