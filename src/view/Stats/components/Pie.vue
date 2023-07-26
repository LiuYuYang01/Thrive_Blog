<script setup lang="ts">
import * as echarts from 'echarts';

const pie = ref()

function init() {
    var myChart = echarts.init(pie.value);

    let color = ['#6d9de0', '#49d896', '#f5d03a', '#f5853a', '#f5503a'];
    let chartData = [{
        name: "HTML",
        value: 20
    },
    {
        name: "CSS",
        value: 30
    },
    {
        name: "JavaScript",
        value: 30
    },
    {
        name: "Vue.js",
        value: 10
    },
    {
        name: "React.js",
        value: 10
    }
    ];
    let arrName = [];
    let arrValue = [];
    let sum = 0;
    let pieSeries = [],
        lineYAxis = [];

    // 数据处理
    chartData.forEach((v, i) => {
        arrName.push(v.name);
        arrValue.push(v.value);
        sum = sum + v.value;
    })

    // 图表option整理
    chartData.forEach((v, i) => {
        // console.log(v,i, v.value,sum - v.value)
        let chartnewData = chartData.slice(0, i)

        let newValue = chartnewData.reduce((a, b) => {
            return a + b.value
        }, 0)
        v.startAngle = newValue / sum * 360
        pieSeries.push({
            name: '学历',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [75 - i * 15 + '%', 68 - i * 15 + '%'],
            center: ["40%", "50%"],
            label: {
                show: false
            },
            startAngle: v.startAngle + 90,
            data: [{
                value: v.value,
                name: v.name
            }, {
                value: sum - v.value,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)"
                }
            }]
        });
        pieSeries.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [75 - i * 15 + '%', 68 - i * 15 + '%'],
            // radius: ['50%', '70%'],
            center: ["40%", "50%"],
            label: {
                show: false
            },
            data: [{
                value: sum,
                itemStyle: {
                    color: "#e8f4ff" //圆环颜色
                }
            },
            {
                value: 0,
                name: '',
                itemStyle: {
                    color: "red"
                }
            }
            ]
        });

        v.percent = (v.value / sum * 100).toFixed(0) + "%";
        
        lineYAxis.push({
            value: i,
            textStyle: {
                rich: {
                    circle: {
                        color: color[i],
                        padding: [0, 5]
                    }
                }
            }
        });
    })

    const option = {
        backgroundColor: '#fff',
        color: color,
        legend: {
            itemWidth: 14,
            itemHeight: 8,
            show: true,
            // icon: "circle",
            // top: "center",
            left: "80%",
            top: "40%",
            formatter: (name) => {
                return (
                    // {name|' + item.name + '}
                    "{name|" + name + "} {percent|" + chartData.find((item) => {
                        return item.name == name
                    }).percent + "}"
                );
            },
            textStyle: {
                color: "#beceff", //元字颜色
                fontSize: 14,
                rich: {
                    name: {
                        color: '#a6acba',
                        fontSize: 11,
                    },
                    percent: {
                        color: '#113061',
                        fontSize: 11,
                    }
                }
            },
        },
        grid: {
            top: '15%',
            bottom: '15%',
            left: "15%",
            containLabel: false
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: lineYAxis
        }],
        xAxis: [{
            show: false
        }],
        series: pieSeries
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
    <div id="pie" ref="pie"></div>
</template>

<style scoped lang="scss">
#pie {
    width: 55%;
    height: 500px;

    &::before {
        content: "分类统计";
        position: relative;
        top: -30px;
        left: -30%;
        color: $color;
    }
}
</style>
