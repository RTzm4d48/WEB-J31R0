export function screen_modules_size() {
    var wind_wid = window.innerWidth;
    var wind_hei = window.innerHeight;

    var width_module = (wind_wid / 21);
    var width_rounded = width_module.toFixed(0); // REDONDEAMOS

    var newModule_Y = ((wind_hei - (width_rounded * 10)) / width_rounded) / 2; //NUMERO DE NUEVAS FILAS DE MODULOS EN EL EJE Y
    var newModule_Y_rounded = newModule_Y.toFixed(0); // REDONDEAMSO NUMERO DE NUEVAS FILAS DE MODULOS EN EL EJE Y

    var width = width_rounded > 95 ? 95 : width_rounded; // TAMAÑO CON EL LIMITE DE 95px MAX

    var size_list = [newModule_Y_rounded, width];
    return size_list;
}