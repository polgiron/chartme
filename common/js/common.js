var data = {
  "data": [
    {
      "label" : "Label 1 is amazing",
      "value" : 20,
      "color": "#4DAF7C"
    },
    {
      "label" : "This is a very long label",
      "value" : 50,
      "color": "#F4D03F"
    },
    {
      "label" : "This is the label 3",
      "value" : 70,
      "color": "#E74C3C"
    },
    {
      "label" : "Label 4",
      "value" : 20,
      "color": "#f39c12"
    },
    {
      "label" : "Label 5",
      "value" : 55,
      "color": "#8e44ad"
    },
    {
      "label" : "Awesome",
      "value" : 12,
      "color": "#4aa3df"
    }
  ]
};

// ************************************************
// OBJECT SIZE

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
