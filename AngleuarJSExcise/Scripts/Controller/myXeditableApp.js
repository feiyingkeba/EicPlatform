var app = angular.module('myXeditableApp', ['ui.router', 'xeditable', 'checklist-model', 'ngAnimate', 'mgcrea.ngStrap']);
//app.config(function($modalProvider) {
//    angular.extend($modalProvider.defaults, {
//        html: true
//    });
//})
app.run(function (editableOptions) {
    editableOptions.theme = "bs3";
});

app.controller('modalCtrl', function ($scope, $modal) {

    $scope.modal = { title: 'Title', content: 'Hello Modal<br />This is a multiline message!' };

    // Controller usage example
    //
    function MyModalController($scope)
    {
        $scope.title = 'Some Title';
        $scope.content = 'Hello Modal<br />This is a multiline message from a controller!';
    }
    MyModalController.$inject = ['$scope'];

    var myModal = $modal({ controller: MyModalController, templateUrl: 'XEditable/ModalView', show: false });
    $scope.showModal = function () {
        myModal.$promise.then(myModal.show);
    };
    $scope.hideModal = function () {
        myModal.$promise.then(myModal.hide);
    };

})
app.controller('asideCtrl', function ($scope, $aside) {
    //var myAside = $aside({ title: 'My Title', content: 'My Content', show: true });
    
})

app.controller('textController', function ($scope) {
    $scope.user = {
        name:"yanglei"
    };
})

.controller('selectController', function ($scope,$filter) {
    $scope.user = {
        status: "Good",
    };
    $scope.statuses = $scope.statuses = [
    { value: 1, text: 'status1' },
    { value: 2, text: 'status2' },
    { value: 3, text: 'status3' },
    { value: 4, text: 'status4' }
    ];

    $scope.showStatus = function () {
        var selected = $filter('filter')($scope.statuses, { value: $scope.user.status });
        return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
    };
})

.controller('remoteSelectController', function ($scope, $filter, $http) {
    $scope.user = {
        group: 4,
        groupName: 'admin'
    };
    $scope.groups = [];

    $scope.loadGroups = function () {
        return $scope.groups.length ? null : $http.get('/XEditable/LoadGroups', { params: { name: 4 } })
        .success(function (data) {
            $scope.groups = data;
        });
    };

    $scope.$watch('user.group', function (oldval, newval) {
        if (newval !== oldval)
        {
            var selected = $filter('filter')($scope.groups, { id: $scope.user.group });
            $scope.user.groupName = selected.length ? selected[0].text : "not set";
        }
    });
})

.controller('htmlInputController', function ($scope) {
    $scope.inputs = {
        email: 'myownway888@163.com',
        tel: '13958251942',
        number: 20,
        range: 10,
        url: "http://www.baidu.com",
        search:'blabla',
        color: '#6a4415',
        date: null,
        time: '12:30',
        datetime: null,
        month: null,
        week: null,
        desc: "haodfasd",
        remember: true,

    };
    
})

.controller('checklistCtrl', function ($scope,$filter) {
    $scope.user = {
        status: [1,2],
    };
    $scope.statuses = $scope.statuses = [
    { value: 1, text: 'status1' },
    { value: 2, text: 'status2' },
    { value: 3, text: 'status3' },
    { value: 4, text: 'status4' }
    ];
    $scope.showStatus = function () {
        var selected = [];
        angular.forEach($scope.statuses, function (s) {
            if ($scope.user.status.indexOf(s.value) >= 0) {
                selected.push(s.text);
            }
        });
        return selected.length ? selected.join(',') : "not set";
    }
})

.controller('radiolistCtrl', function ($scope, $filter) {
    $scope.user = {
        status:1,
    };
    $scope.statuses = $scope.statuses = [
    { value: 1, text: 'status1' },
    { value: 2, text: 'status2' },
    { value: 3, text: 'status3' },
    { value: 4, text: 'status4' }
    ];
    $scope.showStatus = function () {
        var selected = $filter('filter')($scope.statuses, { value: $scope.user.status });
        return ($scope.user.status && selected.length) ? selected[0].text : "not set";
    }
})