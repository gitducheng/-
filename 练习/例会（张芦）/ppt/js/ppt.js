var data = [
        {img:1,h1:'Creative',h2:'DUET'},
        {img:2,h1:'Friendly',h2:'DEVIL'},
        {img:3,h1:'Tranquilent',h2:'COMPATRIOT'},
        {img:4,h1:'Insecure',h2:'HUSSLER'},
        {img:5,h1:'Loving',h2:'REBEL'},
        {img:6,h1:'Passionate',h2:'SEEKER'},
        {img:7,h1:'Crazy',h2:'FRIEND'}
        ]; 

        //2.定义通用函数
        var g = function (id) {
          //通过class获得一系列元素,substr从第0个开始，向后一个字符串是.，即为特殊的className
          if (id.substr(0,1) == '.') {return document.getElementsByClassName(id.substr(1));}
          return document.getElementById(id);
        }

        //3.添加幻灯片的操作（所有幻灯片&对应的按钮）
        function addSliders(){
                //3.1获取模板
                var tpl_main = g('template_main').innerHTML  
                                 .replace(/^\s*/,'')
                                 .replace(/\s*$/,'');
                                 //****可以知道g('template_main').innerHTML是获得什么。
                                 //消除空白符，正则表达式可以看到清除空白符之后的代码

                 var tpl_ctrl = g('template_ctrl').innerHTML
                                    .replace(/^\s*/,'')
                                    .replace(/\s*$/,'');

                //3.2定义最终输出HTML的变量,一个所有的幻灯片变量，一个是所有的控制按钮的变量
                var out_main = [];
                var out_ctrl = [];

                //3.3遍历所有数据，构建最终输出的HTML

                //data 是因为在之前定义的变量是data ,正常情况下是i=0,i++
                for (i in data){
                  //定义的变量开头用下划线是因为这是用来存放临时变量,当前幻灯片去做一些替换
                      var _html_main = tpl_main
                      .replace(/{{index}}/g,data[i].img)
                      .replace(/{{h2}}/g,data[i].h1)
                      .replace(/{{h3}}/g,data[i].h2)
                      .replace(/{{css}}/g,['','main-i_right'][i%2]);
                      //切换的关键字是css，根据i的取值随机幻灯片的切换效果

                      var _html_ctrl = tpl_ctrl.replace(/{{index}}/g,data[i].img);
                       
                       //所有的数据返回一下
                      out_main.push(_html_main);
                      out_ctrl.push(_html_ctrl);
                }

                //3.4把HTML回写到对应的DOM里面,一个 所有的幻灯片一个所有的按钮。join每个数字都是字符串，并用 空字符串会好看
                g('template_main').innerHTML = out_main.join('');
                g('template_ctrl').innerHTML = out_ctrl.join('');

                 //7 增加main_background,优化去掉白色底面，
                g('template_main').innerHTML += tpl_main
                                 .replace(/{{index}}/g,'{{index}}')
                                 .replace(/{{h2}}/g,data[i].h1)
                                 .replace(/{{h3}}/g,data[i].h2);
                g('main_{{index}}').id = 'main_background';
                }

               
                 
        
               //5 幻灯片切换
               function switchSlider(n){
                //5.1获得要展现的幻灯片&控制按钮DOM
                var main = g('main_'+n);
                var ctrl = g('ctrl_'+n);

                //5.2获得所有的幻灯片&控制按钮
                var clear_main = g('.main-i');
                var clear_ctrl = g('.ctrl-i');
                /*因为第一个参数是点，所以通用函数进行的分支判断就进来了substr,把点之后的作为参数传递到getElementsByClassName,返回所有的元素*/
                
                //5.3清除他们的active样式   这里for不可以用in data，因为这里不是一个真正的数组 
                for (i = 0; i < clear_ctrl.length; i++) {
                  clear_main[i].className = clear_main[i].className.replace('main-i_active','');
                  clear_ctrl[i].className = clear_ctrl[i].className.replace('ctrl-i_active','');
                }

                //5.4为当前控制按钮和幻灯片附加样式，在这里添加active状态，在添加状态之前
                main.className +=' main-i_active';
                ctrl.className +=' ctrl-i_active';
                //这里参数main-i_active前面必须有空格，否则将于前面的标识重叠

                //7.2切换时，复制上一张幻灯片到main_background中要清除所有的active样式 

                setTimeout(function(){
                  g('main_background').innerHTML = main.innerHTML;
                },1000);
                //加入setTimeout是防止一切换背景图就改变
               }

               //6动态调整图片的margin-top 以使其垂直居中clientHeight可视区域的高度
               function movePictures(){
                var pictures=g('.picture');
                for ( i = 0; i < pictures.length; i++) {
                  pictures[i].style.marginTop = (-1 * pictures[i].clientHeight/2)+'px'
                }

               }

        //4.定义何时处理幻灯片输出
        window.onload = function(){
          addSliders();
          switchSlider(1);
          setTimeout(function()
          {
            movePictures();
          },100)
          // 这里不能直接使用movePictures(),因为这里的图片添加addSliders()，动态添加的，当执行movePictures必须先存在这些图片，但是这些图片是通过脚本实现的，存在时间差，所以要加setTimeout
        }
 