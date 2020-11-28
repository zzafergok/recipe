angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $stateParams) {
  $scope.recipes = [
    {id: 0, name:"Lahmacun", subtitle:"Ev Yapimi Lahmacun", people:"7 Kisilik", description:"Ev yapımı lahmacun tarifi için; bir kabın içine unu koyup, maya ve tuzu ekleyip harmanla. Ilık suyla birlikte zeytinyağını da unun içine döküp harmanla. Daha sonra tezgahı ve ellerinizi unlayıp, hamuru elastik ve yumuşak bir hale getirene kadar yoğur. Kabı yağlayıp hamuru içine koyduktan sonra iki katı olana kadar, yaklaşık 30-40 dakika mayalanması için beklet. Hamur mayalanırken bir kaba ince ince doğradığın biberleri, soğanları, maydanozları ve domatesleri koy. Üzerine pul biberi, karabiberi, kimyonu, kıymayı da ekle ve iyice karıştır. Karışımı kenara koy ve beklettiğin hamuru unlayıp eşit parçalara böl ve ayırdığın her parçayı ince olacak ama yırtılmayacak şekilde oklavayla aç. Açtığın  hamurun üzerine önce salçalardan biraz sür ve elinle yay. Daha sonra harctan da koy ve elinle yay. Teflon tavayı maksimum sıcaklıkta fırının ızgara bölümünde ısıt. Isındıktan sonra hazırladığın lahmacunları içine koyup alt tarafı hafif kızarana kadar fırında pişir. Kenarları çıtır çıtır olduğu vakit fırından çıkart, ikiye katlayıp üstünü ört ve biraz bekledikten sonra lahmacununuz servise hazır.", img:"https://www.diyetkolik.com/site_media/media/foodrecipe_images/lahmacun2.210x210.png"},

    {id: 1, name:"Yaprak Sarmasi", subtitle:"Kiymali Yaprak Sarma", people:"6 Kisilik", description:"Kıymalı yaprak sarma tarifi için; pirinci yemeği yapmaya başlamadan önce sıcak suda 15 dakika kadar beklet. Taze yaprakları da kaynatılmış suda 4-5 dakika kadar beklet ve beklettikten sonra süzgeçte süzülmesini sağla. Soğanı ve maydanozu yemeklik doğra. Pirincin suyunu süz ve pirinci, kıymayı, soğanı, salçayı, 1 tatlı kaşığı tuzu ve baharatları geniş ve derin bir kaba alıp yoğur. Asma yaprağını mat ve damarlı kısmı size doğru bakacak şekilde avuç içine al ve içine bir tatlı kaşığı kıymalı harçtan koyarak sar. Aynı işlemi diğer yapraklara da uygula. Sardığın dolmları boşluk kalmayacak şekilde derin bir tencereye diz. Domatesin kabuğunu soy ve rendele. Rendelediğin domatesi yarım su bardağı sıvıyağda sotele daha sonra 2 bardak suyu ve 1 tatlı kaşığı tuzu ekleyip karıştır. 2-3 dakika daha pişirerek ocaktan al ve dolmaların üzerine gezdirerek dök. Pişme esnasında yaprakların açılmaması için üzerine porselen bir tabağı ters çevirerek kapat. Orta ateşte suyunu çekip pirinçler şişinceye kadar kapağı kapalı olarak pişir. Kıymalı yaprak sarma servise hazır.", img:"https://www.diyetkolik.com/site_media/media/foodrecipe_images/kiymali-yaprak-sarma.210x210.jpg"  },

    {id: 2, name:"Kofte", subtitle:"Balkan Kofte", people:"6 Kisilik", description:"Balkan köftesi tarifi için; kıymayı tuzla beraber iyice yoğurun. Yarım saat dinlendirdikten sonra soğan, karabiber ve pul biber ekleyip beraber 15 dakika yoğurmaya devam edin. Kıymayı 1 saat dinlendirdikten sonra yumurta büyüklüğünde parçalara ayırın.  Her bir parçayı tekrar ikiye ayırın. İkiye ayırdığınız parçanın birine elinizle bastırıp, hamburger köftesi şekli verin. Üzerine 1 çay kaşığı rendelenmiş kaşar peyniri ve 1 çay kaşığı doğranmış kuru et koyup, diğer parçayı üzerine kapatarak, bastırın. Diğer köfte parçalarını da aynı şekilde hazırlayın. Kızdırılmış sıvıyağda önlü arkalı kızartın ve üzerine 1 çay kaşığı kaymak koyup, sıcak olarak servis yapın.", img:"https://www.diyetkolik.com/site_media/media/foodrecipe_images/Balkan-K%C3%B6ftesi.210x210.png"},

    {id: 3, name:"Makarna", subtitle:"Besamel Soslu Makarna", people:"8 Kisilik", description:"Beşamel soslu makarna tarifi için; makarnaları derin bir tencerede bol suda 8-10 dakika haşla. Haşladığın makarnaları süzerek soğuk sudan geçir ve süzülmesi için süzgeçte beklet. Makarnalar süzülürken beşamel sos için margarini ve unu tencereye koy. Un rengini değiştirene kadar orta ateşte yağda kavur. Üzerine sütü azar azar eklerken bir yandan da robot ile çırparak karıştır. Sos koyu bir kıvam alınca ocaktan al. Geniş bir kaba makarnayı koy ve üzerine beşamel sos ile 1 su bardağı kaşar peyniri ekle ve karıştır. İyice karıştırdıktan sonra borcama dök. Üzerine 1 su bardağı kaşar peyniri rendesini yayarak dök ve önceden ısıtılmış 200 derece fırında üzeri kızarana kadar pişir. Beşamel soslu makarna servise hazır.", img:"https://www.diyetkolik.com/site_media/media/foodrecipe_images/besamel-soslu-makarna.210x210.jpg"},

    {id: 4, name:"Tavuk", subtitle:"Firinda Baharatli Tavuk", people:"2 Kisilik", description:"Fırında baharatlı tavuk tarifi için; ilk önce, soğan ve sarımsakları bir kaba rendele, içine 1 çorba kaşığı yoğurdu, 1 çorba kaşığı salçayı, 3 yemek kaşığı sıvı yağını, karabiberi, kimyonu, kekiği ve pul biberi ekle ve iyice karıştır. Daha sonra başka bir yerde tavukları temizle ve fazla derilerini kes, üzerine iyice pişmesi için çizikler at. Hazırladığın sosu tavuklara bolca sür. Fırın tepsisine tavukları koy ve fırına ver. Önceden ısıtılmış 200 derecedeki fırında kızarıncaya kadar pişir. Fırında baharatlı tavuk servise hazır.", img:"https://www.diyetkolik.com/site_media/media/foodrecipe_images/firinda-baharatli-tavuk.210x210.jpg"},
  ];

  console.log('id : ' + $stateParams.recipesID);

  if($stateParams.recipesID){
    $scope.detail = $scope.recipes[$stateParams.recipesID];
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
