function selectPage(name) {
    var pages = ['about', 'projects', 'interests', 'contact'];
    pages.forEach(function(name) {
        $('#' + name).removeClass('main-navbar-item-selected');
    });
    $('#' + name).addClass('main-navbar-item-selected');
}