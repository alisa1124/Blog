function Page(){
    this.$search = $('.js_search');
    this.$result = $('.js_result');
}

Page.prototype = {
    getAjax: function(){
        var me = this;
        var val = $('#baidu_translate_input').val();
        var params = {
            from: 'zh',
            to: 'en',
            query: val,
            transtype: 'trans',
            simple_means_flag: 3
        }
        if (/^[A-Za-z ]+$/.test($.trim(val))) {
            params.from = 'en';
            params.to = 'zh';
        }

        $.ajax({
            url: 'http://fanyi.baidu.com/v2transapi',
                type: 'POST',
                dataType: 'json',
                data: params
        }).done(function(data){
            if (data && data.trans_result && data.trans_result.data.length && data.trans_result.data[0].dst) {
                me.$result.html(data.trans_result.data[0].dst || '没有查询到结果');
            } else {
                me.$result.html('没有查询到结果');
            }
        })
    },
    bindSearch: function(){
        var me = this;
        this.$search.click(function(){
            me.getAjax();
        })
    }
}
$(function(){
    var page = new Page();
    page.bindSearch();
})