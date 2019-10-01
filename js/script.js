var myApp = angular.module('myTodoApp', ['ngCookies']);

myApp.controller("LEController", ['$scope', '$cookies', function ($scope, $cookies) {

     $scope.waitingForTodos = "Chargement des tâches";
     $scope.todos = [];
     $scope.indexModif = null ;


     $scope.removeToDo = function (i) {
          $scope.todos.splice(i, 1);

     }

     /**
     * Permet de modifier un todo en ajoutant ses valeurs au formulaire d'ajout
     * Les .focus() permettent de donner le style "rempli" au formulaire d'ajout
     * @param  int      i    l'index du todo
     */
     $scope.modifTodo = function(i) {
          document.getElementById('idInNom').value = $scope.todos[i].nomTache;
          document.getElementById('idInNom').focus() ;
          document.getElementById('idInDate').value = $scope.todos[i].dateTache;
          // document.getElementById('idInDate').focus() ; //afin que la date ne soit pas enlevee
          document.getElementById('idInDuree').value = $scope.todos[i].dureeTache;
          document.getElementById('idInDuree').focus() ;
          document.getElementById('idInHeureDebut').value = $scope.todos[i].heureTache;
          document.getElementById('idInHeureDebut').focus() ;
          document.getElementById('idInContexte').value = $scope.todos[i].contexteTache;
          document.getElementById('idInContexte').focus() ;
          document.getElementById('idInPrioritaire').value = $scope.todos[i].prioritaire;
          document.getElementById('idInPrioritaire').focus() ;
          document.getElementById('idInLien').value = $scope.todos[i].lienTache;
          document.getElementById('idInLien').focus() ;
          document.getElementById('idInLien').blur() ; //pour quitter le champs

          $scope.indexModif = i ;

          document.getElementById("idInButonValider").className = "btn btn-info darken-1"; //on met bleu
     }


     $scope.addTodo = function () {

          if ($scope.indexModif != null) $scope.removeToDo($scope.indexModif) ;

          $scope.todos.push({
               nomTache: document.getElementById('idInNom').value,
               contexteTache: document.getElementById('idInContexte').value,
               dateTache: document.getElementById('idInDate').value,
               heureTache: document.getElementById('idInHeureDebut').value,
               dureeTache: document.getElementById('idInDuree').value,
               prioritaire: $scope.newPrioritaire,
               lienTache: document.getElementById('idInLien').value,
               completed: false
          });

          $scope.supprChamps();
     }


     $scope.saveTodos = function () {
          if ($scope.todos) {
               $cookies.putObject("savedTodos", $scope.todos);
          }
     }
     $scope.getTodos = function () {
          // if ($cookies.getObject("savedTodos") {
          $scope.todos = $cookies.getObject("savedTodos");

          // $scope.waitingForTodos = "" ;
          // }
     }


     $('#idInDate').datepicker({
          format: "dd/mm/yyyy",
          weekStart: 1,
          todayBtn: "linked",
          language: "fr",
          maxViewMode: 2,
          todayHighlight: true
     });


     $scope.supprChamps = function()  {
          document.getElementById('idInNom').value = null;
          document.getElementById('idInDate').value = null;
          document.getElementById('idInDuree').value = null;
          document.getElementById('idInHeureDebut').value = null;
          document.getElementById('idInContexte').value = null;
          document.getElementById('idInPrioritaire').value = null;
          document.getElementById('idInLien').value = null;

          $scope.indexModif = null ;
          document.getElementById("idInButonValider").className = "btn btn-outline teal darken-1"; //on remet vert
     }
}]);
