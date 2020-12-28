/* First, create two variables that will hold:
1. The different types of layers available to Mapbox and their respective
opacity attributes
2. The possible alignments which could be applied to the vignettes */

var layerTypes = {
    'fill': ['fill-opacity','fill-color'],
    'line': ['line-opacity','line-color','line-width'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}
var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

/* These two functions help turn on and off individual layers (through their
opacity attributes):
The first one gets the type of layer (from a name specified on the config.js file)
The second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}
function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

function getLayerPaintType2(layer) {
    var layerType = map2.getLayer(layer).type;
    return layerTypes[layerType];
}
function setLayerOpacity2(layer) {
    var paintProps = getLayerPaintType2(layer.layer);
    paintProps.forEach(function (prop) {
        map2.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story' and 'features' elements
var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');


var story2 = document.getElementById('story2');
var features2 = document.createElement('div');
features2.classList.add(alignments[config.alignment]);
features2.setAttribute('id', 'features2');

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
  console.log(record)
    /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
    var container = document.createElement('div');
    var chapter = document.createElement('div');
    // Creates the title for the vignettes
    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }
    // Creates the image for the vignette
    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }
    // Creates the image credit for the vignette
    if (record.imageCredit) {
        var imageCredit = document.createElement('p');
        imageCredit.classList.add('imageCredit');
        imageCredit.innerHTML = 'Image credit: ' + record.imageCredit;
        chapter.appendChild(imageCredit);
    }
    // Creates the description for the vignette
    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }
    // Sets the id for the vignette and adds the step css attribute
    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }
    // Sets the overall theme to the chapter element
    chapter.classList.add(config.theme);
    /* Appends the chapter to the container element and the container
    element to the features element */
    container.appendChild(chapter);
    features.appendChild(container);
});



config2.chapters.forEach((record, idx) => {
  console.log(record)
    /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
    var container2 = document.createElement('div');
    var chapter = document.createElement('div');
    // Creates the title for the vignettes
    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }
    // Creates the image for the vignette
    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }
    // Creates the image credit for the vignette
    if (record.imageCredit) {
        var imageCredit = document.createElement('p');
        imageCredit.classList.add('imageCredit');
        imageCredit.innerHTML = 'Image credit: ' + record.imageCredit;
        chapter.appendChild(imageCredit);
    }
    // Creates the description for the vignette
    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }
    // Sets the id for the vignette and adds the step css attribute
    container2.setAttribute('id', record.id);
    container2.classList.add('step2');
    if (idx === 0) {
        container2.classList.add('active');
    }
    // Sets the overall theme to the chapter element
    chapter.classList.add(config2.theme);
    /* Appends the chapter to the container element and the container
    element to the features element */
    container2.appendChild(chapter);
    features2.appendChild(container2);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);
story2.appendChild(features2);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

// var footer = document.createElement('div');
//     $(footer).addClass("footer");
// // This assigns all the content to the footer element
// if (config.footer) {
//     var footerText = document.createElement('p');
//     footerText.innerHTML = config.footer + '<br>' + config.footerAttribution;
//     footer.appendChild(footerText);
// }
// // If the footer element contains any content, add it to the story
// if (footer.innerText.length > 0) {
//     footer.classList.add(config.theme);
//     footer.setAttribute('id', 'footer');
//     story.appendChild(footer);
// }

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
// const transformRequest = (url) => {
//     const hasQuery = url.indexOf("?") !== -1;
//     const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
//     return {
//         url: url + suffix
//     }
// }

/* This section creates the map element with the
attributes from the main section of the config.js file */

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false
});

var map2 = new mapboxgl.Map({
    container: 'map2',
    style: config2.style,
    center: config2.chapters[0].location.center,
    zoom: config2.chapters[0].location.zoom,
    bearing: config2.chapters[0].location.bearing,
    pitch: config2.chapters[0].location.pitch,
    scrollZoom: false
});

// Instantiates the scrollama function
var scroller = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

