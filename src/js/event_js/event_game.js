/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2023-05-13 12:10:12
 * @version $Id$
 */

//实现上滑出现导航栏
$(document).ready(function() {
    var previousScroll = 0;

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();

        if (currentScroll < previousScroll) { //意味着上滑
            $('.topnav').css('top', '0');
        } else {
            $('.topnav').css('top', '-80px');
        }
        previousScroll = currentScroll;
    });
});



// 根据输入内容实现跳转项目页面
$(document).ready(function() {
    var $inputBox = $('#evenserch');
     $inputBox.keypress(function(event) {
        if (event.which === 13) { // 判断是否按下回车键
            var keyword = $inputBox.val(); // 获取输入框内容
            var link = '#'; // 页面跳转链接
            if (keyword === '电子竞技') {
                link = 'event_esport.html'; // 电子竞技页面链接
            } else if (keyword === '乒乓球') {
                link = 'event_ping.html'; // 乒乓球页面链接
            } else if (keyword === '跳水') {
                link = 'event_diving.html'; // 跳水页面链接
            } else if (keyword === '游泳') {
                link = 'event_swim.html'; // 游泳页面链接
            } else if (keyword === '围棋') {
                link = 'event_Go.html'; // 围棋页面链接
            } else {
                alert("请输入正确的项目名称");
            }
            window.location.assign(link); // 跳转到指定页面
        }
    });
});


// 赛事轮播
$(document).ready(function() {
    var swiperContainer = document.getElementById('swiper-container-event');
    var mySwiper = new Swiper('#swiper-container-event', {
        slidesPerView: 1,
        spaceBetween: 1000,
        autoplay: {
            delay: 4000, // 自动切换时间间隔
            disableOnInteraction: true, // 用户操作后是否禁止自动切换
        },
        loop: true, // 开启无限循环模式
        pagination: {
            el: '.swiper-pagination', // 添加分页器
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next', // 下一页按钮
            prevEl: '.swiper-button-prev', // 上一页按钮
        },
    });

    // 监听容器元素上的鼠标事件
    swiperContainer.addEventListener('mouseenter', function() {
        mySwiper.autoplay.stop(); // 鼠标进入时停止轮播
    });

    swiperContainer.addEventListener('mouseleave', function() {
        mySwiper.autoplay.start(); // 鼠标离开时继续轮播
    });
})


// 冠军轮播
$(document).ready(function() {
    var swiperContainer = document.getElementById('swiper-container-champion');
    var mySwiper = new Swiper('#swiper-container-champion', {
        slidesPerView: 1,
        spaceBetween: 350,
        autoplay: {
            delay: 4000, // 自动切换时间间隔
            disableOnInteraction: true, // 用户操作后是否禁止自动切换
        },
        loop: true, // 开启无限循环模式
        pagination: {
            el: '.swiper-pagination', // 添加分页器
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next', // 下一页按钮
            prevEl: '.swiper-button-prev', // 上一页按钮
        },
    });

    // 监听容器元素上的鼠标事件
    swiperContainer.addEventListener('mouseenter', function() {
        mySwiper.autoplay.stop(); // 鼠标进入时停止轮播
    });

    swiperContainer.addEventListener('mouseleave', function() {
        mySwiper.autoplay.start(); // 鼠标离开时继续轮播
    });
})



//find查询极为强大，可以自动匹配相应的字符串
// 根据搜索国家名隐藏其他行达到筛选功能
$(document).ready(function() {
    // 监听搜索框内容变化
    $('#countryname').on('input', function() {
        var countryName = $(this).val();
        // 遍历每一行数据
        $('#medel_range_table tbody tr').each(function() {
            var $tr = $(this);
            // 获取当前行对应的国家名
            var currCountry = $tr.find('th:nth-child(2)').text();
            // 判断如果当前国家名符合搜索条件，则显示当前行，否则隐藏当前行
            if (currCountry.indexOf(countryName) !== -1) {
                $tr.css('display', '');
            } else {
                $tr.css('display', 'none');
            }
        });
    });
});


