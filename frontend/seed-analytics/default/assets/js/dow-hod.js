$(function () {
    $('#dow-container').highcharts({

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        title: {
            text: null
        },

        subtitle: {
            text: null
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Day of Week'
            }
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Hour of Day'
            }
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat:'<tr><th>Day of Week:</th><td>{point.x}</td></tr>' +
                '<tr><th>Hour of Day:</th><td>{point.y}</td></tr>' +
                '<tr><th>Electricity Consumption: </th><td>{point.z} MW</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        series: [{
            data: [
                { x: 4 , y: 4 , z: 6.89  },
                { x: 5 , y: 7 , z: 11.9  },
                { x: 4 , y: 6 , z: 6.02  },
                { x: 4 , y: 20 , z: 5.53  },
                { x: 5 , y: 4 , z: 5.71  },
                { x: 5 , y: 6 , z: 12.3  },
                { x: 6 , y: 10 , z: 7.0  },
                { x: 4 , y: 15 , z: 5.24  },
                { x: 4 , y: 23 , z: 5.71  },
                { x: 6 , y: 12 , z: 10.  },
                { x: 4 , y: 21 , z: 14.1  },
                { x: 7 , y: 12 , z: 14.  },
                { x: 1 , y: 0 , z: 10.0  },
                { x: 3 , y: 23 , z: 5.58  },
                { x: 1 , y: 7 , z: 12.9  },
                { x: 3 , y: 5 , z: 13.0  },
                { x: 6 , y: 18 , z: 13.8  },
                { x: 1 , y: 14 , z: 13.4  },
                { x: 1 , y: 2 , z: 7.36  },
                { x: 7 , y: 22 , z: 5.  },
                { x: 7 , y: 16 , z: 8.50  },
                { x: 5 , y: 10 , z: 5.03  },
                { x: 7 , y: 13 , z: 6.99  },
                { x: 1 , y: 23 , z: 12.2  },
                { x: 4 , y: 17 , z: 7.83  },
                { x: 5 , y: 18 , z: 7.86  },
                { x: 4 , y: 3 , z: 5.76  },
                { x: 2 , y: 6 , z: 8.09  },
                { x: 4 , y: 2 , z: 14.1  },
                { x: 1 , y: 9 , z: 7.81  },
                { x: 7 , y: 17 , z: 12.4  },
                { x: 2 , y: 1 , z: 10.5  },
                { x: 3 , y: 20 , z: 11.  },
                { x: 5 , y: 7 , z: 14.3  },
                { x: 7 , y: 23 , z: 8.72  },
                { x: 1 , y: 5 , z: 9.24  },
                { x: 5 , y: 4 , z: 12  },
                { x: 6 , y: 15 , z: 7.80  },
                { x: 4 , y: 1 , z: 5.49  }
            ]
        }]

    });
});