map.on("load", function () {
    // This is the function that finds the first symbol layer
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }
    // Add the first new layer
    map.addLayer({
        'id': 'milloutline',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': 'data/map.geojson'
        },
        'opacity':0,
        'paint':{
        'line-color':'black',
        'line-width': 2,
        'line-opacity':0
        }

    }, firstSymbolId);
    // Add the second new layer
    // map.addLayer({
    //     'id': 'medianIncome',
    //     'type': 'fill',
    //     'source': {
    //         'type': 'geojson',
    //         'data': 'data/medianIncome.geojson'
    //     },
    //     'opacity': 0,
    //     'paint': {
    //         'fill-color': ['step', ['get', 'MHHI'],
    //             '#ffffff',
    //             20000, '#ccedf5',
    //             50000, '#99daea',
    //             75000, '#66c7e0',
    //             100000, '#33b5d5',
    //             150000, '#00a2ca'],
    //         'fill-opacity': 0
    //     }
    // }, 'waterway-shadow');



    map.on('click', 'turnstileData', function(e){
        console.log(e)
        var entriesDiff = e.features[0].properties.ENTRIES_DIFF;
        var entries_06 = e.features[0].properties.ENTRIES_06;
        var entries_20 = e.features[0].properties.ENTRIES_20;
        var stationName = e.features[0].properties.stationName;
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<h4>' + stationName + '</h4>'
                + '<p><b>Friday, March 6th:</b> ' + entries_06 + ' entries<br>'
                + '<b>Friday, March 20th:</b> ' + entries_20 + ' entries<br>'
                + '<b>Change:</b> ' + Math.round(entriesDiff * 1000) / 10 + '%</p>')
            .addTo(map);
    });

    map.on('mouseenter', 'turnstileData', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'turnstileData', function () {
        map.getCanvas().style.cursor = '';
    });

    // Setup the instance, pass callback functions
    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            // d3.select("#map").style("position","fixed")

            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            map.flyTo(chapter.location);
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
        })
        .onStepExit(response => {
            // d3.select("#map").style('position', "absolute");
            //
            // //response.direction === 'down'
            // if(response.direction === 'down'){
            //   d3.select("#map").style('top','auto');
            //   d3.select("#map").style('bottom',0);
            // }

            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            console.log(chapter)
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        });




        var scroller2 = scrollama();
        scroller2
          .setup({
            step: ".step1",
            offset: 0.5
            // debug: true
          })
          .onStepEnter((response) => {
             console.log(response);
            // { element, index, direction }
            //
          })
          .onStepExit((response) => {
             console.log(response);
            // { element, index, direction }

            if(response.direction=="up"){
                $("#map").css("position","fixed");
                // $("#map2").css("opacity",0);
            } // this only works for one second
            if(response.direction=="down"){
            $("#map").css("position","absolute");
            // $("#map2").css("opacity",1);
            $("#map2").css('position', "sticky"); // instead of this line, I want map2 to be sticky to the top

            }
          });


          var scroller3 = scrollama();

          // Setup the instance, pass callback functions
          scroller3
              .setup({
                  step: '.step2',
                  offset: 0.5,
                  progress: true
              })
              .onStepEnter(response => {
                // if id = 1
                // if id = 4 and direction up then opacity 1
                // if(response.direction=="down"){
                //   $("#map2").css("opacity",1);
                // }

                var chapter = config2.chapters.find(chap => chap.id === response.element.id);
                response.element.classList.add('active');
                map2.flyTo(chapter.location);
                if (config2.showMarkers) {
                    marker.setLngLat(chapter.location.center);
                }
                if (chapter.onChapterEnter.length > 0) {
                    chapter.onChapterEnter.forEach(setLayerOpacity2);
                }

              })
              .onStepExit(response => {
                // if id = 1
                // if(response.direction=="up"){
                // $("#map2").css("opacity",0);
                // }
                //if id = 4 and direction down then opacity 0
                var chapter = config2.chapters.find(chap => chap.id === response.element.id);
                console.log(chapter)
                response.element.classList.remove('active');
                if (chapter.onChapterExit.length > 0) {
                    chapter.onChapterExit.forEach(setLayerOpacity2);
                }
              });

});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener('resize', scroller.resize);
