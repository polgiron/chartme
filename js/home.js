var data = {
  "data": [
    {
      "label" : "aa",
      "value" : 20,
      "color": "#4DAF7C"
    },
    {
      "label" : "This is a very long label",
      "value" : 50,
      "color": "#F4D03F"
    },
    {
      "label" : "value3",
      "value" : 70,
      "color": "#E74C3C"
    },
    {
      "label" : "value4",
      "value" : 20,
      "color": "#f39c12"
    },
    {
      "label" : "Label 5",
      "value" : 55,
      "color": "#8e44ad"
    }
  ]
};

var dataClear = {
  "data": [
    {
      "label" : "",
      "value" : 0,
      "color": "transparent"
    }
  ]
};




$(document).ready(function() {
  var RECT_VIEWPORT_HEIGHT = 250;
  var RECT_TOP_PADDING = 30;
  var RECT_BOTTOM_PADDING = 150;

  // var PAPER_WIDTH = 400;
  var PAPER_WIDTH = $('#chart-wrapper').outerWidth();
  var PAPER_HEIGHT = RECT_VIEWPORT_HEIGHT + RECT_TOP_PADDING + RECT_BOTTOM_PADDING;

  var paperPaddingLeft = 15;
  var biggerLineLabel = 0;

  var RECT_WIDTH = 50;
  var RECT_SPACING = 10;

  var NUMBER_HORI_LINES = 8;


  var drawChart = function(data){
    // We remove old graph
    $('#chart').remove();
    $('#chart-wrapper').append('<div id="chart"></div>');
    var paper = Raphael('chart', PAPER_WIDTH, PAPER_HEIGHT);

    // Check the biggest value
    var biggestValue = 0;
    $.each(data, function(index, entry) {
      if(biggestValue < entry.value) biggestValue = entry.value;
    });

    // Draw ordinate lines and values
    var horiLines = [];
    for (var i = 0; i <= NUMBER_HORI_LINES; i++) {
      var lineY = (RECT_TOP_PADDING + RECT_VIEWPORT_HEIGHT) - (i * RECT_VIEWPORT_HEIGHT / (NUMBER_HORI_LINES - 1));
      var lineValue = (biggestValue / (NUMBER_HORI_LINES - 1)) * i;

      // Draw line
      var line = paper.path('m' + 0 + ', ' + lineY + ' L' + PAPER_WIDTH + ', ' + lineY);

      // Dashed line
      var dashed = (i == 0) ? '' : '- ';
      line.attr({
        'stroke-dasharray': dashed,
        'stroke': '#555'
      });

      // LINE LABEL VALUE
      var label = paper.text(10, lineY, Math.ceil(lineValue));
      label.attr({
        'fill': '#555',
        'title': lineValue,
        'font-size': '12px',
        'text-anchor': 'end'
      });

      // Store line and label
      horiLines.push({
        line: line,
        label: label
      });

      // Set biggerLineLabel
      if (biggerLineLabel < label.getBBox().width){
        biggerLineLabel = label.getBBox().width;
        paperPaddingLeft = biggerLineLabel + 15;
      }
    }

    // We move the horiLines
    $.each(horiLines, function(index, entry) {
      entry.line.translate(paperPaddingLeft, 0);
      // entry.label.translate(entry.label.getBBox().width, 0);
      entry.label.translate(biggerLineLabel, 0);
    });

    // Add each value
    $.each(data, function(index, entry) {

      // RECT
      var rectHeight = entry.value * RECT_VIEWPORT_HEIGHT / biggestValue;
      var rectX = paperPaddingLeft * 1.5 + index * (RECT_WIDTH + RECT_SPACING);
      var rectY = PAPER_HEIGHT - RECT_BOTTOM_PADDING - rectHeight;

      var rect = paper.rect(rectX, rectY, RECT_WIDTH, rectHeight);
      rect.attr({
        fill: entry.color,
        title: entry.value
      });

      // VALUE LABEL
      var label = paper.text(rectX + RECT_WIDTH / 2, PAPER_HEIGHT - RECT_BOTTOM_PADDING - rectHeight - 10, entry.value);
      label.attr('fill', '#555');
      label.attr('font-size', '12px');

      // LABEL
      var label = paper.text(rectX + RECT_WIDTH / 2, PAPER_HEIGHT - RECT_BOTTOM_PADDING + 15, entry.label);
      // var label = paper.text(rectX, PAPER_HEIGHT - RECT_BOTTOM_PADDING + 15, entry.label);
      label.attr({
        'fill': '#555',
        'title': entry.label,
        'font-size': '12px',
        'text-anchor': 'start'
      });

      // Rotate the label
      label.rotate(45, rectX + RECT_WIDTH / 2, PAPER_HEIGHT - RECT_BOTTOM_PADDING + 15);

      // label.transform("r45")
      // label.translate(-label.getBBox().width / 2, label.getBBox().width / 2);
      // label.translate(label.getBBox().width / 2, 0);
    });
  }

  $('#data').val(JSON.stringify(data, null, 4));
  drawChart(data.data);

  // Run the textarea
  $(document).on('click', '#run', function(event) {
    var data = $('#data').val();
    
    if(data != undefined && data != ''){
      data = JSON.parse(data.replace(/\r?\n/g, ''));
      // console.log(data);
      drawChart(data.data);
    }
  });

  // Clear the textarea
  $(document).on('click', '#clear', function(event) {
    $('#data').val('');
    $('#chart').remove();
  });
});
