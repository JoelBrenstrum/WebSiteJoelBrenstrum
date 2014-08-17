/*The view model*/
$j.intialiseVM = function() {
    jsonBodyElements = function() {
        if ($j.JSONData)
            return $j.JSONData.bodyElements;
        else
            return [];
    }
    jsonMenuElements = function() {
        if ($j.JSONData) {
            $j.JSONData.menuElements.forEach(
                    function(element) {
                        element.isLink = ko.observable(element.isLink)
                        if (!element.isLink()) {
                            element.url = eval(element.url);
                        }
                    });
            return $j.JSONData.menuElements
        }
        else
            return [];
    }
    jsonFooterElements = function() {
        if ($j.JSONData) {
            $j.JSONData.menuElements.forEach(
                    function(element) {
                        element.isLink = ko.observable(element.isLink)
                        if (!element.isLink()) {
                            element.url = eval(element.url);
                        }
                    });
            
            return $j.JSONData.menuElements
        }
        else
            return [];
    }
    jsonTitle = function() {
        if ($j.JSONData) {
            return $j.JSONData.title
        }
        else
            return "";
    }
    jsonHeader = function() {
        if ($j.JSONData) {
            return $j.JSONData.header
        }
        else
            return "";
    }

    var vm = ({
        title: ko.observable(""),
        header: ko.observable(""),
        
        menuElements: ko.observableArray(jsonMenuElements()),
        bodyElements: ko.observableArray(jsonBodyElements()),
        footer: ko.observableArray(jsonMenuElements()),
        update: function() {
            vm.title(jsonTitle())
            vm.header(jsonHeader())
            vm.menuElements(jsonMenuElements())
            vm.bodyElements(jsonBodyElements())
        }
    });
    return vm;
}

$j.viewModel = $j.intialiseVM();
