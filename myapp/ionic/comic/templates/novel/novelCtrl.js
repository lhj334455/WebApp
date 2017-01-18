myapp.controller("novelCtrl", function ($scope) {
    $scope.novels = [
        {id:"1",title: "路人女主的养成方法 第11卷", imgname:"images/author1.png",
            date:"2016-12-23 17:35",
            author:"恶毒妹子破除性能", imgsrc: "images/novellun1.jpg"},
        {id:"2",title: "Campione！弑神者！ 第19卷", imgname:"images/author1.png",
            date:"2016-12-13 17:15",
            author:"恶毒妹子破除性能", imgsrc: "images/novellun2.jpg"},
        {id:"3",title: "期待在地下城邂逅有错吗 第11卷", imgname:"images/author1.png",
            date:"2016-12-22 17:00",
            author:"恶毒妹子破除性能", imgsrc: "images/novellun3.jpg"},
        {id:"4",title: "魔弹之王与战姬 第15卷", imgname:"images/author1.png",
            date:"2016-12-16 17:13",
            author:"恶毒妹子破除性能", imgsrc: "images/novellun4.jpg"},
        {id:"5",title: "为美好的世界献上祝福！第十卷", imgname:"images/author1.png",
            date:"2016-12-12 17:15",
            author:"恶毒妹子破除性能", imgsrc: "images/novellun5.jpg"}
    ];
    $scope.novelnews = [
        {id:"1",title: "中了40亿圆乐透的我要搬到异世界去住了", imgsrc: "images/novelnews1.jpg"},
        {id:"2",title: "喜欢本大爷的竟然就你一个？", imgsrc: "images/novelnews2.jpg"},
        {id:"3",title: "发条精灵战记",imgsrc: "images/novelnews3.jpg"}
    ];
    $scope.noveling = [
        {id:"1",title: "少女编号", imgsrc: "images/novelingt1.jpg",author:"作者：渡航"},
        {id:"2",title: "戏言系列", imgsrc: "images/novelingt2.jpg",author:"作者：西尾维新"},
        {id:"3",title: "超自然9人组",imgsrc: "images/novelingt3.jpg",author:"作者：志仓千代丸"}
    ];
    $scope.novelfuture = [
        {id:"1",title: "路人女主的养成方法", imgsrc: "images/novellun1t1.jpg",future:"第二季明年4月"},
        {id:"2",title: "为美好的世界献上祝福", imgsrc: "images/novellun5t1.jpg",future:"第二季明年1月"},
        {id:"3",title: "幼女战记",imgsrc: "images/novelreadfuture3.jpg",future:"动画化预定"}
    ];
    $scope.novelclassic = [
        {id:"1",title: "碧阳学园学生会议事录(学生会的一己之见)", imgsrc: "images/novelclassic1.jpg",author:"作者：葵关南"},
        {id:"2",title: "空之境界", imgsrc: "images/novelclassic2.jpg",author:"作者：奈须きのこ"},
        {id:"3",title: "狼与香辛料",imgsrc: "images/novelclassic3.jpg",author:"作者：支仓冻砂"}
    ];
})