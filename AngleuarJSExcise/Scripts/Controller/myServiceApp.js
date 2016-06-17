angular.module('myServiceApp', [])
.controller('myParseCtrl1', function ($scope, $parse) {
    var context = {
        name: "dreamapple"
    };
    //因为这个解析的语句中含有我们想要解析的表达式，
    //所以要把不相关的用引号引起来，整体然后用+连接
    var expression = " 'hello' + name";
    var parseFunc = $parse(expression);

    console.log(parseFunc.literal);
    console.log(parseFunc.constant);
    console.log(parseFunc.assign);
    console.log(parseFunc());
    console.log(parseFunc);

    $scope.parseValue = parseFunc(context);
})
.controller('myParseCtrl2', function ($scope, $parse) {
    $scope.$watch('expression', function (newValue, oldValue, context) {
        if (newValue != oldValue) {
            var parseFunc = $parse(newValue);
            console.log(context);
            $scope.parsedValue = parseFunc(context);
        }
    });
})
.controller('myParseCtrl3', function ($scope, $parse) {
    $scope.context = {
        add: function (a, b) { return a + b; },
        mul: function (a, b) { return a * b }
    }
    $scope.expression = "mul(a, add(b, c))";
    $scope.data = {
        a: 3,
        b: 6,
        c: 9
    };
    //$parse服务根据$scope.context中提供上下文解析
    //$scope.expression语句，然后使用$scope.data数据填充表达式中
    //的变量。
    var parseFunc = $parse($scope.expression);
    $scope.parsedValue = parseFunc($scope.context, $scope.data);
})