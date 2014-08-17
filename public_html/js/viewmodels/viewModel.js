/*The view model*/
 $j.intialiseVM= function(){
    jsonBodyElements = function(){
        if($j.JSONData)
            return $j.JSONData.bodyElements;
         else
            return [];
    }
    jsonMenuElements = function(){
        if($j.JSONData){
            $j.JSONData.menuElements.forEach(
                function(element){
                    element.isLink = ko.observable(element.isLink)
                    if(!element.isLink()){
                         element.url = eval(element.url);
                    }
            });
            return $j.JSONData.menuElements}
        else
            return [];
    }
    jsonTitle = function(){
        if($j.JSONData){
            return $j.JSONData.title
        }
        else
            return "";
    }
    
    var vm = ({
        title: ko.observable(""),
        menuElements: ko.observableArray(jsonMenuElements()),
        bodyElements: ko.observableArray(jsonBodyElements()),
        footer: "project footer",
        update: function(){
            vm.title(jsonTitle())
            vm.menuElements(jsonMenuElements())
            vm.bodyElements(jsonBodyElements())
        }
    });
    
    
    
    
    return vm;
}

$j.viewModel = $j.intialiseVM();
