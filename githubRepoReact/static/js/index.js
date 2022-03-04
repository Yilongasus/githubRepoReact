$(document).ready(function() {
    $('#table_id').DataTable({
        // ajax: {
        //     url: 'https://api.github.com/users/Yilongasus/repos',
        //     data: 'json'
        // },
        // 這個目前沒吃到
        columns: [
            {
                title: "名稱",
                data: ''
            },
            {
                title: "支持和讚許數",
                data: ''                
            }
        ],
        lengthChange: true, 
        // 呈現左上角下拉頁數選單

        lengthMenu: [1, 2, 5, 7],
        // 頁數選單數值

        pageLength: 5,
        // 每頁預設個數

        // paging: false,
        // 要不要分頁


        searching: true,
        // 搜索功能是否開啟(預設開啟)

        ordering: true,
        // 排序是否開啟(預設開啟)   


        order: [[ 1, 'desc' ]],
        /* 
        
            預設排序方式
            [0, 0]：哪個欄位。
            [0, 1]：asc 升冪排列、desc 降冪排列。                                
        
        */

        "oLanguage": {
            "sUrl": "/githubRepoReact/githubRepoReact/static/zhHant.json"
        }  
        
    });

    console.log({
                title: "名稱",
                data: name                
    });
});