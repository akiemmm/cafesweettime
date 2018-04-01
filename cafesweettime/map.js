// JavaScript Document
var map;
var marker;
var center = {
            lat: 43.0638325, // 緯度
            lng: 141.35313940000003 // 経度
};

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: center, // 地図の中心を指定
        zoom: 19 // 地図のズームを指定
    });
 marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
      map: map // マーカーを立てる地図を指定
   });
}