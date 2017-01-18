/**
 * Created by Administrator on 2016/12/24.
 */
myapp.controller("newsCtrl", function ($scope,$http, $ionicScrollDelegate) {
    $scope.news = [
        {id:"1",title: "Merry Christmas！2016年圣诞贺图", imgname:"images/author1.png",
            date:"2016-12-23 17:35",
            author:"恶毒妹子破除性能", imgsrc: "images/newslun1.jpg"},
        {id:"2",title: "P站美图推荐——C91参考特辑", imgname:"images/author1.png",
            date:"2016-12-13 17:15",
            author:"恶毒妹子破除性能", imgsrc: "images/newslun2.jpg"},
        {id:"3",title: "P站老番美图推荐——浪客剑心", imgname:"images/author1.png",
            date:"2016-12-22 17:00",
            author:"恶毒妹子破除性能", imgsrc: "images/newslun3.jpg"},
        {id:"4",title: "P站美图推荐——画师们的收藏夹（二十六）", imgname:"images/author1.png",
            date:"2016-12-16 17:13",
            author:"恶毒妹子破除性能", imgsrc: "images/newslun4.jpg"},
        {id:"5",title: "P站美图推荐——和风特辑（三）", imgname:"images/author1.png",
            date:"2016-12-12 17:15",
            author:"恶毒妹子破除性能", imgsrc: "images/newslun5.jpg"}
    ];
    $scope.newstext = [
        {id:"1",title: "Merry Christmas！2016年圣诞贺图", imgname:"images/author1.png",
            date:"2016-12-23 17:35",
            author:"恶毒妹子破除性能", imgsrc: "images/newslun1.jpg"},
        {id:"2",title: "P站美图推荐——C91参考特辑", imgname:"images/author1.png",
            date:"2016-12-13 17:15",
            author:"恶毒妹子破除性能", imgsrc: "images/newslun2.jpg"},
        {id:"3",title: "P站老番美图推荐——浪客剑心", imgname:"images/author1.png",
            date:"2016-12-22 17:00",
            author:"恶毒妹子破除性能", imgsrc: "images/newslun3.jpg"},
        {id:"4",title: "P站美图推荐——画师们的收藏夹（二十六）", imgname:"images/author1.png",
            date:"2016-12-16 17:13",
            author:"恶毒妹子破除性能", imgsrc: "images/newslun4.jpg"},
        {id:"5",title: "P站美图推荐——和风特辑（三）", imgname:"images/author1.png",
            date:"2016-12-12 17:15",
            author:"恶毒妹子破除性能", imgsrc: "images/newslun5.jpg"},
        {id:"6",title: "小生追求的是极致笑话！《黑执事》葬仪屋COSPLAY欣赏", imgname:"images/author2.png",
            date:"2016-12-23 16:34",
            author:"矢田Kuriko", imgsrc: "images/newslun6.jpg"},
        {id:"7",title: "《冰上的尤里》完结！来看日本COSER实力还原维克多", imgname:"images/author2.png",
            date:"2016-12-22 14:08",
            author:"矢田Kuriko", imgsrc: "images/newslun7.jpg"},
        {id:"8",title: "P站老番美图推荐——传颂之物", imgname:"images/author1.png",
            date:"2016-12-19 16:55",
            author:"恶毒妹子破除性能", imgsrc: "images/newslun8.jpg"}
    ];
    // 实现无限滚动(上拉刷新)
    $scope.loadMore = function () {
        // 向服务器端请求新数据，替换现有的数据
        $http.get("data.json")
            .success(function(data){
                // 将请求回来的数据，追加到现有数据的后面
                Array.prototype.push.apply($scope.newstext,data);
            })
            .finally(function(){
                // 通知框架，上拉刷新已结束，隐藏上拉刷新图标
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };

    // 回到顶部
    $scope.top = function(){
        $ionicScrollDelegate.scrollTop(true);   // 使用动画
    };
});