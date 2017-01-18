/**
 * Created by Administrator on 2016/12/26.
 */
myapp.controller("novelreadfutureCtrl", function ($scope,$stateParams) {
    $scope.novelfuture = [
        {id:"1",title: "路人女主的养成方法", imgsrc: "images/novellun1t1.jpg",future:"第二季明年4月",
            imgcover:"images/novellun1t1.jpg",
            date:"2016-12-8 连载中",
            author:"丸户史明",
            type:"爱情/校园",
            click:"点击 1483648",
            Subscribe:"订阅  46972",
            txt:"「我会将你变成让人心动不止的女主角的！」这是讲述我，安芸伦也如何将一名不起眼的少女调教成合格的女主角，并以她为蓝本制作GALGAME的感动故事……",
            newchapter:"第十一卷 虎穴特典 诗羽追加剧情",
            allchapter:[{chapter:"第一卷"},
                {chapter:"第二卷"},
                {chapter:"第三卷"},
                {chapter:"第四卷"},
                {chapter:"第五卷"},
                {chapter:"第六卷"},
                {chapter:"第七卷"},
                {chapter:"第八卷"},
                {chapter:"第九卷"},
                {chapter:"第十卷"},
                {chapter:"第十一卷"}
            ],},
        {id:"2",title: "为美好的世界献上祝福", imgsrc: "images/novellun5t1.jpg",future:"第二季明年1月",
            imgcover:"images/novellun5t1.jpg",
            date:"2016-12-16 连载中",
            author:"晓なつめ",
            type:"魔法/冒险/搞笑/后宫/异界/穿越",
            click:"点击 3546885",
            Subscribe:"订阅  80313",
            txt:"喜爱游戏的家里蹲少年佐藤和真的人生突然闭幕……但是他的眼前出现自称女神的美少女。转生到异世界的和真就此为了满足食衣住而努力工作！原本只想安稳度日的和真，却因为带去的女神接二连三引发问题",
            newchapter:"第十卷 赌博迷糊大王  ",
            allchapter:[{chapter:"第一卷"},
                {chapter:"第二卷"},
                {chapter:"第三卷"},
                {chapter:"第四卷"},
                {chapter:"番外 为美好的世界献上爆炎！~惠惠的回合~ "},
                {chapter:"第五卷"},
                {chapter:"番外2 为美好的世界献上爆炎！~悠悠的回合~ "},
                {chapter:"第六卷"},
                {chapter:"番外3 为美好的世界献上爆炎！~两人(是最强！)的回合~ "},
                {chapter:"第七卷"},
                {chapter:"第八卷"},
                {chapter:"外传 与面具恶魔进行商谈！ "},
                {chapter:"第九卷"},
                {chapter:"第十卷"},
            ],},
        {id:"3",title: "幼女战记",imgsrc: "images/novelreadfuture3.jpg",future:"动画化预定",
            imgcover:"images/novelreadfuture3.jpg",
            date:"2016-12-17 连载中",
            author:"大森藤野",
            type:"冒险/魔法/后宫",
            click:"点击 6887612",
            Subscribe:"订阅  59995",
            txt:"宫都市欧拉丽——这是一座拥有雄伟地下迷宫（通称「地下城」）的巨大都市。名为未知的兴奋、光辉显赫的荣耀，以及与可爱女孩的罗曼史。",
            newchapter:"外传 剑姬神圣谭7  ",
            allchapter:[{chapter:"第一卷"},
                {chapter:"第二卷"},
                {chapter:"第三卷"},
                {chapter:"第四卷"},
                {chapter:"第五卷"},
                {chapter:"第六卷"},
                {chapter:"第七卷"},
                {chapter:"第八卷"},
                {chapter:"第九卷"},
                {chapter:"第十卷"},
                {chapter:"第十一卷"},
                {chapter:"外传 剑姬神圣谭7 "}
            ],}
    ];
    // 解析参数，查找匹配的
    $scope.product = {};
    angular.forEach($scope.novelfuture,function(product,index){
        if(product.title == $stateParams.title){
            $scope.product = product;
            return;
        }
        console.log("#" + index);
    });
})