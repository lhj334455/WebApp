/**
 * Created by Administrator on 2016/12/25.
 */
myapp.controller("novelreadnewsCtrl", function ($scope,$stateParams) {
    $scope.novelnews = [
        {id:"1",title: "中了40亿圆乐透的我要搬到异世界去住了",
            imgcover:"images/novelnews1.jpg",
            date:"2016-12-4 连载中",
            author:"丈月城",
            type:"神鬼/后宫",
            click:"点击 9632261",
            Subscribe:"订阅  30873",
            txt:"弑神者得到神的权能，得到了那个力量的人被称呼为王『Campione』，并称为霸者、魔王。追求平静的每天的高中生草薙护堂，可是却被自称为护堂的爱人的魔术师艾丽卡所卷入荒神的邂逅之中！？",
            newchapter:"第十九卷 魔王内战 ",
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
                {chapter:"第十二卷"},
                {chapter:"第十三卷"},
                {chapter:"第十四卷"},
                {chapter:"第十五卷"},
                {chapter:"第十六卷"},
                {chapter:"第十七卷"},
                {chapter:"第十八卷"},
                {chapter:"第十九卷"}
            ],
            imgsrc: "images/novelnews1.jpg"},
        {id:"2",title: "喜欢本大爷的竟然就你一个？",
            imgcover:"images/novelnews2.jpg",
            date:"2016-12-4 连载中",
            author:"丈月城",
            type:"神鬼/后宫",
            click:"点击 9632261",
            Subscribe:"订阅  30873",
            txt:"弑神者得到神的权能，得到了那个力量的人被称呼为王『Campione』，并称为霸者、魔王。追求平静的每天的高中生草薙护堂，可是却被自称为护堂的爱人的魔术师艾丽卡所卷入荒神的邂逅之中！？",
            newchapter:"第十九卷 魔王内战 ",
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
                {chapter:"第十二卷"},
                {chapter:"第十三卷"},
                {chapter:"第十四卷"},
                {chapter:"第十五卷"},
                {chapter:"第十六卷"},
                {chapter:"第十七卷"},
                {chapter:"第十八卷"},
                {chapter:"第十九卷"}
            ],
            imgsrc: "images/novelnews2.jpg"},
        {id:"3",title: "发条精灵战记",
            imgcover:"images/novelnews3.jpg",
            date:"2016-12-4 连载中",
            author:"丈月城",
            type:"神鬼/后宫",
            click:"点击 9632261",
            Subscribe:"订阅  30873",
            txt:"弑神者得到神的权能，得到了那个力量的人被称呼为王『Campione』，并称为霸者、魔王。追求平静的每天的高中生草薙护堂，可是却被自称为护堂的爱人的魔术师艾丽卡所卷入荒神的邂逅之中！？",
            newchapter:"第十九卷 魔王内战 ",
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
                {chapter:"第十二卷"},
                {chapter:"第十三卷"},
                {chapter:"第十四卷"},
                {chapter:"第十五卷"},
                {chapter:"第十六卷"},
                {chapter:"第十七卷"},
                {chapter:"第十八卷"},
                {chapter:"第十九卷"}
            ],
            imgsrc: "images/novelnews3.jpg"}
    ];
    // 解析参数，查找匹配的
    $scope.product = {};
    angular.forEach($scope.novelnews,function(product,index){
        if(product.title == $stateParams.title){
            $scope.product = product;
            return;
        }
        console.log("#" + index);
    });
})