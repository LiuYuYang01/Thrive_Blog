<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const bar = ref()

function init() {
    var myChart = echarts.init(bar.value);

    var lableNormal = {};
    lableNormal.offset = [-5, 0];
    lableNormal.show = true;
    lableNormal.formatter = '{a}';
    lableNormal.position = 'left';
    lableNormal.fontSize = 13;
    lableNormal.color = '#777';

    const option = {
        'mchartType': '2106',
        'id': '10033',
        'xAxis': {
            'show': false,
            'type': 'value'
        },
        legend: {
            show: true,
            top: 15,
            itemWidth: 80,
            itemHeight: 5,
            itemGap: -5,
            align: 'right',
            formatter: '{a|{name}}',
            textStyle: {
                width: 80,
                padding: [-35, -80, 0, 0],
                rich: {
                    a: {
                        align: 'center',
                        fontSize: 10,
                        color: '#a0a1a5'
                    }
                }
            },
            'data': ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'React.js', 'Nodejs']
        },
        'yAxis': {
            'type': 'category',
            offset: 5,
            'data': [],
            'axisTick': {
                'show': false
            },
            'axisLine': {
                'show': false
            },
            axisLabel: {
                color: '#777',
                fontSize: 14
            }
        },
        color: ['#08cca2', '#fac46e', '#64ccf3', '#fb9996', '#f6eee1', '#eafaf7'],
        'series': [{
            'type': 'bar',
            name: 'HTML',
            'barWidth': '30',
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                }
            },
            label: {
                normal: lableNormal
            },
            'data': [1.0]
        }, {
            'type': 'bar',
            name: 'CSS',
            'barWidth': '30',
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                }
            },
            label: {
                normal: lableNormal
            },
            'data': [2.0]
        }, {
            'type': 'bar',
            name: 'JavaScript',
            'barWidth': '30',
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                }
            },
            label: {
                normal: lableNormal
            },
            'data': [3.0]
        }, {
            'type': 'bar',
            name: 'Vue.js',
            'barWidth': '30',
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                }
            },
            label: {
                normal: lableNormal
            },
            'data': [4.0]
        }, {
            'type': 'bar',
            name: 'React.js',
            'barWidth': '30',
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                }
            },
            label: {
                normal: lableNormal
            },
            'data': [5.0]
        }, {
            'type': 'bar',
            name: 'Nodejs',
            'barWidth': '30',
            barGap: '50%',
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                }
            },
            label: {
                normal: lableNormal
            },
            'data': [6.0]
        }]
    }

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
    <div id="bar" ref="bar"></div>
</template>

<style scoped lang="scss">
#bar {
    width: 200px;
    height: 500px;
    margin-top: 100px;

    &::before {
        content: "标签统计";
        position: relative;
        top: -30px;
        left: 30%;
        color: $color;
    }
}
</style>
