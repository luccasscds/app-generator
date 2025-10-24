// import moment from "moment";
import { addLocale, locale } from "primereact/api";
import z from "zod";
import { pt } from "zod/locales"

export const config = {
    init() {
        // config.localeMoment();
        config.localePrimeReact();
        config.zod();
    },
    // localeMoment() {
    //     moment().locale('pt');
    //     moment.updateLocale('pt', {
    //         months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    //         monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    //         weekdays: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
    //         weekdaysShort : ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    //         weekdaysMin : ["Do", "Se", "Te", "Qa", "Qi", "Se", "Sa"],
    //     });
    // },
    localePrimeReact() {
        addLocale('pt', {
            firstDayOfWeek: 0,
            dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            today: 'Hoje',
            now: 'Agora',
            clear: 'Limpar',
            dateFormat: 'dd/mm/yyyy',
            weekHeader: 'Semana',
        });
        locale('pt');
    },
    zod() {
        z.config(pt());
    },
};