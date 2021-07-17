// ==UserScript==
// @name         Bilibili 简化，自定义 （自定义隐藏板块，推广和其他）
// @namespace    http://zlayuan.com/
// @version      1.0
// @description  功能介绍: 1. 自由编辑想要隐藏的板块; 2.优化掉推广板块; 3. 更多自定义;
// @description  目前还只能在脚本中手动修改
// @author       Zla
// @match        http*://www.bilibili.com/
// @icon         data:image/jpg;base64,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
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant        none
// ==/UserScript==
/* globals $ */

(function() {
    //如想要保留特定内容，请将1更改为0，如想隐藏请反之。

    //推荐
    var recommand=0;

    // 联系客服（最左侧）
    var help=1;

    //推广
    var ad=1;

    // 底部
    var footer=1;

    //上传图标
    var upload=1;

    // 左上角
    var topLeft=new Map([["主站",0],
                         ["番剧",0],
                         ["游戏中心",1],
                         ["直播",1],
                         ["会员购",1],
                         ["漫画",1],
                         ["赛事",1],
                         ["null_1",1],
                         ["null_2",1],
                         ["下载APP",1]]);
    // 右上角
    var topRight=new Map([["头像",0],
                          ["大会员",1],
                          ["消息",0],
                          ["动态",0],
                          ["收藏",0],
                          ["历史",0],
                          ["创作中心",1]]);

    // banner 下面左侧
    var underBannerLeft=new Map([["首页",1],
                                 ["动态",1],
                                 ["热门",0],
                                 ["频道",0]]);

    // banner 下面右侧
    var underBannerRight=new Map([["专栏",1],
                                  ["直播",1],
                                  ["活动",0],
                                  ["课堂",0],
                                  ["小黑屋",1],
                                  ["新歌热榜",1]]);


    // 分类
    var category=new Map([["直播", 1],
                          ["动画", 1],
                          ["番剧", 1],
                          ["国创", 1],
                          ["漫画", 1],
                          ["音乐", 1],
                          ["舞蹈", 1],
                          ["游戏", 0],
                          ["知识", 1],
                          ["课堂", 1],
                          ["科技", 0],
                          ["运动", 1],
                          ["汽车", 1],
                          ["生活", 1],
                          ["美食", 1],
                          ["动物圈", 1],
                          ["鬼畜", 1],
                          ["时尚", 1],
                          ["资讯", 1],
                          ["娱乐", 1],
                          ["专栏", 1],
                          ["电影", 1],
                          ["TV剧", 1],
                          ["影视", 1],
                          ["纪录片", 1]]);

    // 不要修改这个下面的内容
    // Do not edit anything below.
    //----------------------------------------------------------------------//
    var categoryName=["bili_live","bili_douga","bili_anime","bili_guochuang",
                      "bili_manga","bili_music","bili_dance","bili_game",
                      "bili_knowledge","bili_cheese","bili_tech","bili_sports",
                      "bili_car","bili_life","bili_food","bili_animal",
                      "bili_kichiku","bili_fashion","bili_information",
                      "bili_ent","bili_read","bili_movie","bili_teleplay",
                      "bili_cinephile","bili_documentary"];


    function removeElement(name,commandList,type){
        var lst= document.getElementsByClassName(name);
        var i=0;
        commandList.forEach((value,key)=>{
            if(value && lst[0].childNodes[i] instanceof type){
                lst[0].childNodes[i].style.display = "none";
            }
            i++;
        });
    }

    function removeCategory(name,commandList){
        var i=0;
        commandList.forEach((value,key)=>{
            if(value){
                document.getElementById(name[i]).style.display = "none";
            }
            i++;
        });
    }

    function removeListBox(name,commandList,type){
        var lst= document.getElementsByClassName(name);
        var i=0;
        commandList.forEach((value,key)=>{
            if(lst[0].childNodes[0].childNodes[i] instanceof type){
                lst[0].childNodes[0].childNodes[i].style.display = "none";
            }
            i++;
        });
    }

    window.onload=function(){
        removeCategory(categoryName,category);
        //TODO: 暂时移除list-box,无法正确显示
        removeListBox("list-box",category,HTMLDivElement);
        //左上角
        removeElement("nav-link-ul",topLeft,HTMLLIElement);
        //头像侧
        removeElement("user-con signin",topRight,HTMLDivElement);
        //banner 下面左边
        removeElement("con",underBannerLeft,HTMLLIElement);
        //banner 下面右边
        removeElement("friendship-link report-wrap-module",underBannerRight,HTMLSpanElement);


        if(help){
            document.getElementsByClassName("contact-help")[0].style.display = "none";
        }
        if(ad){
            document.getElementById("reportFirst2").style.display = "none";
            document.getElementById("reportFirst3").style.display = "none";
            document.getElementById("bili_report_spe_rec").style.display = "none";
        }
        if(footer){
            document.getElementsByClassName("international-footer")[0].style.display = "none";
        }

        if(recommand){
            document.getElementsByClassName("space-between")[0].style.display = "none";
        }

        if(upload){
            document.getElementsByClassName("mini-upload van-popover__reference")[0].style.display = "none";

        }
    };



})();