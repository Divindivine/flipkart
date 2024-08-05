function myFetch(url){
    return new Promise((res, rej) =>{
        $.ajax({
            type: "GET",
            url: url,
            success: function(msg){
                res(msg);
            },
            error: function(xhr, statusText){
                rej(statusText);
            },
        });
    });

}