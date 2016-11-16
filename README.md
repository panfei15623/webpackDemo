 React+ES6+Less+Webpack+Webstrom+Demo 
 
 webpackDemo是在学习react+webpack的时候编写的demo文件，该demo可以在开发模式、生产模式运行，其中涉及到React、ES6、Less、Webpack的集成，以及Webpack高级配置。  
 
 使用说明：    
 1>demo下载之后，删除node_modules文件夹（提交的时候失误，本不应提交该文件夹），然后执行运行->cmd，切换到文件根目录，执行npm install安装依赖模块；    
 2>运行开发模式，在文件根目录下执行npm run dev，执行成功后，在浏览器中打开http://localhost:8080/indexDev.html，则可以看到渲染出来的页面（打包后的文件存在内存里，目录里看不到）；    
 3>运行生产模式，在项目根目录下执行npm run build，执行成功后，在浏览器中访问dist文件夹下生成的index.html，则可以看到渲染出来的页面（打包后的文件在dist文件夹下）。      
 
 React+Webpack配置步骤：   
 一、前提   
 因为webpack是一个基于node的项目，所以首先需要确保电脑里面安装了node.js，以及npm。      
 我的版本 node: v5.10.1  npm: 3.8.3    
 
 二、全局安装      
 Webpack的有些命令需要电脑安装才能使用，所以需要通过npm命令进行Webapck的全局安装：    
 $ npm install webapck –g    
 
 安装之后执行   
 webpack –v        
 
 出现webpack的版本号说明全局安装成功       
 
 三、安装Webpack及React     
 1、创建本地项目webpackDemo        
 2、使用npm init命令初始化package.json文件   
 进入webapckDemo文件根目录，执行npm，按提示填写内容，填写完毕后在webpackDemo根目录就会生成package.json文件    
 3、本地项目安装webpack   
 进入webapckDemo文件根目录，执行npm install webpack --save-dev
 安装成功之后，目录中增加node_modules文件      
 4、安装react、react-dom    
  npm install react --save-dev         
  npm install react-dom --save-dev      
  
 四、目录结构demo      
  src文件夹存放demo相关文件（如css/js等），       
  dist文件夹存放生产模式下打包生成的文件，  
  indexTem.html为首页面模板，开发模式生成的首页面为indexDev.html（存放在内存中，目录中看不到）， 生产模式生成的首页面在dist文件下为index.html。  
  
 五、基本配置
 创建webpack.config.js配置文件   
    webpack简单来说是一个配置文件，这个配置文件主要分为三大块   
    entry  入口  让webpack用哪个文件作为项目的入口  
    output 出口  让webpack把处理完成的文件放在哪里   
    module 模块  要用什么不同的模块来处理各种类型的文件       
    
 demo中webpack.congfig.js为开发模式的配置文件，webpack.congfig.prod.js为生产模式的配置文件。     
    
 六、安装并启用webpack-dev-server    
  webpack-dev-server允许我们可以把本地项目跑在像nginx那样的web服务器上，主要是启动了一个使用express的Http服务器。它的作用主要是用来伺服资源文件。此外这个Http服务器和client使用websocket通讯协议，原始文件作出改动后，webpack-dev-server会实时的编译（即文件修改能被监听，并自动刷新浏览器）。        
  
  1、webpack-dev-server 安装    
  由于webpack-dev-server和webpack不是一个资源包，所以，需要单独安装webpack-dev-server资源包：
  
  全局安装
  npm install webpack-dev-server －g   
  
  项目安装   
  npm install webpack-dev-server --save-dev     
  
  这里建议进行项目安装，这样别人开发的时候只需要执行npm install 命令就能安装了，没有必须单独进行 全局安装了。     
  
  2、webpack-dev-server 服务器    
  首先我们看一下 都有哪些参数可选项：    
   --content-base //设定webpack-dev-server的director根目录。如果不进行设定的话，默认是在当前目录下。   
   --quiet: //控制台中不输出打包的信息，开发中一般设置为false，进行 打印，这样查看错误比较方面    
   --no-info: // 不显示任何信息    
   --colors: //对信息进行颜色输出   
   --no-colors: //对信息不进行颜色输出    
   --compress:  //开启gzip压缩    
   --host <hostname/ip>: //设置ip   
   --port <number>: //设置端口号，默认是:8080    
   --inline: //webpack-dev-server会在你的webpack.config.js的入口配置文件中再添加一个入口,   
   --hot: //开启热替换   
   --open: //启动命令，自动打开浏览器    
   --history-api-fallback: //查看历史url    
   
   3、webpack-dev-server 的热替换     
    webpack-dev-server支持2种自动刷新的方式：          
     Iframe mode， webpack-dev-server默认的刷新模式   
     inline mode   
     
   官方推荐使用inline模式，inline模式有多种配置方法，在demo里我使用的是在package.json里配置scripts，如下：   
   
   "scripts": {   
      "build": "webpack --config webpack.config.prod.js --progress --color -p -d",    
      "dev": "webpack-dev-server --progress --colors --hot --inline"    
    },   
    
   其中build为生产模式，参数如下：   
      -p  //压缩混淆脚本，这个非常非常重要！   
      -d  //生成map映射文件，告知哪些模块被最终打包到哪里了其中的     
      --progress //显示进度条    
      --color //添加颜色    
      
   dev为开发模式，参数如下：     
      --inline: //webpack-dev-server会在你的webpack.config.js的入口配置文件中再添加一个入口,   
      --hot: //开启热替换   
      --progress //显示进度条   
      --color //添加颜色   
      
   总结：    
   output里的path、publicPath的区别，比较容易搞混     
   我在文档中看到：    
      “path”仅仅告诉Webpack结果存储在哪里，然而“publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值。    
       例如，在localhost（译者注：即本地开发模式）里的css文件中你可能用“./test.png”这样的url来加载图片，但是在生产模式下“test.png”文件可能会定位到CDN上并且你的Node.js服务器可能是运行在HeroKu上边的。这就意味着在生产环境你必须手动更新所有文件里的url为CDN的路径。      
       然而你也可以使用Webpack的“publicPath”选项和一些插件来在生产模式下编译输出文件时自动更新这些url。    
       
   我的理解：path为webapck打包后的文件存储的路径，publicPath会被加到在link或者script或者css中引用的路径里       
   
   遗留问题：        
   开始想用sass编写css文件，但是用webpack打包的过程中，需要node-sass模块，不知道什么原因该模块一直安装不上，可能是国内网速原因，那有什么办法可以装上吗，淘宝镜像会让webstorm卡死，如果有大神知道，请指教。         
   
   demo中如有问题或者建议欢迎指正。   
   
   最后非常感谢以下文档的作者：   
   68课件网 - http://www.68kejian.com/app/detail.html?id=76&&c=442   
   React+Webpack快速上手指南 - http://www.jianshu.com/p/418e48e0cef1    
   Webpck官方文档 - http://webpack.github.io/docs/    
   webpack配置从零到 - https://segmentfault.com/a/1190000005110967    
   Webpack令人困惑的地方 - http://blog.csdn.net/a1104258464/article/details/51914450   

    
  
  
      
  

 
 
 


 

