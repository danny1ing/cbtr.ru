
var change_password = new Vue({
            el: "#change_password",
            data: {
                profile_password: false,
                profile_password_a: true
            },
            methods: {
                prof_pass: function() {
                    this.profile_password = true,
                    this.profile_password_a = false
                }
            }
        })

var dropdown = new Vue({
            el: ".profile-balance-expenses",
            data: {
               profile_expenses: false,
               profile_history: false
            }
        })

var action = new Vue({
    el: ".companies",
    data: {
        action: false
    }
})

var full_width_game = new Vue({
    el: ".full-width-game",
    data: {
        popup_share: false,
        mes: 'Этап',
        isActive: true,
        isActive2: false,
        isActive22: false,
        isActive3: false,
        isActive4: false,
        step1: true,
        step2: false,
        step3: false,
        step4: false,
        step22: false,
        zoom1: false,
        zoom22: false,
        zoom3: false,
        zoom4: false,
        pop_complete: false
    },
    methods: {
        popetap1: function() {
            this.pop_complete = true,
            this.step_message = '1'
        },
        popetap2: function() {
            this.pop_complete = true,
            this.step_message = '2'
        },
        popetap3: function() {
            this.pop_complete = true,
            this.step_message = '3'
        },
        popetap4: function() {
            this.pop_complete = true,
            this.step_message = '4'
        },
        close_popup_share: function() {
            this.popup_share = false
        },
        open_popup_share: function() {
            this.popup_share = true
        },
        zom1: function() {
            this.zoom1 = true
        },
        zom22: function() {
            this.zoom22 = true
        },
        zom3: function() {
            this.zoom3 = true
        },
        zom4: function() {
            this.zoom4 = true
        },
        mess: function() {
            this.isActive = true,
            this.isActive2 = false,
            this.isActive22 = false,
            this.isActive3 = false,
            this.isActive4 = false,
            this.mes = 'Этап',
            this.mes2 = '',
            this.mes3 = '',
            this.mes4 = '',
            this.step1 = true,
            this.step2 = false,
            this.step22 = false,
            this.step3 = false,
            this.step4 = false,
            this.zoom1 = false,
            this.zoom22 = false,
            this.zoom3 = false,
            this.zoom4 = false

        },
        mess2: function() {
            this.isActive = false,
            this.isActive2 = true,
            this.isActive22 = false,
            this.isActive3 = false,
            this.isActive4 = false,
            this.mes = '',
            this.mes2 = 'Этап',
            this.mes3 = '',
            this.mes4 = '',
            this.step1 = false,
            this.step2 = true,
            this.step22 = false,
            this.step3 = false,
            this.step4 = false,
            this.zoom1 = false,
            this.zoom22 = false,
            this.zoom3 = false,
            this.zoom4 = false
        },
        mess22: function() {
            this.isActive = false,
            this.isActive2 = false,
            this.isActive22 = true,
            this.isActive3 = false,
            this.isActive4 = false,
            this.mes = '',
            this.mes2 = 'Этап',
            this.mes3 = '',
            this.mes4 = '',
            this.step1 = false,
            this.step2 = false,
            this.step22 = true,
            this.step3 = false,
            this.step4 = false,
            this.zoom1 = false,
            this.zoom22 = false,
            this.zoom3 = false,
            this.zoom4 = false
        },
        mess3: function() {
            this.isActive = false,
            this.isActive2 = false,
            this.isActive22 = false,
            this.isActive3 = true,
            this.isActive4 = false,
            this.mes = '',
            this.mes2 = '',
            this.mes3 = 'Этап',
            this.mes4 = '',
            this.step1 = false,
            this.step2 = false,
            this.step22 = false,
            this.step3 = true,
            this.step4 = false,
            this.zoom1 = false,
            this.zoom22 = false,
            this.zoom3 = false,
            this.zoom4 = false
        },
        mess4: function() {
            this.isActive = false,
            this.isActive2 = false,
            this.isActive22 = false,
            this.isActive3 = false,
            this.isActive4 = true,
            this.mes = '',
            this.mes2 = '',
            this.mes3 = '',
            this.mes4 = 'Этап',
            this.step1 = false,
            this.step2 = false,
            this.step22 = false,
            this.step3 = false,
            this.step4 = true,
            this.zoom1 = false,
            this.zoom22 = false,
            this.zoom3 = false,
            this.zoom4 = false
        }

    }
})
