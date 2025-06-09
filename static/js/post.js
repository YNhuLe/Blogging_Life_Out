
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("myForm").addEventListener('submit', function(event){

        setTimeout(() => {
        const editor = CKEDITOR.instances['comment_text'];
        if (editor){
            editor.setData('');
        }
    }, 100);
    });

});