$(document).ready(function(){

    const getGithubApi = async () => {
        const response = await fetch('https://api.github.com/users/Dcard/repos');
        const data = await response.json();

        $('#myTable').DataTable({
            data: data,
            bLengthChange: false,
            columns: [
                { 
                    title: 'id',
                    data: 'id',
                    visible: false
                },
                { 
                    title: '名稱',
                    data: 'name'
                },
                { 
                    title: '支持和讚許數',
                    data: 'stargazers_count'
                },
                { 
                    title: '網址',
                    data: 'html_url',
                    render: function(data) {
                        return '<a href='+ data +' target=_blank>前往觀看</a>'
                    }
                },
                { 
                    title: '點擊',
                    data: 'html_url',
                    render: function(data) {
                        return '<button class=btn>按鈕</button>'
                    }                    
                }
            ],
            lengthChange: true,
            // 呈現左上角下拉頁數選單

            lengthMenu: [10, 20, 30, 100],
            // 頁數選單數值

            select: 'multi+shift',

            pageLength: 10,
            // 每頁預設個數

            // paging: false,
            // 要不要分頁


            searching: true,
            // 搜索功能是否開啟(預設開啟)

            ordering: true,
            // 排序是否開啟(預設開啟)   


            order: [[1, 'desc']],
            /* 
            
                預設排序方式
                [0, 0]：哪個欄位。
                [0, 1]：asc 升冪排列、desc 降冪排列。                                
            
            */

            "oLanguage": {
                "sUrl": "/githubRepoReact/githubRepoReact/static/zhHant.json"
            }

        });

    }

    getGithubApi();

    // $('td').bind('click', function(event){
    //     alert(123);
    //     return false;
    // });


});