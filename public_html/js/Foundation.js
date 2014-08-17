var viewsEnum = ({
        index: "index",
        projects: "projects"
    });

var $j = {  
    name: "Joel Brenstrum",
    currentView: viewsEnum.index,
    JSONData:{
        title:"Failed to load",
        bodyElements:  [{heading :"",content: ""}],
        menuElements:  [{isLink: true,title:"link1",url: ""}]
    },
    

    setView: function(viewEnum){
        //Enum check first
        currentView = viewEnum;
    },
    updateView: function(viewEnum){
        if(!$j.getJsonData(viewEnum)){
            console.log("failed to load page");
            
            return;
        }
        $j.setView(viewEnum);
        $j.viewModel.update()//changes observable values
        //changes the page to use the new viewmodel
        //updates observables with new values (sets enum
        //and runs through all setup methods setting correct values  
    },

    getJsonData: function(viewEnum){
       
        var url = "json/"+viewEnum+".json";
        var success = false;
        $.ajax({
            async: false,
            dataType: "json",
            url: url,
        }).done(function(data, textStatus,jqXHR){
            $j.JSONData = data; 
            success = true;
        }).error(function(jqXHR, textStatus, errorThrown){
            alert("Failed to load page"); 
        });
        return success;
    },

}