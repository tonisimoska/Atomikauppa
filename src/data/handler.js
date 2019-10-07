

function getUniques(data) {
  var uniques = [];
  data.map(e => {
    if(!uniques.includes(e.category)) {
      uniques.push(e.category);
    }
  });
  return uniques;
}
exports.getUniques = getUniques;

function sort(data, filter) {
  var newData = [];
  data.map(e => {
    if(filter.includes(e.category)) {
      newData.push(e);
    }
  });
  return newData;
}
exports.sort = sort;

function hasItem(data, item) {
  let i = -1;
  data.map((e, index) => {
    if(e.data.productID === item.productID) {
      i = index;
    }
  });
  return i;
}
exports.hasItem = hasItem;
