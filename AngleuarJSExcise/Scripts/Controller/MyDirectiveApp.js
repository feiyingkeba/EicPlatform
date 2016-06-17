angular.module('myDirectiveApp', [])
.controller('parentCtrl', function ($scope) {
    $scope.parentName = "parent";

    $scope.name = "mark";
    $scope.sexy = "male";
    $scope.age = "30";
    //父域绑定调用函数及传参
    $scope.say = function (sth) {
        alert(sth);
    };
})
.controller('ExtendCtrl', function ($scope) {
    var Aboard = {
        atitle: "ABoard的标题",
        acontent: "Aboard的内容"
    };

    var Bboard = {
        btitle: "B的标题"
    };

    var  Cboard = Object.create(Aboard);

    Cboard.ctitle = "C的标题";

    angular.extend(Bboard, Aboard);

    $scope.Aboard = Aboard;
    $scope.Bboard = Bboard;
    $scope.Cboard = Cboard;

    Aboard.atitle = "我的标题修改了";

    $scope.title = "产品类别"



    var startTimer = function ()
    {
        for (var i = 1; i <= 5; i++)
        {
            (function (j) {
                setTimeout(function timer() {
                    console.log(j);
                }, j * 1000);
            })(i);
        }
    }

    startTimer();
})
    //false：共享作用域
    //本质：子域与父域共享作用域。
    //特点：父域修改parentName的同时，指令绑定的parentName的元素会被刷新。
    //反之，指令内部parentName被修改时，父域的parentName同样会被刷新。
.directive('childA', function () {
    return {
        restrict: 'E',
        scope: false,
        template: function (elem, attr) {
            return "scope is false:" + document.getElementById('t1').innerHTML;
        }
    };
})
    //true：继承父域，并建立独立作用域
    //子域继承父域，并建立独立作用域。
    //特点：
    //1、在指令已声明parentName的情况下，父域parentName变更，指令中parentName不会发生变化。
    //指令在true参数下，建立了的scope，独立并隔离与父控制器的scope。
    //反之，指令中parentName变更，父域也不会发生变化。
    //2、在指令未声明parentName的情况下，父域的parentName变更，指令中parentName也会刷新
    //这种情况很多时候会被忽略，指令的scope没有声明对象时，其元素绑定的仍然是父域的对象。
    //但，一旦指令中Input变更了，对应的独立scope也会自动声明该绑定对象，这就回到了第1种情况。
    //3、在指令已声明parentName的情况下 ，在指令中监听父域parentName 的变化无效。但监听子域parentName的变化有效
    //独立子域scope，只能监听自己的，不能监听父域的。但通过 $scope.$parent可以监听父域。
.directive('childB', function () {
    return {
        restrict: 'E',
        scope: true,
        template: function (elem, attr) {
            return "scope is true:" + document.getElementById('t1').innerHTML;
        },
        controller: function ($scope) {
            $scope.parentName = "parent";
            //已声明的情况下，$scope.$watch监听的是自己的parentName
            $scope.$watch('parentName', function (n, o) {
                console.log("scope is true child watch " + n);
            });
            //$scope.$parent.$watch监听的是父域的parentName
            $scope.$parent.$watch('parentName', function (n, o) {
                console.log('scope is true parent watch' + n);
            });
        }
    };
})
    //{}：不继承父域，建立独立作用域
    //本质：子域不继承父域，并建立独立作用域。
    //特点：
    //1、当scope对象为空对象时，无论是父域parentName，还是指令子域parentName发生变更，都不会影响到对方。
    //原理很清楚，就是指令建立的独立作用域，与父域是完全隔离的。

    //@（or @Attr）绑定策略——本地作用域属性，使用@符号将本地作用域同DOM属性的值进行绑定。指令内部作用域可以使用外部作用域的变量。（单向引用父域对象）

    //= （or =Attr）绑定策略——双向绑定：通过=可以将本地作用域上的属性同父级作用域上的属性进行双向的数据绑定。就像普通的数据绑定一样，
    //本地属性会反映出父数据模型中所发生的改变。（双向引用父域对象）
    //ps：=策略不需要加上{{}}进行绑定

    //& （or &Attr）绑定策略——通过&符号可以对父级作用域进行绑定，以便在其中运行函数。（调用父域函数）
    //ps：&对应的attrName必须以on-开头
  
   //ps特别注意：@与=对应的attr，；
.directive('childC', function () {
    return {
        restrict: 'E',
        scope: {
            myName: '=',
            myAge: '@',//@ 是单向绑定本地作用域，记得加上{{}}
            mySex: '=mySexAttr',
            onSay:'&'
        },
        template: function (elem, attr) {
            return "{}:" + document.getElementById('t1').innerHTML;
        },
        controller: function ($scope) {

            console.log($scope.myName);
            console.log($scope.mySexy);
            console.log($scope.myAge);
            $scope.onSay();

        }
    };
})

.directive('helloWorld', function () {
    return {
        scope: {
            color:'@colorAttr'
        },
        restrict: "AE",
        replace: true,
        template: '<p style="background-color:{{color}}">Hello World</p>',
        link: function (scope, elem, attrs)
        {
            elem.bind('click', function () {
                elem.css('background-color', 'white');
                //scope.$apply(function () {
                //    scope.color = 'white';
                //});
            });
            elem.bind('mouseover', function () {
                elem.css('cursor', 'pointer');
            });
        }
    };
})

.directive('leePanel', function () {
    return {
        scope: {
            ptitle: '=panelTitle'
        },
        restrict: "EA",
        //replace: true,
        template: '<div class="panel-heading">' +
                      '<span>面板{{ ptitle }}</span>' +
                  '</div>'

    };
})

