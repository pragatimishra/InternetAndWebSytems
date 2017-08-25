
var name_arr = {
 'result':'<h4>Results</h4>',
 'area':'Area: ',         
 'peri':'Perimeter: ',   
 'dimensions':'<h4>Enter the dimensions</h4>'
 

};


var AreaPem = new Object();
AreaPem.shape_current = '';       
AreaPem.result = {'area':'', 'peri':''};	


AreaPem.computeAnswer = function(){
  var shape_var = '';
  for(var x in this.result) {
    if(this.result[x] != '') 
		shape_var += '<div class="shape_var">'+ name_arr[x]+ '<em>'+ this.result[x]+ '</em></div>'
  }
  document.getElementById('result').innerHTML = name_arr['result']+ shape_var;
 }

AreaPem.circle = function(){

  if(document.getElementById(AreaPem.shape_current + '_d')) {
   var mag = this.mag(['d']);
   AreaPem.result['area'] = Math.PI * mag['d'] * mag['d'] /4;     
   AreaPem.result['peri'] = Math.PI * mag['d'];     
   AreaPem.computeAnswer();        
  }
 };


 
 AreaPem.hexagon = function(){
  
  if(document.getElementById(AreaPem.shape_current + '_a')) {
   var mag = this.mag(['a']);
   AreaPem.result['area'] = 3 * mag['a'] * mag['a'] * Math.sqrt(3) /2;     
   AreaPem.result['peri'] = 6 * mag['a'];    
 

   AreaPem.computeAnswer();       
  }
 };




 AreaPem.rectangle = function(){
 
  if(document.getElementById(AreaPem.shape_current + '_a') && document.getElementById(AreaPem.shape_current + '_b')) {
   var mag = this.mag(['a', 'b']);
   AreaPem.result['area'] = mag['a'] * mag['b'];     
   AreaPem.result['peri'] = 2 * (mag['a'] * 1 + mag['b'] * 1);    

   AreaPem.computeAnswer();        
  }
 };



 AreaPem.scalene_triangle = function(){
  if(document.getElementById(AreaPem.shape_current + '_a') && document.getElementById(AreaPem.shape_current + '_b') && document.getElementById(AreaPem.shape_current + '_c')) {
   var mag = this.mag(['a', 'b', 'c']);
   mag['a'] = mag['a']*1;  mag['b'] = mag['b']*1;  mag['c'] = mag['c']*1;    
   AreaPem.result['area'] = 0.25 * Math.sqrt((mag['a'] + mag['b'] + mag['c']) * (mag['b'] + mag['c'] - mag['a']) * (mag['a'] + mag['c'] - mag['b']) * (mag['a'] + mag['b'] - mag['c']));  // area
   AreaPem.result['peri'] = mag['a'] + mag['b'] + mag['c'];        
 

   AreaPem.computeAnswer();        
  }
 };


 AreaPem.square = function(){
  if(document.getElementById(AreaPem.shape_current + '_a')) {
   var mag = this.mag(['a']);
   AreaPem.result['area'] = mag['a'] * mag['a'];     
   AreaPem.result['peri'] = 4 * mag['a'];     
  
  }
 };



 AreaPem.inpFields = {
  'circle':'Diameter: <input type="text" name="circle_d" id="circle_d" class="abc"/>',
  'square':'Side: <input type="text" name="square_a" id="square_a" class="abc"/>',
  'rectangle':'Side A: <input type="text" name="rectangle_a" id="rectangle_a" class="abc"/><br/> Side B: <input type="text" name="rectangle_b" id="rectangle_b" class="abc"/>',
  'hexagon':'Side: <input type="text" name="hexagon_a" id="hexagon_a" class="abc"/>',
  'scalene_triangle':'Side A: <input type="text" name="scalene_triangle_a" id="scalene_triangle_a" class="abc"/><br/> Side B: <input type="text" name="scalene_triangle_b" id="scalene_triangle_b" class="abc"/><br/>Side C: <input type="text" name="scalene_triangle_c" id="scalene_triangle_c" class="abc"/>',
 
 };

 AreaPem.chosen_item = function(k) {
  this.shape_current = k.value;
  document.getElementById('shape').innerHTML = this.shape_current.replace('_', ' ');  
  document.getElementById('chosen_item').innerHTML = name_arr['dimensions']+ this.inpFields[this.shape_current]+ '<br/><input type="button" id="volcal" value="Submit" onclick="AreaPem.result = {\'area\':\'\', \'peri\':\'\'}; AreaPem[AreaPem.shape_current]()" /><div id="result"></div>';
 };

 
 AreaPem.mag = function(n) {
   var c = n.length;
   var z = new Array();
   for(var i=0; i<c; i++) {
     z[n[i]] = document.getElementById(this.shape_current + '_' + n[i]).value;
   }
   return z;
 }


 

 var klm = document.getElementById('shape_geo').getElementsByTagName('input');
 var n_klm = klm.length;
 if(n_klm > 0) {
  for(var i=0; i<n_klm; i++) {
    klm[i].onclick = function(){
      document.getElementById('chosen_item').style.display = 'block';
      AreaPem.chosen_item(this);
    };
  }
}