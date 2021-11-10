document.addEventListener('DOMContentLoaded', function() {
    const myTabs = document.querySelector('.tabs');
    M.Tabs.init(myTabs, {
        duration: 300,
        swipeable: false,


    });
    const callMe = document.querySelector('.fixed-action-btn');
    M.FloatingActionButton.init(callMe, {
        direction: 'left',
        hoverEnabled: false,
    });
    const menuDos = document.querySelector('.tap-target');
    M.TapTarget.init(menuDos, 'onClose');
    M.FloatingActionButton.init(menuDos, 'top');

});



window.addEventListener('scroll', () => {
    let menuFloting = document.getElementById("menu");
    menuFloting.style.display = "block";


    if (window.scrollY <= 240) {
        menuFloting.style.display = "none";

    }


});


window.onload = function() {
    Particles.init({
        selector: '.background',
        color: '#ffffff',
        connectParticles: true,
        maxParticles: 40,
        // options for breakpoints
        responsive: [{
            breakpoint: 768,
            options: {
                maxParticles: 10,
                color: '#ffffff',
                connectParticles: true
            }
        }, {
            breakpoint: 425,
            options: {
                maxParticles: 5,
                connectParticles: true
            }
        }, {
            breakpoint: 320,
            options: {
                maxParticles: 3 // disables particles.js
            }
        }]
    });
};

//======================================================================
// gráfica  frontend
//======================================================================
const options = {
    colors: ['#19afe8', '#bc20db', '#eed221', '#f31d1d'],
    series: [80, 80, 40, 30],
    legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'bottom',
        offsetX: 10,
        offsetY: -6,
        labels: {
            useSeriesColors: true
        }
    },

    chart: {
        height: 350,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                    color: 'white'
                },
                value: {
                    fontSize: '16px',
                    color: 'white'
                },
                total: {
                    show: true,
                    label: 'Frontend',
                    color: 'white',

                }
            }
        }
    },
    labels: ['Css3', 'Sass', 'JS', 'Angular'],

};
var chart = new ApexCharts(document.querySelector("#frontend"), options);
chart.render();

//======================================================================
// gráfica backend
//======================================================================

const backend = {
    colors: ['#a10df0', '#0b05e8'],
    series: [30, 40],
    legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'bottom',
        offsetX: 10,
        offsetY: -6,
        labels: {
            useSeriesColors: true
        }
    },

    chart: {
        height: 350,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                    color: 'white'
                },
                value: {
                    fontSize: '16px',
                    color: 'white'
                },
                total: {
                    show: true,
                    label: 'Backend',
                    color: 'white',

                }
            }
        }
    },
    labels: ['Php', 'mysql'],

};
var chart = new ApexCharts(document.querySelector("#backend"), backend);
chart.render();

//======================================================================
// gráfica cms
//======================================================================

const cms = {


    colors: ['#0584e8', '#f15fd0'],
    series: [80, 60],
    legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'bottom',
        offsetX: 10,
        offsetY: -6,
        labels: {
            useSeriesColors: true
        }
    },

    chart: {
        height: 350,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                    color: 'white'
                },
                value: {
                    fontSize: '16px',
                    color: 'white'
                },
                total: {
                    show: true,
                    label: 'Cms',
                    color: 'white',

                }
            }
        }
    },
    labels: ['Wordpress', 'Prestashop'],

};
var chart = new ApexCharts(document.querySelector("#cms"), cms);
chart.render();

//======================================================================
// gráfica versionadores
//======================================================================

const versionadores = {
    colors: ['#14ad70', '#149aad'],
    series: [60, 60],
    legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'bottom',
        offsetX: 10,
        offsetY: -6,
        labels: {
            useSeriesColors: true
        }
    },


    chart: {
        height: 350,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                    color: 'white'
                },
                value: {
                    fontSize: '16px',
                    color: 'white'
                },
                total: {
                    show: true,
                    label: 'Versionadores',
                    color: 'white',

                }
            }
        }
    },
    labels: ['Git', 'Bitbucket'],

};
var chart = new ApexCharts(document.querySelector("#versionadores"), versionadores);
chart.render();