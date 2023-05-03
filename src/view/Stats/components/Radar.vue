<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const radar = ref()

function init() {
    var myChart = echarts.init(radar.value);

    var data = [80, 70, 30, 85, 25];
    var indicatorname = ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'React.js'];
    var maxdata = [100, 100, 100, 100, 100];

    function contains(arrays, obj) {
        var i = arrays.length;
        while (i--) {
            if (arrays[i] === obj) {
                return i;
            }
        }
        return false;
    }

    var indicator = [];
    for (var i = 0; i < indicatorname.length; i++) {
        indicator.push({
            name: indicatorname[i],
            max: maxdata[i]
        })
    }

    function innerdata(i) {
        var innerdata = [];
        for (let j = 0; j < data.length; j++) {
            innerdata.push(100 - 20 * i)
        }
        return innerdata
    }

    const optionData = getData(data)

    function getData(data) {
        var res = {
            series: [{
                type: 'radar',
                symbolSize: 10,
                symbol: "circle",
                areaStyle: {
                    color: "#39B2FF",
                    opacity: 0.3
                },
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00A2FF'
                    }, {
                        offset: 1,
                        color: '#0060FF'
                    }], false),
                    width: 3
                },
                itemStyle: {
                    color: "#fff ",
                    borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00DEFF'
                    }, {
                        offset: 1,
                        color: '#1598FF'
                    }], false),
                    borderWidth: 4,
                    opacity: 1
                },
                label: {
                    show: false,
                },
                data: [{
                    value: data,
                }],
                z: 100
            },],
        };
        for (let i = 0; i < data.length; i++) {
            res.series.push({
                type: 'radar',
                data: [{
                    value: innerdata(i),
                }],
                symbol: 'none',
                lineStyle: {
                    width: 0
                },
                itemStyle: {
                    color: '#fff'
                },
                areaStyle: {
                    color: '#fff',
                    shadowColor: 'rgba(14,122,191,0.15)',
                    shadowBlur: 30,
                    shadowOffsetY: 20
                }
            });
        }
        return res;
    }

    const option = {
        backgroundColor: '#fff',
        tooltip: {
            formatter: function () {
                var html = '';
                for (var i = 0; i < data.length; i++) {
                    html += indicatorname[i] + ' : ' + data[i] + '%<br>'
                }
                return html
            }
        },
        radar: {
            indicator: indicator,
            splitArea: {
                show: true,
                areaStyle: {
                    color: '#fff',
                    shadowColor: 'rgba(14,122,191,0.19)',
                    shadowBlur: 30,
                    shadowOffsetY: 20
                }
            },
            splitLine: {
                show: false,

            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            name: {
                textStyle: {
                    rich: {
                        a: {
                            fontSize: '17',
                            color: '#333',
                            align: 'left',
                            lineHeight: '30',
                            fontWeight: 'bold',
                        },
                        b: {
                            fontSize: '15',
                            color: '#666',
                            align: 'left',
                        }
                    },
                },

                formatter: function (params, index) {
                    var i = contains(indicatorname, params);
                    var percent = data[i] / 100 * 100;
                    return '{a|' + percent + '%}\n' + '{b|' + params + '}'
                },
            },
        },
        series: optionData.series
    };

    option && myChart.setOption(option);

    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

onMounted(() => {
    init()
})

</script>

<template>
    <div id="radar" ref="radar"></div>
</template>

<style scoped lang="scss">
#radar {
    width: 100%;
    height: 100%;
    margin: 40px auto;

    &::before {
        content: "分类统计";
        position: relative;
        top: -30px;
        color: $color;
    }
}
</style>
