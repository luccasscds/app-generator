// import moment from "moment";
import { addLocale, locale } from "primereact/api";
import z from "zod";
import { pt } from "zod/locales"

export const config = {
    init() {
        config.initTheme();
        // config.localeMoment();
        config.localePrimeReact();
        config.zod();
    },
    setTheme(themeName: string = 'arya-blue') {
        // Remove existing theme CSS if present
        const existingThemeLink = document.querySelector('link[data-theme]');
        if (existingThemeLink) {
            existingThemeLink.remove();
        }
        
        // Add new theme CSS
        const themeLink = document.createElement('link');
        themeLink.rel = 'stylesheet';
        themeLink.href = `https://cdn.jsdelivr.net/npm/primereact@10/resources/themes/${themeName}/theme.css`;
        themeLink.setAttribute('data-theme', themeName);
        document.head.appendChild(themeLink);
        
        // Store theme preference
        localStorage.setItem('app-generator-theme', themeName);
    },
    getCurrentTheme(): string {
        return localStorage.getItem('app-generator-theme') || 'arya-blue';
    },
    initTheme() {
        const savedTheme = config.getCurrentTheme();
        config.setTheme(savedTheme);
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