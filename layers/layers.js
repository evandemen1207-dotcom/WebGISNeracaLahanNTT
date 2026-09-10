var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_3 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_KawasanBudidayaProvinsiNTT_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kawasan Budidaya Provinsi NTT<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KawasanBudidayaProvinsiNTT_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.188373, 13937850.281313, -866460.590276]
        })
    });
var lyr_KawasanLindungProvinsiNTT_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kawasan Lindung Provinsi NTT<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KawasanLindungProvinsiNTT_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.188373, 13937850.281313, -866460.590276]
        })
    });
var lyr_NeracaLahanSkenarioBAUNTT2046_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Neraca Lahan Skenario BAU NTT 2046<br />\
    <img src="styles/legend/NeracaLahanSkenarioBAUNTT2046_6_0.png" /> Tubuh Air<br />\
    <img src="styles/legend/NeracaLahanSkenarioBAUNTT2046_6_1.png" /> Hutan<br />\
    <img src="styles/legend/NeracaLahanSkenarioBAUNTT2046_6_2.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/NeracaLahanSkenarioBAUNTT2046_6_3.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/NeracaLahanSkenarioBAUNTT2046_6_4.png" /> Lahan Terbangun<br />\
    <img src="styles/legend/NeracaLahanSkenarioBAUNTT2046_6_5.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/NeracaLahanSkenarioBAUNTT2046_6_6.png" /> Padang Rumput / Semak Belukar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NeracaLahanSkenarioBAUNTT2046_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13237133.150185, -1226998.575026, 13937806.795125, -898503.629261]
        })
    });
var lyr_NeracaLahanSkenarioSustainabilityNTT2046_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Neraca Lahan Skenario Sustainability NTT 2046<br />\
    <img src="styles/legend/NeracaLahanSkenarioSustainabilityNTT2046_7_0.png" /> Tubuh Air<br />\
    <img src="styles/legend/NeracaLahanSkenarioSustainabilityNTT2046_7_1.png" /> Hutan<br />\
    <img src="styles/legend/NeracaLahanSkenarioSustainabilityNTT2046_7_2.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/NeracaLahanSkenarioSustainabilityNTT2046_7_3.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/NeracaLahanSkenarioSustainabilityNTT2046_7_4.png" /> Lahan Terbangun<br />\
    <img src="styles/legend/NeracaLahanSkenarioSustainabilityNTT2046_7_5.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/NeracaLahanSkenarioSustainabilityNTT2046_7_6.png" /> Padang Rumput / Semak Belukar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NeracaLahanSkenarioSustainabilityNTT2046_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13237133.150185, -1226998.575026, 13937806.795125, -898503.629261]
        })
    });
var lyr_NeracaLahanSkenarioBAUNTT2046_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Neraca Lahan Skenario BAU NTT 2046<br />\
    <img src="styles/legend/NeracaLahanSkenarioBAUNTT2046_8_0.png" /> Tubuh Air<br />\
    <img src="styles/legend/NeracaLahanSkenarioBAUNTT2046_8_1.png" /> Hutan<br />\
    <img src="styles/legend/NeracaLahanSkenarioBAUNTT2046_8_2.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/NeracaLahanSkenarioBAUNTT2046_8_3.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/NeracaLahanSkenarioBAUNTT2046_8_4.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/NeracaLahanSkenarioBAUNTT2046_8_5.png" /> Padang Rumput / Semak Belukar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NeracaLahanSkenarioBAUNTT2046_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13237133.150185, -1226998.575026, 13937806.795125, -898503.629261]
        })
    });
var lyr_NeracaLahanSkenarioSustainabilityNTT2046_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Neraca Lahan Skenario Sustainability NTT 2046<br />\
    <img src="styles/legend/NeracaLahanSkenarioSustainabilityNTT2046_9_0.png" /> Tubuh Air<br />\
    <img src="styles/legend/NeracaLahanSkenarioSustainabilityNTT2046_9_1.png" /> Hutan<br />\
    <img src="styles/legend/NeracaLahanSkenarioSustainabilityNTT2046_9_2.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/NeracaLahanSkenarioSustainabilityNTT2046_9_3.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/NeracaLahanSkenarioSustainabilityNTT2046_9_4.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/NeracaLahanSkenarioSustainabilityNTT2046_9_5.png" /> Padang Rumput / Semak Belukar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NeracaLahanSkenarioSustainabilityNTT2046_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13237133.150185, -1226998.575026, 13937806.795125, -898503.629261]
        })
    });
var format_BatasAdministrasiKabupatenKotaProvinsiNTT_10 = new ol.format.GeoJSON();
var features_BatasAdministrasiKabupatenKotaProvinsiNTT_10 = format_BatasAdministrasiKabupatenKotaProvinsiNTT_10.readFeatures(json_BatasAdministrasiKabupatenKotaProvinsiNTT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKabupatenKotaProvinsiNTT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKabupatenKotaProvinsiNTT_10.addFeatures(features_BatasAdministrasiKabupatenKotaProvinsiNTT_10);
var lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKabupatenKotaProvinsiNTT_10, 
                style: style_BatasAdministrasiKabupatenKotaProvinsiNTT_10,
                popuplayertitle: 'Batas Administrasi Kabupaten/Kota Provinsi NTT',
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasiKabupatenKotaProvinsiNTT_10.png" /> Batas Administrasi Kabupaten/Kota Provinsi NTT'
            });
var group_NeracaLahanTanpaLahanTerbangun = new ol.layer.Group({
                                layers: [lyr_NeracaLahanSkenarioBAUNTT2046_8,lyr_NeracaLahanSkenarioSustainabilityNTT2046_9,],
                                fold: 'close',
                                title: 'Neraca Lahan Tanpa Lahan Terbangun'});
var group_NeracaLahanLahanTerbangun = new ol.layer.Group({
                                layers: [lyr_NeracaLahanSkenarioBAUNTT2046_6,lyr_NeracaLahanSkenarioSustainabilityNTT2046_7,],
                                fold: 'close',
                                title: 'Neraca Lahan + Lahan Terbangun'});

lyr_ESRIGraydark_0.setVisible(true);lyr_OSMStandard_1.setVisible(false);lyr_GoogleHybrid_2.setVisible(false);lyr_ESRISatellite_3.setVisible(false);lyr_KawasanBudidayaProvinsiNTT_4.setVisible(false);lyr_KawasanLindungProvinsiNTT_5.setVisible(false);lyr_NeracaLahanSkenarioBAUNTT2046_6.setVisible(false);lyr_NeracaLahanSkenarioSustainabilityNTT2046_7.setVisible(false);lyr_NeracaLahanSkenarioBAUNTT2046_8.setVisible(false);lyr_NeracaLahanSkenarioSustainabilityNTT2046_9.setVisible(true);lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_10.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_OSMStandard_1,lyr_GoogleHybrid_2,lyr_ESRISatellite_3,lyr_KawasanBudidayaProvinsiNTT_4,lyr_KawasanLindungProvinsiNTT_5,group_NeracaLahanLahanTerbangun,group_NeracaLahanTanpaLahanTerbangun,lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_10];
lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_10.set('fieldAliases', {'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKK': 'WADMKK', 'UUPP': 'UUPP', });
lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_10.set('fieldImages', {'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKK': 'TextEdit', 'UUPP': 'TextEdit', });
lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_10.set('fieldLabels', {'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMKK': 'no label', 'UUPP': 'no label', });
lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});