// 根据搜索项目名隐藏其他行达到筛选功能
$(document).ready(function() {
    // 监听搜索框内容变化
    $('#eventname').on('input', function() {
        var countryName = $(this).val();
        // 遍历每一行数据
        $('#event_medal_table tbody tr').each(function() {
            var $tr = $(this);
            // 获取当前行对应的项目名
            var currCountry = $tr.find('th:nth-child(3)').text();
            // 判断如果当前国家名符合搜索条件，则显示当前行，否则隐藏当前行
            if (currCountry.indexOf(countryName) !== -1) {
                $tr.css('display', '');
            } else {
                $tr.css('display', 'none');
            }
        });
    });
});


// 根据搜索项目名隐藏其他行达到筛选功能
$(document).ready(function() {
    // 监听搜索框内容变化
    $('#schedule_eventname').on('input', function() {
        var countryName = $(this).val();
        // 遍历每一行数据
        $('#schedule_event_table tbody tr').each(function() {
            var $tr = $(this);
            // 获取当前行对应的项目名

            var currCountry = $tr.find('td:nth-child(3)').text(); //注意find的是th,还是td,我有乱用的地方
            // 判断如果当前国家名符合搜索条件，则显示当前行，否则隐藏当前行
            if (currCountry.indexOf(countryName) !== -1) {
                $tr.css('display', '');
            } else {
                $tr.css('display', 'none');
            }
        });
    });
});



// 引入json文件并根据比赛日期更新赛程表
$(document).ready(function() {
    var projectsData; // 用于保存从 JSON 文件中获取的项目数据
    // $.getJSON("js/event_js/example.json", function(data) {
    //     projectsData = data.projects; // 将项目数据赋值给变量
    // });
    $.ajax({
        url: "js/event_js/example.json",
        dataType: "json",
        success: function(data) {
            projectsData = data.projects;
        }
    });

    // 获得选择的值
    $('.select_time').on('change', function() {
        var selectedOption = $(this).val();

        // 根据选中的选项更新表格数据
        switch (selectedOption) {
            case '20230721':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.date.includes("7月21日")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;

            case '20230722':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.date.includes("7月22日")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;

            case '20230723':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.date.includes("7月23日")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;


            default:
                break;
        }
    });

});

// 格式说明
// 要添加数据，需要找到对应日期，然后根据时间升序插入
// 引入json文件并根据比赛项目更新赛程表
$(document).ready(function() {
    var projectsData; // 用于保存从 JSON 文件中获取的项目数据
    var projectsCount;
    // $.getJSON("js/event_js/example.json", function(data) {
    //     projectsData = data.projects; // 将项目数据赋值给变量
    // });
    $.ajax({
        url: "js/event_js/example.json",
        dataType: "json",
        success: function(data) {
            projectsData = data.projects;
        }
    });

    // 获得选择的值
    $('.select_event').on('change', function() {
        var selectedOption = $(this).val();

        // 根据选中的选项更新表格数据
        switch (selectedOption) {
            case '电子竞技':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.event.includes("电子竞技")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;

            case '乒乓球':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.event.includes("乒乓球")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;

            case '跳水':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.event.includes("跳水")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;


            default:
                break;
        }
    });

});


// 引入json文件并根据比赛场馆更新赛程表
$(document).ready(function() {
    var projectsData; // 用于保存从 JSON 文件中获取的项目数据
    var projectsCount;
    // $.getJSON("js/event_js/example.json", function(data) {
    //     projectsData = data.projects; // 将项目数据赋值给变量
    // });
    $.ajax({
        url: "js/event_js/example.json",
        dataType: "json",
        success: function(data) {
            projectsData = data.projects;
        }
    });

    // 获得选择的值
    $('.select_sportshall').on('change', function() {
        var selectedOption = $(this).val();

        // 根据选中的选项更新表格数据
        switch (selectedOption) {
            case '中国杭州电竞中心':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.sportshall.includes("中国杭州电竞中心")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;

            case '杭州奥体中心体育馆':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.sportshall.includes("杭州奥体中心体育馆")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;

            case '杭州奥体中心游泳馆':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.sportshall.includes("杭州奥体中心游泳馆")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;


            default:
                break;
        }
    });

});