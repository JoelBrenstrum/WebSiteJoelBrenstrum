var $j = {
    name: "Joel Brenstrum",
    currentView: "INDEX"
};

$j.viewEnum = ({
    index: "INDEX",
    projects: "PROJECTS"
});
$j.setView = function(view){
    //Enum check first
    $j.currentView = view;
};
$j.changeView = function(view){
    //changes the page to use the new viewmodel
    //changes binding context etc
    //
    //ko.applyBindings(myViewModel);

}