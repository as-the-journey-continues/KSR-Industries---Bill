document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

angular.module("bot",[]).controller("catbot", function($scope){
    $scope.rate=""
    $scope.qty=""
    $scope.amount=""
    $scope.total=0
    $scope.list=[]
    
    $scope.getrate = function(event){
        console.log(event)
        if (!$scope.$$phase){
            $scope.$apply(); 
        }                                                                                                                                                                                                     
        $scope.rate = event.target.value
        console.log($scope.rate)
    }
    $scope.getqty = function(event){
        console.log(event)
        if (!$scope.$$phase){
            $scope.$apply(); 
        }                                                                                                                                                                                                     
        $scope.qty = event.target.value
        console.log($scope.qty)
    }
    $scope.next = () => {
        if ($scope.rate!="" && $scope.qty!="") {
            $scope.amount = $scope.rate * $scope.qty
            $scope.total += $scope.amount
            console.log($scope.amount)
            $scope.list.push({rate: $scope.rate, qty:$scope.qty, amount: $scope.amount})
            console.log($scope.list)
            $scope.rate=""
            $scope.qty=""
            $scope.amount=""
        }
        else{
            M.toast({
                html:"Please fill out all the fields",
                classes:"red rounded"
            })
        }

    }

    $scope.calcresult = true

    $scope.result = () => {
        if ($scope.rate!="" && $scope.qty!="") {
            $scope.amount = $scope.rate * $scope.qty
            $scope.total += $scope.amount
            $scope.showbuttons = false
            $scope.gst = $scope.total * (6/100)
            $scope.overalltotal = $scope.total + $scope.gst + $scope.gst
            $scope.calcresult = false

            var num = Math.floor($scope.overalltotal)
            var decimal = $scope.overalltotal - num
            console.log(decimal)
            if (decimal<=0.5) {
                $scope.roundoff = -(decimal)
                $scope.symbol = "(-)"
                $scope.overalltotal = Math.round($scope.overalltotal)
            }
            else{
                var sss = 1 - decimal
                $scope.roundoff = +(sss)
                $scope.symbol = "(+)"
                $scope.overalltotal = Math.round($scope.overalltotal)
            }
            // $scope.rupees = $scope.numberintoword($scope.overalltotal)
            // console.log($scope.rupees)
        }
        else{
            M.toast({
                html:"Please fill out all the fields",
                classes:"red rounded"
            })
        }
    }
    $scope.c=""
    $scope.address=""

    $scope.ifcompanyselected = false
    $scope.showbuttons = false
    $scope.c1 = false
    $scope.c2 = false
    $scope.c3 = false

    $scope.company = () => {
        if ($scope.c=="c1") {
            $scope.ifcompanyselected = true
            $scope.showbuttons = true
            $scope.c1 = true
            $scope.c2 = false
            $scope.c3 = false
            $scope.address="2-113E, Karayampalayam Road, Mylampatti Post, Coimabore - 641062. GSTIN: 33AAACV5492Q1ZP"
        }
        else if ($scope.c=="c2") {
            $scope.ifcompanyselected = true
            $scope.showbuttons = true
            $scope.c1 = false
            $scope.c2 = true
            $scope.c3 = false
            $scope.address="1/167-7, Ranga Nagar, Neelambur Village, Coimbatore - 641062. GSTIN: 33AAGFC4176KIZD"
        }
        else if ($scope.c=="c3") {
            $scope.ifcompanyselected = true
            $scope.showbuttons = true
            $scope.c1 = false
            $scope.c2 = false
            $scope.c3 = true
            $scope.address="114-B, Thanneer Pandel, Peelamedu, Coimbatore-641004. GSTIN: 33AADFB3627K1ZN"
        }
    }

    let get = new Date()
    $scope.date = get.getDate()
    $scope.month = get.getMonth()
    $scope.year = get.getFullYear()

    var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

    // $scope.numberintoword = function (n){
    //     if (n < 20) return num[n];
    //     var digit = n%10;
    //     if (n < 100) return tens[~~(n/10)-2] + (digit? "-" + num[digit]: "");
    //     if (n < 1000) return num[~~(n/100)] +" hundred" + (n%100 == 0? "": " and " + $scope.numberintoword(n%100));
    //     return(~~(n/1000)) + " thousand" + (n%1000 != 0? " " + $scope.numberintoword(n%1000): "");
    // }   
})