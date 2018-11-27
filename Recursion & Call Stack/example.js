function getPINs(observed) {
  const layout = {
    1:['1','2','4'], 
    2:['1','2','3','5'], 
    3:['2','3','6'], 
    4:['1','4','5','7'], 
    5:['2','4','5','6','8'],
    6:['3','5','6','9'], 
    7:['4','7','8'], 
    8:['5','7','8','9','0'], 
    9:['6','8','9'], 
    0:['8','0']
    };
  if (observed.length === 1) return layout[observed];
  return mixNMatch(layout[observed[0]], getPINs(observed.slice(1)));
}
function mixNMatch(add, addTo) {
  var out = [];
  for (v of add) {
    for (w of addTo) {
      console.log(out)
      out.push(v + w);
    }
  }
  return out;
}
