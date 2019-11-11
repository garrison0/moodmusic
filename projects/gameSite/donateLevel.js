(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("donateLevel",
{ "height":60,
 "infinite":false,
 "layers":[
        {
         "data":[2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 127, 127, 127, 127, 127, 127, 127, 127, 127, 0, 0, 127, 0, 0, 0, 0, 2, 2, 2, 2, 127, 127, 127, 127, 127, 127, 127, 127, 127, 0, 0, 127, 127, 0, 0, 0, 2, 2, 2, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 103, 103, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 103, 103, 0, 0, 0, 0, 2, 2, 2, 2, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
         "height":60,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":2,
         "name":"Object Layer 1",
         "objects":[
                {
                 "height":202.316,
                 "id":1,
                 "name":"",
                 "rotation":0,
                 "type":"donate_s1",
                 "visible":true,
                 "width":376.658,
                 "x":64.342,
                 "y":206.684
                }, 
                {
                 "height":62.5317,
                 "id":2,
                 "name":"",
                 "rotation":0,
                 "type":"paypalButton",
                 "visible":true,
                 "width":61.9476,
                 "x":224.663,
                 "y":32.4546
                }, 
                {
                 "height":160.617242331064,
                 "id":3,
                 "name":"",
                 "rotation":0,
                 "type":"donate_s2",
                 "visible":true,
                 "width":305.899,
                 "x":63.4689,
                 "y":1466.10517387803
                }, 
                {
                 "height":1033.31,
                 "id":4,
                 "name":"",
                 "rotation":0,
                 "type":"donate_s3",
                 "visible":true,
                 "width":112.835,
                 "x":299.013,
                 "y":424.698
                }, 
                {
                 "height":61.6139,
                 "id":5,
                 "name":"",
                 "rotation":0,
                 "type":"aboutButton",
                 "visible":true,
                 "width":62.9389,
                 "x":127.865,
                 "y":1696.7
                }, 
                {
                 "height":61.6139,
                 "id":6,
                 "name":"",
                 "rotation":0,
                 "type":"projectButton",
                 "visible":true,
                 "width":63.6014,
                 "x":256.393,
                 "y":1696.04
                }, 
                {
                 "height":1408.67,
                 "id":7,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":65.2426,
                 "x":383.412,
                 "y":225.075
                }, 
                {
                 "height":214.662,
                 "id":8,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":70.011,
                 "x":-5.20743,
                 "y":3.47162
                }, 
                {
                 "height":27.773,
                 "id":10,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":392.948,
                 "x":55.7828,
                 "y":191.359
                }, 
                {
                 "height":1820.87,
                 "id":12,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64.266,
                 "x":575.334,
                 "y":98.9493
                }, 
                {
                 "height":45.6413,
                 "id":13,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":49.0644,
                 "x":543.131,
                 "y":1793.13
                }, 
                {
                 "height":53.6285,
                 "id":14,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":58.7631,
                 "x":511.753,
                 "y":1825.08
                }, 
                {
                 "height":74.167,
                 "id":15,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":597.33,
                 "x":-16.545,
                 "y":1855.32
                }, 
                {
                 "height":90.712,
                 "id":16,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":85.5774,
                 "x":-20.5386,
                 "y":1824.51
                }, 
                {
                 "height":174.578,
                 "id":18,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":69.6029,
                 "x":-35.9425,
                 "y":1656.21
                }, 
                {
                 "height":81.0132,
                 "id":19,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":110.11,
                 "x":-45.0707,
                 "y":1584.32
                }, 
                {
                 "height":44.3015,
                 "id":20,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":387.281,
                 "x":-3.5727,
                 "y":1589.85
                }, 
                {
                 "height":81.9486,
                 "id":21,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":59.1851,
                 "x":542.909,
                 "y":14.7963
                }, 
                {
                 "height":85.9158,
                 "id":22,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":74.2577,
                 "x":509.626,
                 "y":-20.4871
                }, 
                {
                 "height":58.2192,
                 "id":23,
                 "name":"",
                 "rotation":0,
                 "type":"playerStart",
                 "visible":true,
                 "width":65.0685,
                 "x":104.452,
                 "y":114.726
                }, 
                {
                 "height":36,
                 "id":24,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":89,
                 "x":417,
                 "y":-2
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":3,
 "nextobjectid":25,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.2.5",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"spritesheet_ground.tsx"
        }, 
        {
         "firstgid":129,
         "source":"spritesheet_tiles.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":1.2,
 "width":20
});