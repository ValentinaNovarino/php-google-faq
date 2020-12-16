import Vue from 'vue';

var app = new Vue (
    {
        el: '#root',
        data: {
            menuItems: [
                'Introduzione',
                'Norme sulla privacy',
                'Termini di servizio',
                'Tecnologie',
                'Domande frequenti',
            ],
            footerMenuItems: [
                'Google',
                'Tutto su Google',
                'Privacy',
                'Termini',
            ]
        }
    }
)
