 React+ES6+Less+Webpack+Webstrom+Demo 
 
 webpackDemo����ѧϰreact+webpack��ʱ���д��demo�ļ�����demo�����ڿ���ģʽ������ģʽ���У������漰��React��ES6��Less��Webpack�ļ��ɣ��Լ�Webpack�߼����á�  
 
 ʹ��˵����    
 1>demo����֮��ɾ��node_modules�ļ��У��ύ��ʱ��ʧ�󣬱���Ӧ�ύ���ļ��У���Ȼ��ִ������->cmd���л����ļ���Ŀ¼��ִ��npm install��װ����ģ�飻    
 2>���п���ģʽ�����ļ���Ŀ¼��ִ��npm run dev��ִ�гɹ�����������д�http://localhost:8080/indexDev.html������Կ�����Ⱦ������ҳ�棨�������ļ������ڴ��Ŀ¼�￴��������    
 3>��������ģʽ������Ŀ��Ŀ¼��ִ��npm run build��ִ�гɹ�����������з���dist�ļ��������ɵ�index.html������Կ�����Ⱦ������ҳ�棨�������ļ���dist�ļ����£���      
 
 React+Webpack���ò��裺   
 һ��ǰ��   
 ��Ϊwebpack��һ������node����Ŀ������������Ҫȷ���������氲װ��node.js���Լ�npm��      
 �ҵİ汾 node: v5.10.1  npm: 3.8.3    
 
 ����ȫ�ְ�װ      
 Webpack����Щ������Ҫ���԰�װ����ʹ�ã�������Ҫͨ��npm�������Webapck��ȫ�ְ�װ��    
 $ npm install webapck �Cg    
 
 ��װ֮��ִ��   
 webpack �Cv        
 
 ����webpack�İ汾��˵��ȫ�ְ�װ�ɹ�       
 
 ������װWebpack��React     
 1������������ĿwebpackDemo        
 2��ʹ��npm init�����ʼ��package.json�ļ�   
 ����webapckDemo�ļ���Ŀ¼��ִ��npm������ʾ��д���ݣ���д��Ϻ���webpackDemo��Ŀ¼�ͻ�����package.json�ļ�    
 3��������Ŀ��װwebpack   
 ����webapckDemo�ļ���Ŀ¼��ִ��npm install webpack --save-dev
 ��װ�ɹ�֮��Ŀ¼������node_modules�ļ�      
 4����װreact��react-dom    
  npm install react --save-dev         
  npm install react-dom --save-dev      
  
 �ġ�Ŀ¼�ṹdemo      
  src�ļ��д��demo����ļ�����css/js�ȣ���       
  dist�ļ��д������ģʽ�´�����ɵ��ļ���  
  indexTem.htmlΪ��ҳ��ģ�壬����ģʽ���ɵ���ҳ��ΪindexDev.html��������ڴ��У�Ŀ¼�п��������� ����ģʽ���ɵ���ҳ����dist�ļ���Ϊindex.html��  
  
 �塢��������
 ����webpack.config.js�����ļ�   
    webpack����˵��һ�������ļ�����������ļ���Ҫ��Ϊ�����   
    entry  ���  ��webpack���ĸ��ļ���Ϊ��Ŀ�����  
    output ����  ��webpack�Ѵ�����ɵ��ļ���������   
    module ģ��  Ҫ��ʲô��ͬ��ģ��������������͵��ļ�       
    
 demo��webpack.congfig.jsΪ����ģʽ�������ļ���webpack.congfig.prod.jsΪ����ģʽ�������ļ���     
    
 ������װ������webpack-dev-server    
  webpack-dev-server�������ǿ��԰ѱ�����Ŀ������nginx������web�������ϣ���Ҫ��������һ��ʹ��express��Http������������������Ҫ�������ŷ���Դ�ļ����������Http��������clientʹ��websocketͨѶЭ�飬ԭʼ�ļ������Ķ���webpack-dev-server��ʵʱ�ı��루���ļ��޸��ܱ����������Զ�ˢ�����������        
  
  1��webpack-dev-server ��װ    
  ����webpack-dev-server��webpack����һ����Դ�������ԣ���Ҫ������װwebpack-dev-server��Դ����
  
  ȫ�ְ�װ
  npm install webpack-dev-server ��g   
  
  ��Ŀ��װ   
  npm install webpack-dev-server --save-dev     
  
  ���ｨ�������Ŀ��װ���������˿�����ʱ��ֻ��Ҫִ��npm install ������ܰ�װ�ˣ�û�б��뵥������ ȫ�ְ�װ�ˡ�     
  
  2��webpack-dev-server ������    
  �������ǿ�һ�� ������Щ������ѡ�    
   --content-base //�趨webpack-dev-server��director��Ŀ¼������������趨�Ļ���Ĭ�����ڵ�ǰĿ¼�¡�   
   --quiet: //����̨�в�����������Ϣ��������һ������Ϊfalse������ ��ӡ�������鿴����ȽϷ���    
   --no-info: // ����ʾ�κ���Ϣ    
   --colors: //����Ϣ������ɫ���   
   --no-colors: //����Ϣ��������ɫ���    
   --compress:  //����gzipѹ��    
   --host <hostname/ip>: //����ip   
   --port <number>: //���ö˿ںţ�Ĭ����:8080    
   --inline: //webpack-dev-server�������webpack.config.js����������ļ��������һ�����,   
   --hot: //�������滻   
   --open: //��������Զ��������    
   --history-api-fallback: //�鿴��ʷurl    
   
   3��webpack-dev-server �����滻     
    webpack-dev-server֧��2���Զ�ˢ�µķ�ʽ��          
     Iframe mode�� webpack-dev-serverĬ�ϵ�ˢ��ģʽ   
     inline mode   
     
   �ٷ��Ƽ�ʹ��inlineģʽ��inlineģʽ�ж������÷�������demo����ʹ�õ�����package.json������scripts�����£�   
   
   "scripts": {   
      "build": "webpack --config webpack.config.prod.js --progress --color -p -d",    
      "dev": "webpack-dev-server --progress --colors --hot --inline"    
    },   
    
   ����buildΪ����ģʽ���������£�   
      -p  //ѹ�������ű�������ǳ��ǳ���Ҫ��   
      -d  //����mapӳ���ļ�����֪��Щģ�鱻���մ�������������е�     
      --progress //��ʾ������    
      --color //�����ɫ    
      
   devΪ����ģʽ���������£�     
      --inline: //webpack-dev-server�������webpack.config.js����������ļ��������һ�����,   
      --hot: //�������滻   
      --progress //��ʾ������   
      --color //�����ɫ   
      
   �ܽ᣺    
   output���path��publicPath�����𣬱Ƚ����׸��     
   �����ĵ��п�����    
      ��path����������Webpack����洢�����Ȼ����publicPath���������Webpack�Ĳ������������ģʽ�¸�����Ƕ��css��html�ļ����urlֵ��    
       ���磬��localhost������ע�������ؿ���ģʽ�����css�ļ���������á�./test.png��������url������ͼƬ������������ģʽ�¡�test.png���ļ����ܻᶨλ��CDN�ϲ������Node.js������������������HeroKu�ϱߵġ������ζ������������������ֶ����������ļ����urlΪCDN��·����      
       Ȼ����Ҳ����ʹ��Webpack�ġ�publicPath��ѡ���һЩ�����������ģʽ�±�������ļ�ʱ�Զ�������Щurl��    
       
   �ҵ���⣺pathΪwebapck�������ļ��洢��·����publicPath�ᱻ�ӵ���link����script����css�����õ�·����       
   
   �������⣺        
   ��ʼ����sass��дcss�ļ���������webpack����Ĺ����У���Ҫnode-sassģ�飬��֪��ʲôԭ���ģ��һֱ��װ���ϣ������ǹ�������ԭ������ʲô�취����װ�����Ա��������webstorm����������д���֪������ָ�̡�         
   
   demo������������߽��黶ӭָ����   
   
   ���ǳ���л�����ĵ������ߣ�   
   68�μ��� - http://www.68kejian.com/app/detail.html?id=76&&c=442   
   React+Webpack��������ָ�� - http://www.jianshu.com/p/418e48e0cef1    
   Webpck�ٷ��ĵ� - http://webpack.github.io/docs/    
   webpack���ô��㵽 - https://segmentfault.com/a/1190000005110967    
   Webpack��������ĵط� - http://blog.csdn.net/a1104258464/article/details/51914450   

    
  
  
      
  

 
 
 


 

