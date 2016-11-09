 react+webpack+demo 
 webpackDemo是我在学习react+webpack的时候，编写的demo文件，该demo可以在开发模式、生产模式运行，其中包括webpack的高级配置。
 使用说明：
 1>demo下载之后，删除node_modules文件夹（提交的时候失误，本不应提交该文件夹），打开运行->cmd，切换到项目根目录，执行npm install安装依赖模块
 2>运行开发模式，在项目根目录下执行npm run dev，执行成功后，在浏览器中打开http://localhost:8080/indexDev.html，则可以看到渲染出来的页面（打包后的文件存在内存里，目录里看不到）
 3>运行生产模式，在项目根目录下执行npm run build，执行成功后，在浏览器中打开dist文件夹下生成的index.html，则可以看到渲染出来的页面（打包后的文件在dist文件夹下）