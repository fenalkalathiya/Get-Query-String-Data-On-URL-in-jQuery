const get_url = window.location.search;
const url_param = new URLSearchParams(get_url);
const first_para = url_param.get('jspara');
console.log('first value from url :'+ first_para);
