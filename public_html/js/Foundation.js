window.onerror = function (errorMsg, url, lineNumber, columnNumber, errorObject) {
    if (errorObject && /<omitted>/.test(errorMsg)) {
        console.error('Full exception message: ' + errorObject.message);
    }
}

var viewsEnum = ({
    index: "index",
    projects: "projects",
    contact: "contact",
    cv: "cv"

});

var $j = {
    name: "Joel Brenstrum",
    currentView: viewsEnum.index,
    JSONData: {
        title: "Failed to load",
        bodyElements: [{id: "",heading: "", content: ""}],
    },
    sharedJSONData: {
        menuElements: [{isLink: true, title: "Sorry", url: ""}],
    },
   
    getJsonData: function(viewEnum) {

        var url = "json/" + viewEnum + ".json";
        var JSONData;
        $.ajax({
            async: false,
            dataType: "json",
            url: url,
        }).done(function(data, textStatus, jqXHR) {
            JSONData = data;
            success = true;
        }).error(function(jqXHR, textStatus, errorThrown) {
            alert("Failed to load page");
        });
        return JSONData;
    },
    changeSelectedPage: function(viewEnum) {
        $j.JSONData.menuElements.forEach(
                function(element) {
                    if(element.url === viewEnum){
                        element.selected(true);
                    }
                    else{
                        element.selected(false);
                    }
                });
    },
    setView: function(viewEnum) {
        //Enum check first
        $j.currentView = viewEnum;
    },
    updateView: function(viewEnum) {
        if (!viewsEnum[viewEnum]) {
            return;
        }
        $j.JSONData = $j.getJsonData(viewEnum);
        $j.viewModel.update()
        $j.changeSelectedPage(viewEnum);
        $j.setView(viewEnum);
        //changes observable values
        //changes the page to use the new viewmodel
        //updates observables with new values (sets enum
        //and runs through all setup methods setting correct values  
    }

    